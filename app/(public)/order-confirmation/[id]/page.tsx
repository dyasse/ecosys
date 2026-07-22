import Link from 'next/link'
import { CheckCircle, Download, Package } from 'lucide-react'
import { formatCurrency, formatDate } from '@/lib/utils'

interface PageProps {
  params: { id: string }
}

export default function OrderConfirmationPage({ params }: PageProps) {
  const orderDate = new Date()
  const estimatedDelivery = new Date(orderDate.getTime() + 5 * 24 * 60 * 60 * 1000)

  return (
    <div className="bg-white">
      <div className="container-wide py-16">
        {/* Success Header */}
        <div className="text-center mb-12">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h1 className="font-serif text-4xl font-bold text-charcoal mb-2">Order Confirmed!</h1>
          <p className="text-lg text-muted-foreground">
            Thank you for your purchase. We&apos;ve sent a confirmation email to your address.
          </p>
        </div>

        {/* Order Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-card rounded-lg p-6 text-center">
            <p className="text-sm text-muted-foreground mb-2">Order Number</p>
            <p className="font-serif font-bold text-xl text-charcoal">#{params.id}</p>
          </div>
          <div className="bg-card rounded-lg p-6 text-center">
            <p className="text-sm text-muted-foreground mb-2">Order Date</p>
            <p className="font-serif font-bold text-xl text-charcoal">{formatDate(orderDate)}</p>
          </div>
          <div className="bg-card rounded-lg p-6 text-center">
            <p className="text-sm text-muted-foreground mb-2">Estimated Delivery</p>
            <p className="font-serif font-bold text-xl text-charcoal">{formatDate(estimatedDelivery)}</p>
          </div>
          <div className="bg-card rounded-lg p-6 text-center">
            <p className="text-sm text-muted-foreground mb-2">Order Total</p>
            <p className="font-serif font-bold text-xl text-blush-pink">{formatCurrency(104.88)}</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Items */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">Order Items</h2>
            <div className="space-y-4 mb-8">
              {/* Item 1 */}
              <div className="flex gap-4 border border-border rounded-lg p-4">
                <div className="w-24 h-24 flex-shrink-0 bg-card rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blush-pink to-warm-nude" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-semibold text-charcoal">Hydrating Rose Serum</h3>
                  <p className="text-sm text-muted-foreground">30ml</p>
                  <p className="text-sm text-muted-foreground mt-2">Quantity: 1</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-blush-pink">{formatCurrency(80.99)}</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-4 border border-border rounded-lg p-4">
                <div className="w-24 h-24 flex-shrink-0 bg-card rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-warm-nude to-charcoal" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-semibold text-charcoal">Velvet Matte Lipstick</h3>
                  <p className="text-sm text-muted-foreground">Rose Pink</p>
                  <p className="text-sm text-muted-foreground mt-2">Quantity: 2</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-blush-pink">{formatCurrency(47.98)}</p>
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="border border-border rounded-lg p-6 mb-8">
              <h3 className="font-serif font-semibold text-charcoal mb-4">Shipping Address</h3>
              <div className="text-muted-foreground">
                <p>Jane Doe</p>
                <p>123 Main Street</p>
                <p>New York, NY 10001</p>
                <p>United States</p>
              </div>
            </div>

            {/* Order Tracking */}
            <div className="border border-border rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Package className="w-6 h-6 text-blush-pink" />
                <h3 className="font-serif font-semibold text-charcoal">Track Your Order</h3>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="relative">
                    <div className="w-4 h-4 bg-blush-pink rounded-full" />
                    <div className="w-1 h-12 bg-pale-pink ml-1.5" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">Order Placed</p>
                    <p className="text-sm text-muted-foreground">{formatDate(orderDate)}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="relative">
                    <div className="w-4 h-4 bg-pale-pink rounded-full border-2 border-border" />
                    <div className="w-1 h-12 bg-pale-pink ml-1.5" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">Processing</p>
                    <p className="text-sm text-muted-foreground">Within 24 hours</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="relative">
                    <div className="w-4 h-4 bg-pale-pink rounded-full border-2 border-border" />
                    <div className="w-1 h-12 bg-pale-pink ml-1.5" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">Shipped</p>
                    <p className="text-sm text-muted-foreground">Expected: {formatDate(estimatedDelivery)}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-4 h-4 bg-pale-pink rounded-full border-2 border-border" />
                  <div>
                    <p className="font-semibold text-charcoal">Delivered</p>
                    <p className="text-sm text-muted-foreground">Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="border border-border rounded-lg p-6 sticky top-24 space-y-6">
              <h3 className="font-serif text-xl font-bold text-charcoal">Order Summary</h3>

              <div className="space-y-3 pb-6 border-b border-border">
                <div className="flex justify-between text-muted-foreground text-sm">
                  <span>Subtotal</span>
                  <span>{formatCurrency(128.97)}</span>
                </div>
                <div className="flex justify-between text-green-600 text-sm">
                  <span>Discount</span>
                  <span>−{formatCurrency(10.50)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground text-sm">
                  <span>Tax</span>
                  <span>{formatCurrency(8.40)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground text-sm">
                  <span>Shipping</span>
                  <span>FREE</span>
                </div>
              </div>

              <div className="flex justify-between">
                <span className="font-serif font-bold">Total</span>
                <span className="font-serif font-bold text-lg text-blush-pink">
                  {formatCurrency(126.87)}
                </span>
              </div>

              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-blush-pink text-blush-pink rounded-lg hover:bg-pale-pink transition font-semibold">
                <Download className="w-5 h-5" />
                Download Invoice
              </button>

              <Link href="/shop" className="btn-primary block text-center w-full">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>

        {/* Need Help Section */}
        <div className="mt-16 p-8 bg-pale-pink rounded-lg text-center">
          <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">Need Help?</h3>
          <p className="text-muted-foreground mb-6">
            If you have any questions about your order, our customer support team is here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:support@azianline.com" className="text-blush-pink font-semibold hover:underline">
              support@azianline.com
            </a>
            <span className="text-muted-foreground">•</span>
            <a href="tel:+15551234567" className="text-blush-pink font-semibold hover:underline">
              +1 (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
