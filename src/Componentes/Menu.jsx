import { Link } from "react-router-dom";

export default function Menu() {
    return (
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
             <p><Link to={'/'}>Home</Link></p>
            </li>
    
            <li class="nav-item">
             <p><Link to={'/cadastro'}>Cadastrar</Link></p>
            </li>
    
            <li class="nav-item">
             <p><Link to={'/destaques'}>Destaques</Link></p>
            </li>
    
          </ul>
        </div>
      </div>
    </nav>
  );
}