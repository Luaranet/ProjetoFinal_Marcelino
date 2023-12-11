import Card from '../Componentes/Card'
import Menu from '../Componentes/Menu'
import "./home.css"


export default function Home(){
    const listaHome = JSON.parse(localStorage.getItem("Lista"))
    return(
        <div className='content'>
            <Menu/>
        <div className='layoutHome'>

        
        
         {listaHome.map( (obj)=> 
         <Card obj= {obj}/> )}
        </div>
        </div>

    )
 }