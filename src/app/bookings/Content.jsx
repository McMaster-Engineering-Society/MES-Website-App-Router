import React from "react";

import AvailableRoom from '@/components/bookings/AvailableRoom';
import {AvailableRooms} from "@/constant/hatch-bookings/available-rooms";

export default function Content() {

  return(
    <>
    {AvailableRooms.map((roomInfo) => (<AvailableRoom key={roomInfo.roomNum} {...roomInfo}/> ))}
    {/* <AvailableRoom/>
    <AvailableRoom/>
    <AvailableRoom/>
    <AvailableRoom/> */}
  
    </>
  );
}