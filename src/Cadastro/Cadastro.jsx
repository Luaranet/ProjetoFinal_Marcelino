import  { useEffect, useState } from "react"

export default function Cadastro() {
const [titulo, setTitulo] = useState("");
    const [genero, setGenero] = useState("");
    const [lançamento, setLançamento] = useState("");
    const [diretor, setDiretor] = useState("");
    const [id, setId] = useState(1);
    const [faixaEtaria, setFaixaEtaria] = useState("");
    const [link, setLink] = useState("");
    const [lista, setLista] = useState([]);

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
                lista: lista
            }])

            setTitulo("")
            setGenero("")
            setLançamento("")
            setDiretor("")
            setId("")
            setFaixaEtaria("")
            setLink("")
            setLista("")
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



                    </form>
                </div>
            </div>
        );

    }