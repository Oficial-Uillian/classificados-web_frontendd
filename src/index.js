import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from '../src/paginas/home';
import Login from '../src/paginas/conta/login';
import ResetarSenha from'../src/paginas/conta/resetarsenha'

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const rotas = (
  <Router>
    <Switch>
     <Route path='/' exact component={Login} />
    <Route path='resetarsenha' component= {ResetarSenha} />
    <Route path= '/' exact component={Home}/>
    </Switch>
  </Router>
)

ReactDOM.render(
 rotas,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
