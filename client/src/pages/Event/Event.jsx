import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EventInfo from "../../components/EventInfo/EventInfo";
import Map from "../../components/Map/Map";
import ReactMarkdown from "react-markdown";
import PurchasePopup from "../../components/PurchasePopup/PurchasePopup";
import Popup from "../../components/Popup/Popup";

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

const EventBody = (props) => (
  <div className="md:border-r-2 px-0 md:px-6">
    <img
      className="md:rounded-xl md:mt-8"
      src={props.eventInfo.eventPictureLink}
    />
    <div className="flex flex-col px-7 py-6 mb-20 md:px-0 ">
      <div className="md:hidden">
        <h1 className="text-2xl font-medium pb-2">
          {props.eventInfo.longTitle}
        </h1>
        <div className="border-b-2 border-t-2 py-2">
          <EventInfo
            coordinateslink={props.eventInfo.locationUrl}
            address={props.eventInfo.location.address}
            date={props.eventInfo.date}
          />
        </div>
      </div>
      <ReactMarkdown
        children={props.eventInfo.description}
        className="py-4 prose max-w-none prose-sm md:prose-lg"
      />
      <div className="w-full h-72 md:hidden">
        {props.eventInfo.location.lat ? (
          <Map location={props.eventInfo.location} />
        ) : null}
      </div>
    </div>
  </div>
);

const LoadingEventBody = () => (
  <div className="animate-pulse md:border-r-2 px-0 md:px-6 md:w-full ">
    <div className="md:rounded-xl md:mt-8 bg-gray-100 w-full h-72 md:h-96" />
    <div className="flex flex-col px-7 py-6 mb-20 md:px-0 ">
      <div className="md:hidden">
        <h1 className="w-52 h-8 bg-gray-100 rounded-full mb-2"></h1>
        <div className="border-b-2 border-t-2 py-2">
          <div className="flex flex-col text-xs gap-2.5 ">
            <div className="w-48 h-3 rounded-full bg-gray-100" />
            <div className="w-40 h-3 rounded-full bg-gray-100" />
          </div>
        </div>
      </div>
      <div className="flex flex-col text-xs gap-2.5 mt-4 ">
        <div className="w-full h-2 rounded-full bg-gray-100" />
        <div className="w-full h-2 rounded-full bg-gray-100" />
        <div className="w-full h-2 rounded-full bg-gray-100" />
        <div className="w-full h-2 rounded-full bg-gray-100" />
        <div className="w-full h-2 rounded-full bg-gray-100" />
      </div>
    </div>
    <div className="w-full h-72 md:hidden"></div>
  </div>
);

const DesktopEventInfo = (props) => (
  <div
    className="flex flex-col justify-center fixed bottom-0 right-0 left-0 h-20 px-6 bg-gray-100 border-t-2 z-[1000]
          md:sticky md:h-full md:w-80 lg:w-96  md:left-auto md:shrink-0  md:bg-white
          md:justify-start md:py-8 md:border-t-0 md:top-[64px]"
  >
    <div className="hidden md:block">
      <h1 className="text-2xl font-medium pb-4">{props.eventInfo.longTitle}</h1>
      <div className="border-b-2 border-t-2 py-4 mb-4">
        <EventInfo
          coordinateslink={props.eventInfo.locationUrl}
          address={props.eventInfo.location.address}
          date={props.eventInfo.date}
        />
      </div>
      <div className="h-60 pb-4">
        {props.eventInfo.location.lat ? (
          <Map location={props.eventInfo.location} />
        ) : null}
      </div>
    </div>
    {props.children}
  </div>
);

