import React from 'react';
import Item from '../Item/Item'; // Asegúrate de que la ruta sea correcta

const ItemList = ({ products, onAdd }) => {
    return (
        <div className="ListGroup">
            {products.map(prod => (
                <Item 
                    key={prod.id}
                    id={prod.id}
                    name={prod.name}
                    src={prod.src}
                    precio={prod.precio}
                    stock={prod.stock}
                    onAdd={onAdd} // Pasa la función onAdd
                />
            ))}
        </div>
    );
};

export default ItemList;
