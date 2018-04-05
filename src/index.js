import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import EmailTemplate from "./components/emailtemplate";
import SubmitForm from "./components/submitform";
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
        <Route path="/order/submit/email" component={EmailTemplate} />
        <Route path="/order/submit" component={SubmitForm} />
        <Route path="/order/new" component={OrderForm} />
        <Route path="/" component={App} />
      </Switch>

    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
