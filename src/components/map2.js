import React from "react";
import FaAnchor from 'react-icons/lib/fa/anchor'
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import { Link } from "react-router-dom";
import '../style/css/style.css'
1
const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `47vw` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 17.964133, lng: 102.609449 }}>
    <Marker
      position={{ lat: 17.964133, lng: 102.609449 }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && (
        <InfoWindow onCloseClick={props.onToggleOpen}>
          <FaAnchor />
        </InfoWindow>
      )}
    </Marker>
  </GoogleMap>
));

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  render() {
    return (
      <div className="container-map">
      <div className="centerMarker"></div>
        <div className="map-style">
          <MyMapComponent
            isMarkerShown={this.state.isMarkerShown}
            onMarkerClick={this.handleMarkerClick}
          />
          <div className="wapper-buttonOrder">
            <div className="buttonOrder" style={divStyle}>
              <Link className="btn btn-danger btn-lg " to="/order/new">
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
  textAlign: "center"
};
export default MyFancyComponent;
