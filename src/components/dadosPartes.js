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
      imagens: [
        { src: pelveImage15, titulo: "Vista Lateral Pelve Esquerda", descricao: "A visão lateral da pelve mostra a posição e o formato dos ossos na lateral do corpo." },
        { src: pelveImage16, titulo: "Vista Medial Pelve Esquerda", descricao: "A vista medial mostra os detalhes internos da pelve." },
        { src: pelveImage17, titulo: "Vista Anterior", descricao: "A vista anterior destaca a parte frontal da pelve." }
      ]
    },
    {
      id: "femur",
      titulo: "Fêmur",
      imagens: [
        { src: femurImage9, titulo: "Vista Anterior do Fêmur", descricao: "Vista frontal do osso mais longo do corpo humano, o fêmur." },
        { src: femurImage10, titulo: "Vista Posterior do Fêmur", descricao: "A vista posterior mostra a parte traseira do fêmur." },
        { src: femurImage11, titulo: "Vista Posterior do Fêmur", descricao: "Uma segunda imagem da parte traseira do fêmur." }
      ]
    },
    {
      id: "divisão da pelve",
      titulo: "Divisão da Pelve",
      imagens: [
        { src: disisaoDaPelve14, titulo: "Vista Lateral da Divisão da Pelve", descricao: "Mostra a divisão lateral dos ossos da pelve." }
      ]
    },
    {
      id: "ligamentos do joelho",
      titulo: "Ligamentos do Joelho",
      imagens: [
        { src: ligamentosDoJoelho5, titulo: "Vista Anterior dos Ligamentos do Joelho", descricao: "A vista anterior dos ligamentos que conectam o joelho." },
        { src: ligamentosDoJoelho6, titulo: "Vista Medial dos Ligamentos do Joelho", descricao: "Mostra os ligamentos na parte medial do joelho." },
        { src: ligamentosDoJoelho7, titulo: "Vista Lateral dos Ligamentos do Joelho", descricao: "A visão lateral detalha os ligamentos laterais do joelho." },
        { src: ligamentosDoJoelho8, titulo: "Vista Posterior dos Ligamentos do Joelho", descricao: "A visão posterior dos ligamentos na parte traseira do joelho." }
      ]
    },
    {
      id: "tibia",
      titulo: "Tíbia",
      imagens: [
        { src: tibia12, titulo: "Vista Anterior da Tíbia", descricao: "A parte frontal da tíbia, localizada abaixo do joelho." },
        { src: tibia13, titulo: "Vista Posterior da Tíbia", descricao: "A parte traseira da tíbia." }
      ]
    },
    {
      id: "tornozelo do pé",
      titulo: "Tornozelo do Pé",
      imagens: [
        { src: tornozeloDoPe1, titulo: "Vista Plantar do Tornozelo", descricao: "A vista plantar mostra a parte inferior do tornozelo." },
        { src: tornozeloDoPe2, titulo: "Vista Dorsal do Tornozelo", descricao: "Vista da parte superior do tornozelo." },
        { src: tornozeloDoPe3, titulo: "Vista Medial do Tornozelo", descricao: "Mostra a parte interna do tornozelo." },
        { src: tornozeloDoPe4, titulo: "Vista Lateral do Tornozelo", descricao: "A vista externa lateral do tornozelo." }
      ]
    }
  ]
};
