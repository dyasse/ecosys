'use client'

import Link from 'next/link'
import { Search, ShoppingCart, Heart, User, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Promo Bar */}
      <div className="bg-blush-pink text-white py-2 text-center text-sm">
        Summer Sale - Up to 30% Off on Selected Items
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-border sticky top-0 z-40">
        <div className="container-wide py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="font-serif text-2xl font-bold text-charcoal">
              Azianline
            </Link>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center gap-8 flex-1 ml-8">
              <Link href="/shop" className="text-charcoal hover:text-blush-pink transition">
                Shop
              </Link>
              <div className="group relative">
                <button className="text-charcoal hover:text-blush-pink transition flex items-center gap-1">
                  Categories
                </button>
                <div className="hidden group-hover:flex absolute top-full left-0 bg-white border border-border shadow-lg rounded-lg py-2 min-w-max">
                  <Link href="/category/skincare" className="block px-4 py-2 hover:bg-pale-pink">
                    Skincare
                  </Link>
                  <Link href="/category/makeup" className="block px-4 py-2 hover:bg-pale-pink">
                    Makeup
                  </Link>
                  <Link href="/category/haircare" className="block px-4 py-2 hover:bg-pale-pink">
                    Haircare
                  </Link>
                  <Link href="/category/fragrance" className="block px-4 py-2 hover:bg-pale-pink">
                    Fragrance
                  </Link>
                </div>
              </div>
              <Link href="/shop" className="text-charcoal hover:text-blush-pink transition">
                About
              </Link>
            </nav>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-md">
              <div className="relative w-full">
                <input
                  type="search"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 border border-border rounded-lg bg-card focus:outline-none focus:ring-2 focus:ring-blush-pink"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button className="text-charcoal hover:text-blush-pink transition hidden sm:block">
                <Heart className="w-6 h-6" />
              </button>
              <button className="text-charcoal hover:text-blush-pink transition hidden sm:block">
                <User className="w-6 h-6" />
              </button>
              <button className="relative">
                <ShoppingCart className="w-6 h-6 text-charcoal hover:text-blush-pink transition" />
                <span className="absolute -top-2 -right-2 bg-gold text-charcoal text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  0
                </span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-charcoal"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 flex flex-col gap-3">
              <Link href="/shop" className="text-charcoal hover:text-blush-pink transition">
                Shop
              </Link>
              <Link href="/category/skincare" className="text-charcoal hover:text-blush-pink transition">
                Skincare
              </Link>
              <Link href="/category/makeup" className="text-charcoal hover:text-blush-pink transition">
                Makeup
              </Link>
              <Link href="/category/haircare" className="text-charcoal hover:text-blush-pink transition">
                Haircare
              </Link>
            </nav>
          )}
        </div>
      </header>
    </>
  )
}
