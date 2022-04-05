import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = (props) => {
  return (
    <MapContainer
      center={props.eventInfo.coordinates}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={props.eventInfo.coordinates}>
        <Popup>{props.eventInfo.address}</Popup>
      </Marker>{" "}
    </MapContainer>
  );
};

export default Map;
