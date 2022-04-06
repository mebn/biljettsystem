import React from "react";
import {
    CalendarIcon,
    LocationMarkerIcon,
    MinusIcon,
    PlusIcon,
} from "@heroicons/react/solid";
import { increment, decrement } from "../../redux/ticketCounter";
import { useSelector, useDispatch } from "react-redux";


const purchaseSummary = [
    {
        "type": "Vuxen",
        "number": "x3",
        "total": "1797 kr",
        "description": "Detta är för personer mellan 18-65, leg. måste uppvisas"
    },
    {
        "type": "Ungdom",
        "number": "x1",
        "total": "399 kr",
        "description": "Detta är för personer mellan 18-65. Bättre sikt och mer benutrymme. Leg. måste uppvisas"
    },
    {
        "type": "VIP",
        "number": "x1",
        "total": "1099 kr",
        "description": "Detta är för personer mellan 15-18, leg måste uppvisas"
    }
]

const PurchaseSummary = (props) => {
    return (
        <div className="">
            <div className="font-bold text-[18px] mb-3">Sammanfattning av order</div>
            <table className="table-fixed w-[100%] text-[14px]">
                <tbody>
                    {purchaseSummary.map((row, index) => {
                        return (
                            <tr className={`${index === 0 || 'border-t'} h-8 px-2 py-1`} key={index}>
                                <td className='w-[60%] md:w-[60%]'>{row.type}</td>
                                <td className='w-[20%] md:w-[20%] text-right'>{row.number}</td>
                                <td className='w-[20%] md:w-[20%] text-right'>{row.total}</td>
                            </tr>
                        );
                    }
                    )}
                </tbody>
            </table><div className='text-left mt-4 text-[16px]'>Totalpris: <span className=' ml-2 font-bold'>3195 kr</span></div>
        </div>
    )
}


const PurchasePopup = props => {
    const dispatch = useDispatch();
    const { ticketCount } = useSelector((state) => state.ticketCounter);

    return (
        <div className='popup-box'>
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity">

                <div className="fixed inset-0 md:inset-y-[10%] md:inset-x-[15%] z-50 overflow-auto bg-[#f5f5f5] text-2xl md:rounded-lg">
                    <button className='absolute top-0 right-0 h-16 w-16' onClick={props.handleClose}>x</button>

                    <div className="grid md:grid-cols-2 p-0">
                        
                        {/*Left side*/}
                        <div className="p-5 md:p-20 md:absolute md:left-0 md:w-[62%]">
                            <div className='text-left font-bold text-4xl py-1 my-5'>{props.longtitle}</div>

                            <div className='text-[14px] mt-2 px-5 flex items-center'>
                                <LocationMarkerIcon className='h-4 mr-2' />
                                <a href={props.coordinates} className='underline text-[#268763]'>{props.address}</a>
                            </div>
                            <div className='mt-1 flex px-5 items-center'>
                                <CalendarIcon className='h-4 mr-2' />
                                <div className='text-[14px]'>{props.date}</div>
                            </div>

                            <div className="bg-[#f5f5f5] rounded-lg p-2">
                                <div className='text-left font-bold text-[16px] py-1 my-5 border-b'>Välj biljetter</div>
                                <table className="table-fixed w-[100%] text-[16px]">
                                    <tbody>
                                        {purchaseSummary.map((row, index) => {
                                            return (
                                                <>

                                                    <tr className={`${index === 0 || 'border-t'} h-8 px-2 py-1`} key={index}>
                                                        <td className='w-[60%] md:w-[60%] font-bold'>{row.type}
                                                            <div className="text-[14px] font-light leading-6 text-gray-700 pt-2 pb-5 pr-5">{row.description}</div>
                                                        </td>
                                                        <td className='w-[40%] md:w-[20%] text-right font-bold'>
                                                            <div className="grid grid-rows-2 pb-5">
                                                                <div className="">{row.total}</div>
                                                                <div className="right-0 w-32">
                                                                    <div className="grid grid-cols-3 items-center justify-center">
                                                                        <button
                                                                            className="bg-[#93d1ac] hover:bg-teal-700 shadow-sm w-10 h-10 rounded-3xl flex justify-center items-center"
                                                                            onClick={() => dispatch(decrement())}
                                                                        >
                                                                            <MinusIcon className="text-[#f5f5f5] h-7" />
                                                                        </button>
                                                                        <div className="text-center text-2xl text-gray-700 hover:text-gray-900 font-medium">{ticketCount}</div>

                                                                        <button
                                                                            className="bg-[#93d1ac] hover:bg-teal-700 shadow-sm w-10 h-10 rounded-3xl flex justify-center items-center"
                                                                            onClick={() => dispatch(increment())}
                                                                        >
                                                                            <PlusIcon className="text-[#f5f5f5] h-7" />
                                                                        </button>
                                                                    </div>
                                                                </div>


                                                            </div>
                                                        </td>
                                                    </tr>

                                                </>
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
                                <button className="text-gray-50 font-medium bg-[#93d1ac] hover:bg-teal-700 ease-in-out rounded-lg mt-5 h-16 w-full md:absolute md:bottom-10 bottom-0 md:w-[300px] md:mt-8 py-2 px-4 text-[24px]">Köp</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default PurchasePopup;