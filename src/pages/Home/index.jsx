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
            <Input type="text" placeholder="Nome" />
          </div>

          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input type="number" placeholder="Idade" />
          </div>
        </ContainerInputs>

        <div style={{ width: "100%" }}>
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input type="email" placeholder="E-mail do usuário" />
        </div>

        <Button>Cadastrar Usuário</Button>
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
