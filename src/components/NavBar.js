import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageButton from "../components/ImageButton";
import Header from "../components/Header";

function NavBar(){

    return(
        <>
        <Router>
            <ImageButton/>
        </Router>
        <Header/>
        </>
    )
}

export default NavBar