import { PlusIcon } from "lucide-react";
import AddressContent from "../components/address/AddressContent";
import AddressForm from "../components/address/AddressForm";
import { useState } from "react";
const initialForm = {
  label: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  isDefault: true,
};
const Addresses = ({ addresses, loading, handleSubmit }) => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);

  const onEditHandler = (add) => {
    if (!add) return;
    setForm({
      label: add.label,
      address: add.address,
      city: add.city,
      state: add.state,
      zip: add.zip,
      isDefault: add.isDefault,
    });
    setEditingId(add.id);
    setShowForm(true);
  };

  const resetForm = () => {
    setForm(initialForm);
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-orange-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-green-800">
            My Addresses
          </h1>

          <button
            onClick={() => {
              setShowForm(true);
            }}
            className="flex items-center gap-2 rounded-xl bg-green-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-600"
          >
            <PlusIcon className="size-4" />
            Add Address
          </button>
        </div>
        {showForm && (
          <AddressForm
            resetForm={resetForm}
            handleSubmit={handleSubmit}
            addresses={addresses}
            setShowForm={setShowForm}
            form={form}
            setForm={setForm}
            editingId={editingId}
          />
        )}
        <AddressContent
          loading={loading}
          addresses={addresses}
          handleSubmit={handleSubmit}
          onEdit={onEditHandler}
        />
      </div>
    </div>
  );
};
export default Addresses;
