
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import PresentacionImg from "./img/fotopresentacion.png";

//rutas
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Inicio from "./pages/Inicio";
import Deco from "./pages/Deco";
import Cocina from "./pages/Cocina";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Error from "./pages/Error";

function App(){
return(
    <>
<BrowserRouter>
<NavBar>
<Routes>
    
<Route path = "/" element={<Inicio/>}/>
<Route path = "deco" element={<Deco/>}/>
<Route path = "cocina" element={<Cocina/>}/>
<Route path = "nosotros" element={<Nosotros/>}/>
<Route path = "contacto" element={<Contacto/>}/>
<Route path= "*" element={<Error/>}/>
</Routes>
</NavBar>
<footer></footer>
</BrowserRouter>
<ItemListContainer titulo="Bienvenidos amantes de la ceramica" presentacion="Este nuevo concepto está creado para personas creativas y amantes de las cosas pequeñas." img={PresentacionImg}/>
</>
)
}

export default App;
