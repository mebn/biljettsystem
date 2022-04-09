import React, { useState } from "react";
import {
    XIcon
} from "@heroicons/react/solid";
import { increment, decrement } from "../../redux/ticketCounter";
import { useSelector, useDispatch } from "react-redux";


const smText = "Nam non porttitor nisi, ac egestas nunc. Donec vitae arcu elit. Donec tincidunt erat sed tempus porta. Mauris laoreet vestibulum dolor sit amet tempor. Maecenas nec arcu fringilla, congue nunc ac, elementum lacus. Vestibulum eu erat in purus sollicitudin fermentum in sed ante. Morbi at sagittis augue, id pellentesque ipsum. Phasellus in tortor neque. Curabitur condimentum justo ut elit gravida facilisis. Quisque viverra varius ex vitae rutrum. Nam non porttitor nisi, ac egestas nunc. Donec vitae arcu.";
const lgText = "Nam non porttitor nisi, ac egestas nunc. Donec vitae arcu elit. Donec tincidunt erat sed tempus porta. Mauris laoreet vestibulum dolor sit amet tempor. Maecenas nec arcu fringilla, congue nunc ac, elementum lacus. Vestibulum eu erat in purus sollicit Nam non porttitor nisi, ac egestas nunc. Donec vitae arcu elit. Donec tincidunt erat sed tempus porta. Mauris laoreet vestibulum dolor sit amet tempor. Maecenas nec arcu fringilla, congue nunc ac, elementum lacus. Vestibulum eu erat in purus sollicit Nam non porttitor nisi, ac egestas nunc. Donec vitae arcu elit. Donec tincidunt erat sed tempus porta. Mauris laoreet vestibulum dolor sit amet tempor. Maecenas nec arcu fringilla, congue nunc ac, elementum lacus. Vestibulum eu erat in purus sollicit Nam non porttitor nisi, ac egestas nunc. Donec vitae arcu elit. Donec tincidunt erat sed tempus porta. Mauris laoreet vestibulum dolor sit amet tempor. Maecenas nec arcu fringilla, congue nunc ac, elementum lacus. Vestibulum eu erat in purus sollicit Donec tincidunt erat sed tempus porta. Mauris laoreet vestibulum dolor sit amet tempor. Maecenas nec arcu fringilla, congue nunc ac, elementum lacus. Vestibulum eu erat in purus sollicit Nam non porttitor nisi, ac egestas nunc. Donec vitae arcu elit. Donec tincidunt erat sed tempus porta. Mauris laoreet vestibulum dolor sit amet tempor. Maecenas nec arcu fringilla, congue nunc ac, elementum lacus. Vestibulum eu erat in purus sollicit Nam non porttitor nisi, ac egestas nunc. Donec vitae arcu elit. Donec tincidunt erat sed tempus porta. Mauris laoreet vestibulum dolor sit amet tempor. Maecenas nec arcu fringilla, congue nunc ac, elementum lacus. Vestibulum eu erat in purus sollicit Nam non porttitor nisi, ac egestas nunc. Donec vitae arcu elit. Donec tincidunt erat sed tempus porta. Mauris laoreet vestibulum dolor sit amet tempor. Maecenas nec arcu fringilla, congue nunc ac, elementum lacus. Vestibulum eu erat in purus sollicit";

const purchaseSummary = [
    {
        "type": "Vuxen",
        "number": "x3",
        "total": 1797,
        "description": "Detta är för personer mellan 18-65, leg. måste uppvisas"
    },
    {
        "type": "Ungdom",
        "number": "x1",
        "total": 399,
        "description": "Detta är för personer mellan 18-65. Bättre sikt och mer benutrymme. Leg. måste uppvisas"
    },
    {
        "type": "VIP",
        "number": "x1",
        "total": 1099,
        "description": "Detta är för personer mellan 15-18, leg måste uppvisas"
    },
]


const PurchaseSummary = (props) => {

    let n;
    if (props.shortText){
        n = 1;
    } else {
        n = 5;
    }
    
    return (
        
        <div className="">
            <div className="font-bold text-[18px] border-b">Sammanfattning av order</div>
            <div className="font-bold text-[16px] my-2">Ordernr: <span className="font-normal">#{props.orderNo}</span></div>
            <table className="table-fixed w-[100%] text-[14px]">
                <tbody>
                    {
                        [...Array(n)].map(() => 
                            purchaseSummary.map((row, index) => {
                                return (
                                    <tr className={`${index === 0 || 'border-t'} h-8 px-2 py-1`} key={index}>
                                        <td className='w-[60%] md:w-[20%]'>{row.type}</td>
                                        <td className='w-[20%] md:w-[50%] text-right'>{row.number}</td>
                                        <td className='w-[20%] md:w-[30%] text-right'>{row.total}</td>
                                    </tr>
                                );
                            })
                        )
                    }
                </tbody>
            </table>
            <div className='text-left mt-4 text-[16px]'>Totalpris: 
                <span className='text-[#268763] text-xl ml-1 font-bold'>
                    {purchaseSummary.reduce((prev, current) => {
                        return prev + current.total
                        }, 0)
                    }
                    {" "}kr
                </span>
            </div>
        </div>
    )
}

const PurchaseCompletePopup = props => {

    const [shortText, toggleText] = useState(true)

    const exampleToggle = (e) => {
        e.preventDefault();
        toggleText(!shortText)
    }

    return (
        <div className='popup-box'>
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity">
                <div className="text-center mt-10">
                    <button className="bg-white p-2 rounded-lg" onClick={e => {exampleToggle(e)}}>Toggle Example</button>
                </div>
                <div className="flex md:flex-row flex-col fixed inset-0 md:inset-y-[15%] md:inset-x-[15%] overflow-y-auto md:overflow-y-hidden z-50 bg-[#f5f5f5] text-2xl md:rounded-lg">
                    {/*Left side*/}
                    <div className="bg-[#f5f5f5] p-8 md:p-20 md:w-[62%] md:overflow-y-auto">
                        <div className="">
                            <div className='text-left font-bold text-4xl py-1 pb-3 my-2 pt-6'>Tack för ditt köp!</div>

                            <div className='text-[16px] mt-1'>
                                <div>Biljetterna har skickats till <span className="text-[#268763]">{props.email}</span>.</div>
                            </div>
                            <div className="">
                                <div className='text-left font-bold  text-[16px] pt-4 my-2 border-t'>Meddelande från arrangören:</div>
                                <div className="rounded-lg text-sm">
                                    {shortText ? smText : lgText}
                                </div>
                                <a className="cursor-pointer text-sm underline pt-5 text-[#268763]">Kontakta arrangören</a>
                            </div>
                        </div>
                    </div>

                    {/*Right side*/}
                    <div className="flex-col bg-[#edeeef] p-8 pb-12 md:p-10 md:py-20 md:overflow-y-auto md:w-[38%] md:h-[100%]">
                        <PurchaseSummary shortText={shortText} orderNo={props.orderNo} />
                    </div>
                    <div className='fixed cursor-pointer hover:bg-[#ddd] ease-in-out md:absolute top-5 bg-[#f5f5f5] rounded-full p-2 shadow-xl right-5 z-[100]' onClick={props.handleClose}>
                    <XIcon className="h-7 w-7"/>
                </div>    
                </div>
                
            </div>
        </div>
    );
};

export default PurchaseCompletePopup;
