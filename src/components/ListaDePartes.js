import React, { useEffect, useState } from 'react';

// Componente para exibir a lista de partes do corpo a partir de um arquivo .txt
function ListaDePartes({ texto }) {
    const [partes, setPartes] = useState([]);

    useEffect(() => {
        const carregarPartes = async () => {
            try {
                const resposta = await fetch(texto); // Caminho do arquivo na pasta public
                console.log('Resposta do fetch:', resposta);
                if (!resposta.ok) {
                    throw new Error('Erro ao carregar o arquivo');
                }
                const textoRecebido = await resposta.text(); // Lê o conteúdo do arquivo
                console.log('Texto recebido:', textoRecebido);
                const listaPartes = textoRecebido.split('\n').map(parte => parte.trim()); // Divide o texto em linhas
                setPartes(listaPartes); // Atualiza o estado com a lista de partes
            } catch (erro) {
                console.error('Erro ao carregar o arquivo:', erro);
            }
        };

        carregarPartes();
    }, [texto]);

    if (partes.length === 0) {
        return <div>Carregando...</div>; // Renderiza algo enquanto carrega
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '40px' }}>
            <ul style={{ listStyleType: 'none', paddingLeft: 0, width: '50%', maxWidth: '900px', minWidth: '30%' }}>
                {partes.map((parte, index) => (
                    <li id={index} key={index} style={{ marginBottom: '10px' }}>
                        <a href={`#${parte}`} style={{ textDecoration: 'none', color: 'blue' }}>
                            {parte}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaDePartes;
