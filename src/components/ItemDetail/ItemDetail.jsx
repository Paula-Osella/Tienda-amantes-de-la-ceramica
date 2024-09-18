import React, { useState } from 'react';
import { getProducts } from '../ItemListContainer/asyncMock';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'; 

const ItemDetail = ({ id, name, src, precio, stock, description, products, setProducts }) => {
    const [quantity, setQuantity] = useState(0);

    const handleAdd = (quantity) => {
        setQuantity(quantity);
        const updatedProducts = products.map(product => 
            product.id === id 
                ? { ...product, stock: product.stock - quantity } 
                : product
        );
        setProducts(updatedProducts);
        console.log(`Producto ${id} agregado al carrito con cantidad ${quantity}`);
    };

    return (
        <div className="item-detail">
            <h1 className="item-title">{name}</h1>
            <picture>
                <img src={src} alt={name} className="item-image" />
            </picture>
            <div className="item-info">
                <p className="item-price">Precio: ${precio}</p>
                <p className="item-stock">Stock disponible: {stock}</p>
                <p className="item-description">{description}</p>
                <ItemCount
                    stock={stock}
                    initial={quantity}
                    onAdd={handleAdd}
                />
            </div>
        </div>
    );
};

export default ItemDetail;
