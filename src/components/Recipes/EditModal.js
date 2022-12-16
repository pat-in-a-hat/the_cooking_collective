import React from 'react'
import {Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure} from '@chakra-ui/react'
import EditForm from './EditForm'

export default function EditModal ({ updateRecipe, id, link, notes }) {
    
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
      <>
        <Button colorScheme='yellow' onClick={onOpen}>Edit</Button>
  
        <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        motionPreset='slideInBottom'
        scrollBehavior='inside'
        size='xl'
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add a Recipe</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <EditForm 
                onClose={onClose} 
                updateRecipe={updateRecipe} 
                id={id} 
                link={link} 
                notes={notes}
                />
            </ModalBody>
  
            <ModalFooter>
            </ModalFooter>
          </ModalContent>
        </Modal>
        </>
    )
}

//<Button colorScheme='yellow' mr={3} onClick={() => console.log('saved')}>Add Recipe</Button>