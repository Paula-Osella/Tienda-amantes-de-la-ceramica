import { useContext } from "react";
import CartContext from "../Context/CartContext";
import { CartWidget } from "./components/CartWidget";
import "./NavBar.css" // Asegúrate de que este CSS esté en la misma carpeta que NavBar.jsx
import { Link } from "react-router-dom";


export const NavBar = () => {
    const { cart } = useContext(CartContext)

    return (
        // Eliminamos 'fixed-top' de Bootstrap si lo quieres flotante y le damos un color más consistente.
        // La clase 'custom-navbar' nos permitirá aplicar nuestros estilos.
        <nav className="navbar navbar-expand-lg custom-navbar">
            <div className="container-fluid custom-navbar-container">
                {/* Brand/Logo a la izquierda, no en el medio de la lista */}
                <Link className="navbar-brand custom-navbar-brand" to="/">Ceramic Lovers Club</Link>

                <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    {/* Puedes poner un icono de hamburguesa aquí si no lo tienes */}
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent"> {/* 'justify-content-end' para alinear a la derecha en desktop */}
                    <ul className="navbar-nav mb-2 mb-lg-0 custom-navbar-nav"> {/* Quita d-flex flex-row aquí, Bootstrap ya lo maneja */}
                        <li className="nav-item">
                            <Link className="nav-link custom-nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link custom-nav-link" to="/category/deco">Deco</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link custom-nav-link" to="/category/kitchen">Kitchen</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link custom-nav-link" to="/category/room">Room</Link>
                        </li>
                        <li className="nav-item custom-cart-item"> {/* Clase específica para el carrito */}
                            <Link className="nav-link custom-nav-link" to="/cart">
                                <CartWidget />
                                <span className="cart-item-count">{cart.length}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}