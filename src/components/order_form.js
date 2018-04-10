import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "../style/css/style.css";
import Popup from "reactjs-popup";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1Ijoic2hhbmEwNDQiLCJhIjoiY2pmbWdudnRuMHRteTMybnYzZ2ZpNmo4cyJ9.uksnzY30vBr2sJeC1SjHkg"
});


class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      firstname: "",
      lastname: "",
      address: "",
      email: "",
      tel: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

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
                <h3 className="content-h3">
                  Choose your Fiber service packages
                </h3>

                <div className="radio-wapper ">
                  <form className="row d-flex ">
                  
                    <div className="radio-box col-xs-12 col-md-6 d-flex justify-content-start ">
                      <label className="">
                      <div className="all-input p-2">
                        <input
                            type="radio"
                            name="gender"
                            value="Plan 1 70 Mbps"
                            className=""
                        />
                      </div>
                  
                          <div className=" all-text p-2">
                          <p className="text-radio">Plan 1 70 Mbps</p>
                          <p className="sub-text-radio">FIBER Speed All-in-One</p>
                          
                         </div>

                      </label>
                    </div>
                    <div className="radio-box col-xs-12 col-md-6 d-flex justify-content-start ">
                      <label className="">
                      <div className="all-input p-2">
                        <input
                            type="radio"
                            name="gender"
                            value="Plan 1 70 Mbps"
                            className=""
                        />
                      </div>
                  
                          <div className=" all-text p-2">
                          <p className="text-radio">Plan 1 70 Mbps</p>
                          <p className="sub-text-radio">FIBER Speed All-in-One</p>
                          
                         </div>

                      </label>
                    </div>
                    <div className="radio-box col-xs-12 col-md-6 d-flex justify-content-start ">
                      <label className="">
                      <div className="all-input p-2">
                        <input
                            type="radio"
                            name="gender"
                            value="Plan 1 70 Mbps"
                            className=""
                        />
                      </div>
                  
                          <div className=" all-text p-2">
                          <p className="text-radio">Plan 1 70 Mbps</p>
                          <p className="sub-text-radio">FIBER Speed All-in-One</p>
                          
                         </div>

                      </label>
                    </div>
                    <div className="radio-box col-xs-12 col-md-6 d-flex justify-content-start ">
                      <label className="">
                      <div className="all-input p-2">
                        <input
                            type="radio"
                            name="gender"
                            value="Plan 1 70 Mbps"
                            className=""
                        />
                      </div>
                  
                          <div className=" all-text p-2">
                          <p className="text-radio">Plan 1 70 Mbps</p>
                          <p className="sub-text-radio">FIBER Speed All-in-One</p>
                          
                         </div>

                      </label>
                    </div>


                    

                  </form>

                </div>
                <h3 className="content-h3">Please provide information</h3>
                <div className="input-all">
                  <form action="#">
                    <div className="history">
                      <div className="first-last">
                        <div className="box-first-last">
                          <p className="last-text"> First name:</p>
                          <input
                            type="text"
                            name="firstname"
                            className="input-style"
                          />
                        </div>
                        <div className="box-first-last ">
                          <p className="last-text text-rigth"> Last name:</p>
                          <input
                            type="text"
                            name="lastname"
                            className="input-style text-rigth"
                          />
                        </div>
                      </div>
                      <div className="address">
                        <p className="add-text"> Address:</p>
                        <input
                          type="text"
                          name="address"
                          className="address-style"
                        />
                      </div>
                      <div className="email">
                        <div className="box-first-last">
                          <p className="last-text"> Email:</p>
                          <input
                            type="text"
                            name="email"
                            className="input-style"
                          />
                        </div>
                        <div className="box-first-last ">
                          <p className="last-text text-rigth"> Tel:</p>
                          <input
                            type="text"
                            name="tel"
                            className="input-style text-rigth"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="location">
                      <h3 className="location-content-h3">
                        Your inquiry location
                      </h3>
                      <div className="this-map">
                        <div className="container-map">
                          <div className="map-style">
                            <Map
                              style="mapbox://styles/mapbox/streets-v9"
                              containerStyle={{
                                height: "14vh",
                                width: "17vw",
                                padding: "0px",
                                margin: "0px"
                              }}
                            >
                              <Layer
                                type="symbol"
                                id="marker"
                                layout={{ "icon-image": "marker-15" }}
                              >
                                <Feature
                                  coordinates={[
                                    -0.481747846041145,
                                    51.3233379650232
                                  ]}
                                />
                              </Layer>
                            </Map>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="submit-all">
                      <Link className="submit-style" to="/">
                        CANCEL
                      </Link>
                      <Popup
                        trigger={
                          <button className="submit-style red-style">
                            {" "}
                            Submit{" "}
                          </button>
                          // <Link className="submit-style red-style" to="/order/submit">
                          //         Submit
                          // </Link>
                        }
                        modal
                      >
                        {close => (
                          <div>
                            <h2 style={submitStyle}>CONFIRM</h2>
                            <h3>FIBER SERVICE ORDER</h3>
                            <div style={tableStyle}>
                            <table>
                              <tr>
                                <td><b>First Name:</b></td>
                                <td>Poomin T.</td>
                              </tr>
                              <tr>
                              <td><b>Last Name:</b></td>
                                <td>Chumyen</td>
                              </tr>
                              <tr>
                              <td><b>Address:</b></td>
                                <td>32nd Floor, Athenee Tower, 63 Wireless Road, Lumpini, <br/>Pathuwan, Bangkok 10330 Thailand</td>
                              </tr>
                              <tr>
                              <td><b>Email:</b></td>
                                <td>PoominT@hotmail.com</td>
                              </tr>
                              <tr>
                              <td><b>Tel:</b></td>
                                <td>0898769765</td>
                              </tr>
                              <tr>
                              <td><b>Inquiry Location:</b></td>
                                <td>17.964133 102.609449</td>
                              </tr>
                              <b>We Send you emails to confirm your order and to nitify you when you order has shipped</b>
                            </table>
                            <div className="submit-all">
                            <Link className="submit-style" to="/">
                              CANCEL
                            </Link>
                            <Link className="submit-style red-style" to="/">
                              CONFIRM
                            </Link>
                            </div>
                            </div>
                          </div>
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
    );
  }
}

export default OrderForm;
const submitStyle = {
  color: "red"
};

const tableStyle = {
  textAlign: "center"
};