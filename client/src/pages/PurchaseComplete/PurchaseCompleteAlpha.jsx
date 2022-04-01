import { CalendarIcon, LocationMarkerIcon } from '@heroicons/react/solid'
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CompletedEvent from "../../components/CompletedEvent/CompletedEvent";

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
    return(
        <div style={{boxShadow: "6px 6px #A9E3C0"}}
        className='mt-3 bg-[#f5f5f5] px-5 py-4 text-[14px] rounded-lg shadow shadow-[#A9E3C0]'>
            <div className="font-bold text-[14px] mb-3">Sammanfattning av order:</div>
            <table className="table-fixed w-[100%]">
                <tbody>
                    {purchaseSummary.map((row, index) => {
                        return(
                            <tr className={`${index === 0 || 'border-t'} h-8 px-2 py-1`} key={index}>
                                <td className='w-[60%] md:w-[80%]'>{row.type}</td>
                                <td className='w-[20%] md:w-[10%] text-right'>{row.number}</td>
                                <td className='w-[20%] md:w-[10%] text-right'>{row.total}</td>
                            </tr>
                        )}
                    )}
                </tbody>
            </table>
            <div className='text-right mt-4 text-[16px]'>Totalpris: <span className=' ml-2 font-bold'>3195 kr</span></div>
        </div>
    )
}

const EventComplete = (props) => {
    return(
        // <div className='mt-6 bg-[#f5f5f5] text-[14px] w-full text-center rounded-lg'>
        //     <div className={`bg-[url('/public/assets/images/veronica.png')] h-[200px] rounded-lg bg-cover`}>
        //     <div className='bg-gradient-to-t h-[200px] from-[#000] rounded-lg text-[#fff]'>
        //         <div className='font-bold text-[16px] my-3'>Eventet:</div>
        //         <div className='font-bold text-[14px]'>Veronica Maggio</div>
        //         <div className='text-[14px] mt-2 flex'>
        //             <CalendarIcon className='h-4 mr-2'/>
        //             <div className='text-[14px]'>Lilla Allmänna Gränd 9, 115 21 Stockholm</div>
        //         </div>
        //         <div className='mt-1 flex'> 
        //             <LocationMarkerIcon className='h-4 mr-2'/>
        //             <div className='text-[14px]'>Tisdag, 23 Feb 2022 | 20:00</div>
        //         </div>
        //         </div>
        //     </div>
            
        // </div>
        <div style={{boxShadow: "7px 7px #A9E3C0"}} className="bg-[#f5f5f5] mt-3 max-w-sm rounded-lg shadow-lg overflow-hidden">
            <div className="bg-[url('/public/assets/images/veronica.png')] bg-cover w-full h-[240px]">
                <div className='translate-y-3 translate-x-3 bg-white rounded-lg px-2 py-1 inline-block shadow-lg'>Ditt event</div>
            </div>
            <div className="px-6 py-4">
            <div className='font-bold text-[26px]'>{props.title}</div>
            <div className='text-[14px] mt-2 flex'>
                     <LocationMarkerIcon className='h-4 mr-2'/>
                     <div className='text-[14px] underline text-[#268763]'>{props.address}</div>
                 </div>
                 <div className='mt-1 flex'> 
                     <CalendarIcon className='h-4 mr-2'/>
                     <div className='text-[14px]'>{props.date}</div>
                 </div>
            </div>
            
        </div>

    
    )
}


const PurchaseComplete = () => {
    const [location, setLocation] = useState("")
    const [coordinates, setCoordinates] = useState("")
    const [shortTitle, setShortTitle] = useState("")
    const [date, setDate] = useState("")
    const [address, setAddress] = useState("")
    
    let params = useParams();
    let eventIdParam = params.eventId;

    useEffect(() => {
        const getEvent = async () => {
            const res = await fetch(`/event/${eventIdParam}`);
            const eventData = await res.json();
            return eventData;
        }
        getEvent().then(data => {
            setLocation(data.location);
            setShortTitle(data.shorttitle);
            setAddress(data.address);
            setCoordinates(data.coordinates);

            const d = new Date(data.starttime);
            setDate(d.toLocaleString('sv-SE', {timeZone: 'UTC'}).slice(0,-3));
        });
    }, [eventIdParam])


    return (
        <div className="min-h-screen pb-20 md:max-w-3xl md:m-auto md:py-8">
            <div className="text-100 flex flex-col md:gap-2">
                <div className="text-3xl font-bold md:text-5xl text-center mt-32 mb-4">Tack för ditt köp!</div>
                {/* <BadgeCheckIcon className=" h-28 md:text-teal-600" /> */}
                <div className=' flex justify-center'>
                    <div className={`bg-[url('/public/assets/images/FolkeLogo.png')] bg-cover object-fit h-[150px] w-[200px]`}></div>
                </div>
            </div>
            <div className="flex flex-col mx-6 my-3 gap-3 md:mx-0">
                <div style={{boxShadow: "6px 6px #A9E3C0"}}
                className='text-center bg-[#f5f5f5] px-5 py-3 mt-3 text-[14px] rounded-lg'>
                    <div className='font-semibold'>Ditt ordernummer är:</div>
                    <div className='mt-1 font-bold text-[#99D3B4] text-[28px]'>74395891</div>
                    <div className='mt-3 font-semibold'>Biljetterna har skickats till:</div>
                    <div className='text-[20px] mt-1'>kth@kth.se</div>
                </div>
            </div>
            <div className="flex flex-col mx-6 my-3 gap-3 md:mx-0">
                <PurchaseSummary />
                {/* <CompletedEvent longTitle={longTitle} address={address} date={date} /> */}
            </div>
            <div className="flex flex-col mx-6 my-3 gap-3 md:mx-0">
                <EventComplete title={shortTitle} date={date} address={address} />                
                {/* <CompletedEvent longTitle={longTitle} address={address} date={date} /> */}
            </div>
            <div className='h-[40px]'></div> {/* För att säkerställa att inget hamnar under nedre knappen */}
            <div className="h-[100px] rounded-t-lg bg-[#fff] fixed text-center bottom-0 right-0 left-0 hover:pointer md:static md:mx-0 md:self-end">
                <div className='mx-6'>
                    <Link to="/">
                        <button className="bg-[#A9E3C0] hover:bg-teal-700 ease-in-out rounded-lg mt-5 h-14 w-full bottom-0 md:w-[300px] md:mt-8 py-2 px-4">Tillbaka till startsidan</button>
                    </Link>
                </div>
            </div> 
        </div>
    )
}

export default PurchaseComplete;