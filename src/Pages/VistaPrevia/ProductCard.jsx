import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

const ProductCard = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams()
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

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
    setIsEditing(true);
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:8000/api/products/${product.id}`, product);
      setIsEditing(false);
    } catch (error) {
      console.error(error);
    }
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

      {isEditing && (
        <Modal show={isEditing} onHide={() => setIsEditing(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Editar producto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleUpdate}>
            <input type="text" value={product.title} onChange={e => setProduct({...product, title: e.target.value})} />
                <input type="text" value={product.description} onChange={e => setProduct({...product, description: e.target.value})} />
                <input type="number" value={product.price} onChange={e => setProduct({...product, price: e.target.value})} />
                <button type="submit">Actualizar</button>
            </form>
          </Modal.Body>
        </Modal>
        )}
    </div> 
    );
  }   
     
   

export default ProductCard;