import  { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Menu from "../Componentes/Menu";

export default function Cadastro() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || []
    const [genero, setGenero] = useState("");
    const [titulo, setTitulo] = useState("");
    const [lançamento, setLançamento] = useState("");
    const [diretor, setDiretor] = useState("");
    const [faixaEtaria, setFaixaEtaria] = useState("");
    const [link, setLink] = useState("");
    const [lista, setLista] = useState(listaLocalStorage);
    const [id, setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);

    useEffect(() => { localStorage.setItem ("Lista", JSON.stringify(lista))},   [lista])

    const navegate = useNavigate()

    const confirma = async (e) => {
        e.preventDefault()
           await setLista([...lista,{
                titulo: titulo,
                diretor: diretor, 
                genero: genero, 
                faixaEtaria: faixaEtaria,
                lançamento: lançamento,
                link: link,
                id: id,
            }]);


            navegate("/")
            setTitulo("")
            setDiretor("")
            setGenero("")
            setFaixaEtaria("")
            setLançamento("")
            setLink("")
            setId(id + 1)
        };


        return(
           <div className="layout">
            <Menu/>
            <div className="botao">

                <form className="form"  onSubmit={confirma}>

                        <h2>Título</h2>
                        <input value={titulo} onChange={(e) => setTitulo(e.target.value)}/>


                        <h2>Diretor</h2>
                        <input value={diretor} onChange={(e) => setDiretor(e.target.value)}/>


                        <h2>Genêro</h2>
                        <input value={genero} onChange={(e) => setGenero(e.target.value)}/>


                        <h2>Faixa Etaria</h2>
                        <input value={faixaEtaria} onChange={(e) => setFaixaEtaria(e.target.value)}/>


                        <h2>Lançamento</h2>
                        <input value={lançamento} onChange={(e) => setLançamento(e.target.value)}/>
                            
                        
                        <h2>ID</h2>
                        <input value={id} onChange={(e) => setId(e.target.value)}/>


                        <h2>Link</h2>
                        <input value={link} onChange={(e) => setLink(e.target.value)} />

                       
                    <button>Adicionar</button>

                    </form>
                </div>
            </div>
          );

    };