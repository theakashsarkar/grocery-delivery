import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="hidden md:flex items-center gap-6 text-sm text-zinc-600">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/deals" className="text-orange-500">
        Deals
      </Link>
    </div>
  );
};
export default NavLinks;
