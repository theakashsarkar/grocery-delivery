import { Trash2Icon } from "lucide-react";
import { PencilIcon } from "lucide-react";
import { MapPin, CheckIcon } from "lucide-react";

const AddressCard = ({ addr, onEditHandler, setAddresses }) => {
  const handleDelete = async (id) => {
    console.log(id);
  };
  return (
    <div
      key={addr.id}
      className="flex items-start justify-between rounded-2xl bg-white p-6 max-w-3xl"
    >
      <div className="flex gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50">
          <MapPin className="size-5 text-green-500" />
        </div>

        <div>
          <div className="mb-1 flex items-center gap-2">
            <p className="text-sm font-semibold text-green-700">{addr.label}</p>

            {addr.isDefault && (
              <span className="flex items-center gap-1 rounded-full bg-green-900 px-2.5 py-0.5 text-[10px] font-medium text-white">
                <CheckIcon className="size-2.5" />
                Default
              </span>
            )}
          </div>

          <p className="text-sm text-gray-500">
            {addr.address}, {addr.city},
            <br />
            {addr.state}, {addr.zip}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => onEditHandler(addr)}
            className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-orange-50 hover:text-green-600 cursor-pointer"
          >
            <PencilIcon className="size-4" />
          </button>

          <button
            onClick={() => handleDelete(addr.id)}
            className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-orange-50 hover:text-red-600 cursor-pointer"
          >
            <Trash2Icon className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddressCard;
