import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Navigation from './components/Navigation'
import SignInPage from './pages/SignInForm'
import SignUpPage from './pages/SignUpForm'
import './App.css';

function App() {
  const navigationLinks = [
    { to: "/signin", label: "Sign In" },
    { to: "/signup", label: "Sign Up" },
  ];
  return (
    <BrowserRouter>
      <div>
        <Navigation navigationLinks={navigationLinks} />
        <Routes>  {/* Use Routes instead of Router here */}
          <Route path="/signin" element={<SignInPage key="signin" />} />
          <Route path="/signup" element={<SignUpPage key="signup" />} />
          {/* Add more routes here if needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
