import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import logo from '../images/logo.png';

function NavBarPadrao() {
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.paddingTop = '70px';
    }, []);

    const handleClick = () => {
        navigate('/'); // Redireciona para a página inicial
    };

    return (
        <nav
            className="fixed-top"
            style={{
                backgroundColor: '#fff',
                borderBottom: '1px solid #ddd',
                padding: '10px 20px',
                width: '100%',
                zIndex: '1030'
            }}
        >
            <div className='d-flex justify-content-between align-items-center' style={{ padding: '10px 50px', width: '100%' }}>
                {/* Ícones de redes sociais à esquerda (Escondidos em telas menores) */}
                <div className='d-flex align-items-center d-none d-lg-flex'>
                    <a href="https://www.instagram.com/unitpac.afya/" className='text-dark fs-3 me-3' target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/school/unitpac/" className='text-dark fs-3 me-3' target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="https://www.youtube.com/unitpac" className='text-dark fs-3 me-3' target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-youtube"></i>
                    </a>
                    <a href="https://www.facebook.com/Unitpac" className='text-dark fs-3 me-3' target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="https://wa.me/yourphonenumber" className='text-dark fs-3 me-3' target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-whatsapp"></i>
                    </a>
                    <a href="https://www.tiktok.com/@unitpac" className='text-dark fs-3' target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-tiktok"></i>
                    </a>
                </div>

                {/* Logo centralizada */}
                <div className='d-flex justify-content-center flex-grow-1'>
                    <img
                        src={logo}
                        alt="Logo"
                        style={{
                            cursor: 'pointer',
                            width: '250px',
                            height: 'auto',
                            maxWidth: '100%',
                            objectFit: 'contain'
                        }}
                        onClick={handleClick}
                    />
                </div>

                {/* Placeholder à direita em telas menores */}
                <div className='d-none d-lg-block'>
                    {/* Este elemento permanece vazio, ocupando o espaço do lado direito em telas grandes */}
                </div>
            </div>
        </nav>
    );
}

export default NavBarPadrao;
