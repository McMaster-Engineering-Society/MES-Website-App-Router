
'use client'
import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure} from "@nextui-org/react";
import React from "react";

import { HatchRoomType } from "@/constant/hatch-bookings/available-rooms";

export default function AvailableRoom(roomInfo: HatchRoomType) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return(
    <>
      <div className="bg-[#A6192E] box-border rounded-xl h-36 w-40 p-4 my-4 border-4 text-center flex flex-col items-center justify-center"> 
        <p><b>{roomInfo.roomNum}</b></p> 
        <Button className="bg-white box-border rounded-xl h-20 w-26 p-1 my-2 border-4  text-center items-center" onPress={onOpen}>
          <b>Room Information</b>
        </Button>
        </div>
         
      <Modal size="xs" isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{roomInfo.roomNum}</ModalHeader>
              <ModalBody>
                <p> 
                  Room capacity: {roomInfo.capacity}
                </p>
                <p>
                  Outlet: {roomInfo.outlets}
                </p>
                <p>
                  Resources: TV, Whiteboard
                </p>
           
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>



  
    </>
  );
}