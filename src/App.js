import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
      </Routes>

    </Router>
  );
}

export default App;


// We install "npm i concurrently". This node package helps to run backend and frontend at the same time means we can use "npm start" and "nodemon backend/index.js" simultaneously in one terminal instead of using separate terminals. Also add ["both": "concurrently \"npm start\" \"nodemon backend/index.js\""] in package.json scripts such that we can use command "npm run both" to start both frontend and backend at the same time.