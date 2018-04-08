import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl"
import '../style/css/mapstyle.css'
const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1Ijoic2hhbmEwNDQiLCJhIjoiY2pmbWdudnRuMHRteTMybnYzZ2ZpNmo4cyJ9.uksnzY30vBr2sJeC1SjHkg"
});

export default class Maps extends Component {

  render() {
    return (
      <div className="container-map">
        <div className="map-style">
          <Map
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
              height: "92vh",
              width: "100vw",
              padding: "0px",
              margin: "0px",
        }}>
            <Layer
              type="symbol"
              id="marker"
              layout={{ "icon-image": "marker-15" }}>
              <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
            </Layer>
          </Map>
          <div className="wapper-buttonOrder" >
            <div className="buttonOrder" style={divStyle}>
                <Link className="btn btn-danger btn-lg sharp" to="/order/new">
                  Order Anyware
                </Link>

            </div>
          </div>

        </div>
        
      </div>
    );
  }
}
const divStyle = {
  textAlign: 'center',
}