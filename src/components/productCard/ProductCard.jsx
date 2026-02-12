import React, { useState } from "react";
import "./ProductCard.css";
import { FaWhatsapp } from "react-icons/fa";
import { useSelectedProducts } from "../../context/SelectedProductsContext";


const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { selectedProducts, toggleProduct } = useSelectedProducts();

    const isSelected = selectedProducts.some(p => p.id === product.id);

    const whatsappNumber = "573176744519";
    const whatsappMessage = `¡Hola! Estoy interesad@ en el producto: ${product.name} (Código: ${product.image}). ¿Podrías darme más información?`;

const handleWhatsAppClick = () => {
  const whatsappNumber = "573176744519";

  let productsToSend = [];

  if (selectedProducts.length > 0) {
    productsToSend = selectedProducts;
  } else {
    productsToSend = [product];
  }

    const message = productsToSend
        .map((p, index) => 
            `${index + 1}. ${p.name}
        Precio: $${p.price}
        Imagen: ${p.image}`
        )
        .join("\n\n");


        const finalMessage = `Hola Jaqueline 

        Estoy interesad@ en los siguientes productos:

        ${message}

        ¿Podrías asesorarme?`;

        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(finalMessage)}`;

        window.open(url, "_blank");
        };


    return (
        <div 
            className="product-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="image-container">
                <img 
                    src={isHovered ? product.secondaryImage || product.image : product.image} 
                    alt={product.name}
                    className="product-image"
                />
            </div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="cont">
             <div className="badge">
                <p className="avaibletext"> Disponibles: {product.stock}</p>
            </div>
            </div>
            <span className="price">${product.price}</span>
           <button 
            className={`whatsapp-button ${selectedProducts.length > 0 ? "multi" : ""}`}
            onClick={handleWhatsAppClick}
            >
            <FaWhatsapp className="whatsapp-icon" />
            {selectedProducts.length > 0
                ? `Enviar selección (${selectedProducts.length})`
                : "Pregúntanos"}
            </button>

            <button
            className={`select-button ${isSelected ? "selected" : ""}`}
            onClick={() => toggleProduct(product)}
            >
            {isSelected ? "Quitar de selección" : "Agregar a selección"}
            </button>

           
        </div>
    );
};

export default ProductCard;