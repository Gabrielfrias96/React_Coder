import "./Header-style.scss"

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
                <p>Iniciar Secion | Registrarme</p>
            </div>
        </div>
    )


}