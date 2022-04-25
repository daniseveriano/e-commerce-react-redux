import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CartDetails from './components/CartDetails';
import Home from './components/Home';
import Cards from './components/Cards';
import Contato from './components/Contato';
import Footer from "./components/Footer";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/e-commerce-react-redux/" element={<Home />} />
        <Route path="/e-commerce-react-redux/produtos" element={<Cards />} />
        <Route path="/e-commerce-react-redux/contato" element={<Contato />} />
        <Route path="/e-commerce-react-redux/cart/:id" element={<CartDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
