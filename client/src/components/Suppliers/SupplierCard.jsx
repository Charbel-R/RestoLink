import React from "react";

export default function SupplierCard({ supplier }) {
  // Early return if supplier is undefined
  if (!supplier) return null; 

  return (
    <div >
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
    </div>
  );
}