import React, { useState } from "react";
import Pesquisa from "./Pesquisa";

function Header() {
    const [showText, setShowText] = useState(false);

    const toggleText = () => {
        setShowText(!showText);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container-fluid">
                <div className="me-auto">
                    {/* Elemento vazio para alinhar os itens à direita */}
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" onClick={toggleText}>
                                Institucional <i className="bi bi-chevron-down ms-2"></i>
                            </a>
                            {showText && <p>Conheça o UNITPAC</p>}
                        </li>
                        {/* ... outros itens da navegação ... */}
                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" onClick={toggleText}>
                            Alunos <i className="bi bi-chevron-down ms-2"></i>
                            </a>
                            {showText && <p>Conheça o UNITPAC</p>}
                        </li>
                        {/* ... outros itens da navegação ... */}
                    </ul>

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" onClick={toggleText}>
                            Graduação <i className="bi bi-chevron-down ms-2"></i>
                            </a>
                            {showText && <p>Conheça o UNITPAC</p>}
                        </li>
                        {/* ... outros itens da navegação ... */}
                    </ul>
                    
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" onClick={toggleText}>
                            Pós-graduação <i className="bi bi-chevron-down ms-2"></i>
                            </a>
                            {showText && <p>Conheça o UNITPAC</p>}
                        </li>
                        {/* ... outros itens da navegação ... */}
                    </ul>

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" onClick={toggleText}>
                            calendario e eventos  <i className="bi bi-chevron-down ms-2"></i>
                            </a>
                            {showText && <p>Conheça o UNITPAC</p>}
                        </li>
                        {/* ... outros itens da navegação ... */}
                    </ul>

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" onClick={toggleText}>
                            ouvidoria   <i className="bi bi-chevron-down ms-2"></i>
                            </a>
                            {showText && <p>Conheça o UNITPAC</p>}
                        </li>
                        {/* ... outros itens da navegação ... */}
                    </ul>

                
                
 
                    <div className="me-auto">
                        <Pesquisa className="d-flex align-items-center" />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
