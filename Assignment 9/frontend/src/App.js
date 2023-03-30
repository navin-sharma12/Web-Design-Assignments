import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from './Login/LoginPage';
import MainPage from './Main/MainPage';
import About from './About/About';
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
        <Route path='/' element={<LoginPage handleLogin={handleLogin}/>} exact/>
        { isLoggedIn &&
          <>
          <Route exact path="/main" element={<MainPage/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
          <Route exact path="/jobs" element={<Jobs/>}></Route>
          </>
        }
      </Routes>
    </Router>
  );
}

export default App;