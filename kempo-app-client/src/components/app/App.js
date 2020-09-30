import React from 'react';
import { Router, Route } from "react-router-dom";
import history from "../../utils/history";
import Home from "../../pages/Home";

import './App.css';


function App() {
  return (
    <Router history={history}>
      <Route path="/" exact component={Home} />
    </Router>
  );
}

export default App;
