import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { partes } from '../components/dadosPartes'; // Importe os dados das partes
import NotFound from '../pages/NotFound';
import NavBar from './NavBar';
import Footer from './Footer';

const Parte = () => {
  const { parteId } = useParams(); // Pega o ID da parte da URL
  const parte = partes.esqueletico.find(p => p.id === parteId); // Busca a parte específica nos dados

  if (!parte) {
    return <NotFound />; // Se o ID não for encontrado, retorna a página de erro
  }

  return (
    <>
    <NavBar/>
    <Container className="mt-5">
      <h1 className="mb-4 text-center">{parte.titulo}</h1> {/* Nome da parte no topo, centralizado */}
      
      {/* Renderizando as imagens e os títulos relacionados */}
      {parte.imagens.map((img, index) => (
        <Row key={index} className="mb-4">
          <Col md={6} className="d-flex justify-content-center">
            <Image src={img.src} alt={img.titulo} fluid />
          </Col>
          <Col md={6} className="d-flex flex-column justify-content-center">
            <h3>{img.titulo}</h3>
          </Col>
        </Row>
      ))}
    </Container>
    <Footer/>
    </>
  );
};

export default Parte;
