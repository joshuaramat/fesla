import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header'
import Menu from './components/Menu';

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
      </div>
    </Router>
  );
}

export default App;
