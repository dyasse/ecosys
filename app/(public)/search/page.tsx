'use client'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { ProductCard } from '@/components/ProductCard'
import { searchProducts } from '@/lib/data'

function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const results = query ? searchProducts(query) : []
  const [sortBy, setSortBy] = useState('newest')

  const sortedResults = [...results].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        const priceA = a.basePrice * (1 - a.discountPercentage / 100)
        const priceB = b.basePrice * (1 - b.discountPercentage / 100)
        return priceA - priceB
      case 'price-high':
        const priceAHigh = a.basePrice * (1 - a.discountPercentage / 100)
        const priceBHigh = b.basePrice * (1 - b.discountPercentage / 100)
        return priceBHigh - priceAHigh
      case 'rating':
        return b.rating - a.rating
      case 'newest':
      default:
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    }
  })

  return (
    <div className="bg-white">
      <div className="container-wide py-16">
        
        <h1 className="font-serif text-4xl font-bold text-charcoal mb-4">
          Search Results
        </h1>
        {query && (
          <p className="text-lg text-muted-foreground mb-8">
            Found {results.length} result{results.length !== 1 ? 's' : ''} for &quot;<span className="font-semibold text-charcoal">{query}</span>&quot;
          </p>
        )}

        {results.length > 0 ? (
          <>
            {/* Sort Controls */}
            <div className="flex justify-end mb-8">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sortedResults.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground mb-8">
              {query
                ? 'No products found for your search.'
                : 'Please enter a search term.'}
            </p>
            <a href="/shop" className="btn-primary inline-block">
              Browse All Products
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchContent />
    </Suspense>
  )
}
