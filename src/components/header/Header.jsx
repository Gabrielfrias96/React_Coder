import "./Header-style.scss"
import { Button , InputBase, Typography } from '@mui/material';
import { Link } from "react-router-dom"

export function Header(){
    return (
        <div className="header">
            <div className="serch">
            <InputBase
                    sx={{ ml: 1, flex: 1, backgroundColor:"white", borderRadius:"5px"}}
                    placeholder="Buscar"
                    inputProps={{ 'aria-label': 'Buscar' }}
                />
            </div>
            <div className="title">
                <Link to="/">
                    <Typography variant="h4" component="h1">
                        Electron
                    </Typography>
                </Link>
            </div>
            <div className="session">
                <Button className="btn-sesion" variant="contained" disableElevation>Iniciar Sesion</Button>
                <Button variant="contained" disableElevation>Registrarme</Button>
            </div>
        </div>
    )


}