import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png'

function ImageButton() {
    const navigate = useNavigate(); // Hook para navegação

    const handleClick = () => {
        navigate('/'); // Redireciona para a página inicial
    };

    return (
        <div className='d-flex justify-content-center' style={{paddingTop:'10px'}}>
            <img 
            src={logo}  // Usando a variável que contém o caminho da imagem
            alt="" 
            style={{ cursor: 'pointer', width: '522px', height: 'auto' }} 
            onClick={handleClick} 
        />
        </div>
    );
}

export default ImageButton;

