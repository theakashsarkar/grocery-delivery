import { Link, useLocation } from "react-router-dom";
import {ChartColumn, Plus, PackageSearch, ShoppingBag, Truck, LogOut} from 'lucide-react'
const menuItems = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: ChartColumn
  },
  {
    name: "Add Product",
    path: "products/new",
    icon: Plus
  },
  {
    name: "Products",
    path: "products",
    icon: PackageSearch
  },
  {
    name: "Orders",
    path: "/orders",
    icon: ShoppingBag
  },
  {
    name: "Delivery Partners",
    path: "delivery-partners",
    icon: Truck
  },
  {
    name: "Exit",
    path: "/",
    icon: LogOut
  }
]
export default function Navbar(){
  const location = useLocation();
  return (
    <nav className="flex flex-col gap-1.5">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        return (
         <Link
         className={`flex items-center gap-3 p-2.5 rounded-md text-sm transition-colors ${
             isActive
             ? "bg-green-600 text-white"
             : "text-gray-600 hover:bg-orange-50 hover:text-zinc-900"
         }`}
          key={item.path}
          to={item.path}
        >
          <Icon className="size-5" />
          {item.name}
        </Link>
        )
      })}
    </nav>
  )
}

