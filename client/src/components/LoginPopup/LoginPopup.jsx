import React, { useState } from "react";
import {
    XIcon,
    PlusIcon
} from "@heroicons/react/solid";
import { Link } from "react-router-dom";


const googleLogin = () =>{
    let url = window.location.href.split(':')[1]
    console.log(url);

    window.open(`http:${url}:7050/auth/google?return=${window.location.href}`, "_self")
  }
const LoginPopup = (props) => {
    return (
        <div className="popup-box">
            <div className="fixed inset-0 bg-black bg-opacity-30 z-[1050]" />
            <div className="fixed inset-0 z-[1100] md:max-w-sm md:mr-auto md:ml-auto md:inset-56 md:shadow-lg">
                <div className="h-full z-50 overflow-auto md:rounded-xl bg-white">
                    <div className="font-bold pt-8 pb-8 border-b text-2xl text-center">Logga in</div>
                    <div className="flex flex-col justify-center items-center">
                        
                        <button
                            className="bg-[#eeeeee] hover:bg-[#bbbbbb] shadow-sm w-72 h-16 rounded-lg 
                            flex justify-center items-center transition duration-200 ease-in-out mt-32 md:mt-16" 
                            onClick={googleLogin}
                        >
                            <div className={`bg-[url('/public/assets/images/google.png')] bg-cover h-[25px] w-[25px] ml-[20px] flex-none`} />
                            <div className ="flex-auto text-xl">Logga in med google</div>
                            
                        </button>
                    </div>

                    <div
                        className="fixed cursor-pointer hover:bg-[#ddd] ease-in-out md:absolute top-5 bg-gray-50  rounded-full p-2 shadow-md right-5 z-[100]"
                        onClick={props.handleClose}
                    >
                        <XIcon className="h-7 w-7" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPopup;