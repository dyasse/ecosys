'use client'

import Link from 'next/link'
import { Trash2, Plus, Minus } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'
import { useState } from 'react'

interface CartItem {
  id: string
  name: string
  image: string
  variant: string
  price: number
  quantity: number
  originalPrice: number
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Hydrating Rose Serum',
      image: '/images/products/serum-1.jpg',
      variant: '30ml',
      price: 80.99,
      quantity: 1,
      originalPrice: 89.99,
    },
    {
      id: '2',
      name: 'Velvet Matte Lipstick',
      image: '/images/products/lipstick-1.jpg',
      variant: 'Rose Pink',
      price: 23.99,
      quantity: 2,
      originalPrice: 29.99,
    },
  ])

  const [couponCode, setCouponCode] = useState('')
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null)

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity > 0) {
      setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
    }
  }

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discount = appliedCoupon ? subtotal * 0.1 : 0 // Mock 10% discount
  const tax = (subtotal - discount) * 0.08
  const shipping = subtotal > 100 ? 0 : 10
  const total = subtotal - discount + tax + shipping

  const applyCoupon = () => {
    if (couponCode === 'SUMMER20') {
      setAppliedCoupon('SUMMER20')
    } else if (couponCode === 'WELCOME10') {
      setAppliedCoupon('WELCOME10')
    }
  }

  return (
    <div className="bg-white">
      <div className="container-wide py-8">
        <h1 className="font-serif text-4xl font-bold text-charcoal mb-2">Shopping Cart</h1>
        <p className="text-muted-foreground">Review and manage your items</p>
      </div>

      <div className="container-wide pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cartItems.length > 0 ? (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 border border-border rounded-lg p-4 hover:shadow-md transition"
                  >
                    {/* Image */}
                    <div className="w-24 h-24 flex-shrink-0 bg-card rounded-lg overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <Link href="#" className="hover:text-blush-pink transition">
                          <h3 className="font-serif font-semibold text-charcoal">{item.name}</h3>
                        </Link>
                        <p className="text-sm text-muted-foreground">{item.variant}</p>
                      </div>

                      <div className="flex gap-2">
                        <span className="font-semibold text-blush-pink">
                          {formatCurrency(item.price)}
                        </span>
                        {item.originalPrice !== item.price && (
                          <span className="text-sm text-muted-foreground line-through">
                            {formatCurrency(item.originalPrice)}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Quantity & Remove */}
                    <div className="flex flex-col items-end gap-4">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-600 hover:text-red-700 transition"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>

                      <div className="flex items-center border border-border rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-pale-pink transition"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-1 font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-pale-pink transition"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <span className="font-semibold text-charcoal">
                        {formatCurrency(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                ))}

                <Link href="/shop" className="text-blush-pink font-semibold hover:underline inline-block mt-4">
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground mb-8">Your cart is empty</p>
                <Link href="/shop" className="btn-primary inline-block">
                  Start Shopping
                </Link>
              </div>
            )}
          </div>

          {/* Order Summary */}
          {cartItems.length > 0 && (
            <div className="lg:col-span-1">
              <div className="border border-border rounded-lg p-6 sticky top-24">
                <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">Order Summary</h2>

                {/* Coupon */}
                <div className="mb-6 pb-6 border-b border-border">
                  <label className="block text-sm font-semibold text-charcoal mb-2">Promo Code</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                      placeholder="Enter code"
                      className="flex-1 px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink"
                    />
                    <button
                      onClick={applyCoupon}
                      className="px-4 py-2 bg-charcoal text-white rounded-lg hover:bg-blush-pink transition font-semibold text-sm"
                    >
                      Apply
                    </button>
                  </div>
                  {appliedCoupon && (
                    <p className="text-green-600 text-sm mt-2">✓ Coupon applied</p>
                  )}
                </div>

                {/* Summary Lines */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>{formatCurrency(subtotal)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span>−{formatCurrency(discount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-muted-foreground">
                    <span>Tax</span>
                    <span>{formatCurrency(tax)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'FREE' : formatCurrency(shipping)}</span>
                  </div>
                </div>

                {/* Total */}
                <div className="pt-6 border-t-2 border-blush-pink mb-6 flex justify-between items-center">
                  <span className="font-serif font-bold text-xl">Total</span>
                  <span className="font-serif font-bold text-2xl text-blush-pink">
                    {formatCurrency(total)}
                  </span>
                </div>

                <Link href="/checkout" className="btn-primary block text-center w-full">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
