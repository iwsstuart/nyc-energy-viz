import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { Segment } from 'semantic-ui-react';

const cartoLightTiles = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png';
const basicAttr = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
const mapCenter = [40.74, -73.95];
const zoomLevel = 12;

const mapContainerStyle = {
  height: '100%',
  overflow: 'auto',
  marginTop: '0',
  padding: '0',
  backgroundColor: '#d0d0d0',
};

const LeafletMap = () => (
  <Segment
    basic
    style={mapContainerStyle}
  >
    <Map
      center={mapCenter}
      zoom={zoomLevel}
      style={{ height: '100%' }}
    >
      <TileLayer
        attribution={basicAttr}
        url={cartoLightTiles}
      />

    </Map>
  </Segment>
);

export default LeafletMap;
