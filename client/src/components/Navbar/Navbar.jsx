import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TicketIcon, LoginIcon, UserCircleIcon } from '@heroicons/react/outline'


// Had problem creating dynamic JSX Tags. Code below didn't work!

// const NavBtn = (props) => {
//     const IconTag = `${props.iconTag}`

//     return(
//         <button className='flex justify-content bg-[#A9E3C0] text-[#0A1F44] px-2.5 md:px-4 py-1.5 md:py-2.5 ml-2 rounded-xl'>
//             <IconTag className='mr-1 h-5 w-5'/>
//             {props.name}
//         </button>
//     )
// }

const Navbar = () => {

    const [loggedIn, setLoggedIn] = useState(false)

    const onLogin = (e) => {
        e.preventDefault();
        setLoggedIn(true);
    }

  return (
    <nav className="flex px-4 py-2 sm:px-4 h-[64px] bg-[#FAFAFA] drop-shadow-lg">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Link to="/">
                <div className={`bg-[url('/public/assets/images/biljetta.png')]
                    bg-cover h-7 w-[110px] ml-1`}>
                </div>
            </Link>
            <div className="">
                <ul className="flex md:space-x-2 md:mt-0 md:text-sm md:font-medium">
                    <li>
                        {/* <NavBtn name='Biljetter' iconTag='TicketIcon' */}
                        <button className='flex justify-content bg-[#A9E3C0] text-[#0A1F44] px-2.5 md:px-4 py-1.5 md:py-2.5 ml-2 rounded-xl text-[14px] md:text-[16px]'>
                            <TicketIcon className='mr-1 h-5 w-5'/>
                            Biljetter
                        </button>
                    </li>
                    <li>
                        {loggedIn ? (
                            <button className='flex justify-content bg-[#A9E3C0] text-[#0A1F44] px-2.5 md:px-4 py-1.5 md:py-2.5 ml-2 rounded-xl text-[14px] md:text-[16px]'>
                                <UserCircleIcon className='mt-[1px] sm:mt-[-1px] mr-1 h-5 w-5'/>
                                Profil
                            </button>
                        ) : (
                            <button 
                                className='flex justify-content bg-[#A9E3C0] text-[#0A1F44] px-2.5 md:px-4 py-1.5 md:py-2.5 ml-2 rounded-xl text-[14px] md:text-[16px]'
                                onClick={e => onLogin(e)}>
                                <LoginIcon className='mt-[1px] sm:mt-[-1px] mr-1 h-5 w-5'/>
                                Logga in
                            </button>
                        )}
                        
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar