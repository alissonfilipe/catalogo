import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "../components/Header";
import ImageButton from "../components/ImageButton";
import VideoPlayer from '../components/VideoPlayer';
import Footer from '../components/Footer';
import Card from '../components/Card';

// Página inicial com o vídeo de introdução
function Home() {
    return (
        <>
            {/* nav bar da página */}
            <Router>
                <ImageButton />
            </Router>
            <Header />

            {/* parte do vídeo da página */}
            <VideoPlayer />
            <Card imagem="https://cdn.pixabay.com/photo/2022/11/02/14/47/bird-7565103_640.jpg"
                  titulo="Meu título"
                  texto="meu texto gradão"
            />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {/* Rodapé da página */}
            <Footer/>
        </>
    )
}

export default Home