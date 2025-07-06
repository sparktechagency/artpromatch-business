import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect, useRef } from "react";

const Map = ({ location }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!location) return;

    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("map");
      const { Marker } = await loader.importLibrary("marker");

      const position = {
        lng: location.lng,
        lat: location.lat,
      };

      const mapOptions = {
        center: position,
        zoom: 15,
        mapId: "MY_NEXTJS_MAPID",
      };

      const map = new Map(mapRef.current, mapOptions);

      new Marker({
        map: map,
        position: position,
      });
      initMap();
    };
  }, [location]);

  return <div style={{ height: "10px" }} ref={mapRef}></div>;
};

export default Map;
