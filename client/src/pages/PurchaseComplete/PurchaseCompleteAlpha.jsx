import { BadgeCheckIcon } from '@heroicons/react/solid'
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
}]


const PurchaseSummary = (props) => {
    return(
        <div style={{boxShadow: "6px 6px #A9E3C0"}}
        className='mt-6 bg-[#f5f5f5] px-5 py-4 text-[14px] rounded-lg shadow shadow-[#A9E3C0]'>
            <div className="font-bold text-[16px] mb-3">Sammanfattning av order:</div>
            <table className="table-fixed">
                <tbody className=''>
                    {purchaseSummary.map((row, index) => {
                        return(
                            <tr key={index}>
                            <td className='w-[60%]'>{row.type}</td>
                            <td className='w-[15%]'>{row.number}</td>
                            <td className='w-[15%] text-right'>{row.total}</td>
                        </tr>
                    )})}
                </tbody>
            </table>
            <div className='mt-3 text-[16px]'>Totalpris: <span className='font-bold'>2196 kr</span></div>
        </div>
    )
}


const PurchaseComplete = () => {
    const [location, setLocation] = useState("")
    const [coordinates, setCoordinates] = useState("")
    const [longTitle, setLongTitle] = useState("")
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
            setLongTitle(data.longtitle);
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
                <PurchaseSummary />
                {/* <CompletedEvent longTitle={longTitle} address={address} date={date} /> */}
            </div>
            <div className="flex flex-col mx-6 my-3 gap-3 md:mx-0">
                <div style={{boxShadow: "6px 6px #A9E3C0"}}
                className='bg-[#f5f5f5] px-5 py-5 mt-3 text-[16px] rounded-lg'>
                    <div className='font-semibold'>Biljetterna har skickats till:</div>
                    <div className='mt-2'>kth@kth.se</div>
                </div>
            </div>
            <div className="fixed text-center bottom-6 right-0 left-0 mx-6 hover:pointer md:static md:mx-0 md:self-end">
                <Link to="/">
                    <button className="bg-[#A9E3C0] hover:bg-teal-700 ease-in-out rounded-md h-14 w-full bottom-0 md:w-auto py-2 px-4">Tillbaka till startsidan</button>
                </Link>
            </div> 
        </div>
    )
}

export default PurchaseComplete;