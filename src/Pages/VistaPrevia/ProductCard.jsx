import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ProductCard = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams()
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchProduct();
  }, [id]);

  const handleEdit = () => {
//editar en construcción
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/products/${product.id}`);
      setProduct(null);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {product && (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img src={'http://127.0.0.1:8000/api/products/'} />
          <br />
          <p>{product.description}</p>
          <p>{product.price}€</p>
          <button onClick={handleEdit}>Editar</button>
          <button onClick={handleDelete}>Eliminar</button>
        </div>
      )}
    </div> 
  );
};

export default ProductCard;