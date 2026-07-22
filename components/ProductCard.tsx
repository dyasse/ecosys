'use client'

import Link from 'next/link'
import { Heart, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import type { Product } from '@/lib/types'
import { formatCurrency, formatDiscount, formatRating } from '@/lib/utils'

interface ProductCardProps {
  product: Product
  variant?: 'grid' | 'list'
}

export function ProductCard({ product, variant = 'grid' }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const discountedPrice = product.basePrice * (1 - product.discountPercentage / 100)

  if (variant === 'list') {
    return (
      <div className="flex gap-4 border border-border rounded-lg overflow-hidden hover:shadow-lg transition">
        <div className="relative w-32 h-32 flex-shrink-0 bg-card">
          <img
            src={product.mainImage}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {product.discountPercentage > 0 && (
            <div className="absolute top-2 right-2 bg-gold text-charcoal text-xs font-bold px-2 py-1 rounded">
              {formatDiscount(product.discountPercentage)}
            </div>
          )}
        </div>

        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <Link href={`/product/${product.slug}`} className="hover:text-blush-pink transition">
              <h3 className="font-serif text-lg font-semibold text-charcoal">{product.name}</h3>
            </Link>
            <p className="text-muted-foreground text-sm mt-1">{product.shortDescription}</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < Math.round(product.rating) ? 'text-gold' : 'text-border'}>
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {formatRating(product.rating)} ({product.reviewCount})
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-2">
              <span className="font-serif text-lg font-bold text-blush-pink">
                {formatCurrency(discountedPrice)}
              </span>
              {product.discountPercentage > 0 && (
                <span className="text-muted-foreground line-through text-sm">
                  {formatCurrency(product.basePrice)}
                </span>
              )}
            </div>
            <button className="text-charcoal hover:text-blush-pink transition">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Link href={`/product/${product.slug}`}>
      <div className="group bg-card rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
        {/* Image Container */}
        <div className="relative aspect-square bg-card overflow-hidden">
          <img
            src={product.mainImage}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
            <div className="flex flex-col gap-2">
              {product.new && (
                <span className="bg-charcoal text-white text-xs font-bold px-3 py-1 rounded">
                  NEW
                </span>
              )}
              {product.discountPercentage > 0 && (
                <span className="bg-gold text-charcoal text-xs font-bold px-3 py-1 rounded">
                  {formatDiscount(product.discountPercentage)}
                </span>
              )}
            </div>
            <button
              onClick={(e) => {
                e.preventDefault()
                setIsFavorite(!isFavorite)
              }}
              className="bg-white rounded-full p-2 hover:bg-blush-pink hover:text-white transition"
            >
              <Heart
                className="w-5 h-5"
                fill={isFavorite ? 'currentColor' : 'none'}
                color={isFavorite ? '#E8A7B5' : 'currentColor'}
              />
            </button>
          </div>

          {/* Overlay Actions */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition flex items-end justify-center pb-4">
            <button className="bg-charcoal text-white px-6 py-2 rounded-lg font-semibold hover:bg-blush-pink transition opacity-0 group-hover:opacity-100 transition">
              Quick View
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Brand */}
          <p className="text-xs text-gold font-semibold uppercase tracking-wider">
            Brand Name
          </p>

          {/* Title */}
          <h3 className="font-serif font-semibold text-charcoal mt-2 group-hover:text-blush-pink transition line-clamp-2">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`text-xs ${
                    i < Math.round(product.rating)
                      ? 'text-gold'
                      : 'text-gray-300'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              {formatRating(product.rating)}
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mt-3">
            <span className="font-serif font-bold text-lg text-blush-pink">
              {formatCurrency(discountedPrice)}
            </span>
            {product.discountPercentage > 0 && (
              <span className="text-xs text-muted-foreground line-through">
                {formatCurrency(product.basePrice)}
              </span>
            )}
          </div>

          {/* Stock Status */}
          <p className={`text-xs font-semibold mt-2 ${
            product.stock > 0 ? 'text-green-600' : 'text-red-600'
          }`}>
            {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
          </p>
        </div>
      </div>
    </Link>
  )
}
