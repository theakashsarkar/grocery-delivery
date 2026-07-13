import {Shield} from 'lucide-react'
import Navbar from './Navbar'
const AdminSidebar = () => {
  return (
    <aside className="w-full lg:w-64 shrink-0 h-fit bg-white rounded-2xl p-4 border border-gray-200">
      <div className="pb-4 mb-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-green-900 flex items-center gap-2 px-2">
          <Shield className="size-5 text-green-900" />
          Admin Panel
        </h2>
      </div>
      <Navbar />
    </aside>
  )
}
export default AdminSidebar
