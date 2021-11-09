import "./Header-style.scss"
import { Button } from '@mui/material';

export function Header(){
    return (
        <div className="header">
            <div className="serch">
                <input className="inputSerch" type="text" placeholder="Buscar" />
            </div>
            <div className="title">
                <h1>Electron</h1>
            </div>
            <div className="session">
                <Button variant="outlined">Iniciar Sesion</Button>
                <Button variant="outlined">Registrarme</Button>
            </div>
        </div>
    )


}