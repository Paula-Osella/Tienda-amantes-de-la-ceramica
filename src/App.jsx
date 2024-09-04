import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "./App.css";

// Rutas
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Error from "./pages/Error";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="*" element={<Error />} />
            </Routes>
            
            <ItemListContainer greeting="Productos" /> {/* Agrega la prop greeting */}
            <ItemDetailContainer/>
            <ItemCount initial={0} stock={10} onAdd={(quantity) => console.log("Cantidad agregada", quantity)} />
            <Footer />
        </BrowserRouter>
    );
}

export default App;