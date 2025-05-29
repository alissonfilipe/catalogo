import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { partes } from '../components/dadosPartes';
import NotFound from '../pages/NotFound';
import NavBarPadrao from './NavBarPadrao';

const ParteDetalhada = () => {
  const { sistema, parteId, parteDetalhadaId } = useParams(); // Agora pegamos também o sistema
  const parte = partes[sistema]?.find((p) => p.id === parteId); // Busca dinâmica baseada no sistema

  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const [isZoomedIn, setIsZoomedIn] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /iphone|ipod|android|windows phone/i.test(userAgent);
    setIsDesktop(!isMobile);
  }, []);

  if (!parte || !parte.imagens[parteDetalhadaId]) {
    return <NotFound />;
  }

  const imagemDetalhada = parte.imagens[parteDetalhadaId];

  const toggleZoom = () => {
    if (isDesktop) {
      setIsZoomedIn((prev) => !prev);
    }
  };

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
                cursor: isZoomedIn ? 'move' : isDesktop ? 'pointer' : 'default',
                overflow: 'hidden',
              }}
              onClick={toggleZoom}
              onMouseMove={handleMouseMove}
            >
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
