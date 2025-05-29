import React from 'react';
import { useParams, Link } from 'react-router-dom'; // Importei Link para links internos
import { Container, Row, Col, Image } from 'react-bootstrap';
import { partes } from '../components/dadosPartes';
import NotFound from '../pages/NotFound';
import '../../src/styles/Parte.css';
import NavBarPadrao from './NavBarPadrao';

const Parte = () => {
  const { sistema, parteId } = useParams(); // Agora pega o sistema também

  // Verifica se existe o sistema dentro do objeto partes
  if (!partes[sistema]) {
    return <NotFound />;
  }

  // Busca a parte dentro do sistema correto
  const parte = partes[sistema].find(p => p.id === parteId);

  if (!parte) {
    return <NotFound />;
  }

  return (
    <>
      <NavBarPadrao />
      <Container className="mt-5">
        <h1 className="mb-4 text-center" style={{ paddingTop: '30px' }}>
          {parte.titulo}
        </h1>

        {/* Usando Link para navegação SPA, e montando URL dinâmica */}
        {parte.imagens.map((img, index) => (
          <Link
            to={`/sistemas/${sistema}/parte/${parteId}/parteDetalhada/${index}`}
            key={index}
            className="parte-link"
          >
            <Row className="mb-4 parte-card" style={{ display: 'flex', alignItems: 'center' }}>
              <Col md={4} className="d-flex justify-content-center">
                <Image
                  src={img.src}
                  alt={img.titulo}
                  className="img-thumbnail"
                  style={{ width: '150px', height: 'auto' }}
                />
              </Col>
              <Col md={8} className="d-flex flex-column justify-content-center">
                <h3>{img.titulo}</h3>
              </Col>
            </Row>
          </Link>
        ))}
      </Container>
    </>
  );
};

export default Parte;
