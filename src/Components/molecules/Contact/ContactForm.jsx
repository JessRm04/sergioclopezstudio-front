import React, { useState } from 'react';

function ContactForm() {
  // En construcción: manejar el formulario
//   const [formState, setFormState] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   // Define a handleInputChange function to update the state when the value of the form fields changes
//   function handleInputChange(event) {
//     const target = event.target;
//     const value = target.value;
//     const name = target.name;

//     setFormState(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     // Here you can handle form submission
//   }

  return (
    <form 
    // onSubmit={handleSubmit}
    >
      <label>
        First Name:
        <input
          name="firstName"
          type="text"
        //   value={formState.firstName}
        //   onChange={handleInputChange} 
          />
      </label>
      <br />
      <label>
        Last Name:
        <input
          name="lastName"
          type="text"
        //   value={formState.lastName}
        //   onChange={handleInputChange} 
          />
      </label>
      <br />
      <label>
        Email:
        <input
          name="email"
          type="email"
        //   value={formState.email}
        //   onChange={handleInputChange}
           />
      </label>
      <br />
        <label>
          ¿En qué puedo ayudarte?
          <textarea
            name="message"
            // value={this.state.message}
            // onChange={this.handleInputChange} 
            />
        </label>
        <br />
        <input type="submit" value="submit" />
      </form>
      
    )
};


export default ContactForm;