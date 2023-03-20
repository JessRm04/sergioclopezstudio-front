import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styleDressbox.css'

const DressBox = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/products/')
      .then(response => setProducts(response.data.slice(0, 10)));
  }, []);

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img src={'http://127.0.0.1:8000/api/products/'} alt={product.title} />
          <p>{product.description}</p>
          <p>Colección: {product.collection}</p>
          <p>Precio: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default DressBox;