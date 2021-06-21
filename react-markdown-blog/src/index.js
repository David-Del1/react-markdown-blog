import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './pages/Home';
import Post from './pages/Post';
import Error from './pages/Error';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/404" component={Error} />
      <Route exact path="/post/:id" render={props => <Post {...props}/>} />
    </div>
  </Router>,
  document.getElementById('root')
);
