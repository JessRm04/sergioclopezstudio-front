import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styleDressbox.css'
import { Link } from 'react-router-dom';


const DressBox = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/products/')
      .then(response => setProducts(response.data.slice(0, 10)));
  }, []);

  return (
    <div className="dressBox">
      {products.map(product => (
        <div key={product.id}>
          <Link to={`/preview/${product.id}`}>{product.title}</Link>
          <img src={'http://127.0.0.1:8000/api/products/'} />
          <br/>
          <p>{product.description}</p>
          <p>{product.price}€</p>
        </div>
      ))}
    </div>
  );
};

export default DressBox;