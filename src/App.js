import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import "./App.css";
import Product from "./components/product/Product";
import Products from "./components/products/Products";
// import Formulario from "./components/Formulario";


function App() {
  return(
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/product" element={<Product/>} />
            <Route path="/products" element={<Products/>} /> 

            {/* <Route path="/formulario" element={<Formulario />} /> */}

          </Routes>
        </main>
        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    </Router>
  );
};

export default App;