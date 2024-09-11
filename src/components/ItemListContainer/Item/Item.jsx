import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../../ItemCount/ItemCount';
import './Item.css';

const Item = ({ id, name, src, precio, stock, onAdd }) => {
    const [quantity, setQuantity] = useState(0);

    const handleAdd = (quantity) => {
        setQuantity(quantity);
        if (onAdd) {
            onAdd(id, quantity); 
        }
    };

    return (
        <article className="product">
            <div className="Header">
                <h2 className="product-title">{name}</h2>
            </div>
            <picture>
                <img src={src} alt={name} className="product-image" />
            </picture>
            <section>
                <p className="product-marca">
                    Precio: ${precio}
                </p>
                <p className="product-marca">
                    Stock disponible: {stock}
                </p>
                <ItemCount
                    stock={stock}
                    initial={quantity}
                    onAdd={handleAdd}
                />
                <button className='Boton-detalles'><Link to={`/product/${id}`} className='Detalles' >Ver detalles</Link></button>
            </section>
        </article>
    );
};

export default Item;
