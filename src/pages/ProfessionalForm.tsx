import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';

function ProfessionalForm() {
  const [form, setForm] = useState({
    resume: '',
    role: '',
    description: '',
  });
  const { resume, role, description } = form;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (
    { target }: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  return (
    <form
      onSubmit={ (event) => {
        event.preventDefault();
        if (resume.length >= 10) {
          dispatch({ type: 'UPDATE_PROFESSIONAL_DATA', payload: { ...form } });
          navigate('/form-display');
        }
      } }
    >
      <h1 className="title">Informações Profissionais</h1>
      <TextArea
        label="Resumo do currículo: "
        value={ resume }
        name="resume"
        maxLength="1000"
        onChange={ handleChange }
        required
      />
      <Input
        label="Cargo:"
        name="role"
        type="text"
        value={ role }
        onChange={ handleChange }
        required
      />
      <TextArea
        label="Descrição do cargo: "
        name="description"
        maxLength="500"
        onChange={ handleChange }
        value={ description }
        required
      />
      <Button
        type="submit"
        label="Enviar"
        moreClasses="is-fullwidth is-info"
      />
    </form>
  );
}
export default ProfessionalForm;
