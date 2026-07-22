'use client'

import { useState, useMemo } from 'react'
import { getCategoryBySlug, getProductsByCategory } from '@/lib/data'
import { ProductCard } from '@/components/ProductCard'

interface PageProps {
  params: { slug: string }
}

export default function CategoryPage({ params }: PageProps) {
  const category = getCategoryBySlug(params.slug)
  const categoryProducts = category ? getProductsByCategory(category.id) : []
  const [sortBy, setSortBy] = useState('newest')

  const sortedProducts = useMemo(() => {
    let products = [...categoryProducts]

    switch (sortBy) {
      case 'price-low':
        products.sort((a, b) => {
          const priceA = a.basePrice * (1 - a.discountPercentage / 100)
          const priceB = b.basePrice * (1 - b.discountPercentage / 100)
          return priceA - priceB
        })
        break
      case 'price-high':
        products.sort((a, b) => {
          const priceA = a.basePrice * (1 - a.discountPercentage / 100)
          const priceB = b.basePrice * (1 - b.discountPercentage / 100)
          return priceB - priceA
        })
        break
      case 'rating':
        products.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
      default:
        products.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    }

    return products
  }, [categoryProducts, sortBy])

  if (!category) {
    return (
      <div className="container-wide py-16">
        <p className="text-center text-xl text-muted-foreground">Category not found</p>
      </div>
    )
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-pale-pink to-white py-12">
        <div className="container-wide">
          <h1 className="font-serif text-5xl font-bold text-charcoal mb-4 text-balance">
            {category.name}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {category.description}
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="container-wide py-16">
        {/* Controls */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <div className="text-sm text-muted-foreground">
            Showing <span className="font-semibold text-charcoal">{sortedProducts.length}</span> products
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-border rounded-lg bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-blush-pink"
          >
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Products Grid */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">No products found in this category</p>
          </div>
        )}
      </div>
    </div>
  )
}
