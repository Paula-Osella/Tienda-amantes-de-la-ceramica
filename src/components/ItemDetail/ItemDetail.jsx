import React, { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { CartContext } from '../../Context/CartContext';

const ItemDetail = ({ id, name, src, precio, stock, description }) => {
    const [quantity, setQuantity] = useState(0);

    const { products, setProducts } = useContext(CartContext);

    const handleRestar =() => {
        quantity > 1 && setQuantity(quantity-1)
    }

    const handleSumar =()=>{
        quantity < products.stock && setQuantity(quantity + 1)
    }

    const handleAdd = (quantity) => {
        setQuantity(quantity);
        const updatedProducts = products.map(product =>
            products.id === id
                ? { ...products, stock: product.stock - quantity }
                : products
        );
        setProducts(updatedProducts);
        console.log(`Producto ${id} agregado al carrito con cantidad ${quantity}, quedan ${stock} disponibles`);
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
