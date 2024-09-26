import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { Outlet } from "react-router-dom";
function Inicio() {
    return (

<div>
            
            <Outlet />
        </div>

    )
}

export default Inicio;