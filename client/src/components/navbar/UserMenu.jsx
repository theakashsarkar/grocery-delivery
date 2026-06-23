import {
  ChevronDownIcon,
  UserIcon,
  PackageIcon,
  MapPinIcon,
  ArrowUpRightIcon,
  ShieldIcon,
  LogOutIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const UserMenu = ({ user, userMenuOpen, onToggle, onClose, handleLogout }) => {
  return (
    <div className="relative">
      {user ? (
        <button onClick={onToggle} className="flex items-center gap-2 p-2">
          <div className="size-7 rounded-full bg-green-950 text-white flex items-center justify-center">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <ChevronDownIcon className="size-3 text-zinc-500" />
        </button>
      ) : (
        <div className="flex-center gap-2">
          <Link
            to="/login"
            className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-950 rounded-full hover:bg-green-950-light transition-colors"
          >
            <UserIcon size={16} /> Sign In
          </Link>
          {userMenuOpen ? (
            <XIcon className="md:hidden" onClick={onToggle} />
          ) : (
            <MenuIcon className="md:hidden" onClick={onToggle} />
          )}
        </div>
      )}
      {userMenuOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={onClose} />
          <div className="absolute right-0 mt-2.5 w-56 bg-white rounded-xl shadow-lg border border-app-border py-2 z-50 animate-fade-in">
            {user && (
              <div className="px-4 py-2 border-b border-app-border">
                <p className="text-sm font-medium text-zinc-900">
                  {user?.name}
                </p>
                <p className="text-xs text-zinc-500">{user?.email}</p>
              </div>
            )}
            <div onClick={onClose}>
              {!user && (
                <Link to="/login">
                  <UserIcon size={16} />
                  Sign In
                </Link>
              )}
              {user && (
                <Link
                  to="/orders"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-700 rounded-lg transition-colors hover:bg-zinc-100 hover:text-zinc-900"
                >
                  <PackageIcon size={16} />
                  My Orders
                </Link>
              )}
              {user && (
                <Link
                  to="/addresses"
                  className=" flex items-center gap-2 px-3 py-2 text-sm text-zinc-700 rounded-lg transition-colors hover:bg-zinc-100 hover:text-zinc-900"
                >
                  <MapPinIcon size={16} />
                  Addresses
                </Link>
              )}
              <Link
                to="/products"
                className=" flex items-center gap-2 px-3 py-2 text-sm text-zinc-700 rounded-lg transition-colors hover:bg-zinc-100 hover:text-zinc-900"
              >
                <ArrowUpRightIcon size={16} />
                Products
              </Link>
              <Link
                to="/deals"
                className=" flex items-center gap-2 px-3 py-2 text-sm text-zinc-700 rounded-lg transition-colors hover:bg-zinc-100 hover:text-zinc-900"
              >
                <ArrowUpRightIcon size={16} />
                Deals
              </Link>
              {user?.isAdmin && (
                <Link
                  to="/admin/products"
                  className=" flex items-center gap-2 px-3 py-2 text-sm text-zinc-700 rounded-lg transition-colors hover:bg-zinc-100 hover:text-zinc-900"
                >
                  <ShieldIcon className="text-orange-950" size={16} />
                  <span className="text-orange-950">Admin Panel</span>
                </Link>
              )}
              {user && (
                <div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-app-error hover:bg-red-50 w-full transition-colors"
                  >
                    <LogOutIcon size={16} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default UserMenu;
