import {
  Input,
  Select,
  NumberInput,
  NumberInputField,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import { toast } from 'sonner'
import { useForm } from '../hooks/useForm'

export function AddExpensesForm({ expenses, setExpenses }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { generateExpense, errorCreatingExpense, setErrorCreatingExpense } =
    useForm({ setExpenses })

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const description = formData.get('description')
    const comments = formData.get('comments')
    const budget = formData.get('budget')
    const group = formData.get('group')
    const from = formData.get('from')
    const value = formData.get('value')
    generateExpense({ description, comments, budget, group, from, value })
    onClose()
  }
  if (errorCreatingExpense) {
    toast(errorCreatingExpense)
    setErrorCreatingExpense(null)
  }

  return (
    <>
      <Button onClick={onOpen}>Add New Expense</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Expense</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <label>Description</label>
              <Input name="description" placeholder="Burger, Oil, Subscition" />
              <label>Coments</label>
              <Input name="comments" placeholder="Coments..." />
              <label>Budget</label>
              <Select name="budget" placeholder="Budget or not Budget">
                <option value="Monthly Budget">Monthly Budget</option>
                <option value="Non budget">Non budget</option>
              </Select>
              <label>Group</label>
              <Select name="group" placeholder="Group">
                <option value="Family">Family</option>
                <option value="Girlfriend">Girlfriend</option>
                <option value="Friends">Friends</option>
                <option value="Me">Me</option>
                <option value="Someone">Someone</option>
              </Select>
              <label>Origin</label>
              <Select name="from" placeholder="From">
                <option value="MasterBlack">MasterBlack</option>
                <option value="VisaBlack">VisaBlack</option>
                <option value="Amex">Amex</option>
                <option value="Nu">Nu</option>
                <option value="Nequi">Nequi</option>
                <option value="AhorrosBank">AhorrosBank</option>
                <option value="Cash">Cash</option>
              </Select>
              <label>Cost</label>
              <NumberInput isRequired name="value">
                <NumberInputField />
              </NumberInput>
              <Button colorScheme="red" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button type="submit" colorScheme="teal">
                Button
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
