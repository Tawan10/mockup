import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-danger" to="/order/new">
            Order Anyware
          </Link>
        </div>
      </div>
    );
  }
}