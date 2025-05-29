// src/pages/sistemas/Muscular.js

import React from 'react';
import ListaDePartes from '../../components/ListaDePartes';
import NavBar from '../../components/NavBar';
import ImagemDoCentro from '../../components/ImagemDoCentro';
import ImagemMuscular from '../../images/muscular/abdominaisVistaAnterior.png';

function Muscular() {
    const caminhoSistemaMuscular = "/text/sistemaMuscular.txt"; // caminho para o texto do sistema muscular

    return (
        <>
            {/* NavBar da página */}
            <NavBar />

            <h1 className='text-center' style={{ paddingTop: "90px", paddingBottom: "2%", color: "#211D1D" }}>
                Sistema muscular
            </h1>
            <ImagemDoCentro link={ImagemMuscular} nome={"Anatomia muscular"} />

            {/* Lista de partes específicas do sistema muscular */}
            <ListaDePartes texto={caminhoSistemaMuscular} sistema="muscular" />

        </>
    );
}

export default Muscular;
