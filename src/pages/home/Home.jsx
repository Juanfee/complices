import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/productCard/ProductCard";
import "./Home.css";
import {getProducts} from "./../../services/productService";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(products => {
            setProducts(products);
        });
    }, []);

    console.log(products);
    const featuredProducts = products
        .filter(product => product.landing === true)
        .slice(0, 6);
   
    
    return (
        <div className="home">
            {/* <section className="hero-banner">
                <div className="hero-content">
                    <h2>Descubre tu lado más audaz</h2>
                    <p className="hero-description">
                        Lencería fina que celebra la sensualidad femenina. 
                        Diseños exclusivos que realzan tus curvas con elegancia 
                        y sofisticación. Hecho para mujeres que se atreven.
                    </p>
                    <Link to="/products" className="cta-button">
                        Explora Nuestra Colección
                    </Link>
                </div>
            </section> */}

            <section className="benefits-section">
                <div className="benefit-card">
                    <h3>Un espacio de sexualidad consciente</h3>
                    <p>
                        Más que una tienda para adultos, somos un espacio creado para 
                        explorar, aprender y fortalecer la conexión contigo y con tu pareja 
                        desde el respeto, la comunicación y el placer consciente.
                    </p>
                </div>

                <div className="benefit-card">
                    <h3>Acompañamiento personalizado</h3>
                    <p>
                        Ofrecemos asesoría cercana y 
                        profesional para ayudarte a elegir productos que realmente se 
                        adapten a tus necesidades y a tu proceso personal o de pareja.
                    </p>
                </div>

                <div className="benefit-card">
                    <h3>Un espacio ideal para parejas</h3>
                    <p>
                        Creamos experiencias pensadas para fortalecer vínculos, 
                        redescubrir la intimidad y vivir el placer desde la confianza 
                        y el consentimiento.
                    </p>
                </div>
            </section>


            <section className="featured-products">
                <h2>Nuestros Favoritos</h2>
                <p className="section-description">
                    Las piezas más deseadas
                </p>
                <div className="product-grid">
                    {featuredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />  
                    ))}
                </div>
                <Link to="/products" className="view-all">
                    Ver todos los productos →
                </Link>
            </section>

            {/* Sección de Testimonios */}
            {/* <section className="testimonials">
                <h2>Lo que dicen nuestras clientas</h2>
                <div className="testimonial-card">
                    <p>"Me sentí empoderada y sexy como nunca. La calidad superó todas mis expectativas."</p>
                    <span>- Valentina M.</span>
                </div>
            </section> */}
        </div>
    );
};

export default Home;