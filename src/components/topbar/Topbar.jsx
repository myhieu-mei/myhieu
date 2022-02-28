import './topbar.scss'
import { Person, Mail, Facebook, LinkedIn } from '@material-ui/icons'

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            My Hieu
          </a>
          <div className='itemContainer'>
            <Person className='icon' />
            <span>+84 339 478 292</span>
          </div>
          <div className='itemContainer'>
            <Mail className='icon' />
            <span>myhieu.mei@gmail.com</span>
          </div>
          <div className='itemContainer'>
            <Facebook className='icon' />
            <a href='https://www.facebook.com/meio.uwu/' target='_blank'>
              <span>Mỹ Hiệu</span>
            </a>
          </div>
          <div className='itemContainer'>
            <LinkedIn className='icon' />
            <a
              href='https://www.linkedin.com/in/hieu-ho-thi-my/'
              target='_blank'
            >
              <span>Ho Thi My Hieu</span>
            </a>
          </div>
        </div>
        <div className='right'>
          <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
