import React, { Component } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Map from './components/map'
import EmailTemplate from "./components/emailtemplate";
import SubmitForm from "./components/submitform";
import OrderForm from './components/order_form';
import SearchBar from './components/search_bar'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <SearchBar />
          <Switch>
            <Route path="/order/submit/email" component={EmailTemplate} />
            <Route path="/order/submit" component={SubmitForm} />
            <Route path="/order/new" component={OrderForm} />
            <Route path="/" component={Map} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
