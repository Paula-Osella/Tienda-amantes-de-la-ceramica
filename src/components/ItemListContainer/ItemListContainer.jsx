import { useState, useEffect } from "react";
import { getProducts } from "../ItemListContainer/asyncMock";
import ItemList from '../ItemListContainer/ItemList/ItemList';
import './ItemListContainer.css'; 

function ItemListContainer({ onAddToCart }) { 
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, []); 

    const handleAddToCart = (productId, quantity) => {
        setProducts(prevProducts => 
            prevProducts.map(product => 
                product.id === productId 
                    ? { ...product, stock: product.stock - quantity } 
                    : product
            )
        );
        console.log(`Producto ${productId} agregado al carrito con cantidad ${quantity}`);
    };

    return (
        <div>
            <h1 className="Titulo">Productos</h1>
            <ItemList products={products} onAdd={handleAddToCart} />
        </div>
    );
}

export default ItemListContainer;
