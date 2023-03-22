import React, { useState, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const MapContainer = (props) => {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [markers, setMarkers] = useState([]);
  const [location, setLocation] = useState("");

  useEffect(() => {
    getCoordinates();
  }, []);

  const getCoordinates = () => {
    // Use the Google Maps Geocoding API to get the latitude and longitude from the location
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyDXmZlMirmrvz32y0iCAn9kU55Hip3yMjA `
    )
      .then((response) => response.json())
      .then((data) => {
        const { lat, lng } = data.results[0].geometry.location;
        setCoordinates({ lat, lng });
      })
      .catch((error) => console.error(error));
  };

  const addMarker = (props, marker, e) => {
    setMarkers([...markers, { lat: props.lat, lng: props.lng }]);
  };

  const removeMarker = (marker) => {
    setMarkers(markers.filter((m) => m !== marker));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={getCoordinates}>Get Coordinates</button>
      <Map
        google={props.google}
        zoom={8}
        style={{ width: "500px", height: "500px" }}
        initialCenter={coordinates}
      >
        <Marker position={coordinates} onClick={addMarker} />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker} onClick={() => removeMarker(marker)} />
        ))}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDXmZlMirmrvz32y0iCAn9kU55Hip3yMjA"
})(MapContainer);