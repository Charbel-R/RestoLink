
import { useState } from "react";
export default function SupplierCard({ supplier }) {

  const [supp, setSupp] = useState({...supplier});

  if (!supplier) return null;

  const handleFavoriteToggle = () => {
    setSupp({ ...supplier, isFavorite: !supp.isFavorite });
  };

  return (
    <div className="relative">
      <div className="p-6 flex flex-col items-center space-y-4">
        <img
          className="supplier-logo h-20  object-cover rounded-full mx-auto mb-4"
          src={supp.logoUrl}
          alt={supp.supplierName + " Logo"}
        />
        <h3 className="text-xl font-medium text-center text-gray-800">{supp.supplierName}</h3>
        <p className="text-gray-600 text-center">{supp.description}</p>
        <div className="flex justify-center space-x-4">
          {supp.website && ( // Check if website exists before rendering link
            <a
              href={supp.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition duration-300 ease-in-out"
            >
              Visit Website
            </a>
          )}
          <span className="inline-block bg-indigo-100 text-indigo-600 text-xs font-medium rounded-full px-2 py-1">
            {supp.category}
          </span>
        </div>
      </div>
      
      <button
        onClick={handleFavoriteToggle}
        className="absolute top-2 right-2 p-1 bg-white rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {supp.isFavorite ? (
          <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
        ) : (
          <div className="w-4 h-4 bg-red-400 rounded-full"></div>
        )}
      </button>
    </div>
  );
}