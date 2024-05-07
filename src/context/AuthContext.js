import React, { createContext, useState, useContext } from 'react';


const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
  
    const login = (userData, authToken) => {
      setUser(userData);
      setToken(authToken);
      // Save user and token to local storage
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('token', authToken);
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        // Clear user and token from local storage
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      };
    
      return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
          {children}
        </AuthContext.Provider>
      );
    };
