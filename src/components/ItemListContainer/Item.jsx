import React from 'react';
import { Link } from 'react-router-dom';
import "../ItemListContainer/Item.css"; 
import {  useContext } from 'react';
import CartContext from "../Context/CartContext";


const Item = ({ item}) => {
    const { addItem } = useContext(CartContext);


    return (
        <div className="Item">
            <h2>{item.name}</h2>
            <img src={item.img} alt={item.name} />
            <p>Precio: ${item.price}</p>
            <Link to={`/detalle/${item.id}`}>Ver Detalle</Link>
            <button  onClick={() => addItem(item, 1)}className='add-item-button'>Agregar al carrito</button>
        </div>
    );
};

export default Item;
