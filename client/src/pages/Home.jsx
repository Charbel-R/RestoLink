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
          <div className="py-5 h-auto bg-blue-50">
            {!selectedSupplier && ( // Render SupplierList if no supplier is selected
              <SupplierList suppliers={suppliers} onsShowSupplierClick={handleShowSupplier} />
            )}
            {selectedSupplier && ( // Render SupplierDetail only if selectedSupplier has a value
              <SupplierDetail selectedSupplier={selectedSupplier} onBackToSuppliersClick={handleHideSupplier} />
            )}
          </div>
        )}
    </>
  );
}