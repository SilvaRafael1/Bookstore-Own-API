import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import GetBooksHooks from "./hooks/GetBooksHooks";
import client from "./api/api";
import "./css/Form.css"
import { Typography } from "@mui/material";

function CreateBook() {
    const handleSubmit = (data) => client.post("", data).then(() => {
        console.log("Livro criado com sucesso: ", data)
        alert("Livro criado com sucesso! Para mais detalhes consulte o log")
    }).catch((err) => console.log(err));

    const { books } = GetBooksHooks();

    const validationSchema = Yup.object().shape({
        id: Yup.number().positive().required().integer(),
        title: Yup.string("Este campo deve ser preenchido com texto").required("Você deve inserir um titulo"),
        description: Yup.string("Este campo deve ser preenchido com texto").required("Você deve inserir uma descrição"),
        pageCount: Yup.number("Este campo deve ser preenchido com números inteiros").positive("Número deve ser positivo").required("Você deve inserir a quantidade de páginas").integer(),
        excerpt: Yup.string("Este campo deve ser preenchido com texto").required("Você deve inserir um excerto"),
        publishDate: Yup.date().default(() => new Date()),
    });

    const initialValues = {
        id: 0,
        title: "",
        description: "",
        pageCount: 0,
        excerpt: "",
        publishDate: new Date()
    }

    const lastId = books.length + 1
    initialValues.id = lastId

    return (
        <div className="form-area">
            <div className="form">
                <Typography variant="h4">
                    Formulário de Criação de Livro
                </Typography>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {({ errors, touched, resetForm }) => (
                        <Form>
                            <div className="form-group">
                                <label htmlFor="title">Título: </label>
                                <Field name="title" id="title" type="text" className={'form-control' + (errors.title && touched.title ? 'is-invalid' : '')} />
                                <ErrorMessage name="title" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Descrição: </label>
                                <Field name="description" id="description" type="text" className={'form-control' + (errors.description && touched.description ? 'is-invalid' : '')} />
                                <ErrorMessage name="description" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="excerpt">Excerto: </label>
                                <Field name="excerpt" id="excerpt" type="text" className={'form-control' + (errors.excerpt && touched.excerpt ? 'is-invalid' : '')} />
                                <ErrorMessage name="excerpt" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pageCount">Número de Páginas: </label>
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

export default CreateBook;
