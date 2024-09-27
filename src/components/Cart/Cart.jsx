import React, { useState } from "react";
import CartDetail from "./CartDetail"; // Asegúrate de que este componente esté implementado
import Form from "../Form/Form";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import "./Cart.css";

const Cart = () => {
    const [buyer, setBuyer] = useState({
        nombre: "",
        email: "",
        provincia: "",
        localidad: "",
        calle: "",
        numero: "",
    });

    const [error, setError] = useState({});

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
        if (!buyer.provincia) {
            localError.provincia = "Colocar la provincia es obligatorio.";
        }
        if (!buyer.calle) {
            localError.calle = "Colocar la calle es obligatorio.";
        }
        if (!buyer.numero) {
            localError.numero = "Colocar el número de tu calle es obligatorio.";
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

            <CartDetail /> 
            <Form handleChange={handleChange} submit={submit} formData={buyer} error={error} />
        </div>
    );
};

export default Cart;
