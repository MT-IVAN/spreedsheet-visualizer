import { useState } from 'react'

export function useCalendarDays() {
  const [currentDate, setCurrentDate] = useState(new Date())

  currentDate.setDate(1)
  const idxOfFirstDay = currentDate.getDay()
  const dateWithLastDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate()

  return { idxOfFirstDay, dateWithLastDay, currentDate, setCurrentDate }
}
