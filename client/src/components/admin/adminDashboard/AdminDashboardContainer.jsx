import AdminSidebar from '../../adminSidebar/AdminSidebar'
import {Link} from "react-router-dom"
import DashboardStats from "../../admin/adminDashboard/DashboardStats"
import {useState, useEffect} from "react"
import {dummyOrders} from "../../../data/orders"
import OrderTable from "./OrderTable" 
const AdminDashboardContainer = () => {
 
  return (
      <div className="flex flex-col h-full lg:flex-row gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
       <AdminSidebar />
       <main className="flex-1 overflow-y-auto no-scrollbar pb-20">
          <div className="space-y-6">
            <DashboardStats />
            <div className="bg-white rounded-2xl border border-app-border overflow-hidden">
               <div className="px-6 py-5 border-b border-app-border flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-zinc-900">Recent order</h2>
                  <Link className="text-sm font-medium text-app-orange hover:text-app-orange-dark transition-colors" to="/admin/orders">
                     View All 
                  </Link>
               </div>
               <div className="overflow-x-auto">
                <OrderTable /> 
               </div>
            </div>
          </div>
       </main>
    </div>
  )
}
export default AdminDashboardContainer;
