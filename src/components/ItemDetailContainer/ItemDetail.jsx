import React, { useState } from 'react';
import ItemQuantitySelector from '../ItemDetailContainer/ItemQuantitySelector';
import AddItemButton from '../ItemDetailContainer/AddItemButton ';
import './ItemDetail.css';

const ItemDetail = ({ item, onAdd }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
    };

    return (
        <div className="ItemDetail">
            {item ? (
                <>
                    <img src={item.img} alt={item.name} />
                    <div className="ItemDetail-content">
                        <h2>{item.name}</h2>
                        <p className="ItemDetail-price">Precio: ${item.price}</p>
                        <p className="ItemDetail-description">{item.descripcion}</p>
                        <ItemQuantitySelector onQuantityChange={handleQuantityChange} />
                        <AddItemButton onAdd={() => onAdd(quantity)} quantity={quantity} />
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ItemDetail;

