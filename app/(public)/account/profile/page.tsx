'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Edit2, Check } from 'lucide-react'

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@example.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1990-05-15',
    newsletter: true,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSave = () => {
    setIsEditing(false)
    console.log('Profile saved:', formData)
  }

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-2xl font-bold text-charcoal">Personal Information</h2>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 px-4 py-2 border-2 border-blush-pink text-blush-pink rounded-lg hover:bg-pale-pink transition font-semibold"
          >
            <Edit2 className="w-4 h-4" />
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
        </div>

        <div className="bg-card rounded-lg p-8">
          {isEditing ? (
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
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
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink"
                />
              </div>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                  className="w-4 h-4 rounded border-border accent-blush-pink"
                />
                <span className="text-charcoal">Subscribe to our newsletter</span>
              </label>

              <button
                type="button"
                onClick={handleSave}
                className="flex items-center gap-2 px-6 py-3 bg-blush-pink text-white rounded-lg hover:bg-opacity-90 transition font-semibold"
              >
                <Check className="w-5 h-5" />
                Save Changes
              </button>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center gap-3 py-4 border-b border-border">
                <Mail className="w-5 h-5 text-blush-pink" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-charcoal">{formData.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 py-4 border-b border-border">
                <Phone className="w-5 h-5 text-blush-pink" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold text-charcoal">{formData.phone}</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Full Name</p>
                <p className="font-semibold text-charcoal">{formData.firstName} {formData.lastName}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Date of Birth</p>
                <p className="font-semibold text-charcoal">{new Date(formData.dateOfBirth).toLocaleDateString()}</p>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">Newsletter</p>
                <p className="font-semibold text-charcoal">
                  {formData.newsletter ? 'Subscribed' : 'Not subscribed'}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Account Created */}
      <div className="bg-pale-pink rounded-lg p-8">
        <h3 className="font-serif font-semibold text-charcoal mb-2">Account Created</h3>
        <p className="text-muted-foreground">June 15, 2024</p>
      </div>
    </div>
  )
}
