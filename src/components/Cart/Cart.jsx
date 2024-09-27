import React from "react";
import CartDetail from "./CartDetail";
import { useState } from 'react';
import Form from "../Form/Form";
import "./Cart.css";
import {collection, getFirestore, addDoc} from "firebase/firestore"
const Cart = () => {
    const [buyer, setBuyer] = useState({
        nombre: "",
        email: "",
        Provincia: "",
        localidad: "",
        calle: "",
        numero: "",

    })
    const [error, setError] = useState({
        nombre: "",
        email: "",
        provincia: "",
        localidad: "",
        calle: "",
        numero: "",

    })

    const handleChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault()
        const localError = {}
        if (!buyer.name) {
            localError.name = "El nombre es obligatorio."
        }
        if (!buyer.email) {
            localError.email = "El mail es obligatorio."
        }

        if (!buyer.provincia) {
            localError.provincia = "Colocar la provincia es obligatorio."
        }

        if (!buyer.calle) {
            localError.calle = "Colocar la provincia es obligatorio."
        }

        if (!buyer.numero) {
            localError.numero = "Colocar el numero de tu calle es obligatorio."
        }

        if (Object.keys(localError).length === 0) {
addToCart()
        } else {
            setError(localError)
        }

    }

    
const addToCart =()=>{
const db=getFirestore()
const orderCollection= collection(db,"orders")
const purchase ={
    buyer,
    items: Cart,
    total: 200,
    date: new Date(),
}
addDoc(orderCollection,purchase)
.then(res=> console.log(res.id))
.catch (err=>console.log(err))
}
    return (
        <div>
            <Form handleChange={handleChange} submit={submit} formData={buyer}
                error={error} />

        </div>



    )
}

export default Cart;