import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { dummyOrders } from "../data/orders";
import Loading from "../components/Loading";
import { PackageIcon } from "lucide-react";
import { CalendarIcon } from "lucide-react";
import { ChevronRightIcon } from "lucide-react";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  const [searchParams, setSearchParams] = useSearchParams();
  const tabs = ["All", "Placed", "Out for Delivery", "Delivered"];
  const { clearCart } = useCart();
  const getStatusColor = (status) => {
    console.log(status);
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Processing":
        return "bg-blue-100 text-blue-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };
  const fetchOrders = async () => {
    setOrders(dummyOrders);
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
    // setLoading(false);
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
            <PackageIcon className="size-16 text-app-border mx-auto mb-4" />
            <h2 className="text-lg font-medium text-green-500 mb-2">
              No orders yet
            </h2>
            <p className="text-sm text-app-text-light mb-4">
              Start shopping to see your orders here
            </p>
            <Link
              to="/products"
              className="inline-flex px-4 py-2 bg-green-300 tet-white text-sm rounded-lg"
            >
              Start Shopping
            </Link>
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
                    <p className="text-sm font-medium text-green-300">
                      Order #{order.id.slice(-8).toUpperCase()}
                    </p>

                    <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                      <CalendarIcon className="size-3" />
                      <span>
                        {new Date(order.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-4 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status) || "bg-gray-100 text-gray-700"}`}
                    >
                      {order.status} <ChevronRightIcon className="size-4" />
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3 ">
                    {/* {order.items.slice(0, 4).map((item, i) => (
                      <img
                        className="size-12 rounded-lg object-cover border border-app-border"
                        key={i}
                        src={item.image}
                        alt={item.name}
                      />
                    ))}
                    {order.items.length > 4 && (
                      <div className="size-12 rounded-lg bg-green-200 flex-center text-xs font-semibold ">
                        +{order.items.length - 4}
                      </div>
                    )}*/}
                  </div>
                  <div className="flex justify-between items-center pt-3 text-sm *:">
                    <span>{order.items} items</span>
                    <span className="font-semibold text-green-500">
                      ${order.total.toFixed(2)}
                    </span>
                  </div>
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
