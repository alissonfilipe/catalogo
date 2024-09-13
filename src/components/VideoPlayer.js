// Componente para exibir vídeos
function VideoPlayer() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '40px', }}>
            <iframe
                style={{ width: '50%', maxWidth: '900px', minWidth: '30%' }}
                height="400"
                src="https://www.youtube.com/embed/pny-EaqDPVM"
                title="Os ossos para crianças | Sistema Ósseo | Corpo humano para crianças"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    )
}


export default VideoPlayer