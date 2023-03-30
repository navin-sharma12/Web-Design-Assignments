import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from './Login/LoginPage';
import MainPage from './Main/MainPage';
import About from './About/About';
import Home from './Main/MainPage';
import Contact from './Contact/Contact';
import Jobs from './Jobs/Jobs';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  function handleLogin() {
    setIsLoggedIn(true)
  }
  return (
    <Router>
      {isLoggedIn && <MainPage/>}
      <Routes>
        <Route path='/' element={<LoginPage handleLogin={handleLogin}/>}></Route>
        { isLoggedIn &&
          <>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/jobs" element={<Jobs/>}></Route>
          </>
        }
      </Routes>
    </Router>
  );
}

export default App;