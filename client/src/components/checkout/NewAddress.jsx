import { MapPinIcon } from "lucide-react";
import { Link } from "react-router-dom";
const NewAddress = () => {
  return (
    <div className="bg-white rounded-2xl p-6">
      <h2 className="text-lg font-semibold text-green-600 mb-5 flex items-center gap-2">
        <MapPinIcon className="size-4" />
        Delivery Address
      </h2>

      <Link
        to="/addresses"
        className="mt-6 px-6 py-3 border border-gray-600 text-gray-600 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
      >
        Add New Address
      </Link>
    </div>
  );
};
export default NewAddress;
