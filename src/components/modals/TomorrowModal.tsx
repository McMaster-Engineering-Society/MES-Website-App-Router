import { Bookmark } from 'lucide-react';
import React, { useState } from 'react';

import ButtonLink from '@/components/links/ButtonLink';

type TomorrowModalProps = {
  open: boolean
  onClose: ()=> void
  tomInfo: string
}



const TomorrowModal: React.FC<TomorrowModalProps> = ({open, onClose, tomInfo}) => {

  // const [roomsAvail, setRoomsAvail] = useState({
  //   h201: ["h201", true],
  //   h203: ["h203", true],
  //   h205: ["h205", true],
  //   h204a: ["h204a", true],
  //   h204b: ["h204b", true],
  // })

  const h201Av = true
  const h203Av = true
  const h205Av = true
  const h204aAv = false
  const h204bAv = true

  // const roomSel = useState({
  //   "h201": false,
  //   "h203": false,
  //   "h205": false,
  //   "h204a": false,
  //   "h204b": false,
  // })

  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const handleRoomSelection = (room: string) => {
    setSelectedRoom(room);
  };

  // const selectedRoom = (room: string, roomSel: Map<string, boolean>) => {
  //   roomSel.forEach((values, keys) => {
  //     if (keys == room) {
  //       roomSel.set(room, true)
  //     } else {
  //       roomSel.set(keys, false)
  //     }
  //   })
  // }

  const roomButtonClass = (room: string, av:boolean) =>
    av === true 
      ? `border-solid border-1 rounded-lg py-0.5 px-1 mr-2.5 text-sm 
        ${(selectedRoom===room)
          ? "text-green-600 border-green-600 bg-green-100" 
          : "bg-white border-gray-600 hover:bg-green-100 hover:text-green-600 hover:border-green-600"}`
      : `border-solid border-1 rounded-lg py-0.5 px-1 mr-2.5 text-sm bg-gray-50 border-gray-300 text-gray-300`;
  


    return (
      <div 
        className={`fixed inset-0 flex justify-center items-center transition-colors
          ${open ? "visible bg-black/20" : "invisible"}`}
        onClick={onClose}
      >
        <div
          className={`bg-white rounded-lg shadow transition-all max-w-2xl border-solid border-2 border-green-300 py-8 px-12
            ${open ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            className="absolute top-2 right-2 py-0.5 px-2 border 
              berder-neutral-200 rounded-md text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
            onClick={onClose}
          >
            X
          </button>
          {/* {children} */}
          <h1 className="text-center mx mb-5">Same Time Tomorrow</h1>

          <div className="flex">
            <button
                className={`border-solid border-2 border-green-600 rounded-lg px-5 py-5 m-3 bg-green-100 text-green-600 "`}
              >
                <div>
                  <b className='text-lg'>Same time<br/>tomorrow:<br/></b>
                  <i>4:30pm (2H)<br/></i>
                  <i>07/31/24<br/></i>
                </div>
              </button>
            <div className="ml-5">

              <h4 className="mt-2 mb-0.5">Available Rooms:</h4>
              <div className="flex">

                <button
                  className={roomButtonClass("h201", h201Av)}
                  onClick={() => {handleRoomSelection("h201")} 
                  }
                >
                  H201
                </button>

                <button
                  className={roomButtonClass("h203", h203Av)}
                  onClick={() => {handleRoomSelection("h203")} 
                  }
                >
                  H203
                </button>

                <button
                  className={roomButtonClass("h205", h205Av)}
                  onClick={() => {handleRoomSelection("h205")} 
                  }
                >
                  H205
                </button>
                <button
                  className={roomButtonClass("h204a", h204aAv)}
                  onClick={() => {handleRoomSelection("h204a")} 
                  }
                >
                  H204A
                </button>
                <button
                  className={roomButtonClass("h204b", h204bAv)}
                  onClick={() => {handleRoomSelection("h204b")} 
                  }
                >
                  H204B
                </button>
              </div>
              <h4 className="mt-3">Confirm Booking:</h4>
              <p className="text-small mb-1.5">Room <b>H201</b>, <b>4:30 pm (2H), July 31, 2024. </b></p>
              <ButtonLink
                  href='/user-dashboard'
                  className='drop-shadow-2xl rounded-full bg-red-50 text-primary-700 transition-colors duration-75 py-0.'
                  size='sm'
                  leftIcon={Bookmark}
                  leftIconClassName='w-4 h-4'
                >
                  Book Now
                </ButtonLink> 
            </div>
          </div>
        </div>
      </div>
    )
}

export default TomorrowModal;