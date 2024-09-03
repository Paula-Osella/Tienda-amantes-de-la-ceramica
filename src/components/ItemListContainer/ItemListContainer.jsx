import { Link } from "react-router-dom";
import ProductosData from "../ProductosData/ProductosData";
import '../ProductosData/ProductosData.css';
import { useState } from "react";

function ItemListContainer() {
    // Inicializa el estado con la cantidad inicial de 0 para cada producto
    const [productQuantities, setProductQuantities] = useState(
        ProductosData.reduce((acc, product) => {
            acc[product.id] = 0; // Inicializa la cantidad en 0 para cada producto
            return acc;
        }, {})
    );

    // Manejador para incrementar la cantidad del producto
    const handleIncrease = (id) => {
        setProductQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: prevQuantities[id] + 1
        }));
    };

    // Manejador para decrementar la cantidad del producto
    const handleDecrease = (id) => {
        setProductQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: Math.max(0, prevQuantities[id] - 1) // Evita que la cantidad sea negativa
        }));
    };

    return (
        <main>
            <h1 className="TituloProducto">Productos</h1>
            <div className="item-list-container">
                {ProductosData.map(product => (
                    <div key={product.id} className="product">
                        <img src={product.src} alt={product.title} className="product-image" />
                        <h3 className="product-title">{product.title}</h3>
                        <p className="product-marca">{product.marca}</p>

                        <button className="boton-compra" onClick={() => handleIncrease(product.id)}><p>+</p></button>
                        
                        <button className="boton-compra" onClick={() => handleDecrease(product.id)}><p>-</p></button>
                        <span><p> {productQuantities[product.id]}</p></span>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default ItemListContainer;