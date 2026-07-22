'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'
import { TrendingUp, ShoppingCart, Users, DollarSign, AlertCircle } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'

export default function AdminDashboard() {
  // Mock data for charts
  const chartData = [
    { month: 'Jan', sales: 4000, orders: 240 },
    { month: 'Feb', sales: 3000, orders: 221 },
    { month: 'Mar', sales: 2000, orders: 229 },
    { month: 'Apr', sales: 2780, orders: 200 },
    { month: 'May', sales: 1890, orders: 229 },
    { month: 'Jun', sales: 2390, orders: 200 },
  ]

  const statsCards = [
    {
      title: 'Total Revenue',
      value: '$24,580.50',
      change: '+12.5%',
      icon: DollarSign,
      color: 'text-green-600',
    },
    {
      title: 'Total Orders',
      value: '1,234',
      change: '+8.2%',
      icon: ShoppingCart,
      color: 'text-blue-600',
    },
    {
      title: 'Total Customers',
      value: '856',
      change: '+5.1%',
      icon: Users,
      color: 'text-purple-600',
    },
    {
      title: 'Growth',
      value: '+23.5%',
      change: 'vs last month',
      icon: TrendingUp,
      color: 'text-gold',
    },
  ]

  const recentOrders = [
    { id: 'ORD-001', customer: 'Sarah Johnson', amount: 126.87, status: 'delivered' },
    { id: 'ORD-002', customer: 'Emily Brown', amount: 89.99, status: 'shipped' },
    { id: 'ORD-003', customer: 'Jessica Lee', amount: 234.50, status: 'processing' },
    { id: 'ORD-004', customer: 'Lisa Anderson', amount: 45.99, status: 'pending' },
  ]

  const topProducts = [
    { id: 1, name: 'Hydrating Rose Serum', sales: 342, revenue: 27859.58 },
    { id: 2, name: 'Velvet Matte Lipstick', sales: 289, revenue: 6931.11 },
    { id: 3, name: 'Golden Shimmer Palette', sales: 156, revenue: 9358.44 },
    { id: 4, name: 'Luminous Face Cream', sales: 143, revenue: 10729.85 },
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
        return ''
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-charcoal mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, Admin. Here&apos;s your business overview.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.title} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <h3 className="text-3xl font-bold text-charcoal mt-2">{stat.value}</h3>
                </div>
                <div className={`p-3 rounded-lg bg-opacity-10 ${stat.color}`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              <p className="text-sm text-green-600 font-semibold">{stat.change}</p>
            </div>
          )
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Chart */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-bold text-charcoal mb-4">Monthly Sales</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#E8A7B5" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Orders Chart */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-bold text-charcoal mb-4">Orders Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="orders" stroke="#E8A7B5" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Orders & Top Products */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-charcoal">Recent Orders</h3>
            <a href="/admin/orders" className="text-blush-pink font-semibold hover:underline text-sm">
              View All
            </a>
          </div>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between pb-4 border-b border-border last:border-0">
                <div>
                  <p className="font-semibold text-charcoal">{order.id}</p>
                  <p className="text-sm text-muted-foreground">{order.customer}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-charcoal">{formatCurrency(order.amount)}</p>
                  <span className={`inline-block text-xs font-semibold px-2 py-1 rounded mt-2 ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-charcoal">Top Products</h3>
            <a href="/admin/products" className="text-blush-pink font-semibold hover:underline text-sm">
              View All
            </a>
          </div>
          <div className="space-y-4">
            {topProducts.map((product) => (
              <div key={product.id} className="flex items-center justify-between pb-4 border-b border-border last:border-0">
                <div>
                  <p className="font-semibold text-charcoal">{product.name}</p>
                  <p className="text-sm text-muted-foreground">{product.sales} sales</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-charcoal">{formatCurrency(product.revenue)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alerts */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-charcoal">Alerts</h3>
        <div className="flex items-center gap-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
          <div>
            <p className="font-semibold text-yellow-900">Low Stock Alert</p>
            <p className="text-sm text-yellow-800">5 products are running low on inventory</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
          <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
          <div>
            <p className="font-semibold text-blue-900">Pending Orders</p>
            <p className="text-sm text-blue-800">12 orders are waiting to be processed</p>
          </div>
        </div>
      </div>
    </div>
  )
}
