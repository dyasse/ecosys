import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12 mt-16">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-gold mb-4">Azianline</h3>
            <p className="text-gray-300 mb-4">
              Discover premium cosmetics and beauty products for every skin type and preference.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gold hover:text-blush-pink transition">
                <span className="text-xl">f</span>
              </a>
              <a href="#" className="text-gold hover:text-blush-pink transition">
                <span className="text-xl">📷</span>
              </a>
              <a href="#" className="text-gold hover:text-blush-pink transition">
                <span className="text-xl">𝕏</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-gray-300 hover:text-blush-pink transition">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/category/skincare" className="text-gray-300 hover:text-blush-pink transition">
                  Skincare
                </Link>
              </li>
              <li>
                <Link href="/category/makeup" className="text-gray-300 hover:text-blush-pink transition">
                  Makeup
                </Link>
              </li>
              <li>
                <Link href="/category/fragrance" className="text-gray-300 hover:text-blush-pink transition">
                  Fragrance
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-blush-pink transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-blush-pink transition">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-blush-pink transition">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-blush-pink transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex gap-2">
                <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <a href="mailto:support@azianline.com" className="text-gray-300 hover:text-blush-pink transition">
                  support@azianline.com
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">123 Beauty Street, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-blush-pink bg-opacity-20 border border-blush-pink rounded-lg p-6 mb-8">
          <h3 className="font-serif text-xl font-semibold mb-2">Subscribe to Our Newsletter</h3>
          <p className="text-gray-300 mb-4">Get exclusive offers and latest beauty tips delivered to your inbox.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-blush-pink"
            />
            <button className="px-6 py-2 bg-blush-pink text-white rounded-lg hover:bg-opacity-90 transition font-semibold">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2024 Azianline. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-blush-pink transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-blush-pink transition">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-blush-pink transition">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
