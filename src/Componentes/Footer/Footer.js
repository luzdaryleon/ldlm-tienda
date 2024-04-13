import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Acerca de Nosotros</h3>
          <p>
            LDLm Tienda es tu tienda en línea de confianza para libros de alta
            calidad.
          </p>
        </div>
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Email: contact@ldlmtienda.com</p>
          <p>Teléfono: +1 (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 LDLm Tienda. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
