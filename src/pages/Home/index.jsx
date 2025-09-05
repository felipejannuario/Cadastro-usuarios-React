import { useRef } from "react"; // Importando o hook useRef do React
import { useNavigate } from "react-router-dom";
import api from "../../services/api"; // Importando a instância do axios configurada

import {
  Title,
  Container,
  Form,
  ContainerInputs,
  InputLabel,
  Input,
} from "./styles"; // Importando o componente Title do arquivo styles.js

import Button from "../../components/Button"; // Importando o componente Button
import TopBackground from "../../components/TopBackground";

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();
  const navigate = useNavigate();

  async function registerNewUser() {
  const newUser = {
    name: inputName.current.value,
    age: inputAge.current.value,
    email: inputEmail.current.value,
  };

  try {
    const response = await api.post("/usuarios", newUser);
    console.log("Usuário cadastrado:", response.data);

    // limpa os campos depois do envio
    inputName.current.value = "";
    inputAge.current.value = "";
    inputEmail.current.value = "";
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error.response?.data || error);
  }
}
  //componente React sempre com letras maiusculas
  return (
    <Container>
      <TopBackground />

      <Form>
        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>
          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Nome" ref={inputName} />
          </div>

          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input type="number" placeholder="Idade" ref={inputAge} />
          </div>
        </ContainerInputs>

        <div style={{ width: "100%" }}>
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input
            type="email"
            placeholder="E-mail do usuário"
            ref={inputEmail}
          />
        </div>

        <Button type="button" onClick={registerNewUser} theme="primary">
          Cadastrar Usuário
        </Button>
      </Form>

      <Button type="button" onClick={() => navigate("/lista-de-usuarios")}>
        Ver lista de Usuários
      </Button>
    </Container>
  );
}

/* 
    Exportar "padão" -> uma coisa so por pagina "export default App";
    apenas Exportar varias coisas -> export { App };
    Importar "padão" -> import App from './App';
    Importar varias coisas -> import { App } from './App';
    Importar com nome diferente -> import { App as MeuApp } from './App';
    Importar tudo -> import * as MeuApp from './App';
    Importar tudo com nome diferente -> import * as MeuApp from './App.jsx';
    Importar com nome diferente e exportar como padrão -> import MeuApp from './App.jsx
    Importar com nome diferente e exportar como padrão -> export { MeuApp as default }
    
*/

export default Home;
