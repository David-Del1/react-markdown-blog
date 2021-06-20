import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "typeface-raleway";

import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './pages/Home';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
    </div>
  </Router>,
  document.getElementById('root')
);
