import { Link } from "react-router-dom";
import "../styles/card.css";

export default function Card({ obj }) {
  return (
    <div className="card">
      <div className="card-video">
        <iframe
          width="200"
          height="200"
          src={`https://www.youtube.com/embed/${obj.link.slice(17)}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          title={obj.titulo}
        ></iframe>
      </div>
      <div className="card-info">
        <h1 className="card-title">{obj.titulo}</h1>
        <p className="card-age">{obj.faixaEtaria} Anos</p>
        <Link to={`/detalhe/${obj.id}`}>
          <button className="card-button">Saiba Mais</button>
        </Link>
      </div>
    </div>
  );
}
