import Card from '../Componentes/Card'
import Menu from '../Componentes/Menu'
import "./destaques.css"

export default function Destaques(){
    const listaDes = JSON.parse(localStorage.getItem("Lista"))

    return(
        <div className='content-destaques'>
            <Menu/>
            <div className='layout-destaques'>
                
                
                {listaDes.slice(-4).map((obj)=> 
                <Card obj ={obj} />
                )}
                
            </div>
        </div>
     );
}