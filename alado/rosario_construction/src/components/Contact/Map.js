import React from 'react';
import { compose } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
} from "react-google-maps";
import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel';
const demoFancyMapStyles = require("./map_style.json"); 

const MapWithAMarker = compose(withScriptjs, withGoogleMap)(props =>
    <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: 35.113281, lng: -106.621216 }}
        defaultOptions={{ styles: demoFancyMapStyles }} >
        <MarkerWithLabel
            position={{ lat: 35.113281, lng: -106.621216 }}
            labelAnchor={new google.maps.Point(0, 0)}>
            <div></div>
        </MarkerWithLabel>
    </GoogleMap>
);

export default MapWithAMarker;