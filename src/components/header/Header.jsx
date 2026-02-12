import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo_p.png";
import "./Header.css";

const Header = () => {
  const [search, setSearch] = React.useState("");
  const navigate = useNavigate();

  const handleChange = (value) => {
    setSearch(value);

    // navega automáticamente mientras escribe
    navigate(`/product?search=${encodeURIComponent(value)}`, {
      replace: true
    });
  };

  return (
    <header className="header container height-200">
      <Link to="/">
        <img src={logo} alt="Cómplices" className="App-logo" />
      </Link>

      <div className="container-mid">
        <div className="banner-content">
          <h1 className="title">C O M P L I C E S</h1>
          <h2 className="subtitle">Salud y Bienestar Sexual</h2>
        </div>
      </div>

      {/* 🔍 Buscador automático */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={search}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>

      <nav className="nav">
        <ul>
          <p><Link to="/">INICIO</Link></p>
          <p><Link to="/products">PRODUCTOS</Link></p>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
