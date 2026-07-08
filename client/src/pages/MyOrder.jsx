import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { dummyOrders } from "../data/orders";
import Loading from "../components/Loading";
import { PackageIcon, Calendar } from "lucide-react";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("All");
  const [searchParams, setSearchParams] = useSearchParams();
  const tabs = ["All", "Placed", "Out for Delivery", "Delivered"];
  const { clearCart } = useCart();
  const fetchOrders = async () => {
    let filterOrders = dummyOrders;
    if (activeTab !== "All") {
      filterOrders = dummyOrders.filter((order) => order.status === activeTab);
    }
    setOrders(filterOrders);
    setLoading(false);
  };
  useEffect(() => {
    if (searchParams.get("clearCart")) {
      clearCart();
      setSearchParams({});
      setTimeout(() => {
        fetchOrders();
      }, 2000);
    } else {
      fetchOrders();
    }
  }, [activeTab]);
  return (
    <div className="min-h-screen bg-zinc-50 pb-20">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-3xl font-bold text-green-900">My Orders</h1>

        <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === tab
                  ? "bg-green-900 text-white shadow-sm"
                  : "border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100"
              }`}
            >
              {tab === "All" ? "All Orders" : tab}
            </button>
          ))}
        </div>
        {loading ? (
          <Loading />
        ) : orders.length === 0 ? (
          <div className="text-center py-16">
            <PackageIcon className="size-16 text-app-order mx-auto mb-4" />
            <h2 className="text-lg font-medium text-green-400 mb-2">
              No orders yet
            </h2>
            <p className="text-sm mb-4">
              Start shopping to see your orders here
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <Link
                key={order.id}
                to={`/orders/${order.id}`}
                className="block max-w-4xl bg-white rounded-2xl p-5 hover:shadow transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-sm font-medium text-green-600">
                      Order #{order.id}
                    </p>

                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="size-4" />

                      <span className="text-xs text-gray-500">
                        {order.date}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-4 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                      Placed
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3"></div>

                <div className="flex justify-between items-center pt-3 text-sm">
                  <span className="text-gray-500">Items: {order.items}</span>

                  <span className="font-semibold text-green-600">
                    ${order.total}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default MyOrder;
