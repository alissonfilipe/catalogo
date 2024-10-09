import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar.js';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup } from 'react-bootstrap'; // Importando os componentes do Bootstrap
import ImagemDoCentro from '../components/ImagemDoCentro.js';
import imagemDeAnatomia from '../images/ImagensCentralizadas/Anotomia1.jpg'
import Sistemas from '../components/Sistemas.js';

function Home() {


    return (
        <>
            <NavBar />
            <h1 className='text-center' style={{ paddingTop: "1%", paddingBottom: "2%" }}>Sistemas do Corpo</h1>
            <ImagemDoCentro link={imagemDeAnatomia} nome={"Imagem do Home"} />
            <Sistemas />

            <Footer />
        </>
    );
}

export default Home;
