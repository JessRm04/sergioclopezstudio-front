import React, { useState, useEffect } from 'react'

const UserService = () => {

    $baseUrl = "http://127.0.0.1:8000/api/";

    const [users, setUsers] = useState([]);    

    const getProducts = () => {

        fetch(`${baseUrl}user/${userId}`)
        .then(response => {
            return response.json();
        })
        .then(users => {
     
            setUsers(users);
        });
    };

    useEffect(() => {
        getProducts();
      }, []);

    }

export default UserService;