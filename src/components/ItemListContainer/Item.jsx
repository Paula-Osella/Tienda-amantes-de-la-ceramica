import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <div>
            <h2>{item.name}</h2>
            <p>Price: {item.price}</p>
            <img src={item.img} alt={item.name} />
            {/* Link to the item detail page */}
            <Link to={`/detalle/${item.id}`}>View Details</Link>
        </div>
    );
};

export default Item;