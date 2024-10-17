import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/ImageButton.module.css';
import Pesquisa from '../components/Pesquisa';
import { useState, useEffect } from 'react';

function ImageButton() {
  const navigate = useNavigate(); // Hook para navegação
  const [showSearch, setShowSearch] = useState(false); // Estado para mostrar/esconder a barra de pesquisa no modo responsivo

  const handleClick = () => {
    navigate('/'); // Redireciona para a página inicial
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch); // Alterna o estado de exibição da barra de pesquisa
  };

  // Função para monitorar o tamanho da janela e resetar a barra de pesquisa em telas grandes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowSearch(false); // Oculta a barra de pesquisa no modo responsivo quando a tela é redimensionada para maior
      }
    };

    // Adiciona o listener ao redimensionamento da janela
    window.addEventListener('resize', handleResize);

    // Remove o listener quando o componente for desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='d-flex justify-content-between align-items-center flex-wrap' style={{ padding: '10px 50px', width: '100%' }}>
      {/* Ícones de redes sociais à esquerda (Escondidos em telas menores) */}
      <div className='d-flex align-items-center d-none d-md-flex'>
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
          style={{ cursor: 'pointer', width: '350px', height: 'auto' }}
          onClick={handleClick}
        />
      </div>

      {/* Barra de pesquisa à direita (Escondida em telas menores) */}
      <div className='d-none d-md-flex'>
        <Pesquisa />
      </div>

      {/* Ícone de menu para a pesquisa em telas pequenas */}
      <div className='d-flex d-md-none'>
        <button onClick={toggleSearch} className='btn'>
          <i className="bi bi-list fs-2"></i> {/* Ícone de menu (hambúrguer) */}
        </button>
      </div>

      {/* Barra de pesquisa em telas pequenas (visível apenas quando o ícone é clicado) */}
      {showSearch && (
        <div className='w-100 mt-2'>
          <Pesquisa />
        </div>
      )}
    </div>
  );
}

export default ImageButton;
