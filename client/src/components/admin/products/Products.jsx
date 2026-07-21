import {product} from "../../../data/product"
const Products = () => {
  return (
    <div className="flex flex-col h-full lg:flex-row gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
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
               <Table>
                  <Table.Header>
                    <Table.Row>
                      <th className="px-6 py-3">Product</th>
                      <th className="px-6 py-3">Price</th>
                      <th className="px-6 py-3">Stock</th>
                      <th className="px-6 py-3">Actions</th>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                   {product.map((item) => ( 
                     <Table.Row key={order.id}>
                       <Table.Cell className="px-6 py-4 font-mono text-xs text-zinc-500">
                          #{item.id}
                       </Table.Cell>
                       <Table.Cell className="px-6 py-4">
                          {order.customer}
                       </Table.Cell>
                   
                     </Table.Row> 
                  ))}
                  </Table.Body>
                </Table> 
               </div>
            </div>
          </div>
       </main>
    </div>
  )
}
