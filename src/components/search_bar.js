import React, { Component } from 'react'
import Logo from '../image/30120940_1592305674178853_152744683_n.png'

class SearchBar extends Component {
    render() {
        return (
            <div className="id">
                <nav className="navbar navbar-light bg-light justify-content-between">
                <small><img src={Logo} width="50%" hight="50%"/></small>
                    <a className="navbar-brand">Fiber To Your Home</a>
                    <form className="form-inline">
                        <input className="form-control " type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-danger " type="submit"><i class="fa fa-search"></i></button>
                    </form>
                </nav>
            </div>   
        )
    }
}
export default SearchBar
