import { Link } from "react-router-dom";
import { BikeIcon } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <BikeIcon className="size-6 text-white" />
              <span className="text-xl font-semibold">Instacart</span>
            </Link>
            <p className="text-sm text-white/70 mb-4">
              Bringing fresh, organic groceries straight from local farms to
              your doorstep. Nourish your home with Earth's finest.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/product"
                  className="text-sm text-white/70 hover:text-white"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className="text-sm text-white/70 hover:text-white"
                >
                  Flash Deals
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className="text-sm text-white/70 hover:text-white"
                >
                  Track Order
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className="text-sm text-white/70 hover:text-white"
                >
                  Delivery Partner
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="text-sm text-white/70 hover:text-white">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-white/70 hover:text-white">
                  Order History
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-white/70 hover:text-white">
                  Addresses
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-white/70 hover:text-white">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4"></div>
      </div>
    </footer>
  );
};
export default Footer;
