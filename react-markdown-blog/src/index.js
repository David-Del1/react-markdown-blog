import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "typeface-raleway";

import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </div>
  </Router>,
  document.getElementById('root')
);
