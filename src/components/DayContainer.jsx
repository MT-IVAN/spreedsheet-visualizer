import { ProgressBar } from './ProgressBar'

const { format } = new Intl.NumberFormat('es-CO', {
  maximumFractionDigits: 0,
})

export function DayContainer({ day, idxOfFirstDay, expensesDay }) {
  const spendPorcentage = (expensesDay * 100) / 100000

  return (
    <div className="box-element">
      <h3>{day - idxOfFirstDay}</h3>
      <div className="progress-container">
        <p style={{ fontSize: '8px' }}>{format(expensesDay)}</p>
        <ProgressBar porcentage={spendPorcentage} />
      </div>
    </div>
  )
}
