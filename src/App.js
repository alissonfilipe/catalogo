import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <div className="App">
        <Home />
      </div>


      <Footer />  {/* Footer no mesmo fragmento */}
     
      <div className="scrollable-div">
        {/* imagem */}
      </div>
    </>
  );
}


export default App;


