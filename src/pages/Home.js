import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "../components/Header";
import ImageButton from "../components/ImageButton";
import VideoPlayer from '../components/VideoPlayer';
import Footer from '../components/Footer';
import PartesDoCorpo from '../components/PartesDoCorpo';


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


            {/* seção com as partes do corpo */}
            <PartesDoCorpo/>

            {/* Rodapé da página */}
            <Footer/>
        </>
    )
}

export default Home