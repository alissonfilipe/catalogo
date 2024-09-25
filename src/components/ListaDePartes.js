import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importa o Link

function ListaDePartes({ texto, sistema }) {
    const [partes, setPartes] = useState([]);

    useEffect(() => {
        const carregarPartes = async () => {
            try {
                const resposta = await fetch(texto);
                if (!resposta.ok) {
                    throw new Error('Erro ao carregar o arquivo');
                }
                const textoRecebido = await resposta.text();
                const listaPartes = textoRecebido.split('\n').map(parte => parte.trim());
                setPartes(listaPartes);
            } catch (erro) {
                console.error('Erro ao carregar o arquivo:', erro);
            }
        };

        carregarPartes();
    }, [texto]);

    if (partes.length === 0) {
        return <div>Carregando...</div>;
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '40px' }}>
            <h1>{sistema}</h1>
            <ul style={{ listStyleType: 'none', paddingLeft: 0, width: '50%', maxWidth: '900px', minWidth: '30%' }}>
                {partes.map((parte, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                        <Link to={`/parte/${parte}`} style={{ textDecoration: 'none', color: 'blue' }}>
                            {parte}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaDePartes;
