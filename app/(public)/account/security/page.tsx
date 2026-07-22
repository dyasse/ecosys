'use client'

import { useState } from 'react'
import { Lock, Eye, EyeOff } from 'lucide-react'

export default function SecurityPage() {
  const [showPasswords, setShowPasswords] = useState(false)
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPasswordForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleChangePassword = () => {
    console.log('Password change requested:', passwordForm)
    // Reset form
    setPasswordForm({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    })
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-2xl font-bold text-charcoal mb-6 flex items-center gap-2">
          <Lock className="w-6 h-6 text-blush-pink" />
          Password & Security
        </h2>

        <div className="bg-card rounded-lg p-8">
          <h3 className="font-semibold text-charcoal mb-6">Change Password</h3>

          <div className="space-y-4 max-w-md">
            <div>
              <label className="block text-sm font-semibold text-charcoal mb-2">Current Password</label>
              <div className="relative">
                <input
                  type={showPasswords ? 'text' : 'password'}
                  name="currentPassword"
                  value={passwordForm.currentPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink pr-10"
                />
                <button
                  onClick={() => setShowPasswords(!showPasswords)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                >
                  {showPasswords ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-charcoal mb-2">New Password</label>
              <input
                type={showPasswords ? 'text' : 'password'}
                name="newPassword"
                value={passwordForm.newPassword}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Minimum 8 characters, include uppercase, lowercase, and numbers
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-charcoal mb-2">Confirm Password</label>
              <input
                type={showPasswords ? 'text' : 'password'}
                name="confirmPassword"
                value={passwordForm.confirmPassword}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink"
              />
            </div>

            <button
              onClick={handleChangePassword}
              className="w-full px-6 py-3 bg-blush-pink text-white rounded-lg hover:bg-opacity-90 transition font-semibold mt-6"
            >
              Update Password
            </button>
          </div>
        </div>
      </div>

      {/* Active Sessions */}
      <div>
        <h3 className="font-semibold text-charcoal mb-4">Active Sessions</h3>
        <div className="space-y-4">
          <div className="bg-card rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="font-semibold text-charcoal">Safari on macOS</p>
                <p className="text-sm text-muted-foreground">Last active: Today at 2:30 PM</p>
              </div>
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                Current
              </span>
            </div>
            <p className="text-xs text-muted-foreground">IP Address: 192.168.1.1</p>
          </div>

          <div className="bg-card rounded-lg p-6 opacity-75">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="font-semibold text-charcoal">Chrome on Windows</p>
                <p className="text-sm text-muted-foreground">Last active: Yesterday at 10:15 AM</p>
              </div>
              <button className="text-red-600 hover:text-red-700 font-semibold text-sm">
                Sign Out
              </button>
            </div>
            <p className="text-xs text-muted-foreground">IP Address: 192.168.1.2</p>
          </div>
        </div>
      </div>

      {/* Two-Factor Authentication */}
      <div>
        <h3 className="font-semibold text-charcoal mb-4">Two-Factor Authentication</h3>
        <div className="bg-pale-pink rounded-lg p-6">
          <p className="text-muted-foreground mb-4">
            Add an extra layer of security to your account
          </p>
          <button className="px-6 py-3 border-2 border-blush-pink text-blush-pink rounded-lg hover:bg-white transition font-semibold">
            Enable 2FA
          </button>
        </div>
      </div>

      {/* Account Deletion */}
      <div>
        <h3 className="font-semibold text-charcoal mb-4">Account Management</h3>
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
          <p className="text-red-900 mb-4">
            Permanently delete your account and all associated data. This action cannot be undone.
          </p>
          <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  )
}
