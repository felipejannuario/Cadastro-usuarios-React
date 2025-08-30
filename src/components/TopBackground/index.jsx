import UserImage from "../../assets/users.png"; // Importando a imagem do usuário
import Background from "./styles"; // Importando o componente Title do arquivo styles.js

function TopBackground() {
  return (
    <Background>
      <img src={UserImage} alt="Imagem-usuários" />
    </Background>
  );
}

export default TopBackground;