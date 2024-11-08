import React, { useState, useEffect } from 'react';
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
  const [isDesktop, setIsDesktop] = useState(true); // Assume que é desktop inicialmente

  // Detecta se o dispositivo é mobile ou desktop
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /iphone|ipod|android|windows phone/i.test(userAgent); // Verifica se é mobile
    setIsDesktop(!isMobile); // Se for mobile, setIsDesktop será false
  }, []);

  if (!parte || !parte.imagens[parteDetalhadaId]) {
    return <NotFound />;
  }

  const imagemDetalhada = parte.imagens[parteDetalhadaId];

  // Alterna o estado do zoom
  const toggleZoom = () => {
    if (isDesktop) {
      setIsZoomedIn((prev) => !prev); // Alterna o estado de zoom somente se for desktop
      setShowMessage(false); // Oculta a mensagem ao clicar para alternar o zoom
    }
  };

  // Exibe a mensagem quando o mouse entra na área da imagem (somente em desktop)
  const handleMouseEnter = () => {
    if (!isZoomedIn && isDesktop) {
      setShowMessage(true);
    }
  };

  // Oculta a mensagem quando o mouse sai da área da imagem
  const handleMouseLeave = () => {
    setShowMessage(false);
  };

  // Move a imagem ao fazer o zoom
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
                cursor: isZoomedIn ? 'move' : isDesktop ? 'pointer' : 'default', // Só ativa o pointer em desktop
                overflow: 'hidden',
              }}
              onClick={toggleZoom}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Mensagem exibida quando o mouse passa sobre a imagem */}
              {showMessage && !isZoomedIn && isDesktop && (
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
                  Clique na imagem para dar zoom
                </div>
              )}
              {isZoomedIn && isDesktop && (
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
                  Clique na imagem para sair do zoom
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
