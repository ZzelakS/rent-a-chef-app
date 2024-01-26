import React from 'react';
import LandingPage from './components/LandingPage';
import SignUp from './components/SignUp';
// import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import LoginPage from './components/Login'
import { Login } from '@mui/icons-material';



function App() {
  return (
    <div>
      <Router>
        {/* <AuthProvider> */}
          <Routes>
            <Route exact path='/' Component={LandingPage} />
            <Route exact path='/login' Component={LoginPage} />
            <Route path='/signup' Component={SignUp} />
            <Route path='/splashscreen' Component={SplashScreen} />
          </Routes>
        {/* </AuthProvider> */}
      </Router>
    </div>
  )
}


export default App;
