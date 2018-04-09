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
                <div className="radio-wapper">
                  <form>
                    <label className="radio-box">
                      <input
                        type="radio"
                        name="gender"
                        value="Plan 1 70 Mbps"
                        className="this-radio"
                      />
                      <p className="text-radio">Plan 1 70 Mbps</p>

                      <p className="sub-text-radio">FIBER Speed All-in-One</p>
                    </label>

                    <label className="radio-box">
                      <input
                        type="radio"
                        name="gender"
                        value="Plan 1 70 Mbps"
                        className="this-radio"
                      />
                      <p className="text-radio">Plan 1 70 Mbps</p>
                      <p className="sub-text-radio">FIBER Speed All-in-One</p>
                    </label>

                    <label className="radio-box">
                      <input
                        type="radio"
                        name="gender"
                        value="Plan 2 70 Mbps"
                        className="this-radio"
                      />
                      <p className="text-radio">Plan 2 70 Mbps</p>
                      <p className="sub-text-radio">
                        FIBER Speed Entertainment
                      </p>
                    </label>

                    <label className="radio-box">
                      <input
                        type="radio"
                        name="gender"
                        value="Plan 3 35 Mbps"
                        className="this-radio"
                      />
                      <p className="text-radio">Plan 3 35 Mbps</p>
                      <p className="sub-text-radio">FIBER Speed Home</p>
                    </label>
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
