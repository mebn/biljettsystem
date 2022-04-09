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
        "type": "Vuxen",
        "number": "x3",
        "total": 1797,
        "description": "Detta är för personer mellan 18-65, leg. måste uppvisas",
    },
    {
        "type": "VIP",
        "number": "x1",
        "total": 399,
        "description": "Detta är för personer mellan 18-65. Bättre sikt och mer benutrymme. Leg. måste uppvisas",
    },
    {
        "type": "Ungdom",
        "number": "x1",
        "total": 1099,
        "description": "Detta är för personer mellan 15-18, leg måste uppvisas",
    }
]

const PurchaseSummary = (props) => {
    return (
        <div className="">
            <div className="font-bold text-[18px] mb-3">Sammanfattning av order</div>
            <div className="hidden md:block">
                <table className="table-fixed w-[100%] text-[14px]">
                    <tbody>
                        {ExampleTickets.map((row, index) => {
                            return (
                                <tr className={`${index === 0 || 'border-t'} h-8 px-2 py-1`} key={index}>
                                    <td className='w-[60%] md:w-[20%]'>{row.type}</td>
                                    <td className='w-[20%] md:w-[50%] text-right'>{row.number}</td>
                                    <td className='w-[20%] md:w-[30%] text-right'>{row.total}</td>
                                </tr>
                            );
                        }
                        )}
                    </tbody>
                </table>
            </div>
            <div className='text-left mt-4 text-[16px]'>Totalpris:
                <span className='text-[#268763] text-xl ml-1 font-bold'>
                    {ExampleTickets.reduce((prev, current) => {
                        return prev + current.total
                    }, 0)
                    }
                    {" "}kr
                </span>
            </div>
        </div>
    )
}

const TicketButton = () => {
    const [counter, setCounter] = useState(0);
    const decrement = () => {
        setCounter(counter - 1);
    }
    const increment = () => {
        setCounter(counter + 1);
    }

    return (
        <div className="grid grid-cols-3 items-center justify-center w-32">
            <button
                className="bg-[#93d1ac] hover:bg-teal-700 shadow-sm w-10 h-10 rounded-3xl flex justify-center items-center transition duration-200 ease-in-out"
                onClick={decrement}>
                <MinusIcon className="text-[#f5f5f5] h-7" />
            </button>

            <div className="text-center text-2xl text-gray-700 hover:text-black font-medium flex justify-center items-center">{counter}</div>

            <button
                className="bg-[#93d1ac] hover:bg-teal-700 shadow-sm w-10 h-10 rounded-3xl flex justify-center items-center transition duration-200 ease-in-out"
                onClick={increment}>
                <PlusIcon className="text-[#f5f5f5] h-7" />
            </button>
        </div>
    )
}

const PurchasePopup = props => {
    return (
        <div className='popup-box'>
            <div className="fixed inset-0 bg-black bg-opacity-50">
                <div style={{ boxShadow: "8px 8px #A9E3C0" }}
                    className="fixed inset-0 md:inset-y-[10%] md:inset-x-[15%] z-50 overflow-auto  text-2xl md:rounded-xl bg-[#edeeef] shadow shadow-[#A9E3C0]">


                    <div className="grid md:grid-cols-2 p-0">

                        {/*Left side*/}
                        <div className="p-2 md:p-0 md:w-[62%] md:absolute bg-[#f5f5f5] md:h-[100%]">
                            <div className="md:px-20 md:pt-16 px-5">
                                <div className='text-left font-bold text-4xl py-1 my-5'>{props.longTitle}</div>

                                <div className='text-[14px] mt-2 px-5 flex items-center'>
                                    <LocationMarkerIcon className='h-4 mr-2' />
                                    <a href={props.locationUrl} className='underline text-[#268763]'>{props.location.address}</a>
                                </div>
                                <div className='mt-1 flex px-5 items-center'>
                                    <CalendarIcon className='h-4 mr-2' />
                                    <div className='text-[14px]'>{props.date}</div>
                                </div>
                                <div className='text-left font-bold text-[16px] py-1 my-5 border-b'>Välj biljetter</div>
                            </div>

                            <div className="bg-[#f5f5f5] p-1 md:h-fit md:px-20">
                                <table className="flex flex-col items-center justify-between overflow-y-scroll w-full text-[16px] md:h-[25rem] h-[18rem] bg-gradient-to-t from-[#eef1f1] md:from-[#f5f5f5] rounded-xl p-4">
                                    <tbody>
                                        {ExampleTickets.map((row, index) => {
                                            return (
                                                <>
                                                    <tr className={`${index === 0 || 'border-t'}`} key={index}>
                                                        <td className='font-bold'>{row.type}</td>
                                                        <td className='font-bold text-right'>{row.total} kr</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='text-[14px] font-light leading-6 text-gray-700 pb-10 md:pr-10 pr-5'>{row.description}</td>
                                                        <td className=''>
                                                            <TicketButton />
                                                        </td>
                                                    </tr></>
                                            )
                                        }
                                        )}
                                    </tbody>
                                    
                                </table>
                            </div>
                        </div>


                        {/*Right side*/}
                        <div className="bg-[#edeeef] p-5 md:p-10 md:py-20 md:w-[38%] md:h-[100%] md:absolute md:right-0">
                            <PurchaseSummary />
                            <div className="flex justify-center">
                                <button className="text-gray-900 font-medium bg-[#93d1ac] hover:bg-teal-700 
                                ease-in-out rounded-lg mt-5 h-16 w-full md:absolute md:bottom-10 md:w-[300px] 
                                md:mt-8 py-2 px-4 text-[24px] md:shadow-sm bottom-0 transition duration-200">Köp</button>
                            </div>
                        </div>
                    </div>
                    <div className='fixed cursor-pointer hover:bg-[#ddd] ease-in-out md:absolute top-5 bg-[#f5f5f5] rounded-full p-2 shadow-xl right-5 z-[100]' onClick={props.handleClose}>
                        <XIcon className="h-7 w-7" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchasePopup;