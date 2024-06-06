import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  IconButton,
} from '@chakra-ui/react'

import { SearchIcon } from '@chakra-ui/icons'

export function ExpenseDetails({ product }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <IconButton
        onClick={onOpen}
        colorScheme="blue"
        aria-label="Search database"
        icon={<SearchIcon />}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Details - {product.budgetId}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stat>
              <StatLabel>{product.description}</StatLabel>
              <StatNumber>$ {product.value}</StatNumber>

              <StatHelpText>
                <strong>From</strong>: {product.from} {' - '}{' '}
                <strong>Budget</strong>: {product.target}
              </StatHelpText>

              <StatHelpText>{product.fecha}</StatHelpText>
              <StatHelpText>Comments: {product.comments}</StatHelpText>
            </Stat>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
