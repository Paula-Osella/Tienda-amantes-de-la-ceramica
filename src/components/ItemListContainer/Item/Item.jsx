import React from 'react';
import './Item.css'; 

const Item = ({ id, name, src, precio, stock }) => {
    console.log({ id, name, src, precio, stock }); // Verifica las props
    return (

        <article className="product">
            <div className="Header">
                <h2 className="product-title">{name}</h2>
            </div>
            <picture>
                <img src={src} alt={name} className="product-image" />
            </picture>
            <section>
                <p className="product-marca">
                    Precio: ${precio}
                </p>
                <p className="product-marca">
                    Stock disponible: {stock}
                </p>
                <button className="boton-detalle">Ver detalles</button>
            </section>
        </article>
    );
};

export default Item;
