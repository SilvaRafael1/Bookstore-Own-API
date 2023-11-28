import { BrowserRouter, Route, Routes } from "react-router-dom"
import GetBooks from "./GetBooks"
import CreateBook from "./CreateBook"
import BookDetail from "./BookDetail"
import UpdateBook from "./UpdateBook"
import { AppBar, Toolbar, Typography } from "@mui/material"
import NavBar from "./NavBar"
import "./css/App.css"

function App() {
    return (
        <BrowserRouter>
            <div>
                <AppBar color="primary" position="static">
                    <Toolbar>
                        <Typography variant="h4" color="inherit"><i className="fa-solid fa-book"></i> Livraria IFRS-BG</Typography>
                        <NavBar />
                    </Toolbar>
                </AppBar>

                <div className="routes">
                    <Routes>
                        <Route exact path="/" Component={GetBooks} />
                        <Route path="/books/:id" Component={BookDetail} />
                        <Route path="/updateBook/:id" Component={UpdateBook} />
                        <Route path="/createBook" Component={CreateBook} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;