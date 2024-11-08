import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import { useEffect } from 'react';

function NavBarPadrao() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    useEffect(() => {
        document.body.style.paddingTop = '70px';
    }, []);

    return (
        <nav
            className="fixed-top d-flex align-items-center justify-content-between"
            style={{
                backgroundColor: '#fff',
                borderBottom: '1px solid #ddd',
                padding: '10px 20px',
                width: '100%',
                zIndex: '1030'
            }}
        >
            {/* Container para os ícones de redes sociais */}
            <div className="d-flex align-items-center social-icons d-none d-md-flex">
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
            <div className="d-flex justify-content-center flex-grow-1">
                <img
                    src={logo}
                    alt="Logo"
                    style={{ cursor: 'pointer', width: '350px', height: 'auto' }}
                    onClick={handleClick}
                />
            </div>

            {/* Espaço vazio para manter a centralização da logo em telas grandes */}
            <div className="d-none d-md-flex" style={{ width: '200px' }}></div>
        </nav>
    );
}

export default NavBarPadrao;
