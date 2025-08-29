import { useRef } from "react"; // Importando o hook useRef do React
import api from "../../services/api"; // Importando a instância do axios configurada
import {
  Title,
  Container,
  TopBackground,
  Form,
  ContainerInputs,
  InputLabel,
  Input,
  Button,
} from "./styles"; // Importando o componente Title do arquivo styles.js

import UserImage from "../../assets/users.png"; // Importando a imagem do usuário

function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  /* a maneira "tradicional" de fazer
    function registerNewUser() {
    console.log(inputName.current.value)
    console.log(inputAge.current.value)
    console.log(inputEmail.current.value)
  */

  async function registerNewUser() { // a maneira "moderna" de fazer
    const data = await api.post('/usuarios', {
      name: inputName.current.value,
      age: parseInt(inputAge.current.value),
      email: inputEmail.current.value
    })

    console.log(data)
/*

    const response = await api.post('/users', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })

    console.log(response.data)
*/

  }


  //componente React sempre com letras maiusculas
  return (
    <Container>
      <TopBackground>
        <img src={UserImage} alt="Imagem do usuário" />
      </TopBackground>

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
          <Input type="email" placeholder="E-mail do usuário" ref={inputEmail} />
        </div>

        <Button type='button' onClick={registerNewUser}>Cadastrar Usuário</Button>
      </Form>
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
