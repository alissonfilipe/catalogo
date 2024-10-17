import React from 'react';
import { useParams } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { partes } from '../components/dadosPartes'; // Importe os dados das partes
import NotFound from '../pages/NotFound';
import NavBar from './NavBar';
import Footer from './Footer';

const ParteDetalhada = () => {
  const { parteId, parteDetalhadaId } = useParams(); // Pega os IDs da URL
  const parte = partes.esqueletico.find(p => p.id === parteId); // Busca a parte específica nos dados

  if (!parte || !parte.imagens[parteDetalhadaId]) {
    return <NotFound />; // Se o ID não for encontrado, retorna a página de erro
  }

  const imagemDetalhada = parte.imagens[parteDetalhadaId];

  return (
    <>
      <NavBar />
      <h1 className='text-center' style={{paddingTop:"90px"}}>{parte.titulo}</h1>
      <div style={{ margin: '2rem', display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1, paddingRight: '2rem' }}>
          <Image 
            src={imagemDetalhada.src} 
            alt={imagemDetalhada.titulo} 
            style={{ width: '100%', height: 'auto' }} // Imagem ocupa 100% da largura disponível
          />
        </div>
        <div style={{ flex: 1 }}>
          
          <h3>{imagemDetalhada.titulo}</h3> {/* Título da imagem */}
          <p>{parte.descricao}</p> {/* Descrição da parte */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ParteDetalhada;
