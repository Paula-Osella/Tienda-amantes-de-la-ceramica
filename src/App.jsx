
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import PresentacionImg from "./img/fotopresentacion.png";
import "./App.css"
//rutas
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import Combos from "./pages/Combos";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Error from "./pages/Error";

function App(){
return(
    <>
<BrowserRouter>
<Routes>
<Route path = "/" element={<Inicio/>}>
<Route path = "/" element={<ItemListContainer/>}/>
<Route path = "productos" element={<Productos/>}/>
<Route path = "combos" element={<Combos/>}/>
<Route path = "nosotros" element={<Nosotros/>}/>
<Route path = "contacto" element={<Contacto/>}/>
<Route path= "*" element={<Error/>}/>
</Route>
</Routes>
<footer></footer>
</BrowserRouter>
</>
)
}

export default App;
