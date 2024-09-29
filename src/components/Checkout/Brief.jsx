import React from 'react';


const Brief = ({ orderId, orderItems, orderTotal }) => {
    return (
        <div>
            <h2>Gracias por tu compra!</h2>
            <p>ID de orden: {orderId}</p>
            <h3>Detalles del pedido:</h3>

            <ul>
                {orderItems.map((item) => (
                    <li key={item.id}>
                        <p>{item.name} - {item.quantity} x ${item.price}</p>
                        <img src={item.img} className="cart-image" alt={item.name} /> 
                    </li>
                ))}
            </ul>
            <h4>Total de la compra: ${orderTotal}</h4>
        </div>
    );
};


export default Brief;
