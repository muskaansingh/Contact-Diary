import React from 'react';
import Navbar from './Components/Navbar';
import Contact from './Components/Contacts';
import './styles/App.scss';

function App() {
  return (
    <div className="App"> 
      <Navbar/>
      <div className="container">
        <div className="py-3">
          <Contact/>
        </div>
      </div>
    </div>
  );
}

export default App;
