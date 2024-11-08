import React from 'react';
import ImagemDoCentro from '../components/ImagemDoCentro.js';
import imagemDeAnatomia from '../images/ImagensCentralizadas/Anotomia1.jpg'
import Sistemas from '../components/Sistemas.js';
import NavBarPadrao from '../components/NavBarPadrao.js';

function Home() {


    return (
        <>
            <NavBarPadrao />
            <h1 className='text-center' style={{ paddingTop: "90px", paddingBottom: "2%" }}>Sistemas do Corpo</h1>
            <ImagemDoCentro link={imagemDeAnatomia} nome={"Imagem do Home"} />
            <Sistemas />


        </>
    );
}

export default Home;
