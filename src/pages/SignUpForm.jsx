// SignUpForm.tsx

import React, { useState } from 'react';
import FormField from '../components/FormField';
import '../styles/SignUpForm.css'; // Import CSS file for styling

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    country: '',
    gender: '',
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    console.log("handleSubmithandleSubmithandleSubmithandleSubmit")
    e.preventDefault();

    // Perform form validation
    const validationErrors= {};
    if (!formData.username.trim()) {
      validationErrors.username = 'Username is required';
    }
    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    }
    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    }
    if (!formData.country.trim()) {
      validationErrors.country = 'Country is required';
    }
    if (!formData.gender.trim()) {
      validationErrors.gender = 'Gender is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If validation passes, submit the form data to the API (replace with actual API call)
    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Form submitted successfully');
        // Reset form data after successful submission
        setFormData({
          username: '',
          email: '',
          password: '',
          country: '',
          gender: '',
        });
        setErrors({});
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e) => {
    console.log("e",e)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <FormField
          label="Username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="form-field"
          errorMessage={errors.username}
        />
        <FormField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-field"
          errorMessage={errors.email}
        />
        <FormField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="form-field"
          errorMessage={errors.password}
        />
        <FormField
          label="Country"
          type="select"
          name="country"
          options={['', 'USA', 'Canada', 'UK', 'Australia']}
          value={formData.country}
          onChange={handleChange}
          className="form-field select-field"
          errorMessage={errors.country}
        />
        <div className="form-field radio-container">
          <span className="label">Gender:</span>
          {['Male', 'Female', 'Other'].map((option) => (
            <label key={option} className="radio-label">
              <input
                type="radio"
                name="gender"
                value={option}
                checked={formData.gender === option}
                onChange={handleChange}
              />{' '}
              {option}
            </label>
          ))}
          {errors.gender && <span className="error-message">{errors.gender}</span>}
        </div>
        <button type="submit" className="submit-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
