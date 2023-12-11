import Card from '../Componentes/Card'
import Menu from '../Componentes/Menu'

export default function Destaques(){
    const listaDes = JSON.parse(localStorage.getItem("Lista"))

    return(

        <div>
            <Menu/>
            
            {listaDes.slice(-4).map((obj)=> 
            <Card obj ={obj} />
            )}
            
        </div>
     );
}