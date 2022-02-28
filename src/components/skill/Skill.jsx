import { useEffect, useState } from 'react'
import SkillList from '../skillList/SkillList'
import './skill.scss'
import { development, testing, softskills } from '../../data'

export default function Skill() {
  const [selected, setSelected] = useState('development')
  const [data, setData] = useState([])
  const list = [
    {
      id: 'development',
      title: 'Development',
    },
    {
      id: 'testing',
      title: 'Software Testing',
    },
    {
      id: 'softskills',
      title: 'Softskills',
    },
  ]

  useEffect(() => {
    switch (selected) {
      case 'development':
        setData(development)
        break
      case 'testing':
        setData(testing)
        break
      case 'softskills':
        setData(softskills)
        break
      default:
        setData(development)
    }
  }, [selected])

  return (
    <div className='skill' id='skills'>
      <h1>Skills & Technicals</h1>
      <ul>
        {list.map((item) => (
          <SkillList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className='container'>
        {data.map((d) => (
          <div className='item'>
            <img src={d.img} alt='' />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
