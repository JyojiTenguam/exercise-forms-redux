import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PersonalForm from "./pages/PersonalForm";
import ProfessionalForm from "./pages/ProfessionalForm";
import FormDisplay from "./pages/FormDisplay";

function App() {
  return (
    <main>
       <Routes>
        <Route path="/" Component={ Home } />
        <Route path="personal-form" Component={ PersonalForm } />
        <Route path="professional-form" Component={ ProfessionalForm } />
        <Route path="form-display" Component={ FormDisplay } />
      </Routes>
    </main>
  );
}

export default App;
