import React, { useState, useEffect } from 'react';

const UserService = () => {

  const baseUrl = 'http://127.0.0.1:8000/api/';

  const [users, setUsers] = useState([]);

  const getUser = (userId) => {
    fetch(`${baseUrl}register/`)
      .then(response => {
        return response.json();
      })
      .then(users => {
        setUsers(users);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

};

export default UserService;