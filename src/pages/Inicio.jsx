import { NavBar } from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

function Inicio() {
    return (
        <div>
            <NavBar/>

                <Outlet />
                <footer>footer</footer>

        </div>
    )
}

export default Inicio;