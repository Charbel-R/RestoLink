import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className='bg-pink-100'>
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={'/'} >
          <h1 className="font-bold">RestoLink</h1>  
        </Link>
        <ul className="flex  gap-3">
          <Link to={'/'}>
            <li>Home</li>
          </Link>
          <Link to={'/about'}>
            <li>About</li>
          </Link>
          <Link to={'/sign-in'}>
            <li>Sign In</li> 
          </Link>
          <Link to={'/sign-up'}>
            <li>Register</li> 
          </Link>
        </ul>
      </div>
    </div>
  )
}
