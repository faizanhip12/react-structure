import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import { useState } from 'react';

import SignInPage from './pages/SignInForm';
import SignUpPage from './pages/SignUpForm';
import Dashboard from './pages/dashboard/index';
import PrivateRoute from './route/PrivateRoute';
import Navigation from './components/Navigation';
import Topbar from './global/Topbar';
import Sidebar from './global/Siderbar';

import './App.css';

function App() {
  const user = localStorage.getItem("user")
  const token = localStorage.getItem("token")
  // const user = JSON.stringify(localStorage.getItem("user"))
  // const token = JSON.stringify(localStorage.getItem("token"))

  // const user = JSON.parse(localStorage.getItem("user"))
  // const token = JSON.parse(localStorage.getItem("token"))

  console.log("useruser App App",user)
  console.log("tokentoken ",token)
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const navigationLinks = [
    { to: '/signin', label: 'Sign In' },
    { to: '/signup', label: 'Sign Up' },
  ];

  return (
    <AuthProvider>
      {/* <Router> */}
      {!user && !token && <Navigation navigationLinks={navigationLinks} />}
      <Routes>
      
      {!user && !token && <Route path="/signin" element={<SignInPage />} />}
      {!user && !token && <Route path="/signup" element={<SignUpPage />} />}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute roles={['ADMIN', 'USER']}>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
      {/* <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              <div> */}
      {/* <Routes>
                  <Route
                      path="/dashboard"
                      element={
                        <PrivateRoute roles={['admin', 'user']}>
                          <Dashboard />
                        </PrivateRoute>
                      }
                    />
                </Routes> */}
      {/* </div>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider> */}

      {/* </Router> */}
    </AuthProvider >
  );
}

export default App;
