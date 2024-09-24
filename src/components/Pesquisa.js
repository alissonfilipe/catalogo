import React, { useState } from 'react';

function Pesquisa() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();

        // Remove o destaque de qualquer item que tenha sido destacado previamente
        const elementos = document.querySelectorAll("li");
        elementos.forEach((elemento) => {
            elemento.style.backgroundColor = ''; // Remove o fundo amarelo
        });

        // Procura o primeiro item que contém o termo de busca
        for (let elemento of elementos) {
            if (elemento.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
                // Adiciona o destaque com CSS inline
                elemento.style.backgroundColor = 'yellow';

                // Rola até o elemento encontrado e o centraliza na tela
                elemento.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });

                // Remove o destaque após 2 segundos
                setTimeout(() => {
                    elemento.style.backgroundColor = ''; // Remove o fundo amarelo após o tempo
                }, 2000);

                break; // Para a busca assim que encontrar o primeiro resultado
            }
        }
    };

    return (
        <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
                className="form-control me-2 border-danger"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-danger" type="submit">
                <i className="bi bi-search fs-3 text-dark"></i> {/* Ícone de lupa */}
            </button>
        </form>
    );
}

export default Pesquisa;
