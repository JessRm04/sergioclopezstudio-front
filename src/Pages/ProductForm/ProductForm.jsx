import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [collection, setCollection] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [price, setPrice] = useState(0);
  const [availability, setAvailability] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(JSON.stringify({ title, description, collection, image: imageFile.name , price: parseInt(price), availability }));
    
    // API
    try {
      await axios.post('http://127.0.0.1:8000/api/products/', { title, description, collection,image: imageFile.name , price: parseInt(price), availability });
      alert('Datos enviados con éxito');
    } catch (error) {
      alert('Ocurrió un error al enviar los datos');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Título:
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <br />
      <label>
        Descripción:
        <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
      </label>
      <br />
      <label>
        Colección:
        <select value={collection} onChange={(event) => setCollection(event.target.value)}>
          <option value="">--Selecciona una opción--</option>
          <option value="lacrimatorio">Lacrimatorio</option>
          <option value="shake">Shake</option>
        </select>
      </label>
      <br />
       <label> 
         Imagen: 
         <input 
           type="file" 
           onChange={(event) => setImageFile(event.target.files[1])} 
         /> 
       </label> 
       <br /> 
       <label> 
         Precio: 
         <input type="number" value={price} onChange={(event) => setPrice(event.target.value)} /> 
       </label> 
       <br /> 
       Disponibilidad:
       Sí<input type="radio" name="availability" checked={availability === true} onChange={() => setAvailability(true)} />  
       No<input type="radio" name="availability" checked={availability === false} onChange={() => setAvailability(false)} />  
        <br /><br />  
        <input type="submit" value="Enviar" />  
     </form>  
   );
};

export default ProductForm;