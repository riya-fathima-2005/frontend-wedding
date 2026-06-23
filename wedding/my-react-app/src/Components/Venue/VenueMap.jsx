import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";


// Fix marker issue (especially Vercel deployment)
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});


function VenueMap({ venues, userLocation }) {

  // If location permission not given
  if (!userLocation) return null;

  return (
    <MapContainer
      center={[22.9734, 78.6569]}   // India center
      zoom={5}                      // Full India view
      style={{
        height: "500px",
        width: "100%"
      }}
    >

      {/* Map tiles */}
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Current user location */}
      <Marker
        position={[
          userLocation.lat,
          userLocation.lng
        ]}
      >
        <Popup>
          You are here 📍
        </Popup>
      </Marker>

      {/* All venue locations */}
      {venues.map((venue) => (
        <Marker
          key={venue.id}
          position={[
            venue.latitude,
            venue.longitude
          ]}
        >
          <Popup>
            {venue.venue_name}
          </Popup>
        </Marker>
      ))}

    </MapContainer>
  );
}

export default VenueMap;