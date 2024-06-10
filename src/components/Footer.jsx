import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <div className="footer">
      <Link to={`/`}>Main</Link>
      <Link to={`/calendar`}>Calendar</Link>
    </div>
  )
}
