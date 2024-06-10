import './calendar.css'
import { useState, useEffect } from 'react'
import { Select } from '@chakra-ui/react'
import { DAYS, MONTHS, DATA_SHEET_URI } from '../constants/index'
import { HeaderDay } from '../components/HearderDay'
import { DayContainer } from '../components/DayContainer'
import { useCalendarDays } from '../hooks/useCalendarDays'
import { Footer } from '../components/Footer'

export const useExpensesMonth = () => {}

export function Calendar() {
  const [aux] = useState(new Array(6).fill(new Array(7).fill(0)))
  const [selectedMonth, setSelectedMonth] = useState('')
  const { idxOfFirstDay, dateWithLastDay, currentDate } = useCalendarDays()
  const [expensesByDay, setExpensesByDay] = useState({})

  let day = 0

  const handleSelectChange = (e) => {
    e.preventDefault()
    setSelectedMonth(e.target.value)
    const newMonthIdx = MONTHS.findIndex(
      (month) => month.toLowerCase() === e.target.value.toLowerCase()
    )
    currentDate.setMonth(newMonthIdx)
  }

  const getExpensesOnDay = ({ day }) => {
    return (
      expensesByDay[
        day - idxOfFirstDay < 10
          ? `0${day - idxOfFirstDay}`
          : day - idxOfFirstDay
      ] || 0
    )
  }
  useEffect(() => {
    fetch(`${DATA_SHEET_URI}getAccPerDay?month=${selectedMonth}`)
      .then((res) => res.json())
      .then((data) => setExpensesByDay(data))
  }, [selectedMonth])
  return (
    <>
      <h1>Hola desde Calendar</h1>
      <div>
        <Select
          onChange={handleSelectChange}
          style={{ width: '100px' }}
          name="group"
          placeholder="Group"
        >
          {MONTHS.map((month) => {
            return (
              <option value={month.toLowerCase()} key={month}>
                {month}
              </option>
            )
          })}
        </Select>
      </div>

      <div className="calendar-box">
        <HeaderDay />
        {expensesByDay &&
          aux.map((rows, i) => {
            return (
              <>
                {rows.map((_, j) => {
                  day++

                  if (
                    day > idxOfFirstDay &&
                    day <= dateWithLastDay + idxOfFirstDay
                  ) {
                    const expensesDay = getExpensesOnDay({ day })

                    return (
                      <DayContainer
                        day={day}
                        idxOfFirstDay={idxOfFirstDay}
                        expensesDay={expensesDay}
                      />
                    )
                  } else {
                    return <div className=""></div>
                  }
                })}
              </>
            )
          })}
      </div>
      <Footer />
    </>
  )
}
