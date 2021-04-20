import React from 'react';
import Navbar from './Components/Navbar';
import Contact from './Components/Contacts';
import './styles/App.scss';
import {Provider} from "react-redux";
import store from './store';

function App() {
  return (
    <Provider store={store}> 
        <Navbar/>
        <div className="container">
          <div className="py-3">
            <Contact/>
          </div>
        </div>
    </Provider>
  );
}

export default App;
