import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "../components/Header";
import ImageButton from "../components/ImageButton";
import VideoPlayer from '../components/VideoPlayer';
import Footer from '../components/Footer';

// Página inicial com o vídeo de introdução
function Home() {
    return (
        <>
            <Router>
                <ImageButton />
            </Router>
            <Header />
            <VideoPlayer />
            <Footer/>
        </>
    )
}

export default Home