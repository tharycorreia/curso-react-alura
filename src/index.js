import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Autores from './components/Autores'
import Livros from './components/Livros'
import Sobre from './components/Sobre'
import NotFound from './components/NotFound'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={App} />
      <Route path='/sobre' component={Sobre} />
      <Route path='/livros' component={Livros} />
      <Route path='/autores' component={Autores} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'));

serviceWorker.unregister();
