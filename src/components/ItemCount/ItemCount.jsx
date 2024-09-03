import "../ItemCount/ItemCount.css";
import {useState} from "react";

const itemCount =({stock,initial,onAdd}) =>{
    const  [quantity, setQuantity] =useState (0)

    const increment =()=>{
        if(quantity < stock){
            setQuantity(quantity+1)
        }
    }
}

const decrement = () =>{
    if(quantity>1){
        setQuantity(quantity-1)
    }
}

return(
<div className="Contador">
    <div className="Controles">
        <button className="Boton-Compras"onClick={decrement}>-</button>
<h3 className="Resultado">{quantity}</h3>
<button className="Boton-compras" onClick={increment}>+</button>
    </div>
    <button className="Boton-stock" onClick={()=> onAdd(quantity)} disabled={!stock}>
        
    </button>
</div>
)