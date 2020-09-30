import React from 'react';
import { Router, Route } from "react-router-dom";
import history from "../../utils/history";
import './App.css';


function App() {
  return (
    <Router history={history}>
      Test
    </Router>
  );
}

export default App;
