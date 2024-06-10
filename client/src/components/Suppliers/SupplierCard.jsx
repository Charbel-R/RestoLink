/* eslint-disable react/prop-types */

import { useDispatch , useSelector} from 'react-redux';

const baseUrl = 'http://localhost:3000';

export default function SupplierCard({ supplier }) {
  const dispatch = useDispatch();

  const { currentUser } = useSelector(state => state.user);
  const { token } = useSelector(state => state.user);
  const accessToken = token;

  const handleAddFavorite = async () => {
    try {
      const response = await fetch(`${baseUrl}/auth/favorites/${supplier._id}`, { // Replace with your actual API endpoint
        method: 'PUT',
        headers: {
          Authorization: accessToken, // Include token in headers
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error adding supplier to favorites');
      }

      // Update local state or dispatch an action to update user data in Redux (if applicable)
      dispatch({ type: 'user/updateFavorites', payload: { supplierId: supplier._id } }); // Example action dispatch
    } catch (error) {
      console.error('Error adding supplier to favorites:', error);
    }
  };


  return (
    <div className="relative">
      <div className="p-6 flex flex-col items-center space-y-4">
        <img
          className="supplier-logo h-20  object-cover rounded-full mx-auto mb-4"
          src={supplier.logoUrl}
          alt={supplier.supplierName + " Logo"}
        />
        <h3 className="text-xl font-medium text-center text-gray-800">{supplier.supplierName}</h3>
        <p className="text-gray-600 text-center">{supplier.description}</p>
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
      {currentUser &&
      <button
        onClick={handleAddFavorite}
        className="absolute top-2 right-2 p-1 bg-white rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
        {supplier.isFavorite ? (
          <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
        ) : (
          <div className="w-4 h-4 bg-red-400 rounded-full"></div>
        )}
      </button>}
    </div>
  );
}