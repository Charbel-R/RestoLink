import SupplierCard from "./SupplierCard";


export default function SupplierList({suppliers}) {
  
  const favoriteSuppliers = suppliers.filter(supplier => supplier.isFavorite);

  const randomFavs = (function () {
    if (favoriteSuppliers.length <= 3) {
      // If there are 3 or fewer suppliers, return them all
      return favoriteSuppliers;
    } else {
      // Shuffle the list to randomize the order
      const shuffledSuppliers = favoriteSuppliers.slice(); 
      for (let i = shuffledSuppliers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledSuppliers[i], shuffledSuppliers[j]] = [shuffledSuppliers[j], shuffledSuppliers[i]];
      }
      // Pick the first 3 suppliers from the shuffled list
      return shuffledSuppliers.slice(0, 3);
    }
  })();

  return (
    <div className="container mx-auto px-4 ">
      {/* List of Favorite Suppliers (conditionally rendered) */}
      {favoriteSuppliers.length > 0 && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold  text-indigo-600 mb-4">
            Your Favorite Suppliers
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {randomFavs.map((supplier) => (
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

