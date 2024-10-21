// src/pages/sistemas/Esqueletico.js


import ListaDePartes from '../../components/ListaDePartes';
import NavBar from '../../components/NavBar';
import ImagemDoCentro from '../../components/ImagemDoCentro';
import ImagemAnatomia2 from '../../images/ImagensCentralizadas/ImagemAnatomia2.jpg'

function Esqueletico() {
    const caminhoSistemaOsseo = "/text/sistemaOsseo.txt"; // Caminho correto para o sistema esquelético

    return (
        <>
            {/* NavBar da página */}
            <NavBar />

            <h1 className='text-center' style={{ paddingTop: "90px", paddingBottom: "2%", color: "#211D1D" }}>Sistema esquelético</h1>
            <ImagemDoCentro link={ImagemAnatomia2} nome={"Anatomia 2"} />
            {/* Seção com as partes do corpo */}
            <ListaDePartes texto={caminhoSistemaOsseo} />


        </>
    );
}

export default Esqueletico;
