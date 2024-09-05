import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Contacto from "./pages/Contacto";
import Error from "./pages/Error";
import { getProducts } from "./components/ItemListContainer/asyncMock"; // Asegúrate de importar esta función

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(response => setProducts(response));
    }, []);

    const handleAddToCart = (productId, quantity) => {
        setProducts(prevProducts => 
            prevProducts.map(product => 
                product.id === productId 
                    ? { ...product, stock: product.stock - quantity } 
                    : product
            )
        );
        console.log(`Producto ${productId} agregado al carrito con cantidad ${quantity}`);
    };

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer products={products} onAddToCart={handleAddToCart} />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/product/:id" element={<ItemDetailContainer onAddToCart={handleAddToCart} />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
