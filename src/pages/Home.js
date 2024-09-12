import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "../components/Header";
import ImageButton from "../components/ImageButton";

// Página inicial com o vídeo de introdução
function Home(){
    return (
        <>
        <Router>
        <ImageButton/>
        </Router>
        
        <Header/>
        </>
    )
}

export default Home