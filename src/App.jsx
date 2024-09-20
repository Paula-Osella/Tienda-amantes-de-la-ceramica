import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Error from "./pages/Error";
import Contacto from "./pages/Contacto";
import { getProducts } from "./components/ItemListContainer/asyncMock"; 
import { CartContext } from "./Context/CartContext";

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(response => setProducts(response));
    }, []);

    return (
        <div>
            <CartContext.Provider value={{products, setProducts}}>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer products={products} />} />
                <Route path="/product/:id" element={<ItemDetailContainer products={products} setProducts={setProducts} />} />
                <Route path="Contacto" element={<Contacto />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
        </CartContext.Provider>
        </div>
    );
}

export default App;
