// SignUpForm.tsx

import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { signUp } from '../utils/authApi'; // Import signUp function from authApi
import '../styles/SignUpForm.css'; // Import CSS file for styling

const SignUpForm = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const [signupError, setSignupError] = useState(null); // State to hold sign-up error

  // Handle form submission
  const onSubmit = async (formData) => {
    try {
      const response = await signUp(formData); // Call signUp API function
      console.log('Sign up successful:', response);
      // Handle successful sign-up, such as redirecting to another page
    } catch (error) {
      console.error('Sign up failed:', error);
      setSignupError(error.message); // Set sign-up error message
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
      <input
        type="text"
        placeholder="Username"
        {...register("username", {
          required: "Username is required",
        })}
      />
      {errors.username && <p className="error-message">{errors.username.message}</p>}


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
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters"
          }
        })}
      />
      {errors.password && <p className="error-message">{errors.password.message}</p>}

      <select {...register("role", { required: "Please select your role" })}>
        <option value="">Select Role</option>
        <option value="ADMIN">Admin</option>
        <option value="USER">User</option>
      </select>
      {errors.role && <p className="error-message">{errors.role.message}</p>}

      {signupError && <p className="error-message">{signupError}</p>} {/* Display sign-up error message */}

      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUpForm;
