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


// DESCRIÇÕES
let descricaoVistaLateralPelveEsquerda = `A vista lateral da pelve esquerda revela uma estrutura complexa e poderosa, projetada para suportar o peso do corpo
 e fornecer estabilidade. Nessa perspectiva, destacam-se os ossos principais: o osso ilíaco, com sua ampla curvatura, forma a parte superior da pelve e oferece
  superfície para a inserção de vários músculos importantes. A crista ilíaca aparece proeminente, se estendendo ao longo do topo do osso e servindo como ponto
   de ancoragem para músculos abdominais e lombares.
Abaixo do osso ilíaco, o ísquio emerge na parte inferior e posterior da pelve, 
formando uma estrutura arredondada que suporta o peso ao sentarmos. O púbis, na frente, 
conecta-se ao lado direito através da sínfise púbica, uma articulação fibrocartilaginosa que permite flexibilidade e amortecimento.
Na vista lateral, também se nota o acetábulo, a cavidade que abriga a cabeça do fêmur, criando a articulação do quadril.
 Esta área é reforçada por ligamentos e músculos que conferem movimento e força. Em conjunto, esses elementos estruturais
  fazem da pelve uma região essencial para a estabilidade e o movimento corporal, equilibrando mobilidade e resistência.`

let descricaoVistaMedialPelveEsquerda = `A vista medial mostra os detalhes internos da pelve.`;

let descricaoVistaAnteriorPelve = `A vista anterior destaca a parte frontal da pelve.`;


// Fêmur
let descricaoVistaAnteriorDoFemur = `Vista frontal do osso mais longo do corpo humano, o fêmur.`;

let descricaoVistaPosteriorDoFemur1 = `A vista posterior mostra a parte traseira do fêmur.`;

let descricaoVistaPosteriorDoFemur2 = `Uma segunda imagem da parte traseira do fêmur.`;


// Divisão da Pelve
let descricaoVistaLateralDaDivisaoDaPelve = `Mostra a divisão lateral dos ossos da pelve.`;


// Ligamentos do Joelho
let descricaoVistaAnteriorDosLigamentosDoJoelho = `A vista anterior dos ligamentos que conectam o joelho.`;

let descricaoVistaMedialDosLigamentosDoJoelho = `Mostra os ligamentos na parte medial do joelho.`;

let descricaoVistaLateralDosLigamentosDoJoelho = `A visão lateral detalha os ligamentos laterais do joelho.`;

let descricaoVistaPosteriorDosLigamentosDoJoelho = `A visão posterior dos ligamentos na parte traseira do joelho.`;


// Tíbia
let descricaoVistaAnteriorDaTibia = `A parte frontal da tíbia, localizada abaixo do joelho.`;

let descricaoVistaPosteriorDaTibia = `A parte traseira da tíbia.`;


// Tornozelo do Pé
let descricaoVistaPlantarDoTornozelo = `A vista plantar mostra a parte inferior do tornozelo.`;

let descricaoVistaDorsalDoTornozelo = `Vista da parte superior do tornozelo.`;

let descricaoVistaMedialDoTornozelo = `Mostra a parte interna do tornozelo.`;

let descricaoVistaLateralDoTornozelo = `A vista externa lateral do tornozelo.`;



export const partes = {
  esqueletico: [
    {
      id: "pelve",
      titulo: "Pelve",
      imagens: [
        { src: pelveImage15, titulo: "Vista Lateral Pelve Esquerda", descricao: descricaoVistaLateralPelveEsquerda },
        { src: pelveImage16, titulo: "Vista Medial Pelve Esquerda", descricao: descricaoVistaMedialPelveEsquerda },
        { src: pelveImage17, titulo: "Vista Anterior", descricao: descricaoVistaAnteriorPelve }
      ]
    },
    {
      id: "femur",
      titulo: "Fêmur",
      imagens: [
        { src: femurImage9, titulo: "Vista Anterior do Fêmur", descricao: descricaoVistaAnteriorDoFemur },
        { src: femurImage10, titulo: "Vista Posterior do Fêmur", descricao: descricaoVistaPosteriorDoFemur1 },
        { src: femurImage11, titulo: "Vista Posterior do Fêmur", descricao: descricaoVistaPosteriorDoFemur2 }
      ]
    },
    {
      id: "divisão da pelve",
      titulo: "Divisão da Pelve",
      imagens: [
        { src: disisaoDaPelve14, titulo: "Vista Lateral da Divisão da Pelve", descricao: descricaoVistaLateralDaDivisaoDaPelve }
      ]
    },
    {
      id: "ligamentos do joelho",
      titulo: "Ligamentos do Joelho",
      imagens: [
        { src: ligamentosDoJoelho5, titulo: "Vista Anterior dos Ligamentos do Joelho", descricao: descricaoVistaAnteriorDosLigamentosDoJoelho },
        { src: ligamentosDoJoelho6, titulo: "Vista Medial dos Ligamentos do Joelho", descricao: descricaoVistaMedialDosLigamentosDoJoelho },
        { src: ligamentosDoJoelho7, titulo: "Vista Lateral dos Ligamentos do Joelho", descricao: descricaoVistaLateralDosLigamentosDoJoelho },
        { src: ligamentosDoJoelho8, titulo: "Vista Posterior dos Ligamentos do Joelho", descricao: descricaoVistaPosteriorDosLigamentosDoJoelho }
      ]
    },
    {
      id: "tibia",
      titulo: "Tíbia",
      imagens: [
        { src: tibia12, titulo: "Vista Anterior da Tíbia", descricao: descricaoVistaAnteriorDaTibia },
        { src: tibia13, titulo: "Vista Posterior da Tíbia", descricao: descricaoVistaPosteriorDaTibia }
      ]
    },
    {
      id: "tornozelo do pé",
      titulo: "Tornozelo do Pé",
      imagens: [
        { src: tornozeloDoPe1, titulo: "Vista Plantar do Tornozelo", descricao: descricaoVistaPlantarDoTornozelo },
        { src: tornozeloDoPe2, titulo: "Vista Dorsal do Tornozelo", descricao: descricaoVistaDorsalDoTornozelo },
        { src: tornozeloDoPe3, titulo: "Vista Medial do Tornozelo", descricao: descricaoVistaMedialDoTornozelo },
        { src: tornozeloDoPe4, titulo: "Vista Lateral do Tornozelo", descricao: descricaoVistaLateralDoTornozelo }
      ]
    }
  ]
};
