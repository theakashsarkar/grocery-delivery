import Addresses from "../../pages/Addresses";
import { dummyAddressData } from "../../data/address";
import { useState, useEffect } from "react";
const AddressesContainer = () => {
  const initialForm = {
    label: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    isDefault: false,
  };
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditiongId] = useState(null);
  const [form, setForm] = useState(initialForm);

  const resetForm = () => {
    setForm(initialForm);
    setShowForm(false);
    setEditiongId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onEditHandler = (add) => {
    setForm({
      label: add.label,
      address: add.address,
      city: add.city,
      state: add.state,
      zip: add.zip,
      isDefault: add.isDefault,
    });
    setEditiongId(add.id);
    setShowForm(true);
  };

  useEffect(() => {
    setAddresses(dummyAddressData);
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <Addresses
      addresses={addresses}
      loading={loading}
      showForm={showForm}
      form={form}
      setAddresses={setAddresses}
      resetForm={resetForm}
      setShowForm={setShowForm}
      handleSubmit={handleSubmit}
      onEditHandler={onEditHandler}
    />
  );
};
export default AddressesContainer;
