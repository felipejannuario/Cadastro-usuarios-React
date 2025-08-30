import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import { useNavigate } from "react-router-dom";

function ListUsers() {
  const navigate = useNavigate();

  return (
    <div>
      <TopBackground />
      <h1>Listagem de Usuários</h1>
      <Button onClick={() => navigate("/")}>Voltar</Button>
    </div>
  );
}

export default ListUsers;
