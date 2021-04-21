import React from 'react';
import Navbar from './Components/Navbar';
import Contacts from './Components/Contacts';
import './styles/App.scss';
import {Provider} from "react-redux";
import store from './store';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import CreateContact from './Components/CreateContact';

function App() {
  return (
    <Provider store={store}> 
       <Router>
        <Navbar/>
        <div className="container">
          <div className="py-3">
            <Switch>
              <Route exact path="/" component={Contacts}/>
              <Route exact path="/createContact" component={CreateContact}/>
            </Switch>
          </div>
        </div>
       </Router>
    </Provider>
  );
}

export default App;
