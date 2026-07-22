'use client'

import { useState } from 'react'
import { formatCurrency, formatDate } from '@/lib/utils'
import { Eye, Download, Filter } from 'lucide-react'

interface OrderData {
  id: string
  orderNumber: string
  customer: string
  email: string
  date: Date
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered'
  items: number
}

export default function OrdersPage() {
  const [statusFilter, setStatusFilter] = useState<string>('all')

  const orders: OrderData[] = [
    {
      id: '1',
      orderNumber: 'ORD-2024-001',
      customer: 'Sarah Johnson',
      email: 'sarah@example.com',
      date: new Date('2024-06-15'),
      total: 126.87,
      status: 'delivered',
      items: 3,
    },
    {
      id: '2',
      orderNumber: 'ORD-2024-002',
      customer: 'Emily Brown',
      email: 'emily@example.com',
      date: new Date('2024-06-14'),
      total: 89.99,
      status: 'shipped',
      items: 1,
    },
    {
      id: '3',
      orderNumber: 'ORD-2024-003',
      customer: 'Jessica Lee',
      email: 'jessica@example.com',
      date: new Date('2024-06-13'),
      total: 234.50,
      status: 'processing',
      items: 5,
    },
    {
      id: '4',
      orderNumber: 'ORD-2024-004',
      customer: 'Lisa Anderson',
      email: 'lisa@example.com',
      date: new Date('2024-06-12'),
      total: 45.99,
      status: 'pending',
      items: 1,
    },
  ]

  const filteredOrders =
    statusFilter === 'all'
      ? orders
      : orders.filter((order) => order.status === statusFilter)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800'
      case 'shipped':
        return 'bg-blue-100 text-blue-800'
      case 'processing':
        return 'bg-yellow-100 text-yellow-800'
      case 'pending':
        return 'bg-gray-100 text-gray-800'
      default:
        return ''
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-charcoal mb-2">Orders</h1>
        <p className="text-muted-foreground">Manage and track customer orders</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg p-4 shadow-sm flex items-center gap-4">
        <Filter className="w-5 h-5 text-muted-foreground" />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink"
        >
          <option value="all">All Orders</option>
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
        </select>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-border">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-bold text-charcoal">Order Number</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-charcoal">Customer</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-charcoal">Date</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-charcoal">Items</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-charcoal">Total</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-charcoal">Status</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-charcoal">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order, index) => (
              <tr key={order.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-6 py-4">
                  <p className="font-semibold text-charcoal">{order.orderNumber}</p>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="font-semibold text-charcoal">{order.customer}</p>
                    <p className="text-xs text-muted-foreground">{order.email}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-charcoal">
                  {formatDate(order.date)}
                </td>
                <td className="px-6 py-4 text-sm text-charcoal">{order.items}</td>
                <td className="px-6 py-4 text-sm font-semibold text-charcoal">
                  {formatCurrency(order.total)}
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <p className="text-sm text-muted-foreground mb-2">Total Orders</p>
          <p className="text-2xl font-bold text-charcoal">{orders.length}</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <p className="text-sm text-muted-foreground mb-2">Pending</p>
          <p className="text-2xl font-bold text-yellow-600">
            {orders.filter((o) => o.status === 'pending').length}
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <p className="text-sm text-muted-foreground mb-2">Shipped</p>
          <p className="text-2xl font-bold text-blue-600">
            {orders.filter((o) => o.status === 'shipped').length}
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <p className="text-sm text-muted-foreground mb-2">Total Revenue</p>
          <p className="text-2xl font-bold text-green-600">
            {formatCurrency(orders.reduce((sum, o) => sum + o.total, 0))}
          </p>
        </div>
      </div>
    </div>
  )
}
