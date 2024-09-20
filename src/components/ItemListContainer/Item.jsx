import React from "react";

const Item = ({item}) =>{
    return(
        <div className="TarjetaProducto">
            <h2>name:</h2>
            <h2>price:</h2>
            {item}
            </div>
    )
}

export default Item;