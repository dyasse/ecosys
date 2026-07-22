'use client'

import { useState } from 'react'
import Link from 'next/link'
import { formatCurrency } from '@/lib/utils'

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState<'info' | 'shipping' | 'payment'>('info')
  const [formData, setFormData] = useState({
    // Customer Info
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    // Shipping Address
    street: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    // Payment
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    paymentMethod: 'credit-card',
  })

  const subtotal = 104.98
  const tax = 8.40
  const shipping = 0
  const discount = 10.50
  const total = subtotal - discount + tax + shipping

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (currentStep === 'info') setCurrentStep('shipping')
    else if (currentStep === 'shipping') setCurrentStep('payment')
  }

  const handleBack = () => {
    if (currentStep === 'payment') setCurrentStep('shipping')
    else if (currentStep === 'shipping') setCurrentStep('info')
  }

  return (
    <div className="bg-white">
      <div className="container-wide py-8">
        <h1 className="font-serif text-4xl font-bold text-charcoal mb-2">Checkout</h1>
      </div>

      <div className="container-wide pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Progress Indicator */}
            <div className="flex gap-4 mb-12">
              {(['info', 'shipping', 'payment'] as const).map((step, index) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition ${
                      currentStep === step || (step === 'info')
                        ? 'bg-blush-pink text-white'
                        : 'bg-border text-muted-foreground'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span className="ml-3 text-sm font-semibold text-charcoal capitalize">{step}</span>
                  {index < 2 && <div className="ml-4 flex-1 h-1 bg-border"></div>}
                </div>
              ))}
            </div>

            {/* Step: Customer Info */}
            {currentStep === 'info' && (
              <div className="space-y-6">
                <h2 className="font-serif text-2xl font-bold text-charcoal">Customer Information</h2>

                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink"
                  />
                </div>
              </div>
            )}

            {/* Step: Shipping Address */}
            {currentStep === 'shipping' && (
              <div className="space-y-6">
                <h2 className="font-serif text-2xl font-bold text-charcoal">Shipping Address</h2>

                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">Street Address</label>
                  <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleInputChange}
                    placeholder="123 Main Street"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="New York"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">State</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="NY"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">Postal Code</label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      placeholder="10001"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">Country</label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder="United States"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step: Payment */}
            {currentStep === 'payment' && (
              <div className="space-y-6">
                <h2 className="font-serif text-2xl font-bold text-charcoal">Payment Method</h2>

                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 border-2 border-border rounded-lg cursor-pointer hover:border-blush-pink transition">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="credit-card"
                      checked={formData.paymentMethod === 'credit-card'}
                      onChange={handleInputChange}
                      className="w-4 h-4 accent-blush-pink"
                    />
                    <span className="font-semibold text-charcoal">Credit Card</span>
                  </label>
                  <label className="flex items-center gap-3 p-4 border-2 border-border rounded-lg cursor-pointer hover:border-blush-pink transition">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleInputChange}
                      className="w-4 h-4 accent-blush-pink"
                    />
                    <span className="font-semibold text-charcoal">Cash on Delivery</span>
                  </label>
                </div>

                {formData.paymentMethod === 'credit-card' && (
                  <div className="space-y-4 mt-6 pt-6 border-t border-border">
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">Cardholder Name</label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="4532 1234 5678 9010"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-charcoal mb-2">Expiry</label>
                        <input
                          type="text"
                          name="expiry"
                          value={formData.expiry}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-charcoal mb-2">CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="123"
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-12">
              {currentStep !== 'info' && (
                <button
                  onClick={handleBack}
                  className="px-8 py-3 border-2 border-blush-pink text-blush-pink rounded-lg font-semibold hover:bg-pale-pink transition"
                >
                  Back
                </button>
              )}
              {currentStep !== 'payment' && (
                <button
                  onClick={handleNext}
                  className="ml-auto px-8 py-3 bg-blush-pink text-white rounded-lg font-semibold hover:bg-opacity-90 transition"
                >
                  Next
                </button>
              )}
              {currentStep === 'payment' && (
                <Link
                  href="/order-confirmation/mock-order-123"
                  className="ml-auto px-8 py-3 bg-blush-pink text-white rounded-lg font-semibold hover:bg-opacity-90 transition inline-block"
                >
                  Place Order
                </Link>
              )}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="border border-border rounded-lg p-6 sticky top-24">
              <h3 className="font-serif text-xl font-bold text-charcoal mb-6">Order Summary</h3>

              {/* Sample Items */}
              <div className="space-y-4 mb-6 pb-6 border-b border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Hydrating Rose Serum (1x)</span>
                  <span className="font-semibold">{formatCurrency(80.99)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Velvet Matte Lipstick (2x)</span>
                  <span className="font-semibold">{formatCurrency(47.98)}</span>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>−{formatCurrency(discount)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Tax</span>
                  <span>{formatCurrency(tax)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span>FREE</span>
                </div>
              </div>

              <div className="pt-6 border-t-2 border-blush-pink flex justify-between">
                <span className="font-serif font-bold">Total</span>
                <span className="font-serif font-bold text-xl text-blush-pink">
                  {formatCurrency(total)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
