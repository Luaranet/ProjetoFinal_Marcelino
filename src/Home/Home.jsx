import Card from '../Componentes/Card'
import Menu from '../Componentes/Menu'


export default function Home(){
    const listaHome = JSON.parse(localStorage.getItem("Lista"))
    return(
        <div>

        <Menu />
        <h1>PTAC 2 - PROJETO FINAL</h1>
        
         {listaHome.map( (obj)=> 
         <Card obj= {obj}/> )}
        </div>
    )
 }