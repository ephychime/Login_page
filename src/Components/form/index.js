import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ColorRing } from "react-loader-spinner";
import Dashboard from "../dashboard";


const FormPage = () => {
  const [formInput, setFormInput] = useState({
    email: '',
    password: '',
  });

const [loading, setLoading] = useState(false);
const [verify, setVerify] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

if (
    formInput.email === "admin@mail.com" &&
    formInput.password === "password"
  ) {
    
    setLoading(true);

    setTimeout(() => {
      
      setLoading(false);
      setVerify(true);
    }, 1000);
  } else {
 
    toast.error("Wrong email or password",  { autoClose: 1500 })
  }
  };

  return (
    <div className="container">
{verify ? (
    <Dashboard />
  ) : (
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
       )}
  
      <ToastContainer />
           {loading && (
        <ColorRing/>
      )}

    </div>
  );
};

export default FormPage;






