import { useState, useEffect } from "react";
import { getProducts } from "../ItemListContainer/asyncMock";
import ItemList from '../ItemListContainer/ItemList/ItemList';
import './ItemListContainer.css'; 

function ItemListContainer({ greeting }) { 
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
        console.log(`Producto ${productId} agregado al carrito con cantidad ${quantity}`);
        // Aquí puedes agregar la lógica para actualizar el carrito de compras
    };

    return (
        <div>
            <h1 className="Titulo">Productos</h1>
            <ItemList products={products} onAdd={handleAddToCart} />
        </div>
    );
}

export default ItemListContainer;

