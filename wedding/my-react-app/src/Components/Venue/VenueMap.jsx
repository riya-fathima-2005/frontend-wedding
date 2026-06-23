import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import personMarker from "../../assets/Images/marker.png";


// Fix marker issue (especially Vercel deployment)
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
const userIcon = new L.Icon({
  iconUrl: personMarker,
  iconSize: [35, 35],      // size adjust ചെയ്യാം
  iconAnchor: [17, 35],
  popupAnchor: [0, -30],
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
  position={[userLocation.lat, userLocation.lng]}
  icon={userIcon}
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