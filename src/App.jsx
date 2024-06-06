import './App.css'
import { Expenses } from './components/Expenses'
import { AddExpensesForm } from './components/AddExpensesForm'
import { Toaster } from 'sonner'
import { useState } from 'react'

function App() {
  const [expenses, setExpenses] = useState([])
  return (
    <>
      <h1>Expense Explorer</h1>
      <Expenses expenses={expenses} setExpenses={setExpenses} />
      <AddExpensesForm expenses={expenses} setExpenses={setExpenses} />
      <Toaster />
    </>
  )
}

export default App
