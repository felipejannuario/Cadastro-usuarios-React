import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #0f172a;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #1e293b;
  padding: 30px;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-align: center;
`;

export const InputLabel = styled.label`
  font-size: 14px;
  color: white;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: none;
  outline: none;
`;
