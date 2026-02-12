import React from "react";
import './Footer.css';
import {Link, useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3 className="logo-text">Jaqueline Bastidas - Coach Sexual </h3>
                </div>
                
                {/* <div className="footer-section provocative">
                    <h3>¿Eventos Exclusivos?</h3>
                    <p className="discreet-text">
                        Experiencias para adultos consensuadas y discretas
                    </p>
                    <button className="discreet-button" onClick={() => navigate("/formulario")}>
                        <FaWhatsapp className="icon"/> Info confidencial
                    </button>
                </div> */}
                
                {/* <div className="footer-section social">
                    <h3>Conéctate</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/profile.php?id=61566515183978" aria-label="Facebook">
                            <FaFacebook className="icon"/>
                        </a>
                        <a href="#" aria-label="Instagram">
                            <FaInstagram className="icon"/>
                        </a>
                        <a href="https://wa.me/573176744519" aria-label="WhatsApp">
                            <FaWhatsapp className="icon"/>
                        </a>
                    </div>
                  
                </div> */}
            </div>
            
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} C O M P L I C E S  - Todos los derechos reservados  
                {/* <a href="/privacidad"> Política de Privacidad</a> | 
                <a href="/terminos"> Términos y Condiciones</a> */}
            </div>
        </footer>
    );
};

export default Footer;