import { XIcon } from "@heroicons/react/solid";
import { setLoggedOut } from "../../redux/loggedIn";
import { useDispatch, useSelector } from 'react-redux'
import { LogoutIcon } from '@heroicons/react/outline'


const LogoutPopup = (props) => {
    const dispatch = useDispatch();

    const logout = e => {
        e.preventDefault();
        fetch(`/api/auth/logout`);
        dispatch(setLoggedOut());
        props.setIsOpen(false);
    }

    return (
        <div className="popup-box">
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-[1050]" />
            <div className="fixed inset-0 z-[1100] md:max-w-sm md:mr-auto md:ml-auto md:inset-56 md:shadow-lg">
                <div className="h-full z-50 overflow-auto md:rounded-lg bg-[#f5f5f5]">
                    <div className="font-bold pt-8 pb-8 border-b text-2xl text-center">Logga ut?</div>
                    <div className="flex flex-col justify-center items-center">
                        <button className='flex justify-content bg-[#A9E3C0] text-[#0A1F44] px-3 md:px-4 py-2 md:py-2 ml-2 md:ml-1.5 rounded-full md:rounded-xl text-[14px] md:text-[16px]'
                            onClick={e => logout(e)}>
                            <LogoutIcon className='h-6 w-6 md:h-5 md:w-5' />
                            <span className='ml-1'>Logga ut</span>
                        </button>
                    </div>
                    <div className='fixed cursor-pointer hover:bg-[#ddd] transition ease-in-out duration-200 md:absolute top-5 md:to-20 bg-[#f5f5f5] md:bg-transparent rounded-full p-2 shadow-md md:shadow-none right-5 z-[100]' onClick={props.handleClose}>
                        <XIcon className="h-7 w-7" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogoutPopup;