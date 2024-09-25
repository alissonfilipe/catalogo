import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import ParteDetalhada from './components/ParteDetalhada'; // Importe o componente para os detalhes

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parte/:nomeParte" element={<ParteDetalhada />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
