import { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function ToDo() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
    const [titulo, setTitulo] = useState("");
    const [genero, setGenero] = useState("");
    const [lançamento, setLançamento] = useState("");
    const [diretor, setDiretor] = useState("");
    const [id, setId] = useState[1];
    const [faixaEtaria, setFaixaEtaria] = useState("");
    const [link, setLink] = useState("");
    const [lista, setLista] = useState(listaLocalStorage || []);



    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            atividade: atividade,
            id: id
        }]);
        setId(id + 1);
        setAtividade("");
    };
    
    return (
        <div class="container">
            <h1>Lista de Atividades</h1>
            <form onSubmit={salvar}>
                <input type="text"
                    value={atividade}
                    onChange={(e) => { setAtividade(e.target.value) }} />
                <button>ADICIONAR</button>
            </form>
            {lista.map((ativ) =>
                <ul key={ativ.id}>
                    <li>
                        <Link to={`/detalhe/${ativ.id}`}>                  
                              <p>{ativ.atividade}</p>
                        </Link>
                        <button onClick={() => remover(ativ.id)}>Remover</button>
                    </li>
                </ul>
            )}
        </div>
    );
}