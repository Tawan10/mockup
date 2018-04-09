import React, { Component } from 'react'
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl"

import MyFancyComponent from './map2'
import Emailtemplate from './emailtemplate'
import OrderForm from './order_form'
import SubmitForm from './submitform'
import Maps from './map'
import SearchBar from './search_bar'
import '../style/css/mapstyle.css'


export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div>
      <SearchBar/>
        <Switch>
          <Route path="/order/submit/email" component={Emailtemplate} />
          <Route path="/order/submit" component={SubmitForm} />
          <Route path="/order/new" component={OrderForm} />
          <Route path="/" component={MyFancyComponent} />
        </Switch>
  
      </div>
      </BrowserRouter>
    );
  }
}
