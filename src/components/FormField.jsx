import React from 'react';

// interface FormFieldProps {
//   label: string;
//   type: string;
//   name: string;
//   options?: string[];
// }

const FormField = ({ label, type, name, options }) => {
  return (
    <div>
      <label>{label}</label>
      {type === 'select' ? (
        <select name={name}>
          {options && options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      ) : type === 'radio' ? (
        options && options.map((option, index) => (
          <div key={index}>
            <input type="radio" id={option} name={name} value={option} />
            <label htmlFor={option}>{option}</label>
          </div>
        ))
      ) : (
        <input type={type} name={name} />
      )}
    </div>
  );
}

export default FormField;