/* eslint-disable react/prop-types */

import { useDispatch } from 'react-redux';
import { updateSupplier } from '../../store/slices/supplierSlice'; // Import updateSupplier thunk

export default function SupplierCard({ supplier }) {
  const dispatch = useDispatch();

  const handleToggleFavorite = async () => {
    const updatedSupplier = {
      ...supplier,
      isFavorite: !supplier.isFavorite,
    };
    try {
      await dispatch(updateSupplier(updatedSupplier));
    } catch (error) {
      console.error('Error updating supplier favorite:', error);
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
      
      <button
        onClick={handleToggleFavorite}
        className="absolute top-2 right-2 p-1 bg-white rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {supplier.isFavorite ? (
          <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
        ) : (
          <div className="w-4 h-4 bg-red-400 rounded-full"></div>
        )}
      </button>
    </div>
  );
}