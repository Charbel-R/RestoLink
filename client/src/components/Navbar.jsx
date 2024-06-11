import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import { updateSearchedSuppliers, resetFavorites } from "../store/slices/supplierSlice";




export default function Navbar() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.user);
  const { suppliers, searchedSuppliers } = useSelector(state => state.suppliers); // Access suppliers data

  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchedSuppliers);

  const handleSearchChange = (e) => {
    // Convert search term to lowercase
    setSearchTerm(e.target.value.toLowerCase());

    // Reset searchedSuppliers state only if search term is empty
    if (!searchTerm) {
      dispatch(updateSearchedSuppliers([])); // Update to an empty array
    }

    // Reset searchedSuppliers state before filtering
    dispatch(updateSearchedSuppliers(null));

    // Filter suppliers based on search term and category
    const filteredSuppliers = suppliers.filter((supplier) => {
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
    dispatch(updateSearchedSuppliers(filteredSuppliers));
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
        <div className="flex text-blue-700 items-center gap-2"> {/* Search field section */}
          <input
            type="text"
            placeholder="Search Suppliers"
            value={searchTerm}
            onChange={handleSearchChange}
            className="bg-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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
