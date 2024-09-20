import React, { useEffect, useState } from 'react';
import textBodyPartsInPortuguese from '../text/textBodyPartsInPortuguese.txt'
// Componente para exibir a lista de partes do corpo a partir de um arquivo .txt
function ListaDePartes() {
    const [partes, setPartes] = useState([]);

    // Função para buscar e processar o arquivo .txt
    useEffect(() => {
        const carregarPartes = async () => {
            try {
                const resposta = await fetch(textBodyPartsInPortuguese); // Caminho do arquivo na pasta public
                const texto = await resposta.text(); // Lê o conteúdo do arquivo
                const listaPartes = texto.split('\n'); // Divide o texto em linhas
                setPartes(listaPartes); // Atualiza o estado com a lista de partes
            } catch (erro) {
                console.error('Erro ao carregar o arquivo:', erro);
            }
        };

        carregarPartes(); // Chama a função para carregar o arquivo
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '40px' }}>
            <ul style={{ listStyleType: 'none', paddingLeft: 0, width: '50%', maxWidth: '900px', minWidth: '30%' }}>
                {partes.map((parte, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                        <a 
                            href={`#eutômuitofudido`} // Aqui, você pode mudar o href para a URL que quiser
                            style={{ textDecoration: 'none', color: 'blue' }} 
                        >
                            {parte}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaDePartes;
