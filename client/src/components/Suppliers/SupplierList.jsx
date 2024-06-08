
const mockSuppliers = [
  {
    "supplierName": "A.G. Scholtes B.V.",
    "address": "2491 BT Den Haag",
    "telephone": "+31 070 317 54 17",
    "email": "info@agscholtes.nl",
    "logoUrl": "https://www.agscholtes.nl/wp-content/uploads/2019/08/Scholtes_Logo_Corporate_FC.png",
    "category": "Meat Supplier",
    "website": "https://www.agscholtes.nl/en/",
    "description": "Fourth-generation family-owned business specializing in high-quality beef for the hospitality industry, butchers, wholesalers, and supermarkets." // Description based on web search
  },
  {
    "supplierName": "La Carne",
    "address": "2491 BT Den Haag", 
    "telephone": "+31 038 202 21 72", 
    "email": "info@lacarne.nl",  
    "logoUrl": "https://www.lacarne.nl/image/catalog/development/logo.svg", 
    "category": "Meat Supplier", 
    "website": "https://www.lacarne.nl/",  
    "description": "Premium beef retailer offering high-quality cuts directly to consumers. Not a wholesale supplier."
  },
  {
    "supplierName": "Holland Dairy Star BV", 
    "address": "3815 KN Amersfoort", 
    "telephone": " +31 033 476 02 30", 
    "email": "info@hollanddairystar.nl", 
    "logoUrl": "https://hollanddairystar.nl/files/images/logo.png",
    "category": "Dairy Products",  
    "website": "https://hollanddairystar.nl/",  
    "description": "Welcome to Holland Dairy Star: specialist in the field of european cheese, milk and mil products such as yoghurt cream and butter."
  },
  {
    "supplierName": "Farmel", 
    "address": "8305 BJ Emmeloord",  
    "telephone": "+31 052 763 05 00", 
    "email": "info@farmel.nl", 
    "logoUrl": "https://media.licdn.com/dms/image/C560BAQEoo9pAnMLSfg/company-logo_200_200/0/1631343084784?e=2147483647&v=beta&t=GmofYTm4MLfk9tMLDkYFDPlqXdX4kxSJ9vQyiy0j9r4", 
    "category": "Dairy Products",  
    "website": "https://farmel.nl/en", 
    "description": "Farmel is a fast-growing and dynamic company that is mainly active in the (inter)national trade in raw milk and various dairy products, including powder and butter. Thanks to our extensive network of our own dairy farmers, we can maintain a large and stable milk volume at all times." 
  },
  {
    "supplierName": "De Monnik Dranken",  
    "address": "7575 EM Oldenzaal",  
    "telephone": "+31 054 151 30 76", 
    "email": "info@monnik-dranken.nl", 
    "logoUrl": "https://monnik-dranken.nl/Assets/img/de-monnik-dranken_logo.svg", 
    "category": "Beverages", 
    "website": "https://monnik-dranken.nl/", 
    "description": "Wholesaler of a variety of wines and spirits, importing from over 40 countries."
  },
  {
    "supplierName": "United Dutch Distributors", 
    "address": "1175 RM Lijnden",  
    "telephone": "+31 (0)495 57 99 99",  
    "email": "info@uniteddutchdistributors.nl",  
    "logoUrl": "https://lirp-cdn.multiscreensite.com/0e8b5f6c/dms3rep/multi/opt/logo_udd_300x100-1920w.png",  
    "category": "Beverages", 
    "website": "https://www.uniteddutchdistributors.nl/",  
    "description": "Distributes international premium spirits, champagnes, and beers across the MENA region and emerging markets." 
  },
  
];

export default function SupplierList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
        Find Your Perfect Supplier
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {mockSuppliers.map((supplier) => (
          <li
            key={supplier.supplierName}
            className="supplier-card rounded-lg shadow-md overflow-hidden bg-white transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <div className="p-6 flex flex-col items-center space-y-4">
              <img
                className="supplier-logo h-20 object-cover rounded-full mx-auto"
                src={supplier.logoUrl}
                alt={supplier.supplierName + " Logo"}
              />
              <h3 className="text-xl font-medium text-center text-gray-800">{supplier.supplierName}</h3>
              <p className="text-gray-600 text-center">{supplier.description}</p>
              <div className="flex justify-center space-x-4">
                <a
                  href={supplier.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition duration-300 ease-in-out"
                >
                  Check Website
                </a>
                <span className="inline-block bg-indigo-100 text-indigo-600 text-xs font-medium rounded-full px-2 py-1">
                  {supplier.category}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

