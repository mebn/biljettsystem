import { useParams } from "react-router-dom";

const eventInfo = {
    title: "Queen", longTitle: "Queen Tour 2022", location: "Gröna Lund",
    address: "Lilla Allmänna Gränd 9, 115 21 Stockholm", price: 829,
    imgUrl: "/public/assets/images/eventBanner.jpeg", date: "Thursday, 23 Feb 2022 | 20:00"
}

const Event = () => {
    let params = useParams();
    return (
        <div className="min-h-screen pb-20 bg-gray-800 text-slate-100 md:max-w-3xl md:bg-white md:m-auto md:py-8">
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
                    <div className="text-2xl md:text-slate-800 md:text-3xl">{eventInfo.longTitle}</div>
                    <div className="bg-gray-600 block px-3 py-2 rounded-md">{eventInfo.price} kr</div>
                </div>
                <div className="flex flex-col text-xs gap-1 md:text-sm md:border-b border-slate-300 md:pb-3">
                    <div className="flex underline text-blue-500 md:text-blue-800 ">{eventInfo.address}</div>
                    <div className="md:text-slate-800">{eventInfo.date}</div>
                </div>
                <div className="bg-gray-600 rounded-lg p-2.5 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis quidem voluptatem, molestiae vero repellendus sunt sequi aperiam fugiat odit, cupiditate distinctio amet deleniti. Numquam molestiae voluptatum nihil modi. Fuga, unde?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam saepe officiis aliquid, magnam maxime enim pariatur ad recusandae dolorum quasi. Incidunt quam aut at quidem ratione nihil asperiores iste Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere alias corrupti saepe magnam quisquam veniam labore illo corporis quaerat quo voluptatem ipsam, ut reprehenderit impedit perspiciatis vero? Ea, inventore accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum qui omnis nesciunt unde, fugit non est porro quidem debitis rem adipisci quam quis sed, sit reiciendis enim nobis necessitatibus odio. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ipsam aliquid, officiis nemo, vel voluptatum nesciunt ipsa animi est distinctio iusto nulla iste placeat corrupti dicta dignissimos eligendi provident autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui, ducimus eius ea libero laboriosam non suscipit aspernatur dolorem necessitatibus consectetur impedit nihil nesciunt. Non labore praesentium itaque dicta minima. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam eum rerum quasi? Magnam excepturi totam ut blanditiis fuga quo, sed rerum, aliquid minima expedita sapiente veritatis magni dolor dignissimos non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nulla suscipit non ut quisquam autem officiis facere labore ratione reiciendis, totam aliquam maxime similique, omnis dolore, eos harum quas aut!</div>
                <div className="fixed bottom-6 right-0 left-0 mx-6 md:static md:mx-0 md:self-end">
                    <button className="bg-teal-600 rounded-md h-14 w-full bottom-0 md:w-auto">Tickets</button>
                </div>
            </div>

        </div>


    )
}

export default Event;