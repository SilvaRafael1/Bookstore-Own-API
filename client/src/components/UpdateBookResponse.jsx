function UpdateBookResponse(response) {
    const newObj = {
        title: response.title,
        description: response.description,
        pageCount: response.pageCount,
        excerpt: response.excerpt
    }
    return (
        console.log("Livro atualizado com sucesso:", newObj)
    )
}

export default UpdateBookResponse;