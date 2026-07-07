import { CreditCardIcon, BanknoteIcon } from "lucide-react";

const CheckoutPayment = ({ paymentMethod, setPaymentMethod, setStep }) => {
  return (
    <div className="bg-white rounded-2xl p-6">
      <h2 className="text-lg font-semibold text-green-600 mb-5 flex items-center gap-2">
        <CreditCardIcon className="size-4" />
        Payment Method
      </h2>

      <div className="space-y-3">
        <label
          className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
            paymentMethod === "card"
              ? "border-green-600 bg-green-50"
              : "border-gray-200"
          }`}
        >
          <input
            type="radio"
            name="payment"
            value="card"
            checked={paymentMethod === "card"}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="size-4"
          />

          <div>
            <p className="text-sm font-semibold text-gray-900">
              Credit / Debit Card
            </p>
            <p className="text-xs text-gray-500">Pay securely with your card</p>
          </div>
        </label>

        <label
          className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
            paymentMethod === "cod"
              ? "border-green-600 bg-green-50"
              : "border-gray-200"
          }`}
        >
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={paymentMethod === "cod"}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="size-4"
          />

          <div className="flex items-center gap-2">
            <BanknoteIcon className="size-4 text-gray-600" />
            <div>
              <p className="text-sm font-semibold text-gray-900">
                Cash on Delivery
              </p>
              <p className="text-xs text-gray-500">
                Pay when your order arrives
              </p>
            </div>
          </div>
        </label>
      </div>
      <button
        onClick={() => setStep("review")}
        className="mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors flex items-center gap-2"
      >
        Review Order
      </button>
    </div>
  );
};

export default CheckoutPayment;
