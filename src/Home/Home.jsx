import Card from '../Componentes/Card'
import Menu from '../Componentes/Menu'
import "./home.css"


export default function Home(){
    const listaHome = JSON.parse(localStorage.getItem("Lista"))
    return(
        <div>

        <Menu/>
        
         {listaHome.map( (obj)=> 
         <Card obj= {obj}/> )}
        </div>


    )
 }