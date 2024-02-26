import React from "react";
// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import { Checkout, Home, ProductDetails } from "./pages";
// components
import { Sidebar, Header, Footer } from "./components";
import Demo from "./demo/Demo";
import Help from "./components/Help";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="scrollbar-thin scrollbar-webkit">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/help" element={<Help />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Sidebar />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
