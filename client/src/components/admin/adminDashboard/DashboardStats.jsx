import { ShoppingBag,User,Package, TriangleAlert} from "lucide-react"
const dashboardStats = [
  {
     number: 121,
     name: "Total-Order",
     icon: ShoppingBag
  },
  {
    number: 120,
    name: "Total User",
    icon: User
  },
  {
    number: 25,
    name: "Total Product",
    icon: Package
  },
  {
    number: 6,
    name: "Out of Stock",
    icon: TriangleAlert
  }
]
export default function DashboardStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {dashboardStats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.name}
            className="bg-white rounded-2xl p-5 border border-gray-200 flex justify-between items-center"
          >
            <div>
              <p className="text-2xl font-semibold text-zinc-900">
                {item.number}
              </p>
              <p className="text-sm text-gray-500">
                {item.name}
              </p>
            </div>

            <div className="size-10 rounded-xl flex items-center justify-center bg-orange-50 text-orange-600">
              <Icon className="size-5" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
