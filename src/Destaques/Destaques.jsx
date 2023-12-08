import Card from '../Componentes/Card'

export default function Destaques(){

    const listaDes = JSON.parse(localStorage.getItem("Lista"))

    return(

        <div>
         {listaDes.slice(-4).map((obj) => 

         <Card obj = {obj}/>
            
            
            )}
            
        </div>
     );
}