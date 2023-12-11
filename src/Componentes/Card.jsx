import { Link } from "react-router-dom";
import "../styles/card.css"; // Importe o arquivo CSS para estilos personalizados se necessário

export default function Card({ obj }) {
  return (
    <div className="card">
      <div className="card__video">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${obj.link.slice(17)}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          title={obj.titulo}
        ></iframe>
      </div>
      <div className="card__info">
        <p className="card__title">{obj.titulo}</p>
        <p className="card__age">{obj.faixaEtaria}</p>
        <Link to={`/detalhe/${obj.id}`}>
          <button className="card__button">Saiba Mais</button>
        </Link>
      </div>
    </div>
  );
}
