import { useState } from "react";


export default function SupplierDetail() {
  const [supplier, setSupplier] = useState({
    "id":'2',
    "supplierName": "La Carne",
    "address": "2491 BT Den Haag", 
    "telephone": "+31 038 202 21 72", 
    "email": "info@lacarne.nl",  
    "logoUrl": "https://www.lacarne.nl/image/catalog/development/logo.svg", 
    "category": "Meat Supplier", 
    "website": "https://www.lacarne.nl/",  
    "description": "Premium beef retailer offering high-quality cuts directly to consumers. Not a wholesale supplier.",
    "isFavorite": true,
  });

  const toggleFavorite = () => {
    setSupplier({ ...supplier, isFavorite: !supplier.isFavorite });
  };

  if (!supplier) {
    return <div>Supplier not found!</div>;
  }

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
          <button onClick={toggleFavorite} className="text-sm font-medium text-blue-500 hover:text-blue-400 transition duration-300 ease-in-out">
            {supplier.isFavorite ? "Unfavorite" : "Favorite"}
          </button>
        </div>
      </div>
    </div>
  );
}