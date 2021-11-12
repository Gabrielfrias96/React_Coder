import "./Header-style.scss"
import { Button , InputBase  } from '@mui/material';

export function Header(){
    return (
        <div className="header">
            <div className="serch">
            <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Buscar"
                    inputProps={{ 'aria-label': 'Buscar' }}
                />
            </div>
            <div className="title">
                <h1>Electron</h1>
            </div>
            <div className="session">
                <Button  variant="outlined">Iniciar Sesion</Button>
                <Button variant="outlined">Registrarme</Button>
            </div>
        </div>
    )


}