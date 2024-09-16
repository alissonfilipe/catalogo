function Card({ imagem, titulo, texto }) {
    return (
        <div className="card w-75" style={{ width: '18rem' }}>
            <img src={imagem} className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{texto}</p>
                <a href="#" className="btn btn-primary">Visitar</a>
            </div>
        </div>
    );
}

export default Card;
