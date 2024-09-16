// aqui temos a importação do Card
import Card from "./Card";

// logo abaixo importação das imagens
import divisaoDaPelve from '../images/PartesDoCorpo/divisaoDapelve/14.png'
import femur from '../images/PartesDoCorpo/femur/10.png'
import ligamentoDoJoelho from '../images/PartesDoCorpo/ligamentosDojoelho/6.png'
import pelve from '../images/PartesDoCorpo/pelve/17.png'
import tibia from '../images/PartesDoCorpo/tibia/13.png'
import TornozeloDoPe from '../images/PartesDoCorpo/TornozeloDoPe/4.png'

function PartesDoCorpo(){
    //textos das imagens
    let textoDivisaoDaPelve = 'Ilustração detalhada da divisão \
    anatômica da pelve, mostrando as principais estruturas ósseas e suas divisões.'

    let textoFemur = 'Imagem do fêmur, o osso \
    da coxa, destacando sua estrutura robusta e essencial para o suporte do corpo.'

    let textoLigamentoDoJoelho = 'Exibição dos ligamentos principais\
     do joelho, ressaltando a conexão e suporte da articulação.'

    let textoPelve = 'Visualização da pelve completa e sua \
    configuração óssea, demonstrando a estrutura fundamental que suporta a parte inferior do tronco.'

    let textoTibia = 'Ilustração da tíbia, o osso da perna\
     localizado abaixo do joelho, evidenciando sua função e importância na locomoção.'

    let textoTornozeloDoPe = 'Imagem detalhada do tornozelo,\
     mostrando sua estrutura óssea e a articulação que conecta a perna ao pé.'



    return (
        <div className="container mt-5 mb-5">
        <div className="row justify-content-center g-1">
        <div className="col-md-4 mb-3">
            <Card 
                imagem={divisaoDaPelve}
                titulo="Divisão da Pelve"
                texto={textoDivisaoDaPelve}
            />
        </div>
        <div className="col-md-4 mb-3">
            <Card 
                imagem={femur}
                titulo="Femur"
                texto={textoFemur}
            />
        </div>
        <div className="col-md-4 mb-3">
            <Card 
                imagem={ligamentoDoJoelho}
                titulo="Ligamentos do Joelho"
                texto={textoLigamentoDoJoelho}
            />
        </div>
        <div className="col-md-4 mb-3">
            <Card 
                imagem={pelve}
                titulo="Pelve"
                texto={textoPelve}
            />
        </div>
        <div className="col-md-4 mb-3">
            <Card 
                imagem={tibia}
                titulo="Tíbia"
                texto={textoTibia}
            />
        </div>
        <div className="col-md-4 mb-3">
            <Card 
                imagem={TornozeloDoPe}
                titulo="Tornozelo do Pé"
                texto={textoTornozeloDoPe}
            />
        </div>
    </div>
</div>

    )
}

export default PartesDoCorpo

