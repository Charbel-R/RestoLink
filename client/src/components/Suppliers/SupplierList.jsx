import SupplierCard from "./SupplierCard";

// eslint-disable-next-line react/prop-types
export default function SupplierList({suppliers}) {
  
  // eslint-disable-next-line react/prop-types
  const favoriteSuppliers = suppliers.filter(supplier => supplier.isFavorite);

  

  return (
    <div className="container mx-auto px-4 ">
      {/* List of Favorite Suppliers (conditionally rendered) */}
      {favoriteSuppliers.length > 0 && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold  text-indigo-600 mb-4">
            Your Favorite Suppliers
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {favoriteSuppliers.map((supplier) => (
              <li 
                key={supplier._id}
                className="supplier-card rounded-lg shadow-md overflow-hidden bg-white transform hover:scale-105 transition duration-300 ease-in-out"
                >
                {/* <Link to={`/supplier/${supplier.id}`}> */}
                  <SupplierCard supplier={supplier} />
                {/* </Link> */}
              </li>
            ))}
          </ul>
        </div>
      )}
      <h2 className="text-3xl font-bold mt-7 text-indigo-600 mb-8">
        Find Your Perfect Supplier
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {suppliers.map((supplier) => (
          <li
            key={supplier._id}
            className="supplier-card rounded-lg shadow-md overflow-hidden bg-white transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <SupplierCard supplier={supplier} />
          </li>
        ))}
      </ul>
    </div>
  );
}

