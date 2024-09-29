
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Error from "./pages/Error";

import Cart from "./components/Cart/Cart";
import './App.css';
import CartContextProvider from "./components/Context/CartContextProvider";
function App() {
    return (

        <div className="wrapper">
            <CartContextProvider>
                <BrowserRouter>
                    <NavBar />
                    <div className="main-content">
                        <Routes>
                            <Route path="/" element={<ItemListContainer />} />
                            <Route path="/category/:categoryId" element={<ItemListContainer />} />
                            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
                            <Route path="*" element={<Error />} />
                            <Route path="/cart" element={<Cart />} />
                        </Routes>

                    </div>
                    <Footer />
                </BrowserRouter>
            </CartContextProvider>
        </div>
    );
}

export default App;
