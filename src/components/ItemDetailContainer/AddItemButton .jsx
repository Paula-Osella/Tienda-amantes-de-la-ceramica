import React, { useState } from 'react';
import ItemQuantitySelector from "../ItemDetailContainer/ItemQuantitySelector";
import "../ItemDetailContainer/AddItemButton.css";

const AddItemButton = ({ onAdd, quantity }) => {
    const handleClick = () => {
        onAdd(quantity);
    };

    return (
        <button onClick={handleClick} className='add-item-button'>Agregar al carrito</button>
    );
};
export default AddItemButton;
