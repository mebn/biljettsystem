import { useParams } from "react-router-dom";
import EventInfo from "../../components/EventInfo/EventInfo";


const eventInfo = {
    title: "Queen", longTitle: "Queen Tour 2022", location: "Gröna Lund",
    address: "Lilla Allmänna Gränd 9, 115 21 Stockholm", price: 829,
    imgUrl: "/public/assets/images/eventBanner.jpeg", date: "Thursday, 23 Feb 2022 | 20:00"
}

const EventTransaction = () => {
    let params = useParams();
    return (
        <div className="min-h-screen pb-20 bg-zinc-800 text-zinc-100 md:max-w-3xl md:bg-white md:m-auto md:py-8">
            <div className={`bg-[url('/public/assets/images/eventBanner.jpeg')] h-72 bg-cover flex 
                             flex-col justify-end p-6 rounded-bl-lg rounded-br-lg md:rounded-xl
                             md:h-96`}>
                <div className="flex flex-col md:gap-2">
                    <div className="text-3xl md:text-5xl">{eventInfo.title}</div>
                    <div className="text-l md:text-2xl">{eventInfo.location}</div>
                </div>
            </div>
            <div className="flex flex-col mx-6 my-4 gap-3 md:mx-0">
                <div className="flex justify-between items-center">
                    <div className="text-2xl md:text-zinc-800 md:text-3xl">{eventInfo.longTitle}</div>
                    <div className="bg-zinc-600 block px-3 py-2 rounded-md">{eventInfo.price} kr</div>
                </div>
                <EventInfo address={eventInfo.address} date={eventInfo.date}/>
                <div className="bg-zinc-600 rounded-lg p-2.5 text-sm">TEST?!?!?! wow</div>
                <div className="fixed bottom-6 right-0 left-0 mx-6 md:static md:mx-0 md:self-end">
                    <button className="bg-teal-600 rounded-md h-14 w-full bottom-0 md:w-auto hover:bg-teal-800">Tickets</button>
                </div>
            </div>
        </div>
    )
}

export default EventTransaction;