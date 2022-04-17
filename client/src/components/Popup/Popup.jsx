import React, { Fragment, useEffect, useState } from 'react'
import { 
    XIcon,
    LocationMarkerIcon,
    CalendarIcon,
    MinusIcon,
    PlusIcon
} from "@heroicons/react/solid"

const smText = "Nam non porttitor nisi, ac egestas nunc. Donec vitae arcu elit. Donec tincidunt erat sed tempus porta. Mauris laoreet vestibulum dolor sit amet tempor. Maecenas nec arcu fringilla, congue nunc ac, elementum lacus. Vestibulum eu erat in purus sollicitudin fermentum in sed ante. Morbi at sagittis augue, id pellentesque ipsum. Phasellus in tortor neque. Curabitur condimentum justo ut elit gravida facilisis. Quisque viverra varius ex vitae rutrum. Nam non porttitor nisi, ac egestas nunc. Donec vitae arcu.";
const lgText = "Nam non porttitor nisi, ac egestas nunc. Donec vitae arcu elit. Donec tincidunt erat sed tempus porta. Mauris laoreet vestibulum dolor sit amet tempor. Maecenas nec arcu fringilla, congue nunc ac, elementum lacus. Vestibulum eu erat in purus sollicit Nam non porttitor nisi, ac egestas nunc. Donec vitae arcu elit. Donec tincidunt erat sed tempus porta. Mauris laoreet vestibulum dolor sit amet tempor. Maecenas nec arcu fringilla, congue nunc ac, elementum lacus. Vestibulum eu erat in purus sollicit Nam non porttitor nisi, ac egestas nunc. Donec vitae arcu elit. Donec tincidunt erat sed tempus porta. Mauris laoreet vestibulum dolor sit amet tempor. Maecenas nec arcu fringilla, congue nunc ac, elementum lacus. Vestibulum eu erat in purus sollicit Nam non porttitor nisi, ac egestas nunc. Donec vitae arcu elit. Donec tincidunt erat sed tempus porta. Mauris laoreet vestibulum dolor sit amet tempor. Maecenas nec arcu fringilla, congue nunc ac, elementum lacus. Vestibulum eu erat in purus sollicit Donec tincidunt erat sed tempus porta. Mauris laoreet vestibulum dolor sit amet tempor. Maecenas nec arcu fringilla, congue nunc ac, elementum lacus. Vestibulum eu erat in purus sollicit Nam non porttitor nisi, ac egestas nunc. Donec vitae arcu elit. Donec tincidunt erat sed tempus porta. Mauris laoreet vestibulum dolor sit amet tempor. Maecenas nec arcu fringilla, congue nunc ac, elementum lacus. Vestibulum eu erat in purus sollicit Nam non porttitor nisi, ac egestas nunc. Donec vitae arcu elit. Donec tincidunt erat sed tempus porta. Mauris laoreet vestibulum dolor sit amet tempor. Maecenas nec arcu fringilla, congue nunc ac, elementum lacus. Vestibulum eu erat in purus sollicit Nam non porttitor nisi, ac egestas nunc. Donec vitae arcu elit. Donec tincidunt erat sed tempus porta. Mauris laoreet vestibulum dolor sit amet tempor. Maecenas nec arcu fringilla, congue nunc ac, elementum lacus. Vestibulum eu erat in purus sollicit";

var ExampleTickets = [
    {
        id:0,
        type: "Vuxen",
        price: 499,
        description: "Detta är för personer mellan 18-65.",
    },
    {
        id:1,
        type: "Ungdom",
        price: 399,
        description: "Detta är för personer mellan 15-18. Leg måste uppvisas",
    },
    {
        id:2,
        type: "VIP",
        price: 999,
        description:
            "Detta är för personer mellan 18-65. Bättre sikt och mer benutrymme. Leg. måste uppvisas",
    }
  ];



const TicketButton = (props) => {

    let price = ExampleTickets[props.index].price;

    let counter = props.counters[props.index]

    /**************************************** */

    const decrement = () => {
        if(counter > 0){
            props.counters[props.index]--
            props.setCounters(props.counters)
            props.setTotal(props.total - price)
        }
    };
    const increment = () => {
        props.counters[props.index]++
        props.setCounters(props.counters)
        props.setTotal(props.total + price)
    };
    

    return (
      <div className="grid grid-cols-3 items-center justify-center w-32">
        <button
          className={`bg-[#93d1ac] ${counter <= 0 ? "cursor-not-allowed" : "hover:bg-teal-700"} shadow-sm w-9 h-9 rounded-3xl flex justify-center items-center transition duration-200 ease-in-out`}
          onClick={decrement}
        >
          <MinusIcon className="text-[#f5f5f5] h-5" />
        </button>
  
        <div className="text-center text-2xl text-gray-700 hover:text-black font-medium flex justify-center items-center">
          {counter}
        </div>
  
        <button
          className="bg-[#93d1ac] hover:bg-teal-700 shadow-sm w-9 h-9 rounded-3xl flex justify-center items-center transition duration-200 ease-in-out"
          onClick={increment}
        >
          <PlusIcon className="text-[#f5f5f5] h-7" />
        </button>
      </div>
    );
  };

const PurchaseStep = (props) => {

    return (
        <div className='bg-[#f5f5f5] mt-20 md:mt-0 p-8 md:p-20 md:w-[62%] md:overflow-y-auto'>
            <div className="">
                <div className="text-left font-bold text-4xl py-1 my-5">
                    {props.eventInfo.longTitle}
                </div>

                <div className="text-sm mt-2 flex items-center">
                    <LocationMarkerIcon className="h-4 mr-2" />
                    <a
                    href={props.eventInfo.locationUrl}
                    className="underline text-[#268763]"
                    >
                    {props.eventInfo.location.address}
                    </a>
                </div>
                <div className="my-3 flex items-center pb-4">
                    <CalendarIcon className="h-4 mr-2" />
                    <div className="text-sm">{props.eventInfo.date}</div>
                </div>
                <div className="text-left font-bold pt-4 pb-2 mb-2 border-t">
                    Välj biljetter
                </div>
            </div>
            <div className="md:h-fit text-[16px]">
                    <table className="flex flex-col items-center justify-between md:justify-items-stretch w-full rounded-xl">
                    <tbody className="flex flex-col w-full">
                        {ExampleTickets.map((row, index) => {
                        return (
                            <Fragment key={index}>
                            <tr
                                className={`${index === 0 || "border-t mt-4 pt-2"} flex justify-between`}
                                key={index}
                            >
                                <td className="font-bold">{row.type}</td>
                                <td className="font-bold text-right">
                                {row.price} kr
                                </td>
                            </tr>
                            <tr className="flex justify-between items-start mt-2">
                                <td className="font-light leading-6 text-gray-700 md:pr-10 pr-5">
                                {row.description}
                                </td>
                                <td className="">
                                <TicketButton index={index} counters={props.counters} setCounters={props.setCounters} total={props.total} setTotal={props.setTotal}/>
                                </td>
                            </tr>
                            </Fragment>
                        );
                        })}
                        <tr className="border-t mt-4 pt-2"/>
                    </tbody>
                    </table>
                </div>
            </div>
    )
}

