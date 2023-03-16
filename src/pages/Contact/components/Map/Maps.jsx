import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

class Maps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mapStyles: {
        width: "100%",
        height: "100%",
      },
    };
  }

  render() {
    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "70vh",
          margin: "2rem 0rem",
        }}
      >
        <Map
          initialCenter={{
            lat: 5.6082444,
            lng: -0.2298956,
          }}
          google={this.props.google}
          style={this.state.mapStyles}
          zoom={12}
        >
          <Marker position={{ lat: 5.6082444, lng: -0.2298956 }} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCTX8KGQanSlggoTYZvD5FQOgKyultTBLo",
})(Maps);
