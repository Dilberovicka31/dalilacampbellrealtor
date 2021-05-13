import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    bottom:"10px",
    position:"absolute",
    flex: "justify-content-center",
  width: '700px',
  height: '400px'
};

const center = {
  lat: 46.2621250486355,
  lng: -119.25413566961782

  
};

function GoogleMaps() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyARqAQsa7oxBn9RDMFtz6GHO8-KVMfz7hQ"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(GoogleMaps)