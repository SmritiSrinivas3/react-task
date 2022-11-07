import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
// importing pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
// importing h=navbar and footer since its common to all pages
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  return (

    <div className="App">
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <div className="Content">
        <Routes>
          <Route path="/" component={<Home />}/>
          <Route path="/about" component={<About />}/>
          <Route path='/contact' component={<Contact />}/>
        </Routes>
      </div>
      <Footer/>
    </div>


  );
}

export default App;
