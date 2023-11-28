import { NavLink, useParams } from "react-router-dom";
import BookDetailHooks from "./hooks/BookDetailHooks";
import BookDelete from "./BookDelete";
import "./css/BookDetail.css"
import "./css/NavLinkStyle.css"

function BookDetail() {
    const { id } = useParams()
    const { book, loading, error } = BookDetailHooks(id);

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="text-area">
            <div className="text">
                <div className="book">
                    <p className="titulo">Título: {book.title} <br /></p>
                    <p className="descricao">Descrição: {book.description} <br /></p>
                    <p className="resumo">Excerto: {book.excerpt} <br /> </p>
                    <p className="num">Número de Páginas: {book.pageCount}</p>
                </div>
                <div className="btns">
                    <NavLink to={"/updateBook/" + book.id} className="nav-link"><button>Atualizar</button></NavLink>
                    <BookDelete id={book.id} />
                </div>
            </div>
        </div>
    )
}

export default BookDetail;