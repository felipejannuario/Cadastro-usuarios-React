import { useEffect } from "react";
import api from "../../services/api";

import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";



function ListUsers() {

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await api.get("/usuarios");
        console.log(response.data); // aqui você pega os dados mesmo
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    }

    getUsers();
  }, []);
  
  return (
    <div>
      <TopBackground />
      <h1>Listagem de Usuários</h1>
      <Button>Voltar</Button>
    </div>
  );
}

export default ListUsers;
