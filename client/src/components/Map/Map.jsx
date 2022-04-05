import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = (props) => {
  const center = {lat: props.location.lat, lng: props.location.lng}
  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center}>
        <Popup>{props.location.address}</Popup>
      </Marker>{" "}
    </MapContainer>
  );
};

export default Map;
