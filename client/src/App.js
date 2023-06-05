import './App.css';
import React from 'react';
import { Switch, Route, useLocation } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import NavBar from './components/NavBar/NavBar';


function App() {

  const location = useLocation();

  return (

    <div className="App">

      { location.pathname === "/" ? undefined : <NavBar/> }

      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/home" component={Home}/>

      </Switch>
    </div>
  );
}

export default App;

