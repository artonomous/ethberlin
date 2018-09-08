import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import './index.css';
import App from './App';
import Generators from './Generators';

ReactDOM.render(
  <div>
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={App} />
        <Route exact path="/generators" component={Generators} />
      </div>
    </Router>
  </div>,
  document.getElementById('root'));
