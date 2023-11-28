import GetBooksHooks from "./hooks/GetBooksHooks";
import { NavLink } from "react-router-dom";
import "./css/GetBook.css";
import "./css/NavLinkStyle.css"
import { useState } from "react";

function GetBooks() {
    const [pesquisa, setPesquisa] = useState("");
    const { books, loading, error } = GetBooksHooks();

    if (loading) return <div className="grid-area">Carregando...</div>;
    if (error) return <div>{error}</div>;

    const Livros = (pesquisa) => {
        const livros = books.map((livro) => {
            const pesqUpperCase = pesquisa.toUpperCase()
            const tituloUpperCase = livro.title.toUpperCase()
            if (tituloUpperCase === pesqUpperCase || pesquisa === "") {
                return (
                    <NavLink to={"/books/" + livro.id} className="nav-link" key={livro.id}>
                        <div className="grid-item" key={livro.id}>
                            {livro.title}
                        </div>
                    </NavLink>
                )
            }
        })
        return livros
    }

    const GridLivros = (pesquisa) => {
        return (
            <div className="grid-container">
                {Livros(pesquisa)}
            </div>
        )
    }

    const PesquisaPorTitulo = (pesquisa, setPesquisa) => (
        <div className="pesq">
            <label htmlFor="pesquisa">Pesquisar por título: </label>
            <input id="pesquisa" type="text" value={pesquisa} onChange={(e) => setPesquisa(e.target.value)} />
        </div>
    )

    return (
        <div className="grid-area">
            {PesquisaPorTitulo(pesquisa, setPesquisa)}
            {GridLivros(pesquisa)}
        </div>
    );
}

export default GetBooks;