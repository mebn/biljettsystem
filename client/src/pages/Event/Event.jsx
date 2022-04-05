import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import EventInfo from "../../components/EventInfo/EventInfo";
import Button from "../../components/Button/Button";
import Map from "../../components/Map/Map";
import ReactMarkdown from "react-markdown";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const exampleEventInfo = {
  longtitle: "Loading...",
  location: "Loading...",
  address: "Loading...",
  locationurl: "https://maps.google.com/",
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
          coordinates: {
            lat: data.coordinates.x,
            lng: data.coordinates.y,
          },
        };
        setEventInfo(formatted);
      });
  }, [eventIdParam]);

  return (
    <div className="md:flex flex-row md:max-w-6xl justify-center mr-auto ml-auto">
      <div className="md:border-r-2 px-0 md:px-6">
        <img src="/public/images/eventBanner.jpeg" />
        <div className="flex flex-col px-7 py-6 mb-20 md:px-0 ">
          <div className="md:hidden">
            <h1 className="text-2xl font-medium pb-2">{eventInfo.longtitle}</h1>
            <div className="border-b-2 border-t-2 py-2">
              <EventInfo
                coordinateslink={eventInfo.locationurl}
                address={eventInfo.address}
                date={eventInfo.date}
              />
            </div>
          </div>
          <ReactMarkdown
            children={eventInfo.description}
            className="py-4 prose max-w-none prose-sm md:prose-lg"
          />
          <div className="w-full h-72 md:hidden">
            {eventInfo.coordinates ? <Map eventInfo={eventInfo} /> : null}
          </div>
        </div>
      </div>
      <div
        className="flex flex-col justify-center fixed bottom-0 right-0 left-0 h-20 px-6 bg-gray-100 border-t-2 z-[2000]
                    md:sticky md:h-full md:top-0 md:w-80 lg:w-96  md:left-auto md:shrink-0  md:bg-white
                    md:justify-start md:py-10 md:border-t-0"
      >
        <div className="hidden md:block">
          <h1 className="text-2xl font-medium pb-4">{eventInfo.longtitle}</h1>
          <div className="border-b-2 border-t-2 py-4 mb-4">
            <EventInfo
              coordinateslink={eventInfo.locationurl}
              address={eventInfo.address}
              date={eventInfo.date}
            />
          </div>
          <div className="h-60 pb-4">
            {eventInfo.coordinates ? <Map eventInfo={eventInfo} /> : null}  
          </div>
        </div>
        <div className="flex flex-row justify-between md:flex-col md:gap-2">
          <div className="flex flex-col justify-center md:flex-row md:justify-start md:align-middle md:gap-1">
            <div className="">Priser från:</div>
            <div className="font-bold text-lg md:text-base">
              {eventInfo.price} kr
            </div>
          </div>
          <Button text="Biljetter" to={`/event/${params.eventId}/book`} />
        </div>
      </div>
    </div>
  );
};

export default Event;
