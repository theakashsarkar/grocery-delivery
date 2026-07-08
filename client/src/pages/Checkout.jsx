import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  ArrowLeft,
  MapPinIcon,
  CreditCardIcon,
  CheckIcon,
  ChevronRightIcon,
} from "lucide-react";
import NewAddress from "../components/checkout/NewAddress";
import CheckoutPayment from "../components/checkout/CheckoutPayment";
import CheckoutReview from "../components/checkout/CheckoutReview";
const Checkout = ({ loading, user, deliveryFee, tax, total, items }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState("address");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [address, setAddress] = useState({
    id: "",
    label: "Home",
    address: "",
    city: "",
    state: "",
    zip: "",
    isDefault: "",
    lat: 0,
    lan: 0,
  });
  const steps = [
    { key: "address", label: "Address", icon: MapPinIcon },
    { key: "payment", label: "Payment", icon: CreditCardIcon },
    { key: "review", label: "Review", icon: CheckIcon },
  ];

  const handlePlaceOrder = async () => {
    // setLoading();
    navigate("/orders");
  };
  useState(() => {
    if (user?.addresses?.length) {
      const defaultAddr =
        user.addresses.find((a) => a.isDefault) || user.addresses[0];
      setAddress({
        id: defaultAddr?.id,
        label: defaultAddr?.label,
        address: defaultAddr?.address,
        city: defaultAddr?.city,
        state: defaultAddr?.state,
        zip: defaultAddr?.zip,
        isDefault: defaultAddr?.isDefault,
        lat: 0,
        lan: 0,
      });
    }
  });
  console.log(total, tax);

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-orange-50">
        <div className="text-center">
          <h2 className="mb-2 text-xl font-semibold text-green-600">
            Your Cart Is Empty
          </h2>

          <p className="mb-5 text-gray-600">Add some products to checkout</p>

          <button
            onClick={() => navigate("/products")}
            className="cursor-pointer rounded-xl bg-green-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-green-700"
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-green-600 mb-6 transition-colors"
        >
          <ArrowLeft className="size-4" /> Back
        </button>

        <h1 className="text-2xl font-semibold text-green-600 mb-8">Checkout</h1>

        <div className="flex items-center gap-2 mb-8">
          {steps.map((s, i) => (
            <div key={s.key} className="flex items-center gap-2">
              <button
                onClick={() => setStep(s.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  step === s.key
                    ? "bg-green-950 text-white"
                    : "bg-white text-gray-500"
                }`}
              >
                <s.icon className="size-4" />
                {s.label}
                {i < steps.length - 1 && <ChevronRightIcon />}
              </button>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            {step === "address" && <NewAddress />}
            {step === "payment" && (
              <CheckoutPayment
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
                setStep={setStep}
              />
            )}
            {step === "review" && (
              <CheckoutReview
                items={items}
                address={address}
                loading={loading}
                handlePlaceOrder={handlePlaceOrder}
                total={total}
              />
            )}
          </div>
          <div className="bg-white rounded-2xl p-5 h-fit sticky top-24">
            <h3 className="text-sm font-semibold text-green-600 mb-4">
              Order Summary
            </h3>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">
                  Subtotal ({items?.length ?? 0} items)
                </span>

                <span>${(total ?? 0).toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Delivery</span>

                <span>
                  {(deliveryFee ?? 0) === 0 ? (
                    <span className="text-green-600">Free</span>
                  ) : (
                    <>${(deliveryFee ?? 0).toFixed(2)}</>
                  )}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Tax</span>

                <span>${(tax ?? 0).toFixed(2)}</span>
              </div>

              <div className="flex justify-between pt-3 border-t border-gray-200 text-base font-semibold">
                <span>Total</span>

                <span>${(total ?? 0).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
