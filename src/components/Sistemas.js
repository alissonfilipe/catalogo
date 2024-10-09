import React from "react";
import { Link } from "react-router-dom"; // Importando o Link
import Card from "./Card";

// Dados dos sistemas
const sistemasData = [
    {
        titulo: "Sistema Esquelético",
        texto: "Texto do sistema esquelético",
        imagem: "https://cdn.pixabay.com/photo/2012/04/12/14/03/skeleton-30160_640.png",
        link: "/sistemas/esqueletico"
    },
    {
        titulo: "Sistema Muscular",
        texto: "Texto do sistema muscular",
        imagem: "https://cdn.pixabay.com/photo/2013/07/12/14/16/muscle-148107_640.png",
        link: "/sistemas/muscular"
    },
    {
        titulo: "Sistema Nervoso",
        texto: "Texto do sistema nervoso",
        imagem: "https://cdn.pixabay.com/photo/2017/10/31/07/49/horses-2904536_640.jpg", // Nova imagem
        link: "/sistemas/nervoso"
    },
    {
        titulo: "Sistema Endócrino",
        texto: "Texto do sistema endócrino",
        imagem: "https://cdn.pixabay.com/photo/2017/10/31/07/49/horses-2904536_640.jpg", // Nova imagem
        link: "/sistemas/endocrino"
    },
    {
        titulo: "Sistema Cardiovascular",
        texto: "Texto do sistema cardiovascular",
        imagem: "https://cdn.pixabay.com/photo/2017/10/31/07/49/horses-2904536_640.jpg", // Nova imagem
        link: "/sistemas/cardiovascular"
    },
    {
        titulo: "Sistema Respiratório",
        texto: "Texto do sistema respiratório",
        imagem: "https://cdn.pixabay.com/photo/2017/10/31/07/49/horses-2904536_640.jpg", // Nova imagem
        link: "/sistemas/respiratorio"
    },
    {
        titulo: "Sistema Digestivo",
        texto: "Texto do sistema digestivo",
        imagem: "https://cdn.pixabay.com/photo/2017/10/31/07/49/horses-2904536_640.jpg", // Nova imagem
        link: "/sistemas/digestivo"
    },
    {
        titulo: "Sistema Urinário",
        texto: "Texto do sistema urinário",
        imagem: "https://cdn.pixabay.com/photo/2020/08/11/10/06/incontinence-5479371_640.png",
        link: "/sistemas/urinario"
    },
    {
        titulo: "Sistema Imunológico",
        texto: "Texto do sistema imunológico",
        imagem: "https://cdn.pixabay.com/photo/2017/10/31/07/49/horses-2904536_640.jpg", // Nova imagem
        link: "/sistemas/imunologico"
    },
    {
        titulo: "Sistema Tegumentar",
        texto: "Texto do sistema tegumentar",
        imagem: "https://cdn.pixabay.com/photo/2017/10/31/07/49/horses-2904536_640.jpg", // Nova imagem
        link: "/sistemas/tegumentar"
    },
    {
        titulo: "Sistema Reprodutivo",
        texto: "Texto do sistema reprodutivo",
        imagem: "https://cdn.pixabay.com/photo/2017/10/31/07/49/horses-2904536_640.jpg", // Nova imagem
        link: "/sistemas/reprodutivo"
    },
];

function Sistemas() {
    return (
        <div className="container my-4" style={{ paddingTop: "20px" }}>
            <div className="row justify-content-center">
                {sistemasData.map((sistema, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-3">
                        <Link to={sistema.link} style={{ textDecoration: 'none', paddingBottom: "30px" }}>
                            <Card
                                imagem={sistema.imagem}
                                titulo={sistema.titulo}
                                texto={sistema.texto}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>




    );
}

export default Sistemas;
