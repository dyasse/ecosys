'use client'

import Link from 'next/link'
import { Eye, Download } from 'lucide-react'
import { formatCurrency, formatDate } from '@/lib/utils'

interface Order {
  id: string
  number: string
  date: Date
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered'
  itemCount: number
}

export default function OrdersPage() {
  const orders: Order[] = [
    {
      id: 'order-1',
      number: 'ORD-2024-001',
      date: new Date('2024-06-15'),
      total: 126.87,
      status: 'delivered',
      itemCount: 3,
    },
    {
      id: 'order-2',
      number: 'ORD-2024-002',
      date: new Date('2024-06-08'),
      total: 89.99,
      status: 'shipped',
      itemCount: 1,
    },
    {
      id: 'order-3',
      number: 'ORD-2024-003',
      date: new Date('2024-05-25'),
      total: 234.50,
      status: 'delivered',
      itemCount: 5,
    },
  ]

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
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div>
      <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">Order History</h2>

      {orders.length > 0 ? (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="border border-border rounded-lg p-6 hover:shadow-md transition"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">{order.number}</h3>
                  <p className="text-sm text-muted-foreground">{formatDate(order.date)}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-4 py-4 border-y border-border">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Items</p>
                  <p className="font-semibold text-charcoal">{order.itemCount}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Total</p>
                  <p className="font-semibold text-charcoal">{formatCurrency(order.total)}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Tracking</p>
                  <p className="font-semibold text-charcoal">TRK-12345</p>
                </div>
                <div></div>
              </div>

              <div className="flex gap-3">
                <Link
                  href={`/order-confirmation/${order.id}`}
                  className="flex items-center gap-2 px-4 py-2 border-2 border-blush-pink text-blush-pink rounded-lg hover:bg-pale-pink transition font-semibold"
                >
                  <Eye className="w-4 h-4" />
                  View Details
                </Link>
                <button className="flex items-center gap-2 px-4 py-2 border-2 border-blush-pink text-blush-pink rounded-lg hover:bg-pale-pink transition font-semibold">
                  <Download className="w-4 h-4" />
                  Invoice
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-card rounded-lg">
          <p className="text-lg text-muted-foreground mb-6">No orders yet</p>
          <Link href="/shop" className="btn-primary inline-block">
            Start Shopping
          </Link>
        </div>
      )}
    </div>
  )
}