const PurchaseSummary = (props) => {


    return (
    <div className="">
        <div className="md:pt-10 font-bold text-[18px] border-b">Sammanfattning av order</div>
        {props.total <= 0 ?
            <div className='text-base mt-4 text-zinc-500'>Du har inte valt dina biljetter än!</div>
            :
            <div>
            {props.purchaseCompletePopup &&
            <div className="font-bold text-[16px] my-2">Ordernr: <span className="font-normal">#{props.orderNo}</span></div>
        }
        <table className="table-fixed w-[100%] text-[14px]">
            <tbody>
                {
                    ExampleTickets.map((row, index) => (
                        props.counters[index] === 0 || (
                            <tr className={`${index === 0 || 'border-t'} h-8 px-2 py-1`} key={index}>
                                <td className='w-[60%] md:w-[20%]'>{row.type}</td>
                                <td className='w-[20%] md:w-[50%] text-right'>x{props.counters[index]}</td>
                                <td className='w-[20%] md:w-[30%] text-right'>{row.price * props.counters[index]} kr</td>                                
                            </tr>
                        )
                    ))
                }
            </tbody>
            </table>
                <div className='text-left mt-4 text-[16px]'>Totalpris: 
                    <span className='text-[#268763] text-xl ml-1 font-bold'>
                        {props.total} kr
                    </span>
                </div>
            </div>
        }
    </div>
  )
}

const PurchaseCompleteStep = (props) => {

    return (
        <div className="bg-[#f5f5f5] mt-20 md:mt-0 p-8 md:p-20 md:w-[62%] md:overflow-y-auto">
            <div className="">
                <div className='text-left font-bold text-4xl py-1 pb-3 my-2 pt-6'>Tack för ditt köp!</div>

                <div className='text-[16px] mt-1'>
                    <div>Biljetterna har skickats till <span className="text-[#268763]">{props.examplePurchaseInfo.email}</span>.</div>
                </div>
                <div className="">
                    <div className='text-left font-bold  text-[16px] pt-4 my-2 border-t'>Meddelande från arrangören:</div>
                    <div className="rounded-lg text-sm">
                        {smText}
                    </div>
                    <a className="cursor-pointer text-sm underline pt-5 text-[#268763]">Kontakta arrangören</a>
                </div>
            </div>
        </div>
    )
}

const Popup = (props) => {

    let initialCounters = []
    for (var i = 0; i < ExampleTickets.length; i++){
        initialCounters.push(0)
    }

    const [total, setTotal] = useState(0)
    const [counters, setCounters] = useState(initialCounters)

    return (
        <div className='popup-box'>
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity">
                <div className="flex md:flex-row flex-col fixed inset-0 md:inset-y-[15%] md:inset-x-[15%] overflow-y-auto md:overflow-y-hidden z-50 bg-[#f5f5f5] text-2xl md:rounded-lg">
                    {/*Left side*/}
                    {props.purchaseCompletePopup ?
                        <PurchaseCompleteStep examplePurchaseInfo={props.examplePurchaseInfo}/>
                            :
                        <PurchaseStep eventInfo={props.eventInfo} counters={counters} setCounters={setCounters} total={total} setTotal={setTotal}/>
                    }

                    {/*Right side*/}
                    <div className="flex flex-col bg-[#edeeef] p-7 pb-12 md:p-10 md:pt-20 md:pb-7 md:overflow-y-auto md:w-[38%] md:h-[100%]">
                        <PurchaseSummary purchaseCompletePopup={props.purchaseCompletePopup} orderNo={props.examplePurchaseInfo.orderNo} counters={counters} total={total} />
                        {props.purchaseCompletePopup ||
                            <button
                                className={`mt-6 md:mt-auto ${total <= 0 ? "bg-zinc-300 text-zinc-500 cursor-not-allowed" : "bg-btnBG hover:bg-teal-700"} rounded-btn text-[16px] text-black font-medium py-2 w-full transition ease-in-out duration-200`}
                                onClick={total === 0 || (() => props.handleStep())}
                            >
                                Köp
                            </button>
                        }
                    </div>
                    
                    <div className='fixed cursor-pointer hover:bg-[#ddd] ease-in-out md:absolute top-20 md:top-5 bg-[#f5f5f5] md:bg-transparent rounded-full p-2 shadow-md md:shadow-none right-5 z-[100]' onClick={props.handleClose}>
                    <XIcon className="h-7 w-7"/>
                </div>    
                </div>
            </div>
        </div>
    )
}

export default Popup