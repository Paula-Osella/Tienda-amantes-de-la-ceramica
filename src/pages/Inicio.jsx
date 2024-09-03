import { NavBar } from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer"
function Inicio() {
    return (
        <div>
            <NavBar/>

                <Outlet />
        </div>
    )
}

export default Inicio;