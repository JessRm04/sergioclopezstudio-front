import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./styleRegister.css";
import {useForm } from "react-hook-form";
import axios from 'axios';

function Register () {

const { register, formState: {errors}, handleSubmit } = useForm();


const onSubmit = (data) => {
    axios.post('http://127.0.0.1:8000/api/register', {
        name: '',
        email: '',
        password: ''
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

    return (
            <Form id="form" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre y apellidos</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" {...register('name', {required:true})}/>
                    {errors.nombre?.type === 'required' && <p>El campo nombre es requerido.</p>}
                    <br/>
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" {...register('email', {required:true})} />
                    {errors.nombre?.type === 'required' && <p>El campo email es requerido.</p>}
                    <Form.Text className="text-muted">
                        No compartiremos tu correo electrónico con nadie más.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...register('password', {required:true, minLenght
                    : 8})}/>
                    {errors.nombre?.type === 'required' && <p>Debes incluir una contraseña.</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Recuérdame" />
                </Form.Group><br/>

                <Button variant="dark" type="submit" className="button">
                Registrarme
                </Button>
            </Form>
       
        );
    }


export default Register;