import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar.js';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup } from 'react-bootstrap'; // Importando os componentes do Bootstrap

function Home() {
    const sistemas = [
        { nome: 'Sistema Esquelético', link: '/sistemas/esqueletico' },
        // Adicione mais sistemas conforme necessário
    ];

    return (
        <>
            <NavBar />

            <VideoPlayer />

            <Container className='text-center' style={{ paddingTop: '40px' }}>
                <h1>Sistemas do Corpo</h1>
                <ListGroup>
                    {sistemas.map((sistema, index) => (
                        <ListGroup.Item key={index}>
                            <Link to={sistema.link} style={{ textDecoration: 'none', color: 'blue' }}>
                                {sistema.nome}
                            </Link>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Container>

            <Footer />
        </>
    );
}

export default Home;
