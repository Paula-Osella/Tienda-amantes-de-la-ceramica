import React from 'react';
import { Link } from 'react-router-dom';
import "../ItemListContainer/Item.css"; // Sigue importando el CSS

const Item = ({ item }) => {
    return (
        <div className="Item">
            <h2>{item.name}</h2>
            <img src={item.img} alt={item.name} />
            <p>Precio: ${item.price}</p>
            <Link to={`/detalle/${item.id}`}>Ver Detalle</Link>
        </div>
    );
};

export default Item;
