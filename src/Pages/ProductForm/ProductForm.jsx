import React from 'react'
import axios from 'axios';
import {useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styleProductForm.css'


function ProductForm() {

    const { register, formState: {errors}, handleSubmit } = useForm();
        
    const postProduct = 'http://127.0.0.1:8000/api/products'

    const token = localStorage.getItem('token')
    
    const onSubmit = (data) => {
        axios.post(postProduct, data)
          .then(function (response) {
            localStorage.setItem('token', response.data.token);
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    axios.interceptors.request.use(
        function (config) {
          const token = localStorage.getItem('token');
          config.headers.Authorization = token ? `Bearer ${token}` : '';
          return config;
        },
        function (error) {
          return Promise.reject(error);
        }
      );
    

  return (
    <>
    <h3 className="pagetitle">Añadir producto</h3>
    <Form id="form" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Título</Form.Label>
        <Form.Control type="title" placeholder="Nombre del producto" {...register('title', {required:true})} />
          {errors.nombre?.type === 'required' && <p>Añade un nombre a tu producto.</p>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows={4} {...register('email', {required:true})} />
          {errors.nombre?.type === 'required' && <p>Añade una descripción a tu producto.</p>}
      </Form.Group>

      <Form.Select aria-label="Default select example">
        <option>Colección</option>
        <option value="1" {...register('collection', {required:true})} >Lacrimatorio</option>
        <option value="2" {...register('collection', {required:true})}>Shake</option>
      </Form.Select>
    <br/>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Precio</Form.Label>
        <Form.Control type="title" placeholder="precio" {...register('prize', {required:true})} />
          {errors.nombre?.type === 'required' && <p>Añade un precio.</p>}
      </Form.Group>

      <Form.Group controlId="formFileMultiple" className="mb-3">
      <Form.Label>Imágenes</Form.Label>
        <Form.Control type="file" multiple {...register('image', {required:true})} />
          {errors.nombre?.type === 'required' && <p>Añade fotos de tu producto.</p>}
      </Form.Group>

      <Button className="btn btn-dark" type="submit">
        Añadir
      </Button>
    </Form>
    </>
  );
}

export default ProductForm;