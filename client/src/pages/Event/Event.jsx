import { useParams } from "react-router-dom";

const eventInfo = {title: "Queen", longTitle: "Queen Tour 2022", location: "Gröna Lund", price: 180, imgUrl: "/public/assets/images/eventBanner.jpeg"}

const Event = () => {
    let params = useParams();
    return (
        <div className="bg-gray-800 h-full text-slate-100">
            <div className={`bg-[url('/public/assets/images/eventBanner.jpeg')] h-72 bg-cover flex 
                             flex-col justify-end p-6 rounded-bl-lg rounded-br-lg`}>
                <div>
                    <div className="text-3xl">{eventInfo.title}</div>
                    <div className="text-l">{eventInfo.location}</div>
                </div>
            </div>
            <div className="flex justify-between px-6 py-4 items-center">
                <div className="text-2xl">{eventInfo.longTitle}</div>
                <div className="bg-gray-600 block px-3 py-2 rounded-md">{eventInfo.price}</div>
            </div>
        </div>
       
    )
}

export default Event;