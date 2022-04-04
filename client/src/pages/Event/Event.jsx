import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import EventInfo from "../../components/EventInfo/EventInfo";
import Button from "../../components/Button/Button";
import ReactMarkdown from "react-markdown";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const exampleEventInfo = {
  longtitle: "Loading...",
  location: "Loading...",
  address: "Loading...",
  coordinates: "https://maps.google.com/",
  price: 0,
  date: "Loading...",
  description: "Loading...",
  address: "Loading...",
};

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const Event = () => {
  let params = useParams();
  let eventIdParam = params.eventId;

  const [eventInfo, setEventInfo] = useState(exampleEventInfo);

  useEffect(() => {
    fetch(`/event/${eventIdParam}`)
      .then((res) => res.json())
      .then((data) => {
        const d = new Date(data.starttime);
        const formatted = {
          ...data,
          date: d.toLocaleString("sv-SE", { timeZone: "UTC" }).slice(0, -3),
        };
        setEventInfo(formatted);
      });
  }, [eventIdParam]);

  const position = [51.505, -0.09];

  return (
    <div>
      <img src="/public/images/eventBanner.jpeg" />
      <div className="flex flex-col px-7 py-6 mb-20 ">
        <h1 className="text-2xl font-medium pb-2">{eventInfo.longtitle}</h1>
        <div className="border-b-2 border-t-2 py-2">
          <EventInfo
            coordinateslink={eventInfo.coordinates}
            address={eventInfo.address}
            date={eventInfo.date}
          />
        </div>
        <ReactMarkdown
          children={eventInfo.description}
          className="py-4 prose max-w-none prose-sm md:prose-lg"
        />
        <div className="w-full h-72">
          <MapContainer
            center={position}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                {eventInfo.address}
              </Popup>
            </Marker>{" "}
          </MapContainer>
        </div>
      </div>
      <div className="fixed bottom-0 right-0 left-0 flex flex-row justify-between h-20 px-6 bg-gray-100 border-t-2 z-[2000]">
        <div className="flex flex-col justify-center">
          <div className="">Priser från:</div>
          <div className="font-bold text-lg">{eventInfo.price} kr</div>
        </div>
        <Button text="Biljetter" to={`/event/${params.eventId}/book`} />
      </div>
    </div>
  );
};

export default Event;
