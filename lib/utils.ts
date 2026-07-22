import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Currency formatting
export function formatCurrency(value: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}

// Percentage formatting
export function formatDiscount(percentage: number): string {
  return `${Math.round(percentage)}% OFF`
}

// Rating display
export function formatRating(rating: number): string {
  return rating.toFixed(1)
}

// Date formatting
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// Slug utilities
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Product price calculations
export function calculateDiscountedPrice(basePrice: number, discountPercentage: number): number {
  return Math.round(basePrice * (1 - discountPercentage / 100) * 100) / 100
}

export function calculateSavings(originalPrice: number, discountPercentage: number): number {
  return Math.round((originalPrice * discountPercentage) / 100 * 100) / 100
}

// Cart calculations
export function calculateSubtotal(items: Array<{ price: number; quantity: number }>): number {
  return items.reduce((total, item) => total + item.price * item.quantity, 0)
}

export function calculateTax(subtotal: number, taxRate: number = 0.08): number {
  return Math.round(subtotal * taxRate * 100) / 100
}

export function calculateTotal(
  subtotal: number,
  tax: number = 0,
  shipping: number = 0,
  discount: number = 0
): number {
  return Math.max(0, Math.round((subtotal + tax + shipping - discount) * 100) / 100)
}

// String utilities
export function truncate(text: string, length: number = 100, suffix: string = '...'): string {
  if (text.length <= length) return text
  return text.substring(0, length - suffix.length) + suffix
}

export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

// Validation utilities
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Pagination utilities
export function calculatePages(total: number, pageSize: number): number {
  return Math.ceil(total / pageSize)
}

export function calculateOffset(page: number, pageSize: number): number {
  return (page - 1) * pageSize
}
