import { useSelector } from 'react-redux';

function FormDisplay() {
  const {
    name,
    email,
    cpf,
    address,
    city,
    uf,
  } = useSelector((state) => state.personalData);

  const {
    resume,
    role,
    description,
  } = useSelector((state) => state.professionalData);

  return (
    <section>
      <h1>Dados Enviados</h1>
      <div>
        {`Nome: ${name}`}
      </div>
      <div>
        {`Email: ${email}`}
      </div>
      <div>
        {`CPF: ${cpf}`}
      </div>
      <div>
        {`Endereço: ${address}`}
      </div>
      <div>
        {`Cidade: ${city}`}
      </div>
      <div>
        {`Estado: ${uf}`}
      </div>
      <div>
        {`Currículo: ${resume}`}
      </div>
      <div>
        {`Cargo: ${role}`}
      </div>
      <div>
        {`Descrição do cargo: ${description}`}
      </div>
    </section>
  );
}

export default FormDisplay;
