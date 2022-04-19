import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EventInfo from "../../components/EventInfo/EventInfo";
import Map from "../../components/Map/Map";
import ReactMarkdown from "react-markdown";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import PurchasePopup from "../../components/PurchasePopup/PurchasePopup";
import Popup from "../../components/Popup/Popup";

const exampleEventInfo = {
  longTitle: "Loading...",
  address: "Loading...",
  locationUrl: "https://maps.google.com/",
  price: 0,
  date: "Loading...",
  description: "Loading...",
  location: {},
};

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const examplePurchaseInfo = {
  email: "example@kth.se",
  orderNo: 12873613,
  purchaseSummary: [
    {
      type: "Vuxen",
      number: "x3",
      total: "1797 kr",
    },
    {
      type: "Ungdom",
      number: "x1",
      total: "399 kr",
    },
    {
      type: "VIP",
      number: "x1",
      total: "1099 kr",
    },
  ],
};

L.Marker.prototype.options.icon = DefaultIcon;

const Event = () => {
  let params = useParams();
  let eventIdParam = params.eventId;

  const [purchaseCompletePopup, setPurchaseCompletePopup] = useState(false)

  const [eventInfo, setEventInfo] = useState(exampleEventInfo);

  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
    if(purchaseCompletePopup){
      setPurchaseCompletePopup(!purchaseCompletePopup)
    }
  };

  const togglePurchaseStep = () => {
    setPurchaseCompletePopup(!purchaseCompletePopup)
  }

  useEffect(() => {
    fetch(`/api/event/${eventIdParam}`)
      .then((res) => res.json())
      .then((data) => {
        const d = new Date(data.startTime);
        const formatted = {
          ...data,
          date: d.toLocaleString("sv-SE", { timeZone: "UTC" }).slice(0, -3),
        };
        setEventInfo(formatted);
      });
  }, [eventIdParam]);

  return (
    <div>
      <div
        className={`md:flex flex-row md:max-w-6xl justify-center mr-auto ml-auto ${
          isOpen ? "fixed right-0 left-0" : ""
        }`}
      >
        <div className="md:border-r-2 px-0 md:px-6">
          <img
            className="md:rounded-xl md:mt-8"
            src="/public/images/eventBanner.jpeg"
          />
          <div className="flex flex-col px-7 py-6 mb-20 md:px-0 ">
            <div className="md:hidden">
              <h1 className="text-2xl font-medium pb-2">
                {eventInfo.longTitle}
              </h1>
              <div className="border-b-2 border-t-2 py-2">
                <EventInfo
                  coordinateslink={eventInfo.locationUrl}
                  address={eventInfo.location.address}
                  date={eventInfo.date}
                />
              </div>
            </div>
            <ReactMarkdown
              children={eventInfo.description}
              className="py-4 prose max-w-none prose-sm md:prose-lg"
            />
            <div className="w-full h-72 md:hidden">
              {eventInfo.location.lat ? (
                <Map location={eventInfo.location} />
              ) : null}
            </div>
          </div>
        </div>
        <div
          className="flex flex-col justify-center fixed bottom-0 right-0 left-0 h-20 px-6 bg-gray-100 border-t-2 z-[1000]
                    md:sticky md:h-full md:w-80 lg:w-96  md:left-auto md:shrink-0  md:bg-white
                    md:justify-start md:py-8 md:border-t-0 md:top-[64px]"
        >
          <div className="hidden md:block">
            <h1 className="text-2xl font-medium pb-4">{eventInfo.longTitle}</h1>
            <div className="border-b-2 border-t-2 py-4 mb-4">
              <EventInfo
                coordinateslink={eventInfo.locationUrl}
                address={eventInfo.location.address}
                date={eventInfo.date}
              />
            </div>
            <div className="h-60 pb-4">
              {eventInfo.location.lat ? (
                <Map location={eventInfo.location} />
              ) : null}
            </div>
          </div>
          <div className="flex flex-row justify-between md:flex-col md:gap-2">
            <div className="flex flex-col justify-center md:flex-row md:justify-start md:align-middle md:gap-1">
              <div className="">Priser från:</div>
              <div className="font-bold text-lg md:text-base">
                {eventInfo.price} kr
              </div>
            </div>
            <div className="flex justify-center flex-col">
              <button
                className="shrink bg-btnBG hover:bg-teal-700 rounded-btn text-black font-medium py-3 px-8 transition ease-in-out duration-200"
                onClick={togglePopup}
              >
                Biljetter
              </button>

            </div>
          </div>
        </div>
      </div>
      {isOpen && <Popup handleStep={togglePurchaseStep} purchaseCompletePopup={purchaseCompletePopup}
                        eventInfo={eventInfo} handleClose={togglePopup} examplePurchaseInfo={examplePurchaseInfo}/>
      }
    </div>
  );
};

export default Event;
