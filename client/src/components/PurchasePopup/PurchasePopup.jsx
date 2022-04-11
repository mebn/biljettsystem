import React, { useState } from "react";
import {
  CalendarIcon,
  LocationMarkerIcon,
  MinusIcon,
  PlusIcon,
  XIcon,
} from "@heroicons/react/solid";

var ExampleTickets = [
  {
    type: "Vuxen",
    number: "x3",
    total: 1797,
    description: "Detta är för personer mellan 18-65, leg. måste uppvisas",
  },
  {
    type: "VIP",
    number: "x1",
    total: 399,
    description:
      "Detta är för personer mellan 18-65. Bättre sikt och mer benutrymme. Leg. måste uppvisas",
  },
  {
    type: "Ungdom",
    number: "x1",
    total: 1099,
    description: "Detta är för personer mellan 15-18, leg måste uppvisas",
  },
];

const PurchaseSummary = (props) => {
  return (
    <div className="flex flex-col md:h-full md:justify-start md:mt-20">
      <div className="font-bold mb-3 hidden md:block">
        Sammanfattning av order
      </div>
      <table className="table-fixed w-full hidden md:block">
        <tbody>
          {ExampleTickets.map((row, index) => {
            return (
              <tr
                className={`${index === 0 || "border-t"} h-8 px-2 py-1`}
                key={index}
              >
                <td className="w-[60%] md:w-[20%]">{row.type}</td>
                <td className="w-[20%] md:w-[50%] text-right">{row.number}</td>
                <td className="w-[20%] md:w-[30%] text-right">{row.total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex text-base flex-row justify-between md:flex-col md:gap-2 md:mt-auto">
        <div className="flex flex-col justify-center md:flex-row md:justify-start md:align-middle md:gap-1">
          <div className="">Totalpris:</div>
          <div className="font-bold text-lg md:text-base">
            {ExampleTickets.reduce((prev, current) => {
              return prev + current.total;
            }, 0)}{" "}
            kr
          </div>
        </div>
        <div className="flex justify-center flex-col">
          <button className="shrink bg-btnBG hover:bg-teal-700 rounded-btn text-black font-medium py-3 px-8 transition ease-in-out duration-200">
            Köp
          </button>
        </div>
      </div>
    </div>
  );
};

const TicketButton = () => {
  const [counter, setCounter] = useState(0);
  const decrement = () => {
    setCounter(counter - 1);
  };
  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="grid grid-cols-3 items-center justify-center w-32">
      <button
        className="bg-[#93d1ac] hover:bg-teal-700 shadow-sm w-10 h-10 rounded-3xl flex justify-center items-center transition duration-200 ease-in-out"
        onClick={decrement}
      >
        <MinusIcon className="text-[#f5f5f5] h-7" />
      </button>

      <div className="text-center text-2xl text-gray-700 hover:text-black font-medium flex justify-center items-center">
        {counter}
      </div>

      <button
        className="bg-[#93d1ac] hover:bg-teal-700 shadow-sm w-10 h-10 rounded-3xl flex justify-center items-center transition duration-200 ease-in-out"
        onClick={increment}
      >
        <PlusIcon className="text-[#f5f5f5] h-7" />
      </button>
    </div>
  );
};

const PurchasePopup = (props) => {
  return (
    <div className="popup-box">
      <div className="fixed inset-0 bg-black bg-opacity-30 z-[1050]"/>
      <div className="fixed inset-0 z-[1100] md:inset-x-10 md:inset-y-32 lg:inset-20 md:shadow-lg lg:max-w-5xl lg:left-0 lg:right-0 lg:mr-auto lg:ml-auto">
        <div className="h-full z-50 overflow-auto md:rounded-xl bg-white ">
          <div className="flex flex-col justify-between h-full md:flex-row">
            {/*Left side*/}
            <div className="px-6 py-4 md:overflow-y-scroll md:grow">
              <div className="">
                <div className="text-left font-bold text-4xl py-1 my-5">
                  {props.longTitle}
                </div>

                <div className="text-sm mt-2 flex items-center">
                  <LocationMarkerIcon className="h-4 mr-2" />
                  <a
                    href={props.locationUrl}
                    className="underline text-[#268763]"
                  >
                    {props.location.address}
                  </a>
                </div>
                <div className="mt-1 flex items-center">
                  <CalendarIcon className="h-4 mr-2" />
                  <div className="text-sm">{props.date}</div>
                </div>
                <div className="text-left font-bold pt-6 pb-2 mb-4 border-b">
                  Välj biljetter
                </div>
              </div>

              <div className="md:h-fit">
                <table className="flex flex-col items-center justify-between md:justify-items-stretch w-full rounded-xl">
                  <tbody className="flex flex-col w-full">
                    {ExampleTickets.map((row, index) => {
                      return (
                        <>
                          <tr
                            className={`${index === 0 || "border-t mt-4 pt-2"} flex justify-between`}
                            key={index}
                          >
                            <td className="font-bold">{row.type}</td>
                            <td className="font-bold text-right">
                              {row.total} kr
                            </td>
                          </tr>
                          <tr className="flex justify-between items-start mt-2">
                            <td className="font-light leading-6 text-gray-700 md:pr-10 pr-5">
                              {row.description}
                            </td>
                            <td className="">
                              <TicketButton />
                            </td>
                          </tr>
                        </>
                      );
                    })}
                    <tr className="border-t mt-4 pt-2"/>
                  </tbody>
                </table>
              </div>
            </div>

            {/*Right side*/}
            <div
              className="justify-self-end sticky bottom-0 bg-gray-100 h-20 min-h-[5rem] px-6 flex justify-center flex-col border-t-2
                            md:w-96 md:h-auto md:py-4 md:border-none md:sticky md:top-0 md:bottom-auto"
            >
              <PurchaseSummary />
              {/* <div className="flex justify-center">
                <button
                  className="text-gray-900 font-medium bg-btnBG hover:bg-teal-700 
                                ease-in-out rounded-lg mt-5 h-16 w-full md:absolute md:bottom-10 md:w-[300px] 
                                md:mt-8 py-2 px-4 text-[24px] md:shadow-sm bottom-0 transition duration-200"
                >
                  Köp
                </button>
              </div> */}
            </div>
          </div>
          <div
            className="fixed cursor-pointer hover:bg-[#ddd] ease-in-out md:absolute top-5 bg-[#f5f5f5] rounded-full p-2 shadow-xl right-5 z-[100]"
            onClick={props.handleClose}
          >
            <XIcon className="h-7 w-7" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasePopup;
