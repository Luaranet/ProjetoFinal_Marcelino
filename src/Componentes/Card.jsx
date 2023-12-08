export default function Card({obj}){
    return(
        <div className="lista">

                    <iframe
                        width="800"
                        height="480"
                        src={`https://www.youtube.com/embed/${obj.link.slice(17)}`}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>    
                    </iframe> 

                    <p>{obj.titulo}</p>
                    <p>{obj.genero}</p>
                    <p>{obj.lançamento}</p>
                    <p>{obj.diretor}</p>
                    <p>{obj.id}</p>
                    <p>{obj.faixaEtaria}</p>

            </div>  
            
    )
}