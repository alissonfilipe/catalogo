// PELVE
import pelveImage15 from '../images/PartesDoCorpo/pelve/15.png';
import pelveImage16 from '../images/PartesDoCorpo/pelve/16.png';
import pelveImage17 from '../images/PartesDoCorpo/pelve/17.png';

//FEMUR
import femurImage1 from '../images/PartesDoCorpo/femur/9.png';
import femurImage2 from '../images/PartesDoCorpo/femur/10.png';

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
        { src: femurImage1, titulo: "Vista Anterior do Fêmur" },
        { src: femurImage2, titulo: "Vista Posterior do Fêmur" }
      ]
    }
    // Outras partes podem ser adicionadas aqui
  ]
};
