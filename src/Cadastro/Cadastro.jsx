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
            <h1>Ola</h1>
        );

    }