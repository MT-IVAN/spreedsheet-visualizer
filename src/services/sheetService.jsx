//export const DATA_SHEET_URI = 'http://192.168.1.14:3000/'
import { DATA_SHEET_URI } from '../constants/index'

export async function getDataSheet({ month, week }) {
  try {
    const fetchUri = `${DATA_SHEET_URI}expenses?month=${month}&upToDay=${week}`
    const res = await fetch(fetchUri)
    const data = await res.json()
    return data
  } catch (error) {
    throw new Error('Could not fetch data')
  }
}

export async function createExpense({
  date,
  description,
  comments,
  budget,
  group,
  from,
  value,
}) {
  try {
    const res = await fetch(DATA_SHEET_URI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        date,
        description,
        comments,
        budget,
        group,
        from,
        value,
      ]),
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw new Error('Could not create expense')
  }
}

export function formatResultWhenCreated(element) {
  const [date, description, comments, budget, group, from, value] = element
  return {
    fecha: date,
    description,
    comments,
    budget,
    group,
    from,
    value,
  }
}
