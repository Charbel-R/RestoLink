import { Link } from "react-router-dom"
import { useSelector } from "react-redux"


// trial 

export default function Navbar() {
  const { currentUser } = useSelector(state => state.user);
  
  return (
    <div className='bg-blue-800 text-white'>
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <div className="flex gap-4">
          <Link to={'/'} >
            <h1 className="font-bold">RestoLink</h1>  
          </Link>
          {currentUser && (
            <h3 className="cursor-none font-semibold"> Welcome {currentUser.username} </h3>
          )}
        </div>
        <ul className="flex  gap-3">
          <Link to={'/'}>
            <li>Home</li>
          </Link>
          <Link to={'/about'}>
            <li>About</li>
          </Link>
          {currentUser && (
            <Link to={'/favorites'}>
              <li>Favorites</li>
            </Link> 
          )}
          <Link to={'/profile'}>
            {currentUser ? (
                  <img 
                  src={currentUser.profilePicture} 
                  alt='profile'
                  className="h-7 w-7 rounded-full object-cover"/>
            ) : (
              <li>Sign In</li> 
            )}
          </Link>
          <Link to={'/sign-up'}>
            {currentUser ? '' :  <li>Register</li> }
          </Link>
        </ul>
      </div>
    </div>
  )
}
