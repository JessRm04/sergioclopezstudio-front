import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './styleLogin.css'
import {useForm } from "react-hook-form";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";


function Login() {

  //API service

        const { register, formState: {errors}, handleSubmit } = useForm();
        
        const postUser = 'http://127.0.0.1:8000/api/login'

        const navigate = useNavigate();
        
        const onSubmit = (data) => {
          localStorage.setItem('loginData', JSON.stringify(data));
          const formData = new FormData();
          formData.append('email', data.email);
          formData.append('password', data.password);
          
          
          axios.post(postUser, formData)
            .then(function (response) {
              localStorage.setItem('token', response.data.token);
              console.log(response);
              // navigate('/', { state: {userData: response} });
            })
            .catch(function (error) {
              console.log(error);
            });
        };
        

  //Event

    const [credentials, setCredentials] = useState ({
      email: '',
      password:'',
      });
      
      const {email, password} = credentials
      
      const handleChange = event => {
      setCredentials (credentials => ({
      ...credentials,
      [event.target.name] : event.target.value,
      }));
    };
        
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        {...register("email", { required: true })}
      />
      {errors.email && <span>This field is required</span>}

      <input
        type="password"
        name="password"
        onChange={handleChange}
        {...register("password", { required: true })}
      />
      {errors.password && <span>This field is required</span>}

      <Button variant="primary" type="submit">
        Log in
      </Button>
    </form>
  );
}

export default Login;