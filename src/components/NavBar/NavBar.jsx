import { CartWidget } from "./components/CartWidget";
import "./NavBar.css"
import {Link} from "react-router-dom";

export const NavBar = () => {
    return <>
        <nav className="navbar navbar-expand-lg  fixed-top">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav d-flex flex-row">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page"><Link to="/">Home</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page"><Link to="category/deco">Deco</Link></a>
                        </li>
                        <a className="navbar-brand"><Link to="/">Ceramic Lovers Club</Link></a>
                        <li className="nav-item">
                            <a className="nav-link"><Link to="/category/kitchen">Kitchen</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><Link to="/category/room">Room</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><Link to="cart"><CartWidget /></Link></a>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    </>
}
