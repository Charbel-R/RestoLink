
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import SupplierCard from '../components/Suppliers/SupplierCard';
import { fetchSuppliersById } from "../store/slices/supplierSlice";
import SupplierDetail from '../components/Suppliers/SupplierDetails';

export default function Favorites() {
  const dispatch = useDispatch();

  const { currentUser, mySuppliersIds } = useSelector(state => state.user);
  const { favoriteSuppliers } = useSelector(state => state.suppliers);

  const [selectedSupplier, setSelectedSupplier] = useState(null);

  useEffect(() => {
    if (currentUser && mySuppliersIds.length >= 0) {
      dispatch(fetchSuppliersById(mySuppliersIds)); // Dispatch fetch suppliers with user favorite IDs
    }
  }, [currentUser, dispatch, mySuppliersIds]); // Include dispatch in dependency array

  const handleShowSupplier = (supplier) => {
    setSelectedSupplier(supplier); // Update selected supplier state on click
  };

  const handleHideSupplier = () => {
    setSelectedSupplier(null); // Update selected supplier state on click
  };


  return (

    <div className="min-h-screen bg-blue-50 px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Your Favorite Suppliers</h1>
      {favoriteSuppliers.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-xl font-medium text-gray-500">
            Your favorites list is currently empty.
          </p>
        </div>
      ) : (
        <>
          {selectedSupplier && (
              <SupplierDetail selectedSupplier={selectedSupplier} onBackToSuppliersClick={handleHideSupplier} />
            )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {!selectedSupplier && favoriteSuppliers.map((supplier) => (
              <div
                key={supplier._id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <SupplierCard supplier={supplier} onsShowSupplierClick={handleShowSupplier}/>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}