import { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import ReactMapGL, {
  GeolocateControl,
  NavigationControl,
  FullscreenControl,
} from "react-map-gl";

import Geocoder from "react-map-gl-geocoder";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

import { BsFillLayersFill } from "react-icons/bs";

const UserHome = () => {
  const mapRef = useRef();
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: -7.227906,
    longitude: 107.908699,
    zoom: 14,
  });
  const [isSatelite, setIsSatelite] = useState(false);

  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  const fullscreenControlStyle = {
    right: 90,
    bottom: 34,
  };

  const navControlStyle = {
    right: 10,
    bottom: 30,
  };

  const geolocateStyle = {
    float: "left",
    padding: "15px",
  };

  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides,
      });
    },
    [handleViewportChange]
  );

  return (
    <div className="p-5">
      Home Page User
      <br />
      <ReactMapGL
        {...viewport}
        ref={mapRef}
        width="100%"
        height="500px"
        mapboxApiAccessToken="pk.eyJ1Ijoid2lieS1mYWJpYW4wOCIsImEiOiJja3NzOGsxaTUwdTJnMnhuMWtseDg0dzdtIn0.3dm-Iz6bYwitZVtWF80GUQ"
        // mapStyle="mapbox://styles/mapbox/streets-v11"
        mapStyle={
          isSatelite
            ? "mapbox://styles/mapbox/satellite-v9"
            : "mapbox://styles/mapbox/streets-v11"
        }
        transitionDuration={100}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken="pk.eyJ1Ijoid2lieS1mYWJpYW4wOCIsImEiOiJja3NzOGsxaTUwdTJnMnhuMWtseDg0dzdtIn0.3dm-Iz6bYwitZVtWF80GUQ"
          position="top-right"
        />
        <FullscreenControl style={fullscreenControlStyle} />
        <button
          onClick={() => setIsSatelite(!isSatelite)}
          className="absolute px-2 py-2 mr-2 text-sm font-bold text-gray-900 bg-white border-2 border-gray-300 rounded-md shadow-sm bottom-8 right-10"
        >
          <BsFillLayersFill></BsFillLayersFill>
        </button>
        <NavigationControl style={navControlStyle} />
      </ReactMapGL>
      <Link to="/logout">Logout</Link>
    </div>
  );
};

export default UserHome;
