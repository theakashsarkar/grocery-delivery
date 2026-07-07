import { CheckIcon, TruckIcon } from "lucide-react";
const CheckoutReview = ({
  address,
  items,
  handlePlaceOrder,
  loading,
  total,
}) => {
  return (
    <div className="bg-white rounded-2xl p-6">
      <h2 className="text-lg font-semibold text-green-600 mb-5 flex items-center gap-2">
        <CheckIcon className="size-4" />
        Review Your Order
      </h2>

      <div className="mb-5 p-4 bg-orange-50 rounded-xl">
        <div className="flex items-center gap-2 mb-2 font-medium text-gray-900">
          <TruckIcon className="size-4" />
          Delivery Address
        </div>

        <p className="text-sm text-gray-500">
          {address.isDefault && "Default • "}
          {address.label} - {address.address}, {address.city}, {address.state}{" "}
          {address.zip}
        </p>
      </div>

      <div className="space-y-3 mb-5">
        {items.map((item) => (
          <div key={item.product.id} className="flex items-center gap-3">
            <img
              src={item.product.image}
              className="size-12 rounded-lg object-cover"
              alt={item.product.name}
            />
            <div className="flex-1">
              <p className="text-sm font-medium text-green-600">
                {item.product.name}
              </p>
              <p className="text-xs text-gray-500">qty {item.quantity}</p>
            </div>

            <span className="text-sm font-semibold">
              $ {(item.product.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <button className="cursor-pointer w-full py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors disabled:opacity-60 active:scale-[0.98]">
        Place Order - $ {total}
      </button>
    </div>
  );
};
export default CheckoutReview;
