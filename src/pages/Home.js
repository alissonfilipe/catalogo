import React from 'react';
import NavBar from '../components/NavBar.js';
import ImagemDoCentro from '../components/ImagemDoCentro.js';
import imagemDeAnatomia from '../images/ImagensCentralizadas/Anotomia1.jpg'
import Sistemas from '../components/Sistemas.js';

function Home() {


    return (
        <>
            <NavBar />
            <h1 className='text-center' style={{ paddingTop: "90px", paddingBottom: "2%" }}>Sistemas do Corpo</h1>
            <ImagemDoCentro link={imagemDeAnatomia} nome={"Imagem do Home"} />
            <Sistemas />


        </>
    );
}

export default Home;
