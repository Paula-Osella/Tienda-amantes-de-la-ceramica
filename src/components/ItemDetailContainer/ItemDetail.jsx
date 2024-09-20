import React from "react";

const ItemDetail =({item})=>{
    return (
<div>
    
<h2>name: {item.name}</h2>
<h2>price: {item.price}</h2>
</div>
    )
}

export default ItemDetail;