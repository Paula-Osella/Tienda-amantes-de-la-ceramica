import React, { useState, useContext } from "react";
import CartDetail from "./CartDetail"; // Asegúrate de que este componente esté implementado
import Form from "../Form/Form";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import "./Cart.css";
import CartContext from "../Context/CartContext";

const Cart = () => {


    const [buyer, setBuyer] = useState({
        nombre: "",
        email: "",
        numero: "",
    });

    const [error, setError] = useState({});
const {cart, removeItem} = useContext(CartContext)
    const handleChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value,
        });
    };

    const submit = (e) => {
        e.preventDefault();
        const localError = {};

        if (!buyer.nombre) {
            localError.nombre = "El nombre es obligatorio.";
        }
        if (!buyer.email) {
            localError.email = "El email es obligatorio.";
        }
        if (!buyer.numero) {
            localError.numero = "Colocar su numero de celular.";
        }

        if (Object.keys(localError).length === 0) {
            addToCart();
        } else {
            setError(localError);
        }
    };

    const addToCart = () => {
        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        const purchase = {
            buyer,
            items: [], 
            total: 200, 
            date: new Date(),
        };
        addDoc(orderCollection, purchase)
            .then((res) => console.log(res.id))
            .catch((err) => console.log(err));
    };

    return (
        <div className="cart-container">
            {cart.map((el)=>(
                <div className="cart-card" key={el.id}>
<div>
    <p>Producto: {el.name}</p>
    <p>Cantidad: {el.quantity}</p>
</div>
<img src={el.img}className="cart-image" alt={el.img}/>
<button onClick={()=> removeItem(el.id)}>Eliminar</button>
                </div>
            ))}

            <CartDetail /> 
            <Form handleChange={handleChange} submit={submit} formData={buyer} error={error} />
        </div>
    );
};

export default Cart;
