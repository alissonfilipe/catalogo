import ImageButton from "../components/ImageButton";

import { useEffect } from "react";


function NavBar() {

  useEffect(() => {
    // Adiciona padding-top ao body para evitar sobreposição com a NavBar fixa
    document.body.style.paddingTop = '70px'; 
  }, []);

  return (
    <nav
      className="fixed-top"
      style={{
        backgroundColor: '#fff', // cor de fundo
        borderBottom: '1px solid #ddd', // borda inferior para separar do conteúdo
        padding: '10px 20px', // espaço interno para evitar que os elementos fiquem colados na borda
        width: '100%', // garante que o navbar ocupe toda a largura da tela
        zIndex: '1030' // mantém o navbar sempre acima de outros conteúdos
      }}
    >
      {/* ImageButton em cima */}
      <ImageButton />
      
      {/* Header embaixo */}
      {/* Retirei a parte do header */}
      
    </nav>
  );
}

export default NavBar;
