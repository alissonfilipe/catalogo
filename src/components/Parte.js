import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

function ParteDetalhada() {
    const { nomeParte } = useParams();

    return (
        <div>
            <NavBar/>
            <h2 className='text-center'>{nomeParte}</h2>
            {/* Aqui você pode adicionar mais informações ou lógica para mostrar detalhes */}
            <Footer/>
        </div>
    );
}

export default ParteDetalhada;
