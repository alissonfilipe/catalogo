import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'; // Importando os componentes do Bootstrap

function NotFound() {
    return (
        <>
            <Container 
            className='text-center' 
            style={{ 
                paddingTop: '40px', 
                paddingBottom: '40px',
                height: '100vh', // Define a altura total da viewport
                display: 'flex', // Usar flexbox
                justifyContent: 'center', // Centralizar horizontalmente
                alignItems: 'center' // Centralizar verticalmente
            }}
        >
            <Row>
                <Col>
                    <h1 style={{ fontSize: '3rem', color: '#CE0056' }}>404</h1>
                    <h2>Página Não Encontrada</h2>
                    <p style={{ fontSize: '1.5rem' }}>Desculpe, a página que você está procurando não existe.</p>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <button className='btn btn-primary' style={{ backgroundColor: '#CE0056', border: 'none' }}>
                            Voltar para Home
                        </button>
                    </Link>
                </Col>
            </Row>
        </Container>
           
        </>
    );
}

export default NotFound;
