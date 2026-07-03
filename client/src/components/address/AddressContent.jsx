import Loading from "../Loading";
import { MapPinIcon } from "lucide-react";
import AddressCard from "./AddressCard";
const AddressContent = ({ loading, addresses, onEdit, onDelete }) => {
  if (loading) return <Loading />;
  if (addresses?.length === 0)
    return (
      <div className="py-16 text-center">
        <MapPinIcon className="mx-auto mb-4 size-12 text-gray-400" />

        <h2 className="mb-2 text-lg font-semibold text-green-800">
          No addresses saved
        </h2>

        <p className="text-sm text-gray-500">
          Add an address for faster checkout
        </p>
      </div>
    );

  return (
    <div className="space-y-4">
      {addresses?.map((add) => (
        <AddressCard
          key={add.id}
          addr={add}
          onEditHandler={onEdit}
          setAddresses={onDelete}
        />
      ))}
    </div>
  );
};
export default AddressContent;
