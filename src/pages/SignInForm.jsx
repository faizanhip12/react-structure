// SignInForm.tsx

import React from 'react';
import FormField from '../components/FormField';

const SignInForm= () => {
  return (
    <form>
      <FormField label="Email" type="email" name="email" />
      <FormField label="Password" type="password" name="password" />
      <button type="submit">Sign In</button>
    </form>
  );
}

export default SignInForm;