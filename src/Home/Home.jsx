import Card from '../Componentes/Card'

export default function Home(){
    const listaHome = JSON.parse(localStorage.getItem("Lista"))
    return(
        <div>
        <h1>PTAC 2 - PROJETO FINAL</h1>
         {listaHome.map((obj) => 
            
            <Card obj = {obj}/>

            )}
        </div>
        
     );
}