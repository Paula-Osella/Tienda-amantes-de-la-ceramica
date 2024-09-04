import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

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
                <Route idex element={<Inicio />}>
                    <Route path="/" element={<ItemListContainer />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="*" element={<Error />} />
                </Route>
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;