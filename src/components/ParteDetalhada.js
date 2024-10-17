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
      <h1 className='text-center' style={{ paddingTop: '90px' }}>{parte.titulo}</h1>
      <div 
        style={{
          display: 'flex', // Mantém o layout lado a lado
          justifyContent: 'center', // Centraliza o conteúdo horizontalmente na página
          alignItems: 'flex-start', // Alinha o conteúdo no topo
          margin: '2rem auto', // Centraliza o bloco na página
          maxWidth: '900px', // Define uma largura máxima para o conteúdo
        }}
      >
        <div style={{ paddingRight: '2rem' }}>
          <Image 
            src={imagemDetalhada.src} 
            alt={imagemDetalhada.titulo} 
            style={{ width: '300px', height: 'auto' }} // Define o tamanho da imagem
          />
        </div>
        <div style={{ flex: 1 }}>
          <h3>{imagemDetalhada.titulo}</h3> {/* Título da imagem */}
          <p>{imagemDetalhada.descricao}</p> {/* Descrição da parte */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ParteDetalhada;
