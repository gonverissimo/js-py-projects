import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; // Importa componente Homepage
import Sobre from './sobre'; // Importa componente Sobre
import Register from './register'; // Importa componente Registo
import Login from './login'; // Importa componente Login
import Tec from './tec'; // Importa componente tec
import Pdp from './pdp'; // Importa componente pdp
import Exames from './exames'; // Importa componente Exames
import Ct from './ct'; // Importa componente Ct
import Lh from './lh'; // Importa componente LH
import Premium from './premium'; // Importa componente Premium
import Forum from './forum'; // Importa componente Fórum


import './App.css';

function App() {

  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Home />} /> {/* Página Home */}
        <Route path="/login" element={<Login />} /> {/* Página Login */}
        <Route path="/register" element={<Register />} /> {/* Página Register */}
        <Route path="/sobre" element={<Sobre />} /> {/* Página Sobre */}
        <Route path="/tec" element={<Tec />} /> {/* Página Tec */}
        <Route path="/pdp" element={<Pdp />} /> {/* Página Pdp */}
        <Route path="/exames" element={<Exames />} /> {/* Página Exames */}
        <Route path="/premium" element={<Premium />} /> {/* Página Premium */}
        <Route path="/cursos/ct" element={<Ct />} /> {/* Página Ct */}
        <Route path="/cursos/lh" element={<Lh />} /> {/* Página Ct */}
        <Route path="/forum" element={<Forum />} /> {/* Página Forúm */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
