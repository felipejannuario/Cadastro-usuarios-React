import styled from "styled-components";

export const Container = styled.div`
  background-color: #181f36;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  height: 100vh;
`;

export const TopBackground = styled.div`
  background: linear-gradient(to right, #fe8e5d, #7f3841);
  height: 30vh;
  width: 90vw;
  max-width: 800px;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 500px;
`;

export const ContainerInputs = styled.div`
  display: flex;
  gap: 20px;
  
`;

export const InputLabel = styled.label`
  color: #ffff;
  font-size: 12px;
  font-weight: 500;
  
  span {
    color: #ff4d4d;
    font-weight: bold
  }
`

export const Input = styled.input`
border-radius: 10px;
border: 1px solid #d2dae2;
background-color: #fff;
padding: 12px 20px;
outline: none;
width: 100%;
`

export const Button = styled.button`
border: none;
background: linear-gradient(to right, #FE7E5D, #FF6378);
font-size: 16px;
color: #fff;
padding: 16px 32px;
width: fit-content;
cursor: pointer;
border-radius: 30px;

&:hover {
  opacity: 0.8;
}

&:active {
  opacity: 0.5;
}
`

export const Title = styled.h2`
  color: #ffffff;
  text-align: center;
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
`;
