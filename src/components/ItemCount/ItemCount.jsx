import "../ItemCount/ItemCount.css";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial || 0); // Inicializa con el valor `initial`

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="Contador">
            <div className="Controles">
                <button className="Button" onClick={decrement}>-</button>
                <h3 className="Resultado">{quantity}</h3>
                <button className="Button" onClick={increment}>+</button>
            </div>
            <button 
                className="Button-carrito" 
                onClick={() => onAdd(quantity)} 
                disabled={quantity === 0 || quantity > stock}
            >
                Agregar al carrito
            </button> 
        </div>
    );
};

export default ItemCount;

