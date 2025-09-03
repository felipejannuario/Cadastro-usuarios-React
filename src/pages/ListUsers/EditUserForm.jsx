import { useState } from "react";
import Button from "../../components/Button";
import { EditCard, FormInputs, ButtonsContainer } from "./styles";

function EditUserForm({ user, onCancel, onSave }) {
  const [formData, setFormData] = useState(user);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSave(formData);
  }

  return (
    <EditCard>
      <h3>Editar Usuário</h3>
      <form onSubmit={handleSubmit}>
        <FormInputs>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nome"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Idade"
            required
          />
        </FormInputs>
        <ButtonsContainer>
          <Button type="submit">Salvar</Button>
          <Button type="button" onClick={onCancel}>Cancelar</Button>
        </ButtonsContainer>
      </form>
    </EditCard>
  );
}

export default EditUserForm;
