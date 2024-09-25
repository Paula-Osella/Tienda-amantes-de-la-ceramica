import React from 'react';
import './ItemDetail.css'; 

const ItemDetail = ({ item }) => {
    return (
        <div className="ItemDetail">
            {item ? (
                <>
                    <img src={item.img} alt={item.name} />
                    <div className="ItemDetail-content">
                        <h2>{item.name}</h2>
                        <p className="ItemDetail-price">Precio: ${item.price}</p>
                        <p className="ItemDetail-description">{item.descripcion}</p>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};
export default ItemDetail;
