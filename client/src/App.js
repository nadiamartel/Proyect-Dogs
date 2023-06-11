import './App.css';
import React from 'react';
import { Switch, Route, useLocation } from "react-router-dom";
import Landing from "./components/Landing/Landing.jsx";
import Home from "./components/Home/Home.jsx";
import NavBar from './components/NavBar/NavBar.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';


function App() {

  const location = useLocation();

  return (

    <div className="App">

      { location.pathname === "/" ? undefined : <NavBar/> }

      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/home" component={Home}/>
        <Route path="/detail/:id" component={Detail}/>
        <Route path="/create" component={Form}/>

      </Switch>
    </div>
  );
}

export default App;

