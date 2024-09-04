import { useState, useEffect } from "react";
import { getProducts } from "../ItemListContainer/asyncMock";
import ItemList from '../ItemListContainer/ItemList/ItemList';
import './ItemListContainer.css'; 

function ItemListContainer({ greeting }) { // Cambia a { greeting }
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, []); // Agrega el array de dependencias vacío

    return (
        <div>
            <h1 className="Titulo">{greeting}</h1>
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;
