import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/ImageButton.module.css';
import Pesquisa from '../components/Pesquisa';

function ImageButton() {
  const navigate = useNavigate(); // Hook para navegação

  const handleClick = () => {
    navigate('/'); // Redireciona para a página inicial
  };

  return (
    <div className='d-flex justify-content-between align-items-center' style={{ padding: '10px 50px', width: '100%' }}>
      {/* Ícones à esquerda */}
      <div className='d-flex align-items-center'>
        <a href="https://www.instagram.com/unitpac.afya/" className='text-dark fs-3 me-3' target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram"></i> {/* Ícone do Instagram */}
        </a>
        <a href="https://www.linkedin.com/school/unitpac/" className='text-dark fs-3 me-3' target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin"></i> {/* Ícone do LinkedIn */}
        </a>
        <a href="https://www.youtube.com/unitpac" className='text-dark fs-3 me-3' target="_blank" rel="noopener noreferrer">
          <i className="bi bi-youtube"></i> {/* Ícone do YouTube */}
        </a>
        <a href="https://www.facebook.com/Unitpac" className='text-dark fs-3 me-3' target="_blank" rel="noopener noreferrer">
          <i className="bi bi-facebook"></i> {/* Ícone do Facebook */}
        </a>
        <a href="https://wa.me/yourphonenumber" className='text-dark fs-3 me-3' target="_blank" rel="noopener noreferrer">
          <i className="bi bi-whatsapp"></i> {/* Ícone do WhatsApp */}
        </a>
        <a href="https://www.tiktok.com/@unitpac" className='text-dark fs-3' target="_blank" rel="noopener noreferrer">
          <i className="bi bi-tiktok"></i> {/* Ícone do TikTok */}
        </a>
      </div>
      
      {/* Imagem centralizada */}
      <div className='d-flex justify-content-center'>
        <img
          src={logo}  // Usando a variável que contém o caminho da imagem
          alt="Logo"
          style={{ cursor: 'pointer', width: '350px', height: 'auto' }}
          onClick={handleClick}
        />
      </div>
      
      {/* Barra de pesquisa à direita */}
      <div className='d-flex justify-content-end'>
        <Pesquisa />
      </div>
    </div>
  );
}

export default ImageButton;
