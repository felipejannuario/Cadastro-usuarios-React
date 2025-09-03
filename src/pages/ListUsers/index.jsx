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
} from "./styles";

function ListUsers() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUsers() {
      try {
        const { data } = await api.get("/usuarios");

        if (Array.isArray(data)) {
          setUsers(data); // agora pega direto do backend
        } else {
          setUsers([]);
        }
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        setUsers([]);
      }
    }

    getUsers();
  }, []);

  return (
    <Container>
      <TopBackground />
      <Title>Listagem de Usuários</Title>

      <ContainerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvatarUsers
              src={`https://avatar.iran.liara.run/public?username=${user.id}`} // usa ID do banco
              alt={`Avatar de ${user.name}`}
            />
            <div>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.age} anos</p>
            </div>
            <TrashIcon
              src={Trash}
              alt="icone-lixo"
              onClick={() => console.log(`Deletar usuário ${user.id}`)}
            />
          </CardUsers>
        ))}
      </ContainerUsers>

      <Button type="button" onClick={() => navigate("/")}>
        Voltar
      </Button>
    </Container>
  );
}

export default ListUsers;
