import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const Parte = () => {
  const { parteId } = useParams();

  return (
    <>
      {/* NavBar da página */}
      <NavBar />

      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>{parteId}</h1>
        <p>Aqui é onde colocaremos as informações sobre {parteId} no futuro.</p>
      </div>

      {/* Rodapé da página */}
      <Footer />
    </>
  );
};

export default Parte;
