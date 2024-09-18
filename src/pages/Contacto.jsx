import { Link } from "react-router-dom";
import "../pages/Contacto.css";
import React, { useState } from "react";

function Contacto() {
    const [valores, setValores] = useState({
        nombre: "",
        email: "",
        numero: "",
        mensaje: "",
    });

    const handleValores = (e) => {
        setValores({
            ...valores,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviado:", valores); // Solo muestra los valores al enviar
    };

    return (
        <body className="Cuerpo">
            <h1 className="Titulo">Comunicate con nosotros</h1>
            <div className="container">
                <form className="formulario" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Ingresa tu nombre"
                        className="InputForm"
                        value={valores.nombre}
                        onChange={handleValores}
                        name="nombre"
                    />
                    <input
                        type="email"
                        placeholder="Ingresa tu email"
                        className="InputForm"
                        value={valores.email}
                        onChange={handleValores}
                        name="email"
                    />
                    <input
                        type="text"
                        placeholder="Ingresa tu numero (opcional)"
                        className="InputForm"
                        value={valores.numero}
                        onChange={handleValores}
                        name="numero"
                    />
                    <input
                        type="text"
                        placeholder="Escribi tu consulta"
                        className="Texto"
                        value={valores.mensaje}
                        onChange={handleValores}
                        name="mensaje"
                    />
                    <button type="submit" className="Enviar">Enviar</button>
                </form>
            </div>
        </body>
    );
}

export default Contacto;
