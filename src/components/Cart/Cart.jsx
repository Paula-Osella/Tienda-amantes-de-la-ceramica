import React, { useState, useContext } from "react";
import Form from "../Form/Form";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import "./Cart.css";
import CartContext from "../Context/CartContext";
import Brief from "../Checkout/Brief";

const Cart = () => {
    const { cart, removeItem, clear, calculateTotal } = useContext(CartContext);
    const [buyer, setBuyer] = useState({
        nombre: "",
        email: "",
        numero: "",
    });
    const [error, setError] = useState({});
    const [orderId, setOrderId] = useState(null);
    const [orderItems, setOrderItems] = useState([]);
    const [orderTotal, setOrderTotal] = useState(0);

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
            items: cart,
            total: calculateTotal(),
            date: new Date(),
        };

        addDoc(orderCollection, purchase)
            .then((res) => {
                setOrderId(res.id);
                setOrderItems(cart);
                setOrderTotal(calculateTotal());
                clear();
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="cart-container">
            {cart.length === 0 && !orderId ? (
                <p className="parrafo-carrito">Tu carrito está vacío</p>
            ) : (
                <>
                    {!orderId ? (
                        <>
                            {cart.map((el) => (
                                <div className="cart-card" key={el.id}>
                                    <div>
                                        <p>Producto: {el.name}</p>
                                        <p>Cantidad: {el.quantity}</p>
                                        <p>Precio: ${el.price}</p> 
                                    </div>
                                    <img src={el.img} className="cart-image" alt={el.name} />
                                    <button onClick={() => removeItem(el.id)}>Eliminar</button>
                                </div>
                            ))}
    
                            <h4>Total: ${calculateTotal()}</h4> 
    
                            <Form handleChange={handleChange} submit={submit} formData={buyer} error={error} />
                        </>
                    ) : (
                        <Brief orderId={orderId} orderItems={orderItems} orderTotal={orderTotal} />
                    )}
                </>
            )}
        </div>
    );
}

export default Cart;
