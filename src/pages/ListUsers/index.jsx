import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import Trash from "../../assets/trash.svg";

import {
  CardUsers,
  Container,
  ContainerUsers,
  Title,
  TrashIcon,
  AvatarUsers,
  UserInfo,
  ButtonsContainer,
} from "./styles";

import EditUserForm from "./EditUserForm"; // Formulário modular

function ListUsers() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Buscar usuários
  useEffect(() => {
    async function getUsers() {
      try {
        setLoading(true);
        const { data } = await api.get("/usuarios");
        if (Array.isArray(data.users)) {
          setUsers(data.users);
        } else {
          setUsers([]);
        }
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        setErrorMessage("Erro ao carregar usuários");
        setUsers([]);
      } finally {
        setLoading(false);
      }
    }

    getUsers();
  }, []);

  // Deletar usuário
  async function handleDelete(id) {
    if (!window.confirm("Tem certeza que deseja deletar este usuário?")) return;
    try {
      await api.delete(`/usuarios/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
      setErrorMessage("Erro ao deletar usuário");
    }
  }

  //Proteger rota no front
  useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login");
    return;
  }

  async function getUsers() {
    try {
      const { data } = await api.get("/usuarios", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      setUsers([]);
    }
  }

  getUsers();
}, [navigate]);


  return (
    <Container>
      <TopBackground />
      <Title>Listagem de Usuários</Title>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      {loading ? (
        <p style={{ color: "#fff" }}>Carregando usuários...</p>
      ) : (
        <ContainerUsers>
          {users.map((user) => (
            <CardUsers key={user.id}>
              <AvatarUsers
                src={`https://avatar.iran.liara.run/public?username=${encodeURIComponent(
                  user.name
                )}`}
                alt={`Avatar de ${user.name}`}
                onError={(e) => (e.target.src = "/default-avatar.png")}
              />

              <UserInfo>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <p>{user.age} anos</p>

                <ButtonsContainer>
                  <Button onClick={() => setEditingUser(user)}>Editar</Button>
                  <TrashIcon
                    src={Trash}
                    alt="icone-lixo"
                    onClick={() => handleDelete(user.id)}
                  />
                </ButtonsContainer>
              </UserInfo>
            </CardUsers>
          ))}
        </ContainerUsers>
      )}

      {/* Formulário modular de edição */}
      {editingUser && (
        <EditUserForm
          user={editingUser}
          onCancel={() => setEditingUser(null)}
          onSave={async (updatedUser) => {
            try {
              const { data } = await api.put(
                `/usuarios/${updatedUser.id}`,
                updatedUser
              );
              setUsers(
                users.map((u) => (u.id === data.user.id ? data.user : u))
              );
              setEditingUser(null);
            } catch (error) {
              console.error(error);
              setErrorMessage(
                error.response?.data?.message || "Erro ao atualizar usuário"
              );
            }
          }}
        />
      )}

      <Button type="button" onClick={() => navigate("/")}>
        Voltar
      </Button>
    </Container>
  );
}

export default ListUsers;
