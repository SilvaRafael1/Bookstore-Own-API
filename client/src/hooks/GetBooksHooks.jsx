import { useEffect, useState } from "react";
import client from "../api/api";

function GetBooksComponents() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const listBooks = async () => {
        try {
            const res = await client.get();
            setLoading(false);
            if (res.data) {
                setBooks(res.data);
            } else {
                setBooks([]);
            }
        } catch (err) {
            setError("Lamento, ocorreu um erro!");
            setBooks([])
            setLoading(false)
        }
    };

    useEffect(() => {
        setLoading(true)
        setError(null)
        listBooks();
    }, [])

    return { books, loading, error }
}

export default GetBooksComponents;
