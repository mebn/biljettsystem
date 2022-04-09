import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PurchaseCompletePopup from '../../components/PurchaseCompletePopup/PurchaseCompletePopup';


const purchaseSummary = [
  {
      "type": "Vuxen",
      "number": "x3",
      "total": "1797 kr"
  },
  {
      "type": "Ungdom",
      "number": "x1",
      "total": "399 kr"
  },
  {
      "type": "VIP",
      "number": "x1",
      "total": "1099 kr"
  }
  ]
  
  const exampleEventInfo = {
      longtitle: "Loading...",
      location: "Loading...",
      address: "Loading...",
      coordinates: "https://maps.google.com/",
      price: 0,
      date: "Loading...",
    };
  
  const examplePurchaseInfo = {
      email: "example@kth.se",
      orderNo: 12873613,
      purchaseSummary: [
          {
              "type": "Vuxen",
              "number": "x3",
              "total": "1797 kr"
          },
          {
              "type": "Ungdom",
              "number": "x1",
              "total": "399 kr"
          },
          {
              "type": "VIP",
              "number": "x1",
              "total": "1099 kr"
          }
          ]
    };


const MyBtn = props => {
  return (
    <div>
      <Link to={props.to}>
        <button className="bg-[#A9E3C0] text-[#0A1F44] text-[16px] px-10 py-3 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded-lg">
          {props.text}
        </button>
      </Link>
      <br />
    </div>
  );
}

const Home = () => {

  const [eventInfo, setEventInfo] = useState(exampleEventInfo);
  const [isOpen, setIsOpen] = useState(false);    
  
  const togglePopup = () => {
      setIsOpen(!isOpen);
  }

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
        <div>{/*IMPLEMENT ON EVENT PAGE (NOT EVENT TRANSACTION)*/}
          <button className="bg-[#A9E3C0] text-[#0A1F44] text-[16px] px-10 py-3 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded-lg" onClick={togglePopup}>Purchase Complete Popup (Alpha)</button>
          {isOpen && <PurchaseCompletePopup {...examplePurchaseInfo} handleClose={togglePopup}/>}
        </div>
            {/*IMPLEMENT ON EVENT PAGE (NOT EVENT TRANSACTION)*/}
    </div>  
      </div>


      
  );
}

export default Home;
