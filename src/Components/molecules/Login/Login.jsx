import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './styleLogin.css'
import {useForm } from "react-hook-form";
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {

        const { register, formState: {errors}, handleSubmit } = useForm();
        
        const postUser = 'http://127.0.0.1:8000/api/login'
        
        const onSubmit = (data) => {
            axios.post(postUser, data)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }
        
  return (
    <>
    <Form id="form" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Introduce tu email" {...register('email', {required:true})} />
          {errors.nombre?.type === 'required' && <p>El campo email es requerido.</p>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Introduce tu contraseña" {...register('password', {required:true, minLenght
          : 8})}/>
         {errors.nombre?.type === 'required' && <p>Debes incluir una contraseña.</p>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recuérdame" />
      </Form.Group>

      <Button className="btn btn-dark" type="submit" >
        Submit
      </Button>
    </Form>
    <br/>
    <p className="donthaveanaccount">¿No tienes una cuenta? <Link href="register">Regístrate.</Link></p>
    </>
  );
}

export default Login;