/* eslint-disable react/prop-types */

import { useDispatch , useSelector} from 'react-redux';
import { updateFavoritesStart, updateFavorites, updateFavoritesFailed } from '../../store/slices/userSlice'; 

const baseUrl = 'http://localhost:3000';

export default function FavoritesCard({ supplier, onsShowSupplierClick }) {
  const dispatch = useDispatch();
  const { currentUser,token } = useSelector(state => state.user);
  const { favoriteSuppliers } = useSelector(state => state.suppliers);

  const handleToggleFavorite = async () => {
    dispatch(updateFavoritesStart())
    try {
      const { _id: supplierId } = supplier; // Extract supplier ID

      const isFavorite = currentUser?.favoriteSuppliers?.includes(supplierId); // Check if supplier ID exists in favorites

      const response = await fetch(`${baseUrl}/auth/favorites/${supplierId}`, {
        method: isFavorite ? 'DELETE' : 'PUT', // Use DELETE for removal PUT for Adding
        headers: {
          Authorization: token,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error removing supplier from favorites');
      }
      // Update local state or dispatch an action to update user data in Redux
      dispatch(updateFavorites({ supplierId })); // Dispatch action with supplier ID
    } catch (error) {
      console.error('Error removing supplier from favorites:', error);
    }
  };


  return (
    <div className="relative">
      <div className="p-6 flex flex-col items-center space-y-4">
        <img
          onClick={() => onsShowSupplierClick(supplier)} 
          className="supplier-logo h-20  object-cover rounded-full mx-auto mb-4 cursor-pointer"
          src={supplier.logoUrl}
          alt={supplier.supplierName + " Logo"}
        />
        <h3 className="text-xl font-medium text-center text-gray-800">{supplier.supplierName}</h3>
        <div className="flex justify-center space-x-4">
          {supplier.website && ( // Check if website exists before rendering link
            <a
              href={supplier.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition duration-300 ease-in-out"
            >
              Visit Website
            </a>
          )}
          <span className="inline-block bg-indigo-100 text-indigo-600 text-xs font-medium rounded-full px-2 py-1">
            {supplier.category}
          </span>
        </div>
      </div>
      <div className="flex justify-center">
        {currentUser &&
        <button
          onClick={handleToggleFavorite}
          className="absolute top-5 right-5 p-1 bg-white rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
          <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
        </button>}
      </div>
    </div>
  );
}