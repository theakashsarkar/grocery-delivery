import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dummyOrders } from "../data/orders";
import Loading from "../components/Loading";
import { LocateIcon, ArrowLeftIcon } from "lucide-react";
import DeliveryTimeline from "../components/DeliveryTimeline";
import OrderOtp from "../components/OrderOtp";
import { MapPin } from "lucide-react";

const OrderTracking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liveLocation, setLiveLocation] = useState(null);
  useEffect(() => {
    setOrder(dummyOrders.find((ord) => ord.id === id));
    setLoading(false);
  }, [id]);
  if (loading) return <Loading />;
  if (!order) null;
  return (
    <div className="min-h-screen mb-20 bg-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate("/orders")}
          className="flex items-center gap-2 text-sm text-app-text-light hover:text-app-green mb-6 transition-colors"
        >
          <ArrowLeftIcon className="size-4" /> Back to Orders
        </button>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-app-green">
              # {order?.id.slice(-8).toUpperCase()}
            </h1>
            <p className="text-sm text-app-text-light mt-1">
              Placed on
              {new Date(order.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
          <span className="px-4 py-1.5 text-sm font-semibold rounded-full bg-app-orange/10 text-app-orange">
            {order.status}
          </span>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <OrderOtp />
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <div className="flex h-64 items-center justify-center bg-green-50">
                <div className="text-center">
                  <LocateIcon className="mx-auto mb-2 h-8 w-8" />
                  <p className="mt-2 text-sm font-medium text-green-600">
                    Waiting for delivery partner location...
                  </p>
                </div>
              </div>
            </div>
            <DeliveryTimeline order={order} />
          </div>

          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-5">
              <h3 className="text-sm font-semibold text-app-green mb-3 flex items-center gap-2">
                <MapPin className="size-4" />
                Delivery Address
              </h3>
              <p className="text-sm text-app-text-light leading-relaxed">
                Home
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5">
              <h3 className="text-sm font-semibold text-app-green mb-3">
                Item {order.items}
              </h3>
              <div className="space-y-3">
                {/* {order?.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <img className="size-10 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-app-green truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-app-text-light">
                        x {item.quantity}
                      </p>
                    </div>
                    <span className="text-sm font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}*/}
              </div>
              <div className="mt-4 pt-3 border-t border-app-border space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-app-text-light">Subtotal</span>
                  <span className="">${order?.total.toFixed(2)}</span>
                </div>
                {/* <div className="flex justify-between">
                  <span className="text-app-text-light">Delivery</span>
                  <span className="">
                    {order?.deliveryFee === 0
                      ? "Free"
                      : `${order?.deliveryFee.toFixed(2)}`}
                    ${order?.total.toFixed(2)}
                  </span>
                </div>*/}
                {/* <div className="flex justify-between">
                  <span className="text-app-text-light">Tax</span>
                  <span className="">${order?.tax.toFixed(2)}</span>
                </div>*/}
                <div className="flex justify-between">
                  <span className="text-app-text-light">Total</span>
                  <span className="flex justify-between pt-2 border-t border-app-border font-semibold text-app-green">
                    ${order?.total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderTracking;
