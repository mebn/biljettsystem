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
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-[1050]" />
            <div className="fixed inset-0 z-[1100] md:max-w-sm md:mr-auto md:ml-auto md:inset-56 md:shadow-lg">
                <div className="h-full z-50 overflow-auto md:rounded-lg bg-[#f5f5f5]">
                    <div className="font-bold pt-8 pb-8 border-b text-2xl text-center">Logga in</div>
                    <div className="flex flex-col justify-center items-center">
                        
                        <button
                            className="bg-[#e9e9e9] hover:bg-[#bbbbbb] shadow-sm w-72 h-16 rounded-lg 
                            flex justify-center items-center transition duration-200 ease-in-out mt-32 md:mt-16" 
                            onClick={googleLogin}
                        >
                            <div className={`bg-[url('/public/assets/images/google.png')] bg-cover h-[25px] w-[25px] ml-[20px] flex-none`} />
                            <div className ="flex-auto text-xl">Logga in med google</div>
                            
                        </button>
                    </div>

                    <div className='fixed cursor-pointer hover:bg-[#ddd] transition ease-in-out duration-200 md:absolute top-20 md:top-5 bg-[#f5f5f5] md:bg-transparent rounded-full p-2 shadow-md md:shadow-none right-5 z-[100]' onClick={props.handleClose}>
                    <XIcon className="h-7 w-7"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPopup;