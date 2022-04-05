import React from "react";
import { CalendarIcon, LocationMarkerIcon } from '@heroicons/react/solid'


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

const PurchaseSummary = (props) => {
    return (
        <div style={{ boxShadow: "6px 6px #A9E3C0" }}
            className='mt-3 bg-[#f5f5f5] px-5 py-4 text-[14px] rounded-lg shadow shadow-[#A9E3C0]'>
            <div className="font-bold text-[14px] mb-3">Sammanfattning av order:</div>
            <table className="table-fixed w-[100%]">
                <tbody>
                    {purchaseSummary.map((row, index) => {
                        return (
                            <tr className={`${index === 0 || 'border-t'} h-8 px-2 py-1`} key={index}>
                                <td className='w-[60%] md:w-[60%]'>{row.type}</td>
                                <td className='w-[20%] md:w-[20%] text-right'>{row.number}</td>
                                <td className='w-[20%] md:w-[20%] text-right'>{row.total}</td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>
            <div className='text-left mt-4 text-[16px]'>Totalpris: <span className=' ml-2 font-bold'>3195 kr</span></div>
        </div>
    )
}


const PurchasePopup = props => {
    return (
        <div className='popup-box'>
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity">

                <div className="fixed inset-0 md:inset-y-[10%] md:inset-x-[15%] z-50 overflow-auto bg-[#edeeef] text-4xl md:rounded-lg">
                    <button className='absolute top-0 right-0 h-16 w-16' onClick={props.handleClose}>x</button>

                    <div className="grid md:grid-cols-2 p-5 md:p-20">
                        {/*Left side*/}
                        <div className="">
                            <div className='text-left font-bold text-4xl py-1 my-5 px-5'>{props.longtitle}</div>

                            <div className='text-[14px] mt-2 px-10 flex items-center'>
                                <LocationMarkerIcon className='h-4 mr-2' />
                                <a href={props.coordinates} className='underline text-[#268763]'>{props.address}</a>
                            </div>
                            <div className='mt-1 flex px-10 items-center'>
                                <CalendarIcon className='h-4 mr-2' />
                                <div className='text-[14px]'>{props.date}</div>
                            </div>

                            <div className="bg-[#f5f5f5] rounded-lg p-2">
                                <div className='text-left font-bold text-2xl py-1 my-5 px-5'>Work in progress</div>
                                
                            </div>

                        </div>


                        {/*Right side*/}
                        <div className="">
                            <PurchaseSummary />
                            <div className="flex justify-center">
                                <button className="text-gray-50 font-medium bg-[#93d1ac] hover:bg-teal-700 ease-in-out rounded-lg mt-5 h-16 w-full bottom-0 md:w-[300px] md:mt-8 py-2 px-4 text-[24px]">Köp</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default PurchasePopup;