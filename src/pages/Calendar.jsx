import './calendar.css'
import { useState, useEffect } from 'react'
import { ProgressBar } from '../pages/ProgressBar'
import { Select } from '@chakra-ui/react'

//render the calendar ✅
//indentificar día que inicia el calendar ✅
//indentificar el dia que acabe ✅
//hacer un filtro por dîa de los gastos de la api -> almacenar la fecha ✅
//mostrar
//la fecha almacenada === la fecha del cuadro

export function Calendar() {
  let day = 0
  const [currentDate] = useState(new Date())
  const [aux] = useState(new Array(6).fill(new Array(7).fill(0)))
  const [selectedMonth, setSelectedMonth] = useState('')

  currentDate.setDate(1)
  currentDate.setMonth(4)

  const idxOfFirstDay = currentDate.getDay()
  const dateWithLastDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate()

  const { format } = new Intl.NumberFormat('es-CO', {
    maximumFractionDigits: 0,
  })

  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ]

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const [expensesByDay, setExpensesByDay] = useState({})

  const handleSelectChange = (e) => {
    e.preventDefault()
    setSelectedMonth(e.target.value)
  }

  useEffect(() => {
    fetch(`http://192.168.1.14:3000/getAccPerDay?month=${selectedMonth}`)
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
          {months.map((month) => {
            return (
              <option value={month.toLowerCase()} key={month}>
                {month}
              </option>
            )
          })}
        </Select>
      </div>

      <div className="calendar-box">
        {days.map((day) => (
          <div>{day}</div>
        ))}
        {expensesByDay &&
          aux.map((rows) => {
            return (
              <>
                {rows.map((_) => {
                  day++
                  if (
                    day > idxOfFirstDay &&
                    day <= dateWithLastDay + idxOfFirstDay
                  ) {
                    const getExpensesOnDay =
                      expensesByDay[
                        day - idxOfFirstDay < 10
                          ? `0${day - idxOfFirstDay}`
                          : day - idxOfFirstDay
                      ] || 0
                    const spendPorcentage = (getExpensesOnDay * 100) / 100000

                    return (
                      <div className="box-element">
                        <h3>{day - idxOfFirstDay}</h3>
                        <div className="progress-container">
                          <p style={{ fontSize: '8px' }}>
                            {format(getExpensesOnDay)}
                          </p>
                          <ProgressBar porcentage={spendPorcentage} />
                        </div>
                      </div>
                    )
                  } else {
                    return <div className=""></div>
                  }
                })}
              </>
            )
          })}
      </div>
    </>
  )
}
;[
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
]
