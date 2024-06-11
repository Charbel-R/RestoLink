import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { refreshSearchedSuppliers, resetSearchedSuppliers } from "../store/slices/supplierSlice";
import { toggleIsLoading } from "../store/slices/userSlice";



export default function Navbar() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.user);
  const { suppliers } = useSelector(state => state.suppliers); // Access suppliers data

  const [searchTerm, setSearchTerm] = useState("");

  const [searchedSuppliers, setSearchedSuppliers] = useState([]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase()); // Convert search term to lowercase
    // dispatch(resetSearchedSuppliers())
    dispatch(toggleIsLoading());
    // Filter suppliers based on search term and category
    const searchedSuppliers = suppliers.filter((supplier) => {
      const searchTermLowerCase = e.target.value.toLowerCase();

      // Filter by category (if category data exists)
      if (supplier.category) {
        return (
          supplier.category.toLowerCase().includes(searchTermLowerCase) ||
          supplier.supplierName.toLowerCase().includes(searchTermLowerCase)
        );
      } else {
        // Filter by name if no category data
        return supplier.supplierName.toLowerCase().includes(searchTermLowerCase);
      }
    });

    console.log(searchTerm.length)

    if (!searchTerm) {
      console.log("hello form reset");
      dispatch(resetSearchedSuppliers())
    }

    setSearchedSuppliers(searchedSuppliers)
    dispatch(refreshSearchedSuppliers(searchedSuppliers))
   

  };



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
        <div className="flex items-center gap-2"> {/* Search field section */}
          <input
            type="text"
            placeholder="Search Suppliers"
            value={searchTerm}
            onChange={handleSearchChange}
            className="bg-gray-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* Implement search functionality here (e.g., call a filter function) */}
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
