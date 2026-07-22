'use client'

import { useState } from 'react'
import { mockProducts } from '@/lib/data'
import { formatCurrency } from '@/lib/utils'
import { Plus, Edit2, Trash2, Search } from 'lucide-react'

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [products] = useState(mockProducts.slice(0, 10))

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-charcoal mb-2">Products</h1>
          <p className="text-muted-foreground">Manage your product catalog</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-blush-pink text-white rounded-lg hover:bg-opacity-90 transition font-semibold">
          <Plus className="w-5 h-5" />
          Add Product
        </button>
      </div>

      {/* Search & Filters */}
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink"
          />
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-border">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-bold text-charcoal">Product Name</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-charcoal">SKU</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-charcoal">Price</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-charcoal">Stock</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-charcoal">Rating</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-charcoal">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr key={product.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={product.mainImage}
                      alt={product.name}
                      className="w-10 h-10 rounded object-cover"
                    />
                    <div>
                      <p className="font-semibold text-charcoal">{product.name}</p>
                      <p className="text-xs text-muted-foreground">{product.shortDescription}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-charcoal">{product.sku}</td>
                <td className="px-6 py-4 text-sm font-semibold text-charcoal">{formatCurrency(product.basePrice)}</td>
                <td className="px-6 py-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    product.stock > 50 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {product.stock}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={i < Math.round(product.rating) ? 'text-gold' : 'text-gray-300'}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm">
        <p className="text-sm text-muted-foreground">
          Showing 1 to {filteredProducts.length} of {products.length} products
        </p>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-border rounded-lg hover:bg-gray-50 transition">
            Previous
          </button>
          <button className="px-4 py-2 border border-border rounded-lg bg-blush-pink text-white hover:bg-opacity-90 transition">
            1
          </button>
          <button className="px-4 py-2 border border-border rounded-lg hover:bg-gray-50 transition">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
