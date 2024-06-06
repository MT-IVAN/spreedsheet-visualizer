import { useState } from 'react'
import {
  createExpense,
  formatResultWhenCreated,
} from '../services/sheetService'
import { useExpenses } from './useExpenses'
export function useForm({ setExpenses }) {
  const [errorCreatingExpense, setErrorCreatingExpense] = useState(null)
  const { updateExpense } = useExpenses({ setExpenses })
  const [wasElementCreatedSuccesfully, setWasElementCreatedSuccesfully] =
    useState(null)

  const getCurrentDateToString = () => {
    const date = new Date()
    let day = date.toLocaleString('en-US', { day: '2-digit' })
    let month = date.toLocaleString('en-US', { month: 'long' })
    let year = date.getFullYear()
    return `${month}-${day}-${year}`
  }

  const generateExpense = async ({
    description,
    comments,
    budget,
    group,
    from,
    value,
  }) => {
    try {
      const result = await createExpense({
        date: getCurrentDateToString(),
        description,
        comments,
        budget,
        group,
        from,
        value,
      })
      updateExpense(formatResultWhenCreated(result), setExpenses)
    } catch (err) {
      setErrorCreatingExpense(err.message)
    }
  }

  return { generateExpense, errorCreatingExpense, setErrorCreatingExpense }
}
