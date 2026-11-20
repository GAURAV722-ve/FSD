
import Header from "./Header"
import Footer from './Footer';
import Product from './Product';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import Contact from './Contact';

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="product" element={<Product products={products} />} />
        <Route path="cart" element={<Cart />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Dashboard;
import { useEffect, useState } from 'react';
