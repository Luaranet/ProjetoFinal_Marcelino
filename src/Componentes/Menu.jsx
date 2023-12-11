import { Link } from "react-router-dom";
  import "../styles/menu.css"

export default function Menu() {
    return (

      <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse  justify-content-center  " id="navbarNav">
      <ul class="navbar-nav">

            <li class="nav-item">
           
            <Link to={'/'}>
              <p> <img src="../imagens/home.png"></img>Home</p>
            </Link>
            </li>


            <li class="nav-item">
           
           <Link to={'/cadastro'}>
             <p> <img src="../imagens/cadastrar.png"></img>Cadastrar</p>
           </Link>
           </li>

           <li class="nav-item">
           
            <Link to={'/destaques'}>
              <p> <img src="../imagens/destaque.png"></img>Destaques</p>
            </Link>
            </li>


      </ul>
    </div>
  </div>
</nav>


  );
}