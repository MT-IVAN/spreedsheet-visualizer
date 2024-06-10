import { DAYS } from '../constants/index'

export function HeaderDay() {
  return DAYS.map((day) => <div>{day}</div>)
}
