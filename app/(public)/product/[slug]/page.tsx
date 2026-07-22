'use client'

import { useState } from 'react'
import { Heart, ShoppingCart, Star, Check } from 'lucide-react'
import { getProductBySlug, mockProducts } from '@/lib/data'
import { ProductCard } from '@/components/ProductCard'
import { formatCurrency, formatRating } from '@/lib/utils'

interface PageProps {
  params: { slug: string }
}

export default function ProductPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0])
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)
  const [activeTab, setActiveTab] = useState<'description' | 'benefits' | 'ingredients' | 'reviews'>('description')

  if (!product) {
    return (
      <div className="container-wide py-16">
        <p className="text-center text-xl text-muted-foreground">Product not found</p>
      </div>
    )
  }

  const discountedPrice = selectedVariant?.price || product.basePrice * (1 - product.discountPercentage / 100)
  const relatedProducts = mockProducts
    .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="bg-white">
      <div className="container-wide py-8">
        {/* Breadcrumb */}
        <div className="flex gap-2 text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-blush-pink">Home</a>
          <span>/</span>
          <a href="/shop" className="hover:text-blush-pink">Shop</a>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </div>

        {/* Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Images */}
          <div>
            <div className="bg-card rounded-lg overflow-hidden mb-4">
              <img
                src={product.mainImage}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  className="bg-card rounded-lg overflow-hidden border-2 border-transparent hover:border-blush-pink transition"
                >
                  <img src={img} alt={`${product.name} ${i}`} className="w-full aspect-square object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            {/* Header */}
            <div className="mb-6">
              <p className="text-gold font-semibold uppercase tracking-wider text-sm mb-2">Premium Product</p>
              <h1 className="font-serif text-4xl font-bold text-charcoal mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.round(product.rating)
                          ? 'fill-gold text-gold'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-charcoal">{formatRating(product.rating)}</span>
                <a href="#reviews" className="text-blush-pink hover:underline">
                  ({product.reviewCount} reviews)
                </a>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6 pb-6 border-b border-border">
              <div className="flex items-center gap-4 mb-2">
                <span className="font-serif text-4xl font-bold text-blush-pink">
                  {formatCurrency(discountedPrice)}
                </span>
                {product.discountPercentage > 0 && (
                  <>
                    <span className="line-through text-muted-foreground text-xl">
                      {formatCurrency(product.basePrice)}
                    </span>
                    <span className="bg-gold text-charcoal px-3 py-1 rounded font-semibold">
                      {Math.round(product.discountPercentage)}% OFF
                    </span>
                  </>
                )}
              </div>
              <p className={`font-semibold ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
              </p>
            </div>

            {/* Variants */}
            {product.variants.length > 1 && (
              <div className="mb-6 pb-6 border-b border-border">
                <h3 className="font-semibold text-charcoal mb-3">Options</h3>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-4 py-2 rounded-lg border-2 transition font-semibold ${
                        selectedVariant?.id === variant.id
                          ? 'border-blush-pink bg-pale-pink text-charcoal'
                          : 'border-border text-charcoal hover:border-blush-pink'
                      }`}
                    >
                      {variant.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & Actions */}
            <div className="mb-6 pb-6 border-b border-border">
              <div className="flex items-center gap-4">
                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">Quantity</label>
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 text-charcoal hover:bg-pale-pink transition"
                    >
                      −
                    </button>
                    <span className="px-6 py-2 font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 text-charcoal hover:bg-pale-pink transition"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex-1 flex gap-3">
                  <button className="flex-1 btn-primary flex items-center justify-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="px-6 py-3 border-2 border-blush-pink text-blush-pink rounded-lg hover:bg-pale-pink transition"
                  >
                    <Heart className="w-5 h-5" fill={isFavorite ? 'currentColor' : 'none'} />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-charcoal">
                <Check className="w-5 h-5 text-green-600" />
                <span>Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center gap-2 text-charcoal">
                <Check className="w-5 h-5 text-green-600" />
                <span>30-day return policy</span>
              </div>
              <div className="flex items-center gap-2 text-charcoal">
                <Check className="w-5 h-5 text-green-600" />
                <span>100% authentic products</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-16">
          <div className="border-b border-border mb-8">
            <div className="flex gap-8">
              {(['description', 'benefits', 'ingredients', 'reviews'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 font-semibold transition ${
                    activeTab === tab
                      ? 'text-blush-pink border-b-2 border-blush-pink -mb-px'
                      : 'text-muted-foreground hover:text-charcoal'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div>
            {activeTab === 'description' && (
              <div className="prose prose-sm max-w-none">
                <p>{product.description}</p>
              </div>
            )}
            {activeTab === 'benefits' && (
              <ul className="space-y-2">
                {product.benefits?.map((benefit, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-gold">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            )}
            {activeTab === 'ingredients' && (
              <ul className="space-y-2">
                {product.ingredients?.map((ingredient, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-gold">•</span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            )}
            {activeTab === 'reviews' && (
              <div>
                <p className="text-muted-foreground">No reviews yet. Be the first to review this product!</p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="font-serif text-3xl font-bold text-charcoal mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
