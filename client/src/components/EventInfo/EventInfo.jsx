import { CalendarIcon, LocationMarkerIcon } from '@heroicons/react/solid'

const EventInfo = props => {
    return (
        <div className="flex flex-col text-xs gap-2.5 md:text-sm border-zinc-300 md:pb-3 md:text-zinc-700">
            <div className="flex items-center gap-2">
                <LocationMarkerIcon className="h-4" />
                <div className="underline text-blue-500 md:text-blue-800 ">{props.address}</div>
            </div>
            <div className="flex items-center gap-2">
                <CalendarIcon className="h-4" />
                <div className="md:text-zinc-800">{props.date}</div>
            </div>
        </div>
    )
}

export default EventInfo;