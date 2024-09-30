
import { useContext } from "react";
import CartContext from "../Context/CartContext";
import { CartWidget } from "./components/CartWidget";
import "./NavBar.css"
import { Link } from "react-router-dom";


export const NavBar = () => {
    const { cart } = useContext(CartContext)

    return (
        <nav className="navbar navbar-expand-lg  fixed-top">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav d-flex flex-row">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/deco">Deco</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navbar-brand" to="/">Ceramic Lovers Club</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/kitchen">Kitchen</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/room">Room</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">
                                <CartWidget />
                                <span>{cart.length}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
