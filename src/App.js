import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Esqueletico from './pages/sistemas/Esqueletico'; // Importe o componente do sistema esquelético
import Parte from './components/Parte'; // Importe o componente para os detalhes
import ParteDetalhada from './components/ParteDetalhada'; // Importe o componente para a parte detalhada
import NotFound from './pages/NotFound'; // Importe a página NotFound

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sistemas/esqueletico" element={<Esqueletico />} />
          <Route path="/sistemas/esqueletico/parte/:parteId" element={<Parte />} />
          <Route path="/sistemas/esqueletico/parte/:parteId/parteDetalhada/:parteDetalhadaId" element={<ParteDetalhada />} /> {/* Nova rota */}
          <Route path="*" element={<NotFound />} /> {/* Rota para Not Found */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
