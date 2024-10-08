function ImagemDoCentro({link,nome}){
    return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '90vh' }}>
        <img 
            src={link} 
            alt={nome}
            className="img-fluid d-block" 
            style={{ height: '80%',width:'80%', objectFit: 'cover' }}
        />
    </div>
    )
}

export default ImagemDoCentro;