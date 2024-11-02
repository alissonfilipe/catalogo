import React from "react";
import { Link } from "react-router-dom"; // Importando o Link
import Card from "./Card";

// Dados dos sistemas
const sistemasData = [
    {
        titulo: "Sistema Esquelético",
        texto: "Texto do sistema esquelético",
        imagem: "https://cdn.pixabay.com/photo/2021/02/04/15/32/skull-and-crossbones-5981675_640.jpg",
        link: "/sistemas/esqueletico"
    },
    {
        titulo: "Sistema Muscular",
        texto: "Texto do sistema muscular",
        imagem: "https://images.unsplash.com/photo-1603928726698-a015a1015d0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bSVDMyVCQXNjdWxvfGVufDB8fDB8fHww",
        link: "/sistemas/muscular"
    },
    {
        titulo: "Sistema Nervoso",
        texto: "Texto do sistema nervoso",
        imagem: "https://cdn.pixabay.com/photo/2022/03/19/21/01/neurons-7079536_1280.jpg", // Nova imagem
        link: "/sistemas/nervoso"
    },
    {
        titulo: "Sistema Endócrino",
        texto: "Texto do sistema endócrino",
        imagem: "https://plus.unsplash.com/premium_photo-1661779616524-1825ac40c9d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2lzdGVtYSUyMGVuZCVDMyVCM2NyaW5vfGVufDB8fDB8fHww", // Nova imagem
        link: "/sistemas/endocrino"
    },
    {
        titulo: "Sistema Cardiovascular",
        texto: "Texto do sistema cardiovascular",
        imagem: "https://images.unsplash.com/photo-1587624903959-9d8a64f874d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNpc3RlbWElMjBjYXJkaW8lMjB2YXNjdWxhcnxlbnwwfHwwfHx8MA%3D%3D", // Nova imagem
        link: "/sistemas/cardiovascular"
    },
    {
        titulo: "Sistema Respiratório",
        texto: "Texto do sistema respiratório",
        imagem: "https://images.unsplash.com/photo-1715529282082-87e4334283e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2lzdGVtYSUyMHJlc3BpcmF0JUMzJUIzcmlvfGVufDB8fDB8fHww", // Nova imagem
        link: "/sistemas/respiratorio"
    },
    {
        titulo: "Sistema Digestivo",
        texto: "Texto do sistema digestivo",
        imagem: "https://images.unsplash.com/photo-1649073586152-fe7f4accce68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXN0aW5vfGVufDB8fDB8fHww", // Nova imagem
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
        imagem: "https://images.unsplash.com/photo-1707079917481-b0d32393008b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2lzdGVtYSUyMGltdW5vbCVDMyVCM2dpY298ZW58MHx8MHx8fDA%3D", // Nova imagem
        link: "/sistemas/imunologico"
    },
    {
        titulo: "Sistema Tegumentar",
        texto: "Texto do sistema tegumentar",
        imagem: "https://images.unsplash.com/photo-1609840534195-e6385ca0d10a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvdGUlQzMlQTclQzMlQTNvJTIwZGElMjBwZWxlfGVufDB8fDB8fHww", // Nova imagem
        link: "/sistemas/tegumentar"
    },
    {
        titulo: "Sistema Reprodutivo",
        texto: "Texto do sistema reprodutivo",
        imagem: "https://images.unsplash.com/photo-1710734911956-e883682718da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVzcGVybWF0b3pvaWRlc3xlbnwwfHwwfHx8MA%3D%3D", // Nova imagem
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
