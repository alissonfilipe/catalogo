import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { Helmet } from 'react-helmet'; // Importe o Helmet
import Home from './pages/Home';
import Esqueletico from './pages/sistemas/Esqueletico';
import Parte from './components/Parte';
import ParteDetalhada from './components/ParteDetalhada';
import NotFound from './pages/NotFound';
import Footer from './components/Footer'; // Importe o Footer

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>UNITPAC | Afya</title> {/* Defina seu título aqui */}
          <link rel="icon" href="/favicon-256.png" /> {/* Defina seu favicon aqui */}
        </Helmet>

        {/* Conteúdo principal */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sistemas/esqueletico" element={<Esqueletico />} />
            <Route path="/sistemas/esqueletico/parte/:parteId" element={<Parte />} />
            <Route path="/sistemas/esqueletico/parte/:parteId/parteDetalhada/:parteDetalhadaId" element={<ParteDetalhada />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        {/* Rodapé global */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
