import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./css/NavLinkStyle.css"


function NavBar() {
    return (
        <List component="nav">
            <ListItem component="div">
                <ListItemText inset>
                    <Typography color="inherit" variant="h6"><NavLink to={"/"} className="nav-link"><i className="fa-solid fa-house"></i> Home</NavLink></Typography>
                </ListItemText>
                <ListItemText inset>
                    <Typography color="inherit" variant="h6"><NavLink to={"/createBook/"} className="nav-link"><i className="fa-solid fa-plus"></i> Criar Livro</NavLink></Typography>
                </ListItemText>
            </ListItem>
        </List>
    )
}

export default NavBar;