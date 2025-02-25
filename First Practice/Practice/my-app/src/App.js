import React from 'react'; 
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
function App() {
  return (
    <>
      <Navbar name="Text Utilis" home="Home" about = "About"/>

      <div className="container">

      <Textform Heading = "Enter The Text To Analyze"/>
      <About/>
      </div>
      
    </>
  );
}

export default App;
