import SupplierCard from "./SupplierCard";

const mockSuppliers = [
  {
    "id":'1',
    "supplierName": "A.G. Scholtes B.V.",
    "address": "2491 BT Den Haag",
    "telephone": "+31 070 317 54 17",
    "email": "info@agscholtes.nl",
    "logoUrl": "https://www.agscholtes.nl/wp-content/uploads/2019/08/Scholtes_Logo_Corporate_FC.png",
    "category": "Meat Supplier",
    "website": "https://www.agscholtes.nl/en/",
    "description": "Fourth-generation family-owned business specializing in high-quality beef for the hospitality industry, butchers, wholesalers, and supermarkets.", // Description based on web search
    "isFavorite": false,
  },
  {
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
  },
  {
    "id":'3',
    "supplierName": "Holland Dairy Star BV", 
    "address": "3815 KN Amersfoort", 
    "telephone": " +31 033 476 02 30", 
    "email": "info@hollanddairystar.nl", 
    "logoUrl": "https://hollanddairystar.nl/files/images/logo.png",
    "category": "Dairy Products",  
    "website": "https://hollanddairystar.nl/",  
    "description": "Welcome to Holland Dairy Star: specialist in the field of european cheese, milk and mil products such as yoghurt cream and butter.",
    "isFavorite": true,
  },
  {
    "id":'4',
    "supplierName": "Farmel", 
    "address": "8305 BJ Emmeloord",  
    "telephone": "+31 052 763 05 00", 
    "email": "info@farmel.nl", 
    "logoUrl": "https://media.licdn.com/dms/image/C560BAQEoo9pAnMLSfg/company-logo_200_200/0/1631343084784?e=2147483647&v=beta&t=GmofYTm4MLfk9tMLDkYFDPlqXdX4kxSJ9vQyiy0j9r4", 
    "category": "Dairy Products",  
    "website": "https://farmel.nl/en", 
    "description": "Farmel is a fast-growing and dynamic company that is mainly active in the (inter)national trade in raw milk and various dairy products, including powder and butter. Thanks to our extensive network of our own dairy farmers, we can maintain a large and stable milk volume at all times.",
    "isFavorite": false,
  },
  {
    "id":'5',
    "supplierName": "De Monnik Dranken",  
    "address": "7575 EM Oldenzaal",  
    "telephone": "+31 054 151 30 76", 
    "email": "info@monnik-dranken.nl", 
    "logoUrl": "https://monnik-dranken.nl/Assets/img/de-monnik-dranken_logo.svg", 
    "category": "Beverages", 
    "website": "https://monnik-dranken.nl/", 
    "description": "Wholesaler of a variety of wines and spirits, importing from over 40 countries.",
    "isFavorite": true,
  },
  {
    "id":'6',
    "supplierName": "United Dutch Distributors", 
    "address": "1175 RM Lijnden",  
    "telephone": "+31 (0)495 57 99 99",  
    "email": "info@uniteddutchdistributors.nl",  
    "logoUrl": "https://lirp-cdn.multiscreensite.com/0e8b5f6c/dms3rep/multi/opt/logo_udd_300x100-1920w.png",  
    "category": "Beverages", 
    "website": "https://www.uniteddutchdistributors.nl/",  
    "description": "Distributes international premium spirits, champagnes, and beers across the MENA region and emerging markets." ,
    "isFavorite": true,
  },
  
];

const favoriteSuppliers = mockSuppliers.filter(supplier => supplier.isFavorite);

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


export default function SupplierList() {
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
                key={supplier.id}
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
        {mockSuppliers.map((supplier) => (
          <li
            key={supplier.id}
            className="supplier-card rounded-lg shadow-md overflow-hidden bg-white transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <SupplierCard supplier={supplier} />
          </li>
        ))}
      </ul>
    </div>
  );
}

