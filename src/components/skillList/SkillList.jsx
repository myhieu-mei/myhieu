import './skillList.scss'

export default function skillList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? 'skillList active' : 'skillList'}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  )
}
