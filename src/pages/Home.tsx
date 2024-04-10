import Button from '../components/Button';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section>
      <Link to="/personal-form">
      <Button
        label="Preencher Formulário"
        moreClasses="text-center is-info is-large is-fullwidth"
        type="button"
      />
      </Link>
    </section>
  );
}

export default Home;
