'use client'

import Link from 'next/link'
import { Trash2, ShoppingCart } from 'lucide-react'
import { ProductCard } from '@/components/ProductCard'
import { mockProducts } from '@/lib/data'
import { useState } from 'react'

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState(mockProducts.slice(0, 6))

  const removeFromWishlist = (id: string) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id))
  }

  return (
    <div>
      <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">My Wishlist</h2>

      {wishlistItems.length > 0 ? (
        <div>
          <div className="text-sm text-muted-foreground mb-6">
            {wishlistItems.length} item{wishlistItems.length !== 1 ? 's' : ''} in your wishlist
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {wishlistItems.map((product) => (
              <div key={product.id} className="relative">
                <ProductCard product={product} />
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-4 right-4 z-10 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="bg-pale-pink rounded-lg p-8 text-center">
            <p className="text-muted-foreground mb-6">
              Share your wishlist with friends and family
            </p>
            <button className="px-6 py-3 bg-blush-pink text-white rounded-lg hover:bg-opacity-90 transition font-semibold">
              Share Wishlist
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-16 bg-card rounded-lg">
          <p className="text-lg text-muted-foreground mb-6">Your wishlist is empty</p>
          <Link href="/shop" className="btn-primary inline-block">
            Explore Products
          </Link>
        </div>
      )}
    </div>
  )
}
