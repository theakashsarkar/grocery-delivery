import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { dummyAddressData } from "../../data/address";
import Checkout from "../../pages/Checkout";

const CheckoutContainer = () => {
  const { items, cartTotal } = useCart();
  const { user } = { user: { addresses: dummyAddressData } };
  const [loading, setLoading] = useState(true);
  const deliveryFee = cartTotal > 20 ? 0 : 1.99;
  const tax = cartTotal * 0.08;
  const total = cartTotal + deliveryFee + tax;

  return (
    <Checkout
      loading={loading}
      user={user}
      deliveryFee={deliveryFee}
      tax={tax}
      total={total}
      items={items}
    />
  );
};
export default CheckoutContainer;
