const eventInfo = {
    title: "Queen", longTitle: "Queen Tour 2022", location: "Gröna Lund",
    address: "Lilla Allmänna Gränd 9, 115 21 Stockholm", price: 829, date: "Thursday, 23 Feb 2022 | 20:00"
}

const PurchaseComplete = () => {
    return (
        <div className="min-h-screen pb-20 bg-zinc-800 text-zinc-100 md:max-w-3xl md:bg-white md:m-auto md:py-8">
            <div className="flex flex-col md:gap-2">
                <div className="text-3xl md:text-5xl text-center mt-20 mb-4">Purchase completed!</div>
            </div>
            <div className="bg-gray-600 text-center rounded-lg p-3 ml-8 mr-8 text-sm">You have successfully purchased tickets to the following event!</div>
            <div className="flex flex-col mt-10 text-center text-sm gap-1 md:text-sm md:border-b border-slate-300 md:pb-3">
                <div className="underline text-center text-teal-400 md:text-blue-800 ">{eventInfo.address}</div>
                <div className="md:text-slate-800">{eventInfo.date}</div>
            </div>
            <div className="fixed bottom-6 right-0 left-0 mx-6 md:static md:mx-0 md:self-end">
                <button className="bg-teal-600 rounded-md h-14 w-full bottom-0 md:w-auto">Return to home page</button>
            </div>
        </div>
    )
}

export default PurchaseComplete;