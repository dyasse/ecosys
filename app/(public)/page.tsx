import Link from 'next/link'
import { ProductCard } from '@/components/ProductCard'
import { mockCategories, mockProducts, getFeaturedProducts, getNewProducts } from '@/lib/data'
import { ChevronRight, Sparkles, Truck, RotateCcw, Shield } from 'lucide-react'

export const metadata = {
  title: 'Azianline - Premium Cosmetics & Beauty Products',
  description: 'Discover our curated collection of premium beauty and skincare products from top brands',
}

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()
  const newProducts = getNewProducts()

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-pale-pink to-white py-16 md:py-24">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-charcoal mb-4 text-balance">
                Elevate Your Beauty Ritual
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-md">
                Discover our carefully curated collection of premium cosmetics and skincare products from the world&apos;s finest beauty brands.
              </p>
              <div className="flex gap-4">
                <Link href="/shop" className="btn-primary">
                  Shop Now
                </Link>
                <button className="btn-secondary">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex-1 relative h-96 bg-gradient-to-br from-blush-pink to-warm-nude rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="w-32 h-32 text-white opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container-wide">
          <h2 className="font-serif text-4xl font-bold text-charcoal mb-12 text-center">
            Shop By Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {mockCategories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className="group"
              >
                <div className="bg-pale-pink rounded-xl p-6 text-center hover:bg-blush-pink transition">
                  <div className="text-4xl mb-3">✨</div>
                  <h3 className="font-semibold text-charcoal group-hover:text-white transition">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-charcoal text-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-start gap-4">
              <Truck className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Free Shipping</h3>
                <p className="text-gray-300 text-sm">On orders over $100</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <RotateCcw className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Easy Returns</h3>
                <p className="text-gray-300 text-sm">30-day return policy</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Secure Payment</h3>
                <p className="text-gray-300 text-sm">100% secure checkout</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Sparkles className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Authentic Brands</h3>
                <p className="text-gray-300 text-sm">All products verified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-serif text-4xl font-bold text-charcoal">
              Featured Products
            </h2>
            <Link href="/shop" className="text-blush-pink font-semibold flex items-center gap-1 hover:gap-2 transition">
              View All <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-card">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-serif text-4xl font-bold text-charcoal">
              New Arrivals
            </h2>
            <Link href="/shop" className="text-blush-pink font-semibold flex items-center gap-1 hover:gap-2 transition">
              View All <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Flash Deals */}
      <section className="py-16">
        <div className="container-wide">
          <div className="bg-gradient-to-r from-blush-pink to-warm-nude rounded-2xl p-12 text-white">
            <h2 className="font-serif text-4xl font-bold mb-4">Flash Sale</h2>
            <p className="text-lg mb-8 max-w-md">Limited time offer - Up to 50% off selected items</p>
            <div className="flex gap-4">
              <div className="bg-white bg-opacity-20 rounded-lg px-6 py-4 text-center">
                <div className="text-3xl font-bold">12</div>
                <div className="text-sm">Hours</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg px-6 py-4 text-center">
                <div className="text-3xl font-bold">34</div>
                <div className="text-sm">Minutes</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg px-6 py-4 text-center">
                <div className="text-3xl font-bold">56</div>
                <div className="text-sm">Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-charcoal text-white">
        <div className="container-wide text-center">
          <h2 className="font-serif text-4xl font-bold mb-4">
            Join Our Beauty Community
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get exclusive offers, beauty tips, and early access to new collections.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-blush-pink"
            />
            <button className="px-8 py-3 bg-blush-pink text-white rounded-lg font-semibold hover:bg-opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
