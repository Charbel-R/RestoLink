import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchSuppliers } from '../store/slices/supplierSlice';
import SupplierList from '../components/Suppliers/SupplierList';
import SupplierDetail from '../components/Suppliers/SupplierDetails';

export default function Home() {
  const dispatch = useDispatch();
  const { suppliers, isLoading, error } = useSelector((state) => state.suppliers);

  // Fetch suppliers on component mount
  useEffect(() => {
    dispatch(fetchSuppliers());
  }, [dispatch, suppliers]); // Include dispatch in dependency array


  return (
    <>
      {isLoading && <p>Loading suppliers...</p>}
      {error && <p>Error: {error}</p>}
      {suppliers.length > 0 && (
        <div className="my-2 mx-5">
          <SupplierList suppliers={suppliers}/>
          <SupplierDetail />
        </div>
      )}
    </>
  );
}