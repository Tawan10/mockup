import React, { Component } from 'react'

class OrderForm extends Component {
    render() {
        return (
            <div>

        <div className="header">
            <div className="logo"></div>
            <div className="title">
                <div className="line"></div>
                <h2 className="title-text">Fiber to Your Home</h2>
            </div>
            <div className="search"></div>
        </div>
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
                <h3 className="content-h3">Please provide onformation</h3>
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
                                <input type="submit" value="CANCEL" className="submit-style"/>
                                <input type="submit" value="SUBMIT" className="submit-style red-style"/>
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

const headerStyle = {
    color: 'red',
    textAlign: 'center'
  }
  const subheaderStyle = {
    textAlign: 'center'
  }

export default OrderForm