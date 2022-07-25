import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import Header from './components/Header'
import Menu from './components/Menu';
import Home from './components/Home';

function App() {
  const [menuStatus, setMenuStatus] = useState(false);
  return (
    <Router>
      <div className="App">
        <Header 
          menuStatus={menuStatus} 
          setMenuStatus={setMenuStatus} 
        />
        {menuStatus && <Menu />}
        <Home />
      </div>
    </Router>
  );
}

export default App;
