import  { useEffect, useState } from "react"

export default function Cadastro() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || []
    const [titulo, setTitulo] = useState("");
    const [genero, setGenero] = useState("");
    const [lançamento, setLançamento] = useState("");
    const [diretor, setDiretor] = useState("");
    const [id, setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);
    const [faixaEtaria, setFaixaEtaria] = useState("");
    const [link, setLink] = useState("");
    const [lista, setLista] = useState(listaLocalStorage);

    useEffect(() => { localStorage.setItem ("Lista", JSON.stringify(lista))},   [lista])

    const salvar = (e) => {
        e.preventDefault()
            setLista([...lista,{
                titulo: titulo,
                genero: genero, 
                lançamento: lançamento,
                diretor: diretor, 
                id: id,
                faixaEtaria: faixaEtaria,
                link: link,
            }])

            setTitulo("")
            setGenero("")
            setLançamento("")
            setDiretor("")
            setId(id + 1)
            setFaixaEtaria("")
            setLink("")
        }

        return(
            <div className="layout">
                <div className="botao">
                    <form className="form"  onSubmit={salvar}>

                        <h2>Título</h2>
                        <input value={titulo}
                            onChange={(e) => setTitulo(e.target.value)} />

                        <h2>Genêro</h2>
                        <input value={genero}   
                            onChange={(e) => setGenero(e.target.value)} />

                        <h2>Lançamento</h2>
                        <input value={lançamento}
                            onChange={(e) => setLançamento(e.target.value)} />
                            
                        <h2>Diretor</h2>
                        <input value={diretor}
                            onChange={(e) => setDiretor(e.target.value)} />

                        <h2>ID</h2>
                        <input value={id}
                            onChange={(e) => setId(e.target.value)} />

                        <h2>Faixa Etaria</h2>
                        <input value={faixaEtaria}
                            onChange={(e) => setFaixaEtaria(e.target.value)} />

                        <h2>Link</h2>
                        <input value={link}
                            onChange={(e) => setLink(e.target.value)} />

                        <button>Adicionar</button>

                    </form>
                </div>

            {lista.map((obj) => 
            <div className="lista">
                <p>{obj.titulo}</p>
                <p>{obj.genero}</p>
                <p>{obj.lançamento}</p>
                <p>{obj.diretor}</p>
                <p>{obj.id}</p>
                <p>{obj.faixaEtaria}</p>

                    <iframe
                        width="800"
                        height="480"
                        src={`https://www.youtube.com/embed/${obj.link.slice(17)}`}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>    
                    </iframe> 
            </div>  
            
            )}

            </div>
        );

    }