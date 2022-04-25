import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CartDetails from './components/CartDetails';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Contato from './pages/Contato';
import Footer from "./components/Footer";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/e-commerce-react-redux/" element={<Home />} />
        <Route path="/e-commerce-react-redux/produtos" element={<Produtos />} />
        <Route path="/e-commerce-react-redux/contato" element={<Contato />} />
        <Route path="/e-commerce-react-redux/produtos/:id" element={<CartDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
