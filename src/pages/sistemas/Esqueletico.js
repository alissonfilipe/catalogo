// src/pages/sistemas/Esqueletico.js
import VideoPlayer from '../../components/VideoPlayer';
import Footer from '../../components/Footer';
import ListaDePartes from '../../components/ListaDePartes';
import NavBar from '../../components/NavBar';

function Esqueletico() {
    const caminhoSistemaOsseo = "/text/sistemaOsseo.txt"; // Caminho correto para o sistema esquelético

    return (
        <>
            {/* NavBar da página */}
            <NavBar />

            {/* Parte do vídeo da página */}
            <VideoPlayer />

            {/* Seção com as partes do corpo */}
            <ListaDePartes texto={caminhoSistemaOsseo} sistema={'Sistema Esquelético'} />

            {/* Rodapé da página */}
            <Footer />
        </>
    );
}

export default Esqueletico;
