import pelveImage1 from '../images/PartesDoCorpo/pelve/15.png';
import pelveImage2 from '../images/PartesDoCorpo/pelve/16.png';
import femurImage1 from '../images/PartesDoCorpo/femur/9.png';
import femurImage2 from '../images/PartesDoCorpo/femur/10.png';

export const partes = {
  esqueletico: [
    {
      id: "pelve",
      titulo: "Pelve",
      descricao: "A pelve é uma estrutura óssea localizada na base da coluna vertebral.",
      imagens: [
        { src: pelveImage1, titulo: "Vista Frontal da Pelve" },
        { src: pelveImage2, titulo: "Vista Lateral da Pelve" }
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
