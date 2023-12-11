import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../Componentes/Menu";
import './cadastro.css';

export default function Cadastro() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || [];
    const [genero, setGenero] = useState("");
    const [titulo, setTitulo] = useState("");
    const [lançamento, setLançamento] = useState("");
    const [diretor, setDiretor] = useState("");
    const [faixaEtaria, setFaixaEtaria] = useState("");
    const [link, setLink] = useState("");
    const [descricao, setDescricao] = useState("")
    const [lista, setLista] = useState(listaLocalStorage);
    const [id, setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);

    useEffect(() => { localStorage.setItem("Lista", JSON.stringify(lista)) }, [lista]);

    const navigate = useNavigate();

    const confirma = async (e) => {
        e.preventDefault();
        await setLista([
            ...lista,
            {
                titulo: titulo,
                diretor: diretor,
                genero: genero,
                faixaEtaria: faixaEtaria,
                lançamento: lançamento,
                descricao: descricao,
                link: link,
                id: id,
            },
        ]);

        navigate("/");
        setTitulo("");
        setDiretor("");
        setGenero("");
        setFaixaEtaria("");
        setLançamento("");
        setDescricao("");
        setLink("");
        setId(id + 1);
    };

    return (
        <div>
            <Menu />
            <div className="block">
            <form onSubmit={confirma} className="container mt-4">
                <div className="row mb-3 div-inputs">
                    <div className="col-md-6 mb-3">
                        <input
                            type="text"
                            className="form-control input1"
                            placeholder="Titulo"
                            aria-label="Titulo"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                        />
                    </div>
    
                    <div className="col-md-6 mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Diretor"
                            aria-label="Diretor"
                            value={diretor}
                            onChange={(e) => setDiretor(e.target.value)}
                        />
                    </div>
                </div>
    
                <div className="row mb-3 div-inputs">
                    <div className="col-md-6 mb-3">
                        <input
                            type="text"
                            className="form-control input1"
                            placeholder="Gênero"
                            aria-label="Gênero"
                            value={genero}
                            onChange={(e) => setGenero(e.target.value)}
                        />
                    </div>
    
                    <div className="col-md-6 mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Faixa Etaria"
                            aria-label="Faixa Etaria"
                            value={faixaEtaria}
                            onChange={(e) => setFaixaEtaria(e.target.value)}
                        />
                    </div>
                </div>
    
                <div className="row mb-3 div-inputs">
                    <div className="col-md-6 mb-3">
                        <input
                            type="text"
                            className="form-control input1"
                            placeholder="Lançamento"
                            aria-label="Lançamento"
                            value={lançamento}
                            onChange={(e) => setLançamento(e.target.value)}
                        />
                    </div>
    
                    <div className="col-md-6 mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Link"
                            aria-label="Link"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                        />
                    </div>

                </div>

                <div className="row mb-3 div-inputs">
                    <div className="col-md-6 mb-3">
                        <input
                            type="text"
                            className="form-control input1"
                            placeholder="Descrição"
                            aria-label="Descrição"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    </div>
    
                    <div className="col-md-6 mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="ID"
                            aria-label="ID"
                            value={id}
                            onChange={(e) => setId (e.target.value)}
                        />
                    </div>

                    

                    
                    <button type="submit" className="btn btn-primary div-button">Adicionar</button> 
                </div>
    
    
               
            </form>
        </div>
        </div>
    );
}