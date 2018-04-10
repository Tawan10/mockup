import React, { Component } from 'react'
import Logo from '../image/30120940_1592305674178853_152744683_n.png'
import '../style/css/search_bar.css'


class SearchBar extends Component {
    render() {
        return (
            <div className="id">
                <nav className="wapper-header navbar navbar-light bg-light justify-content-start">
                <div className="logo-box">
                    <img src={Logo} style={{width:" 100%", height: "100%"}}/>
                </div>
                    <a className="navbar-brand text-fiber p-2">Fiber To Your Home</a>
                    <form className="form-inline ml-auto p-2">
                        <input className="form-control " type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-danger " type="submit"><i class="fa fa-search"></i></button>
                    </form>
                </nav>
            </div>   
        )
    }
}
export default SearchBar
