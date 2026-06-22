import { BikeIcon } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavLinks from "./navbar/NavLinks";
import SearchBar from "./navbar/SearchBar";
import CartButton from "./navbar/CartButton";
import UserMenu from "./navbar/UserMenu";

const Navbar = () => {
  const user = { name: "akash" };
  const { cartCount, setIsCartCount } = {
    cartCount: 5,
    setIsCartCount: (_data) => {},
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-app-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 gap-4">
        <Link
          to="/"
          className="flex items-center justify-center gap-2 text-[22px] font-medium shrink-0"
        >
          <BikeIcon size={24} /> Instacart
        </Link>
        <div className="w-full flex items-center justify-end gap-4 lg:gap-10">
          <NavLinks />
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <div className="flex items-center gap-3">
            <CartButton cartCount={cartCount} setIsCartCount={setIsCartCount} />
            <UserMenu
              user={user}
              userMenuOpen={userMenuOpen}
              onToggle={() => setUserMenuOpen((prev) => !prev)}
              onClose={() => setUserMenuOpen(false)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
