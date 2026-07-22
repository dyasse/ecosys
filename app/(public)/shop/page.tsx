'use client'

import { useState, useMemo } from 'react'
import { ProductCard } from '@/components/ProductCard'
import { mockProducts, mockCategories, mockBrands } from '@/lib/data'
import { Filter, X } from 'lucide-react'

export default function ShopPage() {
  const [showFilters, setShowFilters] = useState(true)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500])
  const [sortBy, setSortBy] = useState('newest')
  const [inStockOnly, setInStockOnly] = useState(false)

  const filteredProducts = useMemo(() => {
    let products = [...mockProducts]

    // Filter by category
    if (selectedCategories.length > 0) {
      products = products.filter((p) => selectedCategories.includes(p.categoryId))
    }

    // Filter by brand
    if (selectedBrands.length > 0) {
      products = products.filter((p) => selectedBrands.includes(p.brandId))
    }

    // Filter by price
    products = products.filter((p) => {
      const price = p.basePrice * (1 - p.discountPercentage / 100)
      return price >= priceRange[0] && price <= priceRange[1]
    })

    // Filter by stock
    if (inStockOnly) {
      products = products.filter((p) => p.stock > 0)
    }

    // Sort
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
      case 'popular':
        products.sort((a, b) => b.reviewCount - a.reviewCount)
        break
      case 'rating':
        products.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
      default:
        products.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    }

    return products
  }, [selectedCategories, selectedBrands, priceRange, sortBy, inStockOnly])

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="container-wide py-8">
        <h1 className="font-serif text-4xl font-bold text-charcoal">Shop All Products</h1>
        <p className="text-muted-foreground mt-2">Browse our complete collection of premium beauty products</p>
      </div>

      {/* Filters & Products */}
      <div className="container-wide pb-16">
        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          {showFilters && (
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                {/* Clear Filters */}
                {(selectedCategories.length > 0 || selectedBrands.length > 0) && (
                  <button
                    onClick={() => {
                      setSelectedCategories([])
                      setSelectedBrands([])
                      setPriceRange([0, 500])
                    }}
                    className="text-blush-pink font-semibold flex items-center gap-1 hover:underline"
                  >
                    <X className="w-4 h-4" />
                    Clear Filters
                  </button>
                )}

                {/* Categories */}
                <div>
                  <h3 className="font-semibold text-charcoal mb-4">Categories</h3>
                  <div className="space-y-2">
                    {mockCategories.map((cat) => (
                      <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(cat.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedCategories([...selectedCategories, cat.id])
                            } else {
                              setSelectedCategories(selectedCategories.filter((id) => id !== cat.id))
                            }
                          }}
                          className="w-4 h-4 rounded border-border accent-blush-pink"
                        />
                        <span className="text-muted-foreground">{cat.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Brands */}
                <div>
                  <h3 className="font-semibold text-charcoal mb-4">Brands</h3>
                  <div className="space-y-2">
                    {mockBrands.map((brand) => (
                      <label key={brand.id} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedBrands([...selectedBrands, brand.id])
                            } else {
                              setSelectedBrands(selectedBrands.filter((id) => id !== brand.id))
                            }
                          }}
                          className="w-4 h-4 rounded border-border accent-blush-pink"
                        />
                        <span className="text-muted-foreground">{brand.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-semibold text-charcoal mb-4">Price Range</h3>
                  <div className="space-y-4">
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full"
                    />
                    <div className="flex gap-2 text-sm">
                      <span>${priceRange[0]}</span>
                      <span>-</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Stock Status */}
                <div>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={inStockOnly}
                      onChange={(e) => setInStockOnly(e.target.checked)}
                      className="w-4 h-4 rounded border-border accent-blush-pink"
                    />
                    <span className="text-muted-foreground">In Stock Only</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1">
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 text-charcoal hover:text-blush-pink transition"
              >
                <Filter className="w-5 h-5" />
                Filters
              </button>

              <div className="text-sm text-muted-foreground">
                Showing <span className="font-semibold text-charcoal">{filteredProducts.length}</span> products
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-border rounded-lg bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-blush-pink"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="popular">Most Popular</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">No products found matching your criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
