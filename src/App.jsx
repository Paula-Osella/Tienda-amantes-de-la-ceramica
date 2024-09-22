import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Error from "./pages/Error";
import { CartContext } from "./Context/CartContext";
import { CartWidget } from "./components/NavBar/components/CartWidget";

function App() {

    return (
        <div>
        <BrowserRouter>
            <NavBar />            
            <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:categoryId" element={<ItemListContainer/>} />
            <Route path="/detalle/:id" element={<ItemDetailContainer/>} />
            <Route path="*" element={<Error />} />
                <Route path="/cart" element={<CartWidget/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
        </div>
    );
}

export default App;
