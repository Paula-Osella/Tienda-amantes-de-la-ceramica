import { Link } from "react-router-dom";
 import "../Footer/Footer.css";

import React, { useState } from 'react';
import './Footer.css'; // Asegúrate de crear este archivo para los estilos.

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para manejar la suscripción al newsletter.
        console.log(`Subscribed with email: ${email}`);
        setEmail(''); // Limpiar el input después de suscribirse.
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <h2>Suscríbete a nuestro Newsletter</h2>
                <form onSubmit={handleSubscribe} className="newsletter-form">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ingresa tu email"
                        required
                    />
                    <button type="submit">Suscribirme</button>
                </form>
            </div>
            <button className="scroll-top" onClick={() => window.scrollTo(0, 0)}>
                ↑
            </button>
        </footer>
    );
};

export default Footer;

