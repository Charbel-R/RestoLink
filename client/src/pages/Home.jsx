import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchSuppliers } from '../store/slices/supplierSlice';
import SupplierList from '../components/Suppliers/SupplierList';
import SupplierDetail from '../components/Suppliers/SupplierDetails';

export default function Home() {
  const dispatch = useDispatch();
  const { suppliers, isLoading, error } = useSelector((state) => state.suppliers);

  const [selectedSupplier, setSelectedSupplier] = useState(null);

  // Fetch suppliers on component mount
  useEffect(() => {
    dispatch(fetchSuppliers());
  }, [dispatch, isLoading]); // Include dispatch in dependency array

  const handleShowSupplier = (supplier) => {
    setSelectedSupplier(supplier); // Update selected supplier state on click
  };

  const handleHideSupplier = () => {
    setSelectedSupplier(null); // Update selected supplier state on click
  };



  return (
    <>
      {isLoading && <p>Loading suppliers...</p>}
        {error && <p>Error: {error}</p>}
        {suppliers.length > 0 && (
          <div className="my-2 mx-5">
            {!selectedSupplier && ( // Render SupplierList if no supplier is selected
              <SupplierList suppliers={suppliers} onSupplierClick={handleShowSupplier} />
            )}
            {selectedSupplier && ( // Render SupplierDetail only if selectedSupplier has a value
              <SupplierDetail chosenSupplier={selectedSupplier} onBackToSuppliersClick={handleHideSupplier} />
            )}
          </div>
        )}
    </>
  );
}