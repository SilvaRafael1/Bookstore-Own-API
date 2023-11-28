import client from "./api/api";

function BookDeleteButton({ id }) {
    
    const handleDelete = async () => {
        try {
            await client.delete(`/${id}`)
            console.log(`Livro com o ID ${id} deletado com sucesso!`)
            alert(`Livro com o ID ${id} deletado com sucesso!`)
            window.location.href = "http://127.0.0.1:5173";
        } catch (err) {
            console.error('Erro ao deletar livro: ', err)
        }
    }

    return (
        <div>
            <button onClick={handleDelete}>Deletar</button>
        </div>
    )
}

export default BookDeleteButton;