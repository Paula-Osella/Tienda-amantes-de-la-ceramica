import {Link} from "react-router-dom";
import "../pages/Error.css";
function Error(){

        return (
            <main className="cuerpo">
                <h1 className="Titulo-Error">404</h1>
                <p className="parrafo-error">Página no encontrada</p>
                <button className="Boton-Volver">
                    <Link to="/">Volver</Link>
                </button>
            </main>
        );

}

export default Error;
