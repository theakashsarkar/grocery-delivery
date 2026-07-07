import Addresses from "../../pages/Addresses";
import { dummyAddressData } from "../../data/address";
import { useState, useEffect } from "react";
const AddressesContainer = () => {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setAddresses(dummyAddressData);
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <Addresses
      addresses={addresses}
      loading={loading}
      handleSubmit={handleSubmit}
    />
  );
};
export default AddressesContainer;
