import React from 'react';
import Item from '../Item/Item'; // Verifica que la ruta sea correcta

const ItemList = ({ products }) => {
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
                />
            ))}
        </div>
    );
};

export default ItemList;
