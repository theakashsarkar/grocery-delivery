import { PlusIcon } from "lucide-react";
import AddressContent from "../components/address/AddressContent";
const Addresses = ({
  addresses,
  loading,
  showForm,
  form,
  setAddresses,
  resetForm,
  setShowForm,
  handleSubmit,
  onEditHandler,
}) => {
  return (
    <div className="min-h-screen bg-orange-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-green-800">
            My Addresses
          </h1>

          <button
            onClick={() => {
              resetForm();
              setShowForm(true);
            }}
            className="flex items-center gap-2 rounded-xl bg-green-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-600"
          >
            <PlusIcon className="size-4" />
            Add Address
          </button>
        </div>
        <AddressContent
          loading={loading}
          addresses={addresses}
          onEdit={onEditHandler}
          onDelete={handleSubmit}
        />
      </div>
    </div>
  );
};
export default Addresses;
