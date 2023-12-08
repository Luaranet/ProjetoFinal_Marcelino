import { useParams } from "react-router-dom";
import CardB from "../Componentes/CardB";

export default function detalhe(){

    const { id } = useParams();
    const lista = JSON.parse( localStorage.getItem("Lista"));

    const atividade = lista.filter( (obj) => {
        if(obj.id == id) {
            return obj;
        }
        return null;
    })

    console.log( atividade[0] );

    return(
        <CardB obj ={atividade[0]} />
    );


}