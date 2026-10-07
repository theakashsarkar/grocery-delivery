import {dummyOrders} from "../../../data/orders"
import Table from "../../ui/Table"

const OrderTable = () => {
  return (
       <Table>
                  <Table.Header>
                    <Table.Row>
                      <th className="px-6 py-3">Order ID</th>
                      <th className="px-6 py-3">Customer</th>
                      <th className="px-6 py-3">Items</th>
                      <th className="px-6 py-3">Total</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3">Date</th>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                   {dummyOrders.map((order) => ( 
                     <Table.Row key={order.id}>
                       <Table.Cell className="px-6 py-4 font-mono text-xs text-zinc-500">
                          #{order.id}
                       </Table.Cell>
                       <Table.Cell className="px-6 py-4">
                          {order.customer}
                       </Table.Cell>
                       <Table.Cell className="px-6 py-4 text-zinc-600">
                          {order.items} items
                       </Table.Cell>
                      <Table.Cell className="px-6 py-4 font-medium">
                          {order.total}
                      </Table.Cell>
                       <Table.Cell className="px-6 py-4">
                          {order.status}
                       </Table.Cell>
                       <Table.Cell className="px-6 py-4 text-zinc-500">
                          {order.date}
                       </Table.Cell>
                     </Table.Row> 

                  ))}
                  </Table.Body>
                </Table> 

  )
}
export default OrderTable;
