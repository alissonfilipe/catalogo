import VideoPlayer from '../components/VideoPlayer';
import Footer from '../components/Footer';
import ListaDePartes from '../components/ListaDePartes.js';
import NavBar from '../components/NavBar.js';

function Home() {
    const caminhoCorpo = "/text/textBodyPartsInPortuguese.txt"; // Caminho correto dentro da pasta public
    const caminhoSistemaOsseo = "/text/sistemaOsseo.txt"; // Caminho correto para o sistema osseo

    return (
        <>
            {/* nav bar da página */}
            <NavBar/>

            {/* parte do vídeo da página */}
            <VideoPlayer />

            {/* seção com as partes do corpo */}
            <ListaDePartes texto={caminhoSistemaOsseo} sistema={'Ósseo'}/>

            {/* Rodapé da página */}
            <Footer/>
        </>
    );
}

export default Home;
