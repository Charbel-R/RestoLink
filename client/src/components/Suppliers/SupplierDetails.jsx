// eslint-disable-next-line react/prop-types

import { useDispatch, useSelector } from 'react-redux';
import { updateFavoritesStart, updateFavorites, updateFavoritesFailed } from '../../store/slices/userSlice'; 

const baseUrl = 'http://localhost:3000';


export default function SupplierDetail({ selectedSupplier, onBackToSuppliersClick }) {
  const dispatch = useDispatch();
  const { currentUser, token, mySuppliersIds } = useSelector(state => state.user);

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

  if (!selectedSupplier) {
    return <div>Supplier not found!</div>;
  }
  const supplier = selectedSupplier;

  return (
    <div className="container mx-auto mt-20 px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-24">{supplier.supplierName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div className="supplier-image-container">
          <img
            className="supplier-logo h-40 object-cover rounded-lg mx-auto mb-4"
            src={supplier.logoUrl}
            alt={supplier.supplierName + " Logo"}
          />
        </div>
        <div className="supplier-details flex flex-col space-y-4">
          <p className="text-gray-800 font-semibold">{supplier.description}</p>
          <div className="detail-section space-x-12 ">
            <span className="text-gray-600 font-medium">Category:</span>
            <span className="text-gray-800">{supplier.category}</span>
          </div>
          <div className="detail-section space-x-14">
            <span className="text-gray-600 font-medium">Address:</span>
            <span className="text-gray-800">{supplier.address}</span>
          </div>
          <div className="detail-section space-x-10">
            <span className="text-gray-600 font-medium">Telephone:</span>
            <span className="text-gray-800">{supplier.telephone}</span>
          </div>
          <div className="detail-section space-x-20">
            <span className="text-gray-600 font-medium">Email:</span>
            <a href={`mailto:${supplier.email}`} className="text-blue-500 underline">
              {supplier.email}
            </a>
          </div>
          {supplier.website && (
            <div className="detail-section space-x-14">
              <span className="text-gray-600 font-medium">Website:</span>
              <a href={supplier.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                {supplier.website}
              </a>
            </div>
          )}
          {currentUser &&
            <button onClick={handleToggleFavorite} className="text-sm font-medium text-blue-500 hover:text-blue-400 transition duration-300 ease-in-out">
            {mySuppliersIds.includes(supplier._id) ? "Unfavorite" : "Favorite"}
          </button>}
        </div>
      </div>
      <button 
      onClick={() => onBackToSuppliersClick()} 
      className="mt-8 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400 transition duration-300 ease-in-out">
        Back to List
      </button>
    </div>
  );
}