import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import {
  Title,
  Container,
  Form,
  ContainerInputs,
  InputLabel,
  Input,
} from "./styles";

import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";

function Login() {
  const inputEmail = useRef();
  const inputPassword = useRef();
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      const response = await api.post("/admin/login", {
        email: inputEmail.current.value,
        password: inputPassword.current.value,
      });

      // salva token no localStorage
      localStorage.setItem("token", response.data.token);

      alert("Login realizado com sucesso!");
      navigate("/lista-de-usuarios"); // redireciona após login
    } catch (error) {
      console.error("Erro no login:", error.response?.data || error);
      alert(error.response?.data?.message || "Erro ao fazer login");
    }
  }

  return (
    <Container>
      <TopBackground />

      <Form>
        <Title>Login Admin</Title>

        <ContainerInputs>
          <div>
            <InputLabel>
              E-mail<span> *</span>
            </InputLabel>
            <Input type="email" placeholder="E-mail" ref={inputEmail} />
          </div>

          <div>
            <InputLabel>
              Senha<span> *</span>
            </InputLabel>
            <Input type="password" placeholder="Senha" ref={inputPassword} />
          </div>
        </ContainerInputs>

        <Button type="button" onClick={handleLogin} theme="primary">
          Entrar
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
