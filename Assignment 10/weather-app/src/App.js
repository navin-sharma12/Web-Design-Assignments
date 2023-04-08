import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MainPage from "./Components/MainPage/main.js"
import Weather from "./Components/WeatherPage/weather.js"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/main" element={<MainPage/>}></Route>
        <Route exact path="/weather" element={<Weather/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
