import { BikeIcon } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavLinks from "./navbar/NavLinks";
import SearchBar from "./navbar/SearchBar";
import CartButton from "./navbar/CartButton";
import UserMenu from "./navbar/UserMenu";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const user = null;
  const { cartCount, setIsCartOpen } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (query) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setSearchQuery("");
    }
  };

  const handleLogout = () => {
    setUserMenuOpen(false);
    navigate("/");
  };

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 gap-4">
        <Link
          to="/"
          className="flex items-center justify-center gap-2 text-[22px] font-medium shrink-0"
        >
          <BikeIcon size={24} /> Instacart
        </Link>
        <div className="w-full flex items-center justify-end gap-4 lg:gap-10">
          <NavLinks />
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            handleSearch={handleSearch}
          />
          <div className="flex items-center gap-3">
            <CartButton cartCount={cartCount} setIsCartOpen={setIsCartOpen} />
            <UserMenu
              user={user}
              userMenuOpen={userMenuOpen}
              onToggle={() => setUserMenuOpen((prev) => !prev)}
              onClose={() => setUserMenuOpen(false)}
              handleLogout={handleLogout}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
