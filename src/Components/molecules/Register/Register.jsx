import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./styleRegister.css";
import {useForm } from "react-hook-form";

function Register () {

const { register, handleSubmit } = useForm();

const onSubmit = (data) => {
    console.log(data);
}

    return (
            <Form id="form" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre y apellidos</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" {...register('name')} /><br/>
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" {...register('email')} />
                    <Form.Text className="text-muted" {...register('password')}>
                        No compartiremos tu correo electrónico con nadie más.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
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