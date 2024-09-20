import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Error from "./pages/Error";
import { CartContext } from "./Context/CartContext";

function App() {

    return (
        <div>
        <BrowserRouter>
            <NavBar />
            <ItemListContainer/>
            <ItemDetailContainer/>
            <Routes>
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
        </div>
    );
}

export default App;
