import { useParams } from "react-router-dom"
import CardB from "../Componentes/CardB"

export default function detalhe(){
       const lista = JSON.parse( localStorage.getItem("Lista"))
       const {id} = useParams()

      const listaDetalhe = lista.filter( (obj) => {
          if(obj.id == id) {
              return obj;
            }
             return null
        })

      console.log( listaDetalhe[0] )

      return(
         <CardB obj ={listaDetalhe[0]} />
      )
 }