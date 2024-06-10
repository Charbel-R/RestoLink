import SupplierCard from "./SupplierCard";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSuppliersById } from "../../store/slices/supplierSlice";


export default function SupplierList({ onSupplierClick }) {
  const dispatch = useDispatch();

  const { currentUser, mySuppliersIds } = useSelector(state => state.user);
  const { favoriteSuppliers , suppliers} = useSelector(state => state.suppliers);

  console.log(mySuppliersIds)
  useEffect(() => {
    if (currentUser && mySuppliersIds.length > 0) {
      dispatch(fetchSuppliersById(mySuppliersIds)); // Dispatch thunk with favorite IDs
    }
  }, [currentUser, dispatch, mySuppliersIds]); // Include dispatch in dependency array

  return (
    <div className="container mx-auto px-4 ">
      {/* List of Favorite Suppliers (conditionally rendered) */}
      {currentUser && favoriteSuppliers.length > 0 && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold  text-indigo-600 mb-4">
            Your Favorite Suppliers
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {favoriteSuppliers.map((supplier) => (
              <li
                key={supplier._id}
                className="supplier-card rounded-lg shadow-md overflow-hidden bg-white transform hover:scale-105 transition duration-300 ease-in-out"
                onClick={() => onSupplierClick(supplier)} 
              >
                <SupplierCard supplier={supplier} />
              </li>
            )) }
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
            onClick={() => onSupplierClick(supplier)}  
          >
            <SupplierCard supplier={supplier} />
          </li>
        ))}
      </ul>
    </div>
  );
}