import React, { useState } from 'react';
import "../ItemDetailContainer/ItemQuantitySelector.css";

const ItemQuantitySelector = ({ onQuantityChange }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
        onQuantityChange(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
            onQuantityChange(quantity - 1);
        }
    };

    return (
        <div className="item-quantity-selector">
            <button onClick={handleDecrement} className='quantity-button'>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrement}className='quantity-button'>+</button>
        </div>
    );
};

export default ItemQuantitySelector;