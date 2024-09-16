// aqui temos a importação do Card
import Card from "./Card";

// logo abaixo importação das imagens


function PartesDoCorpo(){
    return (
        <div className="container mt-5 mb-5">
        <div className="row justify-content-center g-1">
        <div className="col-md-4 mb-3">
            <Card 
                imagem="https://cdn.pixabay.com/photo/2022/11/02/14/47/bird-7565103_640.jpg"
                titulo="Meu título"
                texto="meu texto gradão"
            />
        </div>
        <div className="col-md-4 mb-3">
            <Card 
                imagem="https://cdn.pixabay.com/photo/2022/11/02/14/47/bird-7565103_640.jpg"
                titulo="Meu título"
                texto="meu texto gradão"
            />
        </div>
        <div className="col-md-4 mb-3">
            <Card 
                imagem="https://cdn.pixabay.com/photo/2022/11/02/14/47/bird-7565103_640.jpg"
                titulo="Meu título"
                texto="meu texto gradão"
            />
        </div>
        <div className="col-md-4 mb-3">
            <Card 
                imagem="https://cdn.pixabay.com/photo/2022/11/02/14/47/bird-7565103_640.jpg"
                titulo="Meu título"
                texto="meu texto gradão"
            />
        </div>
        <div className="col-md-4 mb-3">
            <Card 
                imagem="https://cdn.pixabay.com/photo/2022/11/02/14/47/bird-7565103_640.jpg"
                titulo="Meu título"
                texto="meu texto gradão"
            />
        </div>
        <div className="col-md-4 mb-3">
            <Card 
                imagem="https://cdn.pixabay.com/photo/2022/11/02/14/47/bird-7565103_640.jpg"
                titulo="Meu título"
                texto="meu texto gradão"
            />
        </div>
    </div>
</div>

    )
}

export default PartesDoCorpo

