import styled from "styled-components";

export const Container = styled.div`
  background-color: #181f36;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Form = styled.form`
  background-color: #252d48;
  padding: 30px;
  border-radius: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InputLabel = styled.label`
  color: #fff;
  font-size: 14px;

  span {
    color: #ff5c5c;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 14px;
`;
