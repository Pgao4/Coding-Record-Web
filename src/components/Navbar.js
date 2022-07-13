import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
// styles
import './Navbar.css'
import SearchBar from './SearchBar'
//image
import fireIcon from '../assets/fire-icon.svg'

export default function Navbar() {
  const { color } = useTheme()

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <img 
        src={fireIcon} 
        alt='fireIcon'
        style={{ filter: 'invert(100%)'}}  
        />
        <Link to="/" className="brand">
          <h1>KyroCode</h1>
        </Link>
        <SearchBar />
        <Link to="/create">Create Solution</Link>
      </nav>
    </div>
  )
}