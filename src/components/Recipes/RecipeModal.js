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

export default function RecipeModal () {
    
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
      <>
        <Button colorScheme='yellow' onClick={onOpen}>Add Recipe</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>Testing...</p>
            </ModalBody>
  
            <ModalFooter>
                <Button colorScheme='yellow' mr={3} onClick={() => console.log('saved')}>Add Recipe</Button>
                <Button colorScheme='gray' onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        </>
    )
}