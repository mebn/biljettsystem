import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import EventInfo from "../../components/EventInfo/EventInfo";


const Description = (props) => {
    const text = props.text;
    const newText = text.split('\n').map(str => <p>{str}</p>)
    return <div className={props.className}>{newText}</div>;
}


const Event = () => {
    const [shortTitle, setShortTitle] = useState("")
    const [location, setLocation] = useState("")
    const [coordinates, setCoordinates] = useState("")
    const [longTitle, setLongTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
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
            setShortTitle(data.shorttitle);
            setLocation(data.location);
            setLongTitle(data.longtitle);
            setPrice(data.price);
            setDescription(data.description);
            setAddress(data.address);
            setCoordinates(data.coordinates);

            const d = new Date(data.starttime);
            setDate(d.toLocaleString('sv-SE', {timeZone: 'UTC'}).slice(0,-3));
            
            //console.log(data);
        });
    }, [eventIdParam]) 


    return (
        <div className="min-h-screen pb-20 bg-zinc-800 text-zinc-100 md:max-w-3xl md:bg-white md:m-auto md:py-8">
            <div className={`bg-[url('/public/assets/images/eventBanner.jpeg')] h-72 bg-cover flex 
                             flex-col justify-end p-6 rounded-bl-lg rounded-br-lg md:rounded-xl
                             md:h-96`}>
                <div className="flex flex-col md:gap-2">
                    <div className="text-3xl md:text-5xl">{shortTitle}</div>
                    <div className="text-l md:text-2xl">{location}</div>
                </div>
            </div>
            <div className="flex flex-col mx-6 my-4 gap-3 md:mx-0">
                <div className="flex justify-between items-center">
                    <div className="text-2xl md:text-zinc-800 md:text-3xl">{longTitle}</div>
                    <div className="bg-zinc-600 px-3 py-2 rounded-md whitespace-nowrap">{`${price} kr`}</div>
                </div>
                <EventInfo address={address} date={date} coordinateslink={coordinates}/>
                <Description className="bg-zinc-600 rounded-lg p-2.5 text-sm whitespace-pre-lin flex flex-col gap-2" text={description}></Description>
                <div className="fixed bottom-6 right-0 left-0 mx-6 md:static md:mx-0 md:self-end">
                    <Link to="book"><button className="bg-teal-600 rounded-md h-14 w-full bottom-0 md:w-auto hover:bg-teal-800 py-2 px-4">Tickets</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Event;