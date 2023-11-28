import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import client from "./api/api";
import { useParams } from "react-router-dom";
import BookDetailHooks from "./hooks/BookDetailHooks";
import UpdateBookResponse from "./components/UpdateBookResponse";
import "./css/Form.css"
import { Typography } from "@mui/material";

function UpdateBook() {
    const { id } = useParams()
    const { book, loading, error } = BookDetailHooks(id);

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>{error}</div>;

    const handleSubmit = (data) => client.put(`/${id}`, data).then((responseData) => {
        UpdateBookResponse(responseData.data)
        alert("Livro atualizado com sucesso!")
    }).catch((err) => console.log(err));

    const validationSchema = Yup.object().shape({
        title: Yup.string("Este campo deve ser preenchido com texto"),
        description: Yup.string("Este campo deve ser preenchido com texto"),
        pageCount: Yup.number("Este campo deve ser preenchido com números inteiros").positive("Número deve ser positivo").integer(),
        excerpt: Yup.string("Este campo deve ser preenchido com texto")
    });

    const initialValues = {
        title: book.title,
        description: book.description,
        pageCount: book.pageCount,
        excerpt: book.excerpt
    }

    return (
        <div className="form-area">
            <div className="form">
                <Typography variant="h4">
                    Formulário de Atualização de Livro
                </Typography>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {({ errors, touched, resetForm }) => (
                        <Form>
                            <div className="form-group">
                                <label htmlFor="title">Título</label>
                                <Field name="title" id="title" type="text" className={'form-control' + (errors.title && touched.title ? 'is-invalid' : '')} />
                                <ErrorMessage name="title" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Descrição</label>
                                <Field name="description" id="description" type="text" className={'form-control' + (errors.description && touched.description ? 'is-invalid' : '')} />
                                <ErrorMessage name="description" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="excerpt">Excerto</label>
                                <Field name="excerpt" id="excerpt" type="text" className={'form-control' + (errors.excerpt && touched.excerpt ? 'is-invalid' : '')} />
                                <ErrorMessage name="excerpt" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pageCount">Número de Páginas</label>
                                <Field name="pageCount" id="pageCount" type="number" className={'form-control' + (errors.pageCount && touched.pageCount ? 'is-invalid' : '')} />
                                <ErrorMessage name="pageCount" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group" id="btns">
                                <button type="submit">Enviar</button>
                                <button type="button" onClick={resetForm}>Limpar</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default UpdateBook;