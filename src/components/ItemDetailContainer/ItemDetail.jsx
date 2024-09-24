import React from 'react';

const ItemDetail = ({ item }) => {
    return (
        <div>
            {item ? (
                <>
                    <h2>Name: {item.name}</h2>
                    <p>Price: {item.price}</p>
                    <p>Description: {item.descripcion}</p>
                    <img src={item.img} alt={item.name} />
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ItemDetail;
