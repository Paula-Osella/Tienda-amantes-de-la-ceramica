

import {useNavigate} from "react-router-dom";
import {getDoc, doc, getFirestore } from "firebase/firestore";
import { Button } from "bootstrap";




const CartDetail =()=>{
//     const  {cart, removeItem, Clear,onSubmit} 

//     return(
//         <div>
//             {
//                 cart.map(el=>(
// <div  key={el.id}>
//     <div >
//         <p>Productos: {el.name}</p>
//         <p>Cantidad: {el.quantity}</p>
// </div>
// <Button onClick={()=>removeItem(el.id)} >Eliminar</Button>
// </div>
//                 ))
//             }
//             {
//                     cart.length > 0 &&
//                     <button className="btn btn-primary" onClick={onSubmit}>Crear Orden</button>
//                 }
//         </div>
//     )

<form>
    <label htmlFor="name">Ingrese su nombre</label>
    <input type="text" name="name" id="name"></input>
    <label htmlFor="email">Ingrese su correo electronico</label>
    <input type="text" name="email" id="email"></input>
</form>
}

export default CartDetail;