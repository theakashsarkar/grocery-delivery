import { KeyRound } from "lucide-react";

const OrderOtp = ({ otp = "4821" }) => {
  return (
    <div className="rounded-2xl border border-green-200 bg-green-100 p-5">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
          <KeyRound className="h-5 w-5 text-green-600" />
        </div>

        <div>
          <h3 className="font-semibold text-slate-900">Delivery OTP</h3>
          <p className="text-xs text-slate-500">Verify your delivery</p>
        </div>
      </div>

      <div className="flex justify-center gap-2">
        {String(otp)
          .split("")
          .map((digit, index) => (
            <div
              key={index}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl font-bold text-green-700 shadow-sm"
            >
              {digit}
            </div>
          ))}
      </div>

      <p className="mt-4 text-center text-xs text-slate-600">
        Share this code only after receiving your order.
      </p>
    </div>
  );
};

export default OrderOtp;
