import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { partes } from '../components/dadosPartes'; // Importe os dados das partes
import NotFound from '../pages/NotFound';

const Parte = () => {
  const { parteId } = useParams(); // Pega o ID da parte da URL
  const parte = partes.esqueletico.find(p => p.id === parteId); // Busca a parte específica nos dados

  if (!parte) {
    return <NotFound/>; // Se o ID não for encontrado
  }

  return (
    <Container>
      <Row className="mt-5">
        <Col md={6}>
          {/* Renderizando a imagem da parte */}
          <Image src={parte.imagem} alt={parte.titulo} fluid />
        </Col>

        <Col md={6}>
          {/* Título e descrição da parte */}
          <h2>{parte.titulo}</h2>
          <p>{parte.descricao}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Parte;
