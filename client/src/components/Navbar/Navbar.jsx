import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TicketIcon, LoginIcon, UserCircleIcon } from '@heroicons/react/outline'
import { useSelector } from 'react-redux'
import LoginPopup from '../LoginPopup/LoginPopup'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => setIsOpen(!isOpen);
    const { loggedIn } = useSelector((state) => state.loggedIn);
    
    const onLogin = e => {
        e.preventDefault();
        setIsOpen(true);
    }

    const showPopup = () => {
        if (isOpen && !loggedIn)
            return <LoginPopup handleClose={togglePopup} />
    }

    return (
        <div>
            <nav className="sticky top-0 flex h-[64px] bg-[#FAFAFA] drop-shadow-lg w-full z-[1050]">

                <div className="flex px-4 py-2 md:px-8 flex-wrap justify-between items-center w-full md:max-w-6xl md:mx-auto">
                    <Link to="/">
                        <div className={`bg-[url('/public/assets/images/biljetta.png')]
                    bg-cover h-7 w-[110px] ml-1`}>
                        </div>
                    </Link>
                    <div className="">
                        <ul className="flex md:space-x-2 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <button className='flex justify-content bg-[#A9E3C0] text-[#0A1F44] px-3 md:px-4 py-2 md:py-2 md:py-2.5 ml-2 md:ml-1.5 rounded-full md:rounded-xl text-[14px] md:text-[16px]'>
                                    <TicketIcon className='h-6 w-6 md:h-5 md:w-5' />
                                    <span className='ml-1 hidden md:block'>Biljetter</span>
                                </button>
                            </li>
                            <li>
                                {loggedIn ? (
                                    <button className='flex justify-content bg-[#A9E3C0] text-[#0A1F44] px-3 md:px-4 py-2 md:py-2 md:py-2.5 ml-2 md:ml-1.5 rounded-full md:rounded-xl text-[14px] md:text-[16px]'>
                                        <UserCircleIcon className='h-6 w-6 md:h-5 md:w-5' />
                                        <span className='ml-1 hidden md:block'>Profil</span>
                                    </button>
                                ) : (
                                    <button
                                        className='flex justify-content bg-[#A9E3C0] text-[#0A1F44] px-3 md:px-4 py-2 md:py-2 md:py-2.5 ml-2 md:ml-1.5 rounded-full md:rounded-xl text-[14px] md:text-[16px]'
                                        onClick={e => onLogin(e)}>
                                        <LoginIcon className='h-6 w-6 md:h-5 md:w-5' />
                                        <span className='ml-1 hidden md:block'>Logga in</span>
                                    </button>
                                )}

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {showPopup()}
        </div>

    )
}

export default Navbar