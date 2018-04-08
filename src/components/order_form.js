import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../style/css/style.css'
import Popup from "reactjs-popup";
import EmailTemplate from '../image/06EmailTemplate.jpg'

class OrderForm extends Component {
    render() {
        return (
            <div>
            <div className="container">
        <div className="wapper">
            
            <div className="text-all">
              <h1 className="h1-text">LTC FIBER SERVICE</h1>
              <h3 className="h3-text">FIBER SERVICE ORDER</h3>
            </div>
            <div className="fram-all">
                <div className="container-content">
                    <h3 className="content-h3">Choose your Fiber service packages</h3>
                    <div className="radio-wapper">
                        <form>

                                        <label className="radio-box">
                                                <input type="radio" name="gender" value="male" className="this-radio" /> 
                                                <p className="text-radio">Plan 1 70 Mbps</p>

                                                <p className="sub-text-radio">FIBER Speed All-in-One</p>
                                        </label>

                                        <label className="radio-box">
                                                <input type="radio" name="gender" value="male" className="this-radio" /> 
                                                <p className="text-radio">Plan 1 70 Mbps</p>
                                                <p className="sub-text-radio">FIBER Speed All-in-One</p>
                                        </label>

                                        <label className="radio-box">
                                                <input type="radio" name="gender" value="male" className="this-radio" />
                                                <p className="text-radio">Plan 2 70 Mbps</p>
                                                <p className="sub-text-radio">FIBER Speed Entertainment</p>
                                        </label>

                                        <label className="radio-box">
                                                <input type="radio" name="gender" value="male" className="this-radio" />
                                                <p className="text-radio">Plan 3 35 Mbps</p>
                                                <p className="sub-text-radio">FIBER Speed Home</p>
                                        </label>

                        </form> 
                    </div>
                <h3 className="content-h3">Please provide information</h3>
                <div  className="input-all">
                    <form action="#">
                       <div className="history">
                            <div className="first-last">
                                <div className="box-first-last">
                                        <p className="last-text"> First name:</p>
                                    <input type="text" name="firstname"  className="input-style"/>
                                </div>
                                <div className="box-first-last ">
                                               <p className="last-text text-rigth"> Last name:</p>
                                                <input type="text" name="lastname"  className="input-style text-rigth"/>
                                </div>
                            </div>
                            <div className="address">
                                    <p className="add-text"> Address:</p>
                                    <input type="text" name="address"  className="address-style"/>
                            </div>
                            <div className="email">
                                    <div className="box-first-last">
                                            <p className="last-text"> Email:</p>
                                        <input type="text" name="email"  className="input-style"/>
                                    </div>
                                    <div className="box-first-last ">
                                                   <p className="last-text text-rigth"> Tel:</p>
                                                    <input type="text" name="tel"  className="input-style text-rigth"/>
                                    </div>
                            </div>
                               
                              
                        </div>
                        <div className="location">
                                <h3 className="location-content-h3">Your inquiry location</h3>
                                <div className="this-map">

                                </div>
                        </div>
                        <div className="submit-all">
                        <Link className="submit-style" to="/">
                            CANCEL
                        </Link>
                        <Popup trigger={
                        <button className="submit-style red-style"> Submit </button>
                        // <Link className="submit-style red-style" to="/order/submit">
                        //         Submit
                        // </Link>
                    } modal>
                        {close => (
                            <img src={EmailTemplate} hight="100%" width="90%" alt="" />
                           
                        )}
                          </Popup>
                            
                        </div>
                    </form> 
                </div>    
                </div>
            </div>
        </div>
        
            </div>
    </div>
    
        )
    }
}

export default OrderForm