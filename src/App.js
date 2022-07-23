import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header'

function App() {
  const [menuStatus, setMenuStatus] = useState(false);
  return (
    <Router>
      <div className="App">
        <Header 
          menuStatus={menuStatus} 
          setMenuStatus={setMenuStatus} 
        />
        {/* HeaderBlock */}
      </div>
    </Router>
  );
}

export default App;
