import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import Products from "./pages/Products";
import ProductsPages from "./pages/ProductPage";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import FlashDeals from "./pages/FlashDeals";
import MyOrder from "./pages/MyOrder";
import OrderTracking from "./pages/OrderTracking";
import ProtectedRoute from "./components/ProtectedRoute";
import AddressesContainer from "./components/address/AddressesContainer";
import CheckoutContainer from "./components/checkout/CheckoutContainer";

const App = () => {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#1B3022",
            color: "#fff",
            borderRadius: "12px",
            fontSize: "14px",
          },
        }}
      />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductsPages />} />
          <Route path="search" element={<SearchResult />} />
          <Route path="deals" element={<FlashDeals />} />
          <Route element={<ProtectedRoute />}>
            <Route path="checkout" element={<CheckoutContainer />} />
            <Route path="orders" element={<MyOrder />} />
            <Route path="orders/:id" element={<OrderTracking />} />
            <Route path="addresses" element={<AddressesContainer />} />
          </Route>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="products/new" element={<AdminProductFrom />} />
          <Route path="products/:id/edit" element={<AdminProductFrom />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
