import styled from "styled-components";

export const Container = styled.div`
  background-color: #181f36;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
`;

export const Title = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
  margin-top: 20px;
`;

export const ContainerUsers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin: 40px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

  }
`;

export const CardUsers = styled.div`
  background-color: #252d48;
  padding: 16px;
  border-radius: 32px;
  display: flex;
  align-items: center;
  gap: 20px;
  max-width: 380px;

  h3 {
    color: #fff;
    font-size: 24px;
    margin-bottom: 3px;
    text-transform: capitalize;
  }

  p {
    color: #fff;
    font-size: 14px;
    font-weight: 200;
    margin: 2px 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

// Novo container para texto + botões
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;


export const TrashIcon = styled.img`
  cursor: pointer;
  padding-left: 30px;

  &:hover {
    opacity: 0.8;
  } 

  &.active {
    opacity: 0.5;
  }
`;

export const AvatarUsers = styled.img`
  height: 80px;
`;

export const EditCard = styled.div`
  background-color: #252d48;
  padding: 24px;
  border-radius: 32px;
  max-width: 400px;
  width: 100%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  
  h3 {
    color: #fff;
    text-align: center;
    font-size: 24px;
    margin-bottom: 16px;
  }
`;

export const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  input {
    padding: 10px 14px;
    border-radius: 12px;
    border: none;
    font-size: 16px;
    outline: none;
  }
`;

export const ButtonsContainer2 = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 12px;

  button {
    flex: 1;
  }
`;

