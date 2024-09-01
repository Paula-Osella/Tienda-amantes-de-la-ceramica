import { Link } from "react-router-dom"
import ProductosData from "../components/ProductosData/ProductosData";
import '../components/ProductosData/ProductosData.css';


function Productos() {
    return (
        <main>
            <h1 className="TituloProducto">Productos</h1>
            <div className="item-list-container">
                {ProductosData.map(product => (
                    <div key={product.id} className="product">
                        <img src={product.src} alt={product.title} className="product-image" />
                        <h3 className="product-title">{product.title}</h3>
                        <p className="product-marca">{product.marca}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Productos;