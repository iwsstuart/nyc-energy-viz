import React from 'react';
// import MapboxGl from 'mapbox-gl/dist/mapbox-gl.js';
// TODO: look into importing MapboxGL like above and using this appproach -
// https://engineering.door2door.io/a-single-page-application-with-react-and-mapbox-gl-f96181a7ca7f
import { Segment } from 'semantic-ui-react';
import ReactMapboxGl from 'react-mapbox-gl';

const Map = () => {
  const mapContainerStyle = {
    height: '100%',
    overflow: 'auto',
    marginTop: '0',
    padding: '0',
    backgroundColor: '#d0d0d0',
  };

  return (
    <Segment
      basic
      style={mapContainerStyle}
    >
      <ReactMapboxGl
        style="mapbox://styles/mapbox/light-v9" // eslint-disable-line
        accessToken="pk.eyJ1IjoiaXdzc3R1YXJ0IiwiYSI6InNaNzMzVXMifQ.OFDL1zM5OjRUHcL_Y5htCA"
        center={[-73.87, 40.74]}
        containerStyle={{
          height: '100vh',
          width: '100vw',
        }}
      />
    </Segment>
  );
};

export default Map;
