
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import PresentacionImg from "./img/fotopresentacion.png";
function App(){
return(
<>
<NavBar/>

<ItemListContainer titulo="Bienvenidos amantes de la ceramica" presentacion="Este nuevo concepto está creado para personas creativas y amantes de las cosas pequeñas." img={PresentacionImg}/>

</>

)
}

export default App;
