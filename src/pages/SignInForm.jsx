
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import {signUp} from '../utils/authApi'
import '../styles/SignInForm.css'; // Import CSS file for styling



const SignInForm = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const [loginError, setLoginError] = useState(null); // State to hold login error

  // Handle form submission
  const onSubmit = async (formData) => {
    try {
      const response = await signUp(formData); // Call login API function
      console.log('Login successful:', response);
      // Handle successful login, such as setting user session or redirecting
    } catch (error) {
      console.error('Login failed:', error);
      setLoginError(error.message); // Set login error message
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="signin-form">
      <input
        type="email"
        placeholder="Email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address"
          }
        })}
      />
      {errors.email && <p className="error-message">{errors.email.message}</p>}

      <input
        type="password"
        placeholder="Password"
        {...register("password", {
          required: "Password is required",
          validate: value => value !== "admin" || "Nice try!"
        })}
      />
      {errors.password && <p className="error-message">{errors.password.message}</p>}

      {loginError && <p className="error-message">{loginError}</p>} {/* Display login error message */}
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignInForm;