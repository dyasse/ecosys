'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { cn } from '@/lib/utils'
import { User, ShoppingBag, Heart, LogOut, Lock, Bell } from 'lucide-react'

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const navItems = [
    { href: '/account/profile', label: 'Profile', icon: User },
    { href: '/account/orders', label: 'Orders', icon: ShoppingBag },
    { href: '/account/wishlist', label: 'Wishlist', icon: Heart },
    { href: '/account/security', label: 'Security', icon: Lock },
    { href: '/account/notifications', label: 'Notifications', icon: Bell },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="bg-card border-b border-border">
          <div className="container-wide py-8">
            <h1 className="font-serif text-3xl font-bold text-charcoal">My Account</h1>
          </div>
        </div>

        <div className="container-wide py-8">
          <div className="flex gap-8">
            {/* Sidebar Navigation */}
            <div className="hidden md:block w-48 flex-shrink-0">
              <nav className="sticky top-24 space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        'flex items-center gap-3 px-4 py-3 rounded-lg transition',
                        isActive
                          ? 'bg-blush-pink text-white'
                          : 'text-charcoal hover:bg-pale-pink'
                      )}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-semibold">{item.label}</span>
                    </Link>
                  )
                })}
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-charcoal hover:bg-pale-pink transition font-semibold mt-4 pt-4 border-t border-border">
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
