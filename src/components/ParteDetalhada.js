import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { partes } from '../components/dadosPartes';
import NotFound from '../pages/NotFound';
import NavBarPadrao from './NavBarPadrao';

const ParteDetalhada = () => {
  const { parteId, parteDetalhadaId } = useParams();
  const parte = partes.esqueletico.find((p) => p.id === parteId);

  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const [isZoomedIn, setIsZoomedIn] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  if (!parte || !parte.imagens[parteDetalhadaId]) {
    return <NotFound />;
  }

  const imagemDetalhada = parte.imagens[parteDetalhadaId];

  // Função para alternar o estado do zoom
  const toggleZoom = () => {
    setIsZoomedIn(!isZoomedIn);
    if (!isZoomedIn) {
      setShowMessage(false); // Desativa a mensagem de zoom ao ativar o zoom
    }
  };

  // Função para exibir a mensagem
  const handleMouseEnter = () => {
    if (!isZoomedIn) {
      setShowMessage(true); // Exibe a mensagem ao passar o mouse
    }
  };

  // Função para ocultar a mensagem
  const handleMouseLeave = () => {
    if (!isZoomedIn) {
      setShowMessage(false); // Esconde a mensagem ao sair com o mouse
    }
  };

  // Função para mover o zoom
  const handleMouseMove = (e) => {
    if (!isZoomedIn) return;

    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  return (
    <>
      <NavBarPadrao />
      <h1 className="text-center mt-5">{parte.titulo}</h1>
      <Container fluid="md" className="mt-4">
        <Row className="justify-content-center">
          <Col xs={12} md={4} className="mb-4">
            <div
              style={{
                position: 'relative',
                width: '100%',
                cursor: isZoomedIn ? 'move' : 'pointer',
                overflow: 'hidden',
              }}
              onClick={toggleZoom}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Mensagem no topo da imagem */}
              {showMessage && (
                <div
                  style={{
                    position: 'absolute',
                    top: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    padding: '8px 12px',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    color: '#fff',
                    borderRadius: '5px',
                    fontSize: '0.9rem',
                    zIndex: 1,
                    pointerEvents: 'none',
                  }}
                >
                  {isZoomedIn ? 'Clique na imagem para sair do zoom' : 'Clique na imagem para dar zoom'}
                </div>
              )}

              <Image
                src={imagemDetalhada.src}
                alt={imagemDetalhada.titulo}
                style={{
                  width: '100%',
                  height: 'auto',
                  transform: isZoomedIn ? 'scale(2)' : 'scale(1)',
                  transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  transition: 'transform 0.3s ease',
                }}
              />
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div
              style={{
                padding: '15px',
                border: '2px solid #ccc',
                borderRadius: '8px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#f9f9f9',
              }}
            >
              <h3 className="text-center" style={{ fontWeight: 'bold', color: '#333' }}>
                {imagemDetalhada.titulo}
              </h3>
              <p style={{ color: '#555', margin: 0 }}>{imagemDetalhada.descricao}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ParteDetalhada;
