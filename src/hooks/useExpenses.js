import { getDataSheet } from '../services/sheetService'

export const useExpenses = ({ setExpenses }) => {
  const getExpenses = async ({ month, week }) => {
    try {
      const result = await getDataSheet({ month, week })
      setExpenses(result)
    } catch (error) {
      console.error(error)
    }
  }

  const updateExpense = async (expense, setExpenses) => {
    setExpenses((aloh) => {
      return [...aloh, expense]
    })
  }

  return { getExpenses, updateExpense }
}
