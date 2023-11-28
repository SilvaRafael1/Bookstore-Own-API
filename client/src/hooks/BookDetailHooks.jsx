import { useEffect, useState } from "react";
import client from "../api/api";

function BookDetailHooks(id) {
    const [book, setBook] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const bookData = async () => {
        try {
            const res = await client.get(`/${id}`);
            setLoading(false);
            if (res.data) {
                setBook(res.data);
            } else {
                setBook([]);
            }
        } catch (err) {
            setError("Lamento, ocorreu um erro ou o livro não existe!");
            setBook([])
            setLoading(false)
        }
    };

    useEffect(() => {
        setLoading(true)
        setError(null)
        bookData();
    }, [])

    return { book, loading, error }
}

export default BookDetailHooks;
