
import React, { useEffect, useState } from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Product from './Components/Product';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  // console.log(products);

  return (
    <div>
      <Header />
      <Product products={products} />
      <Footer />
    </div>
  )
}

export default App