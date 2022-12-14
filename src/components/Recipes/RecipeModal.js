import React from 'react'
import { useRef } from 'react'
import {Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure} from '@chakra-ui/react'
import RecipeForm from './RecipeForm'

export default function RecipeModal ({ addRecipe }) {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const formRef = useRef(null)

    return (
      <>
        <Button colorScheme='yellow' onClick={onOpen}>Add Recipe</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add a Recipe</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <RecipeForm formRef={formRef} addRecipe={addRecipe}/>
            </ModalBody>
  
            <ModalFooter>
                <Button colorScheme='yellow' mr={3} type='submit' onClick={() => formRef.current.focus()}>Add Recipe</Button>
                <Button colorScheme='gray' onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        </>
    )
}

//<Button colorScheme='yellow' mr={3} onClick={() => console.log('saved')}>Add Recipe</Button>