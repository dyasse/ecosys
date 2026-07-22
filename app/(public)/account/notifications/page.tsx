'use client'

import { useState } from 'react'
import { Bell } from 'lucide-react'

export default function NotificationsPage() {
  const [preferences, setPreferences] = useState({
    orderUpdates: true,
    promotions: true,
    newArrivals: true,
    reviews: false,
    newsletters: true,
    sms: false,
    email: true,
    push: true,
  })

  const handleToggle = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const handleSave = () => {
    console.log('Preferences saved:', preferences)
  }

  return (
    <div>
      <h2 className="font-serif text-2xl font-bold text-charcoal mb-6 flex items-center gap-2">
        <Bell className="w-6 h-6 text-blush-pink" />
        Notification Preferences
      </h2>

      <div className="space-y-8">
        {/* Email Notifications */}
        <div className="bg-card rounded-lg p-8">
          <h3 className="font-semibold text-charcoal mb-6">Email Notifications</h3>
          <div className="space-y-4">
            <label className="flex items-center justify-between cursor-pointer p-4 border border-border rounded-lg hover:bg-pale-pink transition">
              <div>
                <p className="font-semibold text-charcoal">Order Updates</p>
                <p className="text-sm text-muted-foreground">Get notified about order status changes</p>
              </div>
              <input
                type="checkbox"
                checked={preferences.orderUpdates}
                onChange={() => handleToggle('orderUpdates')}
                className="w-5 h-5 rounded border-border accent-blush-pink cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer p-4 border border-border rounded-lg hover:bg-pale-pink transition">
              <div>
                <p className="font-semibold text-charcoal">Promotions & Discounts</p>
                <p className="text-sm text-muted-foreground">Receive exclusive offers and sale announcements</p>
              </div>
              <input
                type="checkbox"
                checked={preferences.promotions}
                onChange={() => handleToggle('promotions')}
                className="w-5 h-5 rounded border-border accent-blush-pink cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer p-4 border border-border rounded-lg hover:bg-pale-pink transition">
              <div>
                <p className="font-semibold text-charcoal">New Arrivals</p>
                <p className="text-sm text-muted-foreground">Be the first to know about new products</p>
              </div>
              <input
                type="checkbox"
                checked={preferences.newArrivals}
                onChange={() => handleToggle('newArrivals')}
                className="w-5 h-5 rounded border-border accent-blush-pink cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer p-4 border border-border rounded-lg hover:bg-pale-pink transition">
              <div>
                <p className="font-semibold text-charcoal">Product Reviews</p>
                <p className="text-sm text-muted-foreground">Request for reviews on your purchases</p>
              </div>
              <input
                type="checkbox"
                checked={preferences.reviews}
                onChange={() => handleToggle('reviews')}
                className="w-5 h-5 rounded border-border accent-blush-pink cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer p-4 border border-border rounded-lg hover:bg-pale-pink transition">
              <div>
                <p className="font-semibold text-charcoal">Weekly Newsletter</p>
                <p className="text-sm text-muted-foreground">Get beauty tips and personalized recommendations</p>
              </div>
              <input
                type="checkbox"
                checked={preferences.newsletters}
                onChange={() => handleToggle('newsletters')}
                className="w-5 h-5 rounded border-border accent-blush-pink cursor-pointer"
              />
            </label>
          </div>
        </div>

        {/* Notification Channels */}
        <div className="bg-card rounded-lg p-8">
          <h3 className="font-semibold text-charcoal mb-6">Notification Channels</h3>
          <div className="space-y-4">
            <label className="flex items-center justify-between cursor-pointer p-4 border border-border rounded-lg hover:bg-pale-pink transition">
              <div>
                <p className="font-semibold text-charcoal">Email</p>
                <p className="text-sm text-muted-foreground">Receive notifications via email</p>
              </div>
              <input
                type="checkbox"
                checked={preferences.email}
                onChange={() => handleToggle('email')}
                className="w-5 h-5 rounded border-border accent-blush-pink cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer p-4 border border-border rounded-lg hover:bg-pale-pink transition">
              <div>
                <p className="font-semibold text-charcoal">Push Notifications</p>
                <p className="text-sm text-muted-foreground">Receive push notifications on your device</p>
              </div>
              <input
                type="checkbox"
                checked={preferences.push}
                onChange={() => handleToggle('push')}
                className="w-5 h-5 rounded border-border accent-blush-pink cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer p-4 border border-border rounded-lg hover:bg-pale-pink transition opacity-50">
              <div>
                <p className="font-semibold text-charcoal">SMS</p>
                <p className="text-sm text-muted-foreground">Receive text message notifications</p>
              </div>
              <input
                type="checkbox"
                checked={preferences.sms}
                onChange={() => handleToggle('sms')}
                disabled
                className="w-5 h-5 rounded border-border accent-blush-pink cursor-not-allowed"
              />
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleSave}
            className="px-8 py-3 bg-blush-pink text-white rounded-lg hover:bg-opacity-90 transition font-semibold"
          >
            Save Preferences
          </button>
          <button className="px-8 py-3 border-2 border-blush-pink text-blush-pink rounded-lg hover:bg-pale-pink transition font-semibold">
            Reset to Defaults
          </button>
        </div>
      </div>
    </div>
  )
}
