
import VideoPlayer from '../components/VideoPlayer';
import Footer from '../components/Footer';
import ListaDePartes from '../components/ListaDePartes.js'
import NavBar from '../components/NavBar.js'


// Página inicial com o vídeo de introdução
function Home() {
    return (
        <>
            {/* nav bar da página */}
            <NavBar/>

            {/* parte do vídeo da página */}
            <VideoPlayer />
            

            {/* seção com as partes do corpo */}
            <ListaDePartes/>

            {/* Rodapé da página */}
            <Footer/>
        </>
    )
}

export default Home