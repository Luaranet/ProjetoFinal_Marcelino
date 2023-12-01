import { Link } from "react-router-dom"
import "./styles/card.css"

function Cards({ listaVideos }) {

    return (

        listaVideos.map((videos) => 
        <div className="card">
            <iframe
            width="853"
            height="480"
            src={
                "https://youtu.be/F3_rbHWJZks?si=6rqPDS8u_ylTNCRW" + video.url.slice(17) }
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media"
                ></iframe>
        </div>)
    )
}



export default function Card({atividade}){
    return(
        <div>
            <h1>{atividade.atividade} </h1>
        </div>
    );
}