import { useParams } from "react-router-dom";
import EventInfo from "../../components/EventInfo/EventInfo";
import { CalendarIcon, LocationMarkerIcon } from '@heroicons/react/solid'

const eventInfo = {
    title: "Queen", longTitle: "Queen Tour 2022", location: "Gröna Lund",
    address: "Lilla Allmänna Gränd 9, 115 21 Stockholm", price: 829,
    imgUrl: "/public/assets/images/eventBanner.jpeg", date: "Thursday, 23 Feb 2022 | 20:00"
}

const EventTransaction = () => {
    let params = useParams();
    return (
        <div className="min-h-screen pb-20 bg-zinc-800 text-zinc-100 md:max-w-3xl md:bg-white md:m-auto md:py-8">
            
            <div className=" bg-zinc-600 rounded-lg p-2.5 text-sm">

                <div className="text-center text-2x1 md:text-3xl md:text-zinc-100 my-3">{eventInfo.longTitle}</div>
                
                
                <div className="items-center flex flex-col text-xs gap-2.5 md:text-sm md:border-zinc-100 md:pb-3">
                    <div className="flex items-center gap-2">
                        <LocationMarkerIcon className="h-4" />
                        <div className="underline text-blue-500">{eventInfo.address}</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <CalendarIcon className="h-4" />
                        <div className="md:text-zinc-100">{eventInfo.date}</div>
                    </div>
                </div>
                
        
            </div>
            
            
            <div className="flex flex-col mx-6 my-4 gap-3 md:mx-14">
            
                <div className="text-2xl md:text-3xl md:text-zinc-800 my-3 text-center">Tickets</div>
                <div className="bg-zinc-600 rounded-lg p-2.5 text-sm">
                    <div className="flex justify-between items-center">
                        <div className="text-2xl md:text-zinc-100 md:text-2xl ">Adult Ticket</div>
                        <div className= "bg-zinc-500 px-3 py-2 rounded grid grid-cols-3 gap-1">
                            <button className=" bg-teal-600 block px-2 py-2 rounded-md hover:bg-teal-800 text-center shadow-md md:text-3xl text-2xl">+</button>
                            <div className="block px-2 py-3 rounded-md text-center md:text-2xl text-1x1">100</div>
                            <button className="bg-teal-600 block px-2 py-2 rounded-md hover:bg-teal-800 text-center shadow-md md:text-4xl text-2xl">-</button>
                        </div>
                    </div>
                </div>

                <div className="bg-zinc-600 rounded-lg p-2.5 text-sm">
                    <div className="flex justify-between items-center">
                        <div className="text-2xl md:text-zinc-100 md:text-2xl ">Total Cost:</div>
                        <div className="bg-zinc-800 block px-3 py-2 rounded-md">{eventInfo.price} kr</div>
                    </div>
                </div>               
            </div>

            <div className="bg-zinc-700 md:bg-zinc-200 py-0.5 rounded-md p-2.5 my-12 mx-6 md:mx-0"></div>

            <div className="flex flex-col mx-6 my-4 gap-3 md:mx-14">
                <div className="text-zinc-200 md:text-zinc-800 py-0 px-1">Email address: </div>

                <div className="bg-zinc-500 md:bg-zinc-400 py-5 rounded-lg p-2.5 text-sm">
                    <div className="text-standard text-left md:text-zinc-200 text-zinc-300 px-2"> . . . </div>
                </div>
                <div className="text-zinc-500 md:text-zinc-400 text-center py-3">The tickets will be sent to this address</div>
                
            </div>

            <div className="bg-zinc-700 md:bg-zinc-200 py-0.5 rounded-md p-2.5 my-6 mx-6 md:mx-0"></div>

            <div className="flex flex-col mx-6 my-4 gap-3 md:mx-14">
                <div className="fixed bottom-6 right-0 left-0 mx-6 md:static md:mx-0 md:self-end">
                    <button className="bg-teal-600 rounded-md h-14 w-full bottom-0 md:w-auto hover:bg-teal-800 shadow-md hover:shadow-lg">Buy Tickets</button>
                </div>
            </div>

        </div>
    )
}

export default EventTransaction;