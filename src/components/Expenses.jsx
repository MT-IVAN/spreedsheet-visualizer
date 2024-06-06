import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { ExpenseDetails } from './ExpenseDetails'
import { useExpenses } from '../hooks/useExpenses'

export function Expenses({ expenses, setExpenses }) {
  const [week, setWeek] = useState(31)
  const [month, setMonth] = useState('junio')
  const { getExpenses, updateExpense } = useExpenses({
    expenses,
    setExpenses,
  })

  const handleChange = (e) => {
    e.preventDefault()
    const newMonth = e.target.value
    setMonth(newMonth)
    getExpenses({ month: newMonth, week })
  }
  const handleChangeWeek = (e) => {
    e.preventDefault()
    const newEndDate = e.target.value
    setWeek(newEndDate)
    getExpenses({ month, week: newEndDate })
  }

  useEffect(() => {
    console.log('render expenses')
  }, [expenses, getExpenses])
  return (
    <>
      <select value={month} onChange={handleChange}>
        <option value={'junio'}>Jun</option>
        <option value={'mayo'}>May</option>
      </select>
      <select value={week} onChange={handleChangeWeek}>
        <option value={'8'}>8 days</option>
        <option value={'15'}>15 days</option>
        <option value={'22'}>22 days</option>
        <option value={'31'}>31 days</option>
      </select>
      <TableContainer>
        <Table variant="striped" size="sm">
          <Thead>
            <Tr>
              <Th>fecha</Th>
              <Th>description</Th>
              <Th>value</Th>
              <Th>action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {expenses.map((expense) => {
              return (
                <Tr key={expense.id}>
                  <Td>{expense.fecha}</Td>

                  <Td>{expense.description}</Td>

                  <Td>{expense.value}</Td>
                  <Td>
                    <ExpenseDetails product={expense} />
                  </Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}
