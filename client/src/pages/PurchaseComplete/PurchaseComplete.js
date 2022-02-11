import { BadgeCheckIcon } from '@heroicons/react/solid'
import CompletedEvent from "../../components/CompletedEvent/CompletedEvent";

const eventInfo = {
    title: "Queen", longTitle: "Queen Tour 2022", location: "Gröna Lund",
    address: "Lilla Allmänna Gränd 9, 115 21 Stockholm", price: 829, date: "Thursday, 23 Feb 2022 | 20:00"
}

const PurchaseComplete = () => {
    return (
        <div className="min-h-screen pb-20 bg-zinc-800 text-zinc-100 md:max-w-3xl md:bg-white md:m-auto md:py-8">
            <div className="text-100 flex flex-col md:gap-2">
                <BadgeCheckIcon className=" mt-20 h-28 md:text-teal-600" />
                <div className="text-3xl font-semibold md:text-5xl md:text-teal-600 text-center mt-4 mb-4">Purchase completed!</div>
            </div>
            <div className=" rounded-lg md:text-zinc-900 md:text-lg text-center p-3 ml-4 leading-6 text-sm">You have successfully purchased tickets to the following event:</div>
            <div className="flex flex-col mx-6 my-3 gap-3 md:mx-0">
                <CompletedEvent longTitle={eventInfo.longTitle} address={eventInfo.address} date={eventInfo.date} />
            </div>
            <div className="p-3 ml-8 mr-8 text-center text-zinc-400 leading-6 text-xs md:text-base md:text-zinc-500">Your tickets will be sent to the email address which was speicfied during the transaction.</div>
            <div className="fixed text-center bottom-6 right-0 left-0 mx-6 hover:pointer md:static md:mx-0 md:self-end">
                <button className="bg-teal-600 hover:bg-teal-700 ease-in-out rounded-md h-14 w-full bottom-0 md:w-auto">Return to home page</button>
            </div> 
        </div>
    )
}

export default PurchaseComplete;