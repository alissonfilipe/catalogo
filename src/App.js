import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { Helmet } from 'react-helmet';
import Home from './pages/Home';
import Muscular from './pages/sistemas/Muscular';
import Esqueletico from './pages/sistemas/Esqueletico';
import Parte from './components/Parte';
import ParteDetalhada from './components/ParteDetalhada';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>UNITPAC | Afya</title>
          <link rel="icon" href="/favicon-256.png" />
        </Helmet>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sistemas/esqueletico" element={<Esqueletico />} />
            <Route path="/sistemas/muscular" element={<Muscular />} />

            {/* Rota dinâmica para qualquer sistema */}
            <Route path="/sistemas/:sistema/parte/:parteId" element={<Parte />} />
            <Route path="/sistemas/:sistema/parte/:parteId/parteDetalhada/:parteDetalhadaId" element={<ParteDetalhada />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
