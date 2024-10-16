// PELVE
import pelveImage15 from '../images/PartesDoCorpo/pelve/15.png';
import pelveImage16 from '../images/PartesDoCorpo/pelve/16.png';
import pelveImage17 from '../images/PartesDoCorpo/pelve/17.png';

//FEMUR
import femurImage9 from '../images/PartesDoCorpo/femur/9.png';
import femurImage10 from '../images/PartesDoCorpo/femur/10.png';
import femurImage11 from '../images/PartesDoCorpo/femur/11.png';

//DIVISÃO DA PELVE
import disisaoDaPelve14 from '../images/PartesDoCorpo/divisaoDapelve/14.png'

// LIGAMENTOS DO JOELHO
import ligamentosDoJoelho5 from '../images/PartesDoCorpo/ligamentosDojoelho/5.png'
import ligamentosDoJoelho6 from '../images/PartesDoCorpo/ligamentosDojoelho/6.png'
import ligamentosDoJoelho7 from '../images/PartesDoCorpo/ligamentosDojoelho/7.png'
import ligamentosDoJoelho8 from '../images/PartesDoCorpo/ligamentosDojoelho/8.png'

// TIBIA
import tibia12 from '../images/PartesDoCorpo/tibia/12.png'
import tibia13 from '../images/PartesDoCorpo/tibia/13.png'

//TORNOZELO DO PE
import tornozeloDoPe1 from '../images/PartesDoCorpo/TornozeloDoPe/1.png'
import tornozeloDoPe2 from '../images/PartesDoCorpo/TornozeloDoPe/2.png'
import tornozeloDoPe3 from '../images/PartesDoCorpo/TornozeloDoPe/3.png'
import tornozeloDoPe4 from '../images/PartesDoCorpo/TornozeloDoPe/4.png'


export const partes = {
  esqueletico: [
    {
      id: "pelve",
      titulo: "Pelve",
      descricao: "A pelve é uma estrutura óssea localizada na base da coluna vertebral.",
      imagens: [
        { src: pelveImage15, titulo: "Vista Lateral Pelve Esquerda" },
        { src: pelveImage16, titulo: "Vista Medial Pelve Esquerda" },
        { src: pelveImage17, titulo: "Vista Anterior" }
      ]
    },
    {
      id: "femur",
      titulo: "Fêmur",
      descricao: "O fêmur é o osso mais longo e resistente do corpo humano.",
      imagens: [
        { src: femurImage9, titulo: "Vista Anterior do Fêmur" },
        { src: femurImage10, titulo: "Vista Posterior do Fêmur" },
        { src: femurImage11, titulo: "Vista Posterior do Fêmur" }
      ]
    },
    {
      id: "divisão da pelve",
      titulo: "divisão da pelve",
      descricao: "não precisa de descrição",
      imagens: [
        { src: disisaoDaPelve14, titulo: "Vista Lateral da divisão da Pelve" }

      ]
    },
    {
      id: "ligamentos do joelho",
      titulo: "ligamentos do joelho",
      descricao: "não precisa de descrição",
      imagens: [
        { src: ligamentosDoJoelho5, titulo: "Vista anterior do Ligamentos do Joelho" },
        { src: ligamentosDoJoelho6, titulo: "Vista medial do Ligamentos do Joelho" },
        { src: ligamentosDoJoelho7, titulo: "Vista lateral do Ligamentos do Joelho" },
        { src: ligamentosDoJoelho8, titulo: "Vista posterior do Ligamentos do Joelho" }

      ]
    },
    {
      id: "tibia",
      titulo: "tibia",
      descricao: "não precisa de descrição",
      imagens: [
        { src: tibia12, titulo: "Vista anterior da tibia" },
        { src: tibia13, titulo: "Vista posterior da tibia" }
        
      ]
    },
    {
      id: "tornozelo do pé",
      titulo: "tornozelo do pé",
      descricao: "não precisa de descrição",
      imagens: [
        { src: tornozeloDoPe1, titulo: "Vista Plantar do tornozelo do Pé" },
        { src: tornozeloDoPe2, titulo: "Vista dorsal do tornozelo do Pé" },
        { src: tornozeloDoPe3, titulo: "Vista medial do tornozelo do Pé" },
        { src: tornozeloDoPe4, titulo: "Vista lateral do tornozelo do Pé" }

      ]
    }
    // Outras partes podem ser adicionadas aqui
  ]
};
