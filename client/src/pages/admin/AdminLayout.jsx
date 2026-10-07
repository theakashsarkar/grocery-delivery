import Navbar from "../../components/Navbar"
import {Outlet} from "react-router-dom"
const AdminLayout = () => {
  return (
  <>
     <Navbar />
     <main className="min-h-screen bg-orange-50">
        <Outlet />
      </main>
  </>
  )
}
export default AdminLayout
