import React, { useState } from 'react';
import "./Footer.css";

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        console.log(`Subscribed with email: ${email}`);
        setEmail('');
    };

    return (
        <footer className="footer">
            <div className="footer-grid-container"> {/* Contenedor para organizar las secciones */}
                {/* Sección Newsletter - Se mantiene igual */}
                <div className="footer-section newsletter-section">
                    <h2>Suscríbete a nuestro Newsletter</h2>
                    <form onSubmit={handleSubscribe} className="newsletter-form">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Ingresa tu email"
                            required
                            className="newsletter-input"
                        />
                        <button type="submit" className="base-button primary-button newsletter-button">Suscribirme</button>
                    </form>
                </div>

                {/* Nueva Sección de Redes Sociales */}
                <div className="footer-section social-media-section">
                    <h3>Síguenos en Redes</h3>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/ceramic_lovers_club_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            {/* Icono de Instagram (SVG) - Puedes usar otros para Facebook, Twitter, etc. */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.269.088 3.85.048 4.703.01 5.556 0 5.829 0 8s.01 2.444.048 3.297c.04.853.174 1.434.372 1.943.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.332 1.943.372C5.556 15.99 5.829 16 8 16s2.444-.01 3.297-.048c.853-.04 1.434-.174 1.943-.372.526-.205.972-.478 1.417-.923.445-.444.719-.89.923-1.416.198-.51.332-1.09.372-1.943.038-.853.048-1.126.048-3.297s-.01-2.444-.048-3.297c-.04-.853-.174-1.434-.372-1.943A3.917 3.917 0 0 0 13.24 1.42a3.927 3.927 0 0 0-1.417-.923c-.51-.198-1.09-.332-1.943-.372C10.444.01 10.171 0 8 0zm0 1.5c2.172 0 2.444.01 3.298.048.725.032 1.174.155 1.477.279.309.125.568.286.721.449.155.163.297.356.42.59.127.234.254.385.346.614.092.23.155.488.18.755.038.853.048 1.127.048 3.298s-.01 2.444-.048 3.298c-.035.725-.158 1.174-.279 1.477-.125.309-.286.568-.449.721-.163.155-.356.297-.59.42-.234.127-.385.254-.614.346-.23.092-.488.155-.755.18-.853.038-1.127.048-3.298.048s-2.444-.01-3.298-.048c-.725-.035-1.174-.158-1.477-.279-.309-.125-.568-.286-.721-.449-.155-.163-.297-.356-.42-.59-.127-.234-.254-.385-.346-.614-.092-.23-.155-.488-.18-.755-.038-.853-.048-1.127-.048-3.298s.01-2.444.048-3.298c.035-.725.158-1.174.279-1.477.125-.309.286-.568.449-.721.163-.155.356-.297.59-.42.234-.127.385-.254.614-.346.23-.092.488-.155.755-.18.853-.038 1.127-.048 3.298-.048z"/>
                                <path d="M12.214 11.892a.604.604 0 0 1-.607.604h-1.392a.604.604 0 0 1-.607-.604v-1.392a.604.604 0 0 1 .607-.604h1.392a.604.604 0 0 1 .607.604z"/>
                                <path d="M8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 1a2 2 1 1 1 0 4 2 2 1 1 1 0-4"/>
                            </svg>
                        </a>
                        {/* Puedes añadir más iconos aquí, por ejemplo: */}
                        {/* <a href="https://facebook.com/tumarca" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <svg ... facebook svg ...</svg>
                        </a> */}
                    </div>
                </div>

                {/* Nueva Sección de Mapa */}
                <div className="footer-section map-section">
                    <h3>Encuéntranos</h3>
                    <div className="map-container">
                        {/* iframe de Google Maps - Centrado en Buenos Aires, Argentina */}
                        {/* Puedes generar tu propio iframe en Google Maps, buscar una dirección, click en "Compartir", luego "Insertar un mapa" */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104975.31818296362!2d-58.468205250000004!3d-34.6037389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac6a988d8b1%3A0xc4703a743b185611!2sBuenos%20Aires%2C%20CABA%2C%20Argentina!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar"
                            width="100%"
                            height="200"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación en Buenos Aires"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Botón de Scroll to Top - Se mantiene igual */}
            <button className="base-button scroll-top" onClick={() => window.scrollTo(0, 0)}>
                ↑
            </button>
        </footer>
    );
};

export default Footer;