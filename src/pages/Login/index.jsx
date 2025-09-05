import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import { Container, Form, Title, Input, InputLabel } from "./styles";
import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";

function Login() {
  const inputEmail = useRef();
  const inputPassword = useRef();
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      const { data } = await api.post("/admin/login", {
        email: inputEmail.current.value,
        password: inputPassword.current.value,
      });

      // guarda o token no localStorage
      localStorage.setItem("token", data.token);

      // redireciona para a lista de usuários
      navigate("/lista-de-usuarios");
    } catch (error) {
      alert("Login inválido. Verifique suas credenciais.");
    }
  }

  return (
    <Container>
      <TopBackground />
      <Form>
        <Title>Login</Title>
        <div>
          <InputLabel>Email</InputLabel>
          <Input type="email" placeholder="Digite seu email" ref={inputEmail} />
        </div>
        <div>
          <InputLabel>Senha</InputLabel>
          <Input type="password" placeholder="Digite sua senha" ref={inputPassword} />
        </div>
        <Button type="button" onClick={handleLogin} theme="primary">
          Entrar
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