const LoadingDesktopEventInfo = (props) => (
  <div
    className="flex flex-col justify-center fixed bottom-0 right-0 left-0 h-20 px-6 bg-gray-100 border-t-2 z-[1000]
          md:sticky md:h-full md:w-80 lg:w-96  md:left-auto md:shrink-0  md:bg-white
          md:justify-start md:py-8 md:border-t-0 md:top-[64px]"
  >
    <div className="animate-pulse hidden md:block">
      <h1 className="w-52 h-8 bg-gray-100 rounded-full mb-2 pb-4"></h1>
      <div className="border-b-2 border-t-2 py-4 mb-4">
          <div className="flex flex-col text-xs gap-2.5 ">
            <div className="w-48 h-3 rounded-full bg-gray-100" />
            <div className="w-40 h-3 rounded-full bg-gray-100" />
          </div>
        </div>
      <div className="h-60 bg-gray-100 rounded-md mb-2 pb-4">
       
      </div>
    </div>
    {props.children}
  </div>
);

const PurchaseBar = (props) => (
  <div className="flex flex-row justify-between md:flex-col md:gap-2">
    <div className="flex flex-col justify-center md:flex-row md:justify-start md:align-middle md:gap-1">
      <div className="">Priser från:</div>
      <div className="font-bold text-lg md:text-base">
        {props.eventInfo.price} kr
      </div>
    </div>
    <div className="flex justify-center flex-col">
      <button
        className="shrink bg-btnBG hover:bg-teal-700 rounded-btn text-black font-medium py-3 px-8 transition ease-in-out duration-200"
        onClick={props.popup}
      >
        Biljetter
      </button>
    </div>
  </div>
);

const LoadingPurchaseBar = (props) => (
  <div className="flex flex-row justify-between md:flex-col md:gap-2">
    <div className="flex flex-col justify-center md:flex-row md:justify-start md:align-middle md:gap-1">
      <div className=""></div>
      <div className="font-bold text-lg md:text-base"></div>
    </div>
    <div className="flex justify-center flex-col">
      <div className="shrink bg-gray-200 rounded-btn text-gray-500 font-medium py-3 px-8 transition ease-in-out duration-200">
        Biljetter
      </div>
    </div>
  </div>
);

const Event = () => {
  let params = useParams();
  let eventIdParam = params.eventId;

  const [purchaseCompletePopup, setPurchaseCompletePopup] = useState(false);

  const [eventInfo, setEventInfo] = useState({});
  const [loaded, setLoaded] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
    if (purchaseCompletePopup) {
      setPurchaseCompletePopup(!purchaseCompletePopup);
    }
  };

  const togglePurchaseStep = () => {
    setPurchaseCompletePopup(!purchaseCompletePopup);
  };

  useEffect(() => {
    fetch(`/event/${eventIdParam}`)
      .then((res) => res.json())
      .then((data) => {
        const d = new Date(data.startTime);
        const formatted = {
          ...data,
          date: d.toLocaleString("sv-SE", { timeZone: "UTC" }).slice(0, -3),
        };
        setEventInfo(formatted);
        setLoaded(true);
      });
  }, [eventIdParam]);

  return (
    <div>
      <div
        className={`md:flex flex-row md:max-w-6xl justify-center mr-auto ml-auto ${
          isOpen ? "fixed right-0 left-0" : ""
        }`}
      >
        {loaded ? <EventBody eventInfo={eventInfo} /> : <LoadingEventBody />}
        {loaded ? (
          <DesktopEventInfo eventInfo={eventInfo} popup={togglePopup}>
            <PurchaseBar eventInfo={eventInfo} popup={togglePopup} />
          </DesktopEventInfo>
        ) : (
          <LoadingDesktopEventInfo >
            <LoadingPurchaseBar />
          </LoadingDesktopEventInfo>
        )}
      </div>
      {isOpen && (
        <Popup
          handleStep={togglePurchaseStep}
          purchaseCompletePopup={purchaseCompletePopup}
          eventInfo={eventInfo}
          handleClose={togglePopup}
          examplePurchaseInfo={examplePurchaseInfo}
        />
      )}
    </div>
  );
};

export default Event;
