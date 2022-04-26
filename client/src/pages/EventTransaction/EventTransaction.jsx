import { useParams } from "react-router-dom";
import {
  CalendarIcon,
  LocationMarkerIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, setMax } from "../../redux/ticketCounter";

const exampleEventInfo = {
  longTitle: "Loading...",
  location: "Loading...",
  address: "Loading...",
  coordinates: "https://maps.google.com/",
  price: 0,
  date: "Loading...",
};

const EventTransaction = () => {
  let params = useParams();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const [eventInfo, setEventInfo] = useState(exampleEventInfo);

  const [ticketErrorString, setTicketErrorString] = useState("");
  const [userErrorString, setUserErrorString] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/event/${params.eventId}`)
      .then((res) => res.json())
      .then((data) => {
        const d = new Date(data.startTime);
        const formatted = {...data, date: d.toLocaleString('sv-SE').slice(0,-3)}
        setEventInfo(formatted);
        dispatch(setMax(data.availabletickets))
      });
  }, []);

  const { ticketCount } = useSelector((state) => state.ticketCounter);

  const buyTicket = async () => {
    if(!ticketCount)
      setTicketErrorString("Forgor 💀");
    else
      setTicketErrorString("");

    const userid = await createUser(email);
    
    if (userid != null)
      sendPost(userid, params.eventId, ticketCount);
  }

  const createUser = async email => {
    return await fetch("/api/user/addUser", {
      method: "POST",
      body: JSON.stringify({
        name: "",
        email
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res => res.json())
    .then(data => {
      return data.ok ? data.userid : null;
    });
  }

  const sendPost = (userId, eventId, tickets) => {
    fetch('/api/ticket/buyTicket',{
      method: 'POST',
      body: JSON.stringify({
          userId: userId,
          eventId: eventId,
          boughtTickets: tickets
      }),
      headers:{
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res => {
      if(res.status === 200)
        navigate(`/purchase-complete/${eventId}`);

      return res.json();
    })
    .then(data => {
      if (data.error === "userId is missing.")
        setUserErrorString("Invalid input or something, maybe");
      else
        setUserErrorString("");
    });
  }

  return (
    <div className="min-h-screen pb-20 bg-zinc-800 text-zinc-100 md:max-w-3xl md:bg-white md:m-auto md:py-8">
      <div className=" bg-zinc-600 rounded-lg p-2.5 text-sm">
        <div className="text-center text-2x1 md:text-3xl md:text-zinc-100 my-3">
          {eventInfo.longtitle}
        </div>

        <div className="items-center flex flex-col text-xs gap-2.5 md:text-sm md:border-zinc-100 md:pb-3">
          <div className="flex items-center gap-2">
            <LocationMarkerIcon className="h-4" />
            <a href={eventInfo.locationUrl} className="underline text-teal-500">{eventInfo.location.address}</a>
          </div>
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-4" />
            <div className="md:text-zinc-100">{eventInfo.date}</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mx-6 my-4 gap-3 md:mx-14">
        <div className="text-2xl md:text-3xl md:text-zinc-800 my-3 text-center">
          Tickets
        </div>
        <div className="bg-zinc-600 rounded-lg p-2.5 text-sm">
          <div className="flex justify-between items-center">
            <div className="text-2xl md:text-zinc-100 md:text-2xl ">
              Adult Ticket
            </div>
            <div className="bg-zinc-500 px-2 py-2 rounded grid grid-cols-3 gap-1 items-center">
              <button
                className="w-max rounded-md bg-teal-600  hover:bg-teal-800  shadow-md items-center py-2 px-4"
                onClick={() => dispatch(increment())}
              >
                <PlusIcon className="h-5" />
              </button>
              <div className="text-center text-2xl py-2">{ticketCount}</div>
              <button
                className="w-max rounded-md bg-teal-600  hover:bg-teal-800  shadow-md items-center py-2 px-4"
                onClick={() => dispatch(decrement())}
              >
                <MinusIcon className="h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="text-red-500 text-center">{ticketErrorString}</div>

        <div className="bg-zinc-600 rounded-lg p-2.5 text-sm">
          <div className="flex justify-between items-center">
            <div className="text-2xl md:text-zinc-100 md:text-2xl ">
              Total Cost:
            </div>
            <div className="bg-zinc-800 block px-3 py-2 rounded-md">
              {eventInfo.price * ticketCount} kr
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-700 md:bg-zinc-200 py-0.5 rounded-md p-2.5 my-12 mx-6 md:mx-0"></div>


    <form className="flex flex-col mx-6 my-4 gap-3 md:mx-14">

        <label className="text-zinc-200 md:text-zinc-800 py-0 px-1">
            Email address:
        </label>
        <input className="shadow border rounded leading-tight py-2 px-3 w-full md:bg-zinc-400 bg-zinc-500 md:text-zinc-100" id="email" type="text" placeholder="..." 
        onChange={data => setEmail(data.target.value)}></input>
        
        <div className="text-red-500 text-center">{userErrorString}</div>

        <div className="text-zinc-500 md:text-zinc-400 text-center py-3">
          The tickets will be sent to this address
        </div>
    </form>
      

      <div className="bg-zinc-700 md:bg-zinc-200 py-0.5 rounded-md p-2.5 my-6 mx-6 md:mx-0"></div>

      <div className="flex flex-col mx-6 my-4 gap-3 md:mx-14">
        <div className="fixed bottom-6 right-0 left-0 mx-6 md:static md:mx-0 md:self-end">
          <button className="bg-teal-600 rounded-md h-14 w-full bottom-0 md:w-auto hover:bg-teal-800 shadow-md hover:shadow-lg py-2 px-4" onClick={buyTicket}>          
            Buy Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventTransaction;
