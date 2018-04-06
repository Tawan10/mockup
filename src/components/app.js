import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl"

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1Ijoic2hhbmEwNDQiLCJhIjoiY2pmbWdudnRuMHRteTMybnYzZ2ZpNmo4cyJ9.uksnzY30vBr2sJeC1SjHkg"
});

export default class App extends Component {

  render() {
    return (
      <div>
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "75vh",
            width: "45vw",
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
        <div className="text-xs-right" style={divStyle}>
          <Link className="btn btn-danger btn-lg sharp" to="/order/new">
            Order Anyware
          </Link>
        </div>
      </div>
    );
  }
}
const divStyle = {
  textAlign: 'center',
}