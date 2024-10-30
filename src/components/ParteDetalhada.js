import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { partes } from '../components/dadosPartes'; // Importe os dados das partes
import NotFound from '../pages/NotFound';
import NavBar from './NavBar';

const ParteDetalhada = () => {
  const { parteId, parteDetalhadaId } = useParams(); // Pega os IDs da URL
  const parte = partes.esqueletico.find(p => p.id === parteId); // Busca a parte específica nos dados

  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [showZoom, setShowZoom] = useState(false);

  if (!parte || !parte.imagens[parteDetalhadaId]) {
    return <NotFound />; // Se o ID não for encontrado, retorna a página de erro
  }

  const imagemDetalhada = parte.imagens[parteDetalhadaId];

  // Função para atualizar a posição da lupa
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

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
        <div
          style={{
            position: 'relative',
            paddingRight: '2rem',
            width: '300px',
            height: 'auto'
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setShowZoom(true)}
          onMouseLeave={() => setShowZoom(false)}
        >
          <Image
            src={imagemDetalhada.src}
            alt={imagemDetalhada.titulo}
            style={{
              width: '100%',
              height: 'auto'
            }}
          />

          {/* Área de zoom */}
          {showZoom && (
            <div
              style={{
                position: 'absolute',
                width: '390px',
                height: '390px',
                top: '0',
                right: '-380px', // Posiciona a lupa à direita da imagem
                border: '2px solid #000',
                backgroundColor: '#fff',
                backgroundImage: `url(${imagemDetalhada.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '300% 300%', // Ampliação da imagem
                backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`, // Posição do zoom com base no movimento do mouse
                pointerEvents: 'none' // Impede a interação com a área de zoom
              }}
            ></div>
          )}
        </div>
        <div
          style={{
            flex: 1,
            padding: '15px',
            border: '2px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#f9f9f9',
          }}
        >
          <h3
            style={{
              fontWeight: 'bold',
              fontSize: '1.5rem',
              textAlign: 'center',
              color: '#333',
              marginBottom: '10px',
            }}
          >
            {imagemDetalhada.titulo}
          </h3>
          <p
            style={{
              color: '#555',
              margin: 0,
            }}
          >
            {imagemDetalhada.descricao}
          </p>
        </div>
      </div>
    </>
  );
};

export default ParteDetalhada;
