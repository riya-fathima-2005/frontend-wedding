import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function VenueMap({ venues, userLocation }) {

  if (!userLocation) return null;

  return (
    <MapContainer
      center={[userLocation.lat, userLocation.lng]}
      zoom={10}
      style={{ height: "500px", width: "100%" }}
    >

      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* User location */}
      <Marker position={[userLocation.lat, userLocation.lng]}>
        <Popup>You are here</Popup>
      </Marker>

      {/* Venue markers */}
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
            <br />
            {venue.location}
          </Popup>
        </Marker>
      ))}

    </MapContainer>
  );
}

export default VenueMap;