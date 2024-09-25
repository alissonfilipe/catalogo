import React from 'react';
import { useParams } from 'react-router-dom';

function ParteDetalhada() {
    const { nomeParte } = useParams();

    return (
        <div>
            <h2>Detalhes sobre: {nomeParte}</h2>
            {/* Aqui você pode adicionar mais informações ou lógica para mostrar detalhes */}
        </div>
    );
}

export default ParteDetalhada;
