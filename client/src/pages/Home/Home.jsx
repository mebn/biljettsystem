import React, { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "../../components/Popup/Popup";

const purchaseSummary = [
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
];

const exampleEventInfo = {
  longtitle: "Loading...",
  location: "Loading...",
  address: "Loading...",
  coordinates: "https://maps.google.com/",
  price: 0,
  date: "Loading...",
};



const MyBtn = (props) => {
  return (
    <div>
      <Link to={props.to}>
        <button className="bg-[#A9E3C0] text-[black] text-[14px] px-10 py-3 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded-lg">
          {props.text}
        </button>
      </Link>
      <br />
    </div>
  );
};

const Home = () => {
  const [eventInfo, setEventInfo] = useState(exampleEventInfo);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex">
        <MyBtn to="/event/1" text="Event page (MVP)" />
        <MyBtn to="/event/1" text="Event page (Alpha)" />
      </div>
      <div className="flex">
        <MyBtn to="/event/1/book" text="Transaction page (MVP)" />
        <MyBtn to="/event/1/book" text="Transaction page (Alpha)" />
      </div>
      <div className="flex">
        <MyBtn to="/purchase-complete/1" text="Purchase complete page (MVP)" />
        </div>
    </div>
  );
};

export default Home;
