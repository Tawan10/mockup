import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import OrderForm from './components/order_form';
import SearchBar from './components/search_bar'
import App from './components/app'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
    <SearchBar/>
      <Switch>
        <Route path="/order/new" component={OrderForm} />
        <Route path="/" component={App} />
      </Switch>

    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
