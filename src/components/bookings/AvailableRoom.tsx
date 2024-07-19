
'use client'
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";


export default function Content() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return(
    <>
      <div className="bg-[#A6192E] box-border rounded-xl h-36 w-40 p-4 my-4 border-4 text-center flex flex-col items-center justify-center"> 
        <p><b>204A</b></p> 
        <Button className="bg-white box-border rounded-xl h-20 w-26 p-1 my-2 border-4  text-center items-center" onPress={onOpen}>
          <b>Room Information</b>
        </Button>
        </div>
         
      <Modal size="xs" isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">204A</ModalHeader>
              <ModalBody>
                <p> 
                  Room capacity: 2
                  Outlet: 4
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