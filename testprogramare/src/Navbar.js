import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './Navbar.css';
export default function Navbar() {
  return (
   <div className="nav-container" >
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
    <div className="top-part">
      <ul>
      <li style={{color:"#0054A4"}}>Free inspection. Same Day Service.<b>Call 888-123-4567</b></li>
      <li>Our Guarantee</li>
      <li>Resources</li>
      <li style={{color:"#0054A4"}}>Custumer Potential</li>
      <li> <button>GET AN ESTIMATE</button></li>
      </ul>
     
    </div>
    
    
    <nav className="nav">
      <ul >
        <CustomLink to="/" >Residential</CustomLink>
        <CustomLink to="/" >Commercial</CustomLink>
        <CustomLink to="/" >Location</CustomLink>
        <CustomLink to="/" >Pests</CustomLink>
        <CustomLink to="/" >Why Excel</CustomLink>
        <CustomLink to="/" >Contact</CustomLink>
      </ul>
    </nav>
    </div>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
    
  )
}
