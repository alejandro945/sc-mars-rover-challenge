import { QueryContext, QueryContextType } from '@/src/contexts'
import { Button, FormControl, FormHelperText, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'

const SModal = () => {
  const { getStorage, isModalOpen, setModalOpen, setDrawerOpen, query } = React.useContext(QueryContext) as QueryContextType
  const toast = useToast()
  const [input, setInput] = useState("")
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)
  const isError = input === ""
  return (
    <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Bookmark</ModalHeader>
        <ModalCloseButton />

        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Name" value={input} onChange={handleInputChange} />
            <FormHelperText> Enter the name you&apos;d like to save. </FormHelperText>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button isDisabled={isError} colorScheme="orange" onClick={() => { getStorage().add({ ...query, name: input, id: Date.now() }); toast({ title: "Bookmark successfully added", status: "success", isClosable: true }); setInput(""); setModalOpen(false); setDrawerOpen(false) }}> Save </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default SModal