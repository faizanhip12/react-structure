// Navigation.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navigation.css"

// interface NavigationProps {
//   customLinks?: { to: string, label: string }[];
// }


const Navigation = ({ customLinks }) => {
  const navigationLinks = [
    { to: "/signin", label: "Sign In" },
    { to: "/signup", label: "Sign Up" },
  ];

  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li><Link to="/signin" className="navigation-link">Sign In</Link></li>
        <li><Link to="/signup" className="navigation-link">Sign Up</Link></li>
        {customLinks && customLinks.map((link, index) => (
          <li key={index}><Link to={link.to} className="navigation-link">{link.label}</Link></li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;