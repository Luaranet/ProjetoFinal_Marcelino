import React from 'react';
import '../styles/cardB.css';

export default function CardB({ obj }) {
  return (
    <div className="card-container">
       <div className="text-container">
        <p>Título: {obj.titulo}</p>
        <p>Diretor: {obj.diretor} </p>
        <p>Faixa Etária: {obj.faixaEtaria} Anos</p>
        <p>Lançamento: {obj.lancamento}</p>
        <p>Gênero: {obj.genero}</p>
        <p>Descrição: {obj.descricao}</p>
      </div>
      
      <div className="video-container">
        <iframe
          width="800"
          height="480"
          src={`https://www.youtube.com/embed/${obj.link.slice(17)}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

     
    </div>
  );
}
