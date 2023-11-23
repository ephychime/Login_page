import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FormPage = () => {
  const [formInput, setFormInput] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email and password are correct
    if (formInput.email === 'admin@mail.com' && formInput.password === 'password') {
      // Display toast message for successful login
      toast.success('Welcome to your homepage', { autoClose: 1000 });
    } else {
      // Display toast message for invalid login
      toast.error('Invalid email or password', { autoClose: 1000 });
    }
   
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
    <img src="https://i.imgur.com/yXOvdOSs.jpg" className="image"/>
        <h1 className="heading">Welcome back</h1>
        <div className="input-container">
          <input
            name="email"
            required
            type="text"
            placeholder="Email"
            onChange={handleChange}
         className="input-box" />
        </div>
        <div>
          <input
            name="password"
            required
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="input-box"
          />
        </div>
        <p className="f-password">Forgot your password?</p>
        <button type="submit" className="btn">LOGIN</button>
        <div className="last-text">Don't have an account? <button type="submit" className="sign">Sign Up</button></div>
      </form>
      {/* Add the ToastContainer to display toast messages */}
      <ToastContainer />
    </div>
  );
};

export default FormPage;



