import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { partes } from '../components/dadosPartes'; // Importe os dados das partes
import NotFound from '../pages/NotFound';
import NavBar from './NavBar';
import Footer from './Footer';
import '../../src/styles/Parte.css'; // Importe o arquivo de estilos personalizados

const Parte = () => {
  const { parteId } = useParams(); // Pega o ID da parte da URL
  const parte = partes.esqueletico.find(p => p.id === parteId); // Busca a parte específica nos dados

  if (!parte) {
    return <NotFound />; // Se o ID não for encontrado, retorna a página de erro
  }

  return (
    <>
      <NavBar />
      <Container className="mt-5">
        <h1 className="mb-4 text-center" style={{paddingTop: "30px"}}>{parte.titulo}</h1> {/* Nome da parte no topo, centralizado */}

        {/* Renderizando as imagens e os títulos relacionados */}
        {parte.imagens.map((img, index) => (
          <a href={`/sistemas/esqueletico/parte/${parteId}/parteDetalhada/${index}`} key={index} className="parte-link"> {/* Link que envolve toda a div */}
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
          </a>
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default Parte;
