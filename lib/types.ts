// User & Authentication Types
export interface User {
  id: string
  email: string
  name: string
  phone?: string
  role: 'customer' | 'admin' | 'super-admin'
  avatar?: string
  createdAt: Date
  updatedAt: Date
}

export interface Address {
  id: string
  userId: string
  firstName: string
  lastName: string
  street: string
  city: string
  state: string
  postalCode: string
  country: string
  isDefault: boolean
  createdAt: Date
}

// Product Types
export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  image?: string
  parentId?: string
  order: number
  createdAt: Date
}

export interface Brand {
  id: string
  name: string
  slug: string
  logo?: string
  description?: string
  website?: string
  featured: boolean
  createdAt: Date
}

export interface ProductVariant {
  id: string
  productId: string
  name: string
  sku: string
  price: number
  originalPrice: number
  stock: number
  image?: string
  attributes: Record<string, string> // size, color, shade, etc.
}

export interface Product {
  id: string
  name: string
  slug: string
  description: string
  shortDescription?: string
  categoryId: string
  brandId: string
  basePrice: number
  discountPercentage: number
  images: string[]
  mainImage: string
  rating: number
  reviewCount: number
  benefits?: string[]
  ingredients?: string[]
  howToUse?: string
  safetyInfo?: string
  skinType?: string[] // normal, dry, oily, combination, sensitive
  stock: number
  sku: string
  featured: boolean
  new: boolean
  variants: ProductVariant[]
  createdAt: Date
  updatedAt: Date
}

export interface Review {
  id: string
  productId: string
  userId: string
  rating: number
  title: string
  comment: string
  verified: boolean
  helpful: number
  unhelpful: number
  createdAt: Date
}

// Cart Types
export interface CartItem {
  id: string
  productId: string
  variantId?: string
  quantity: number
  addedAt: Date
}

export interface Cart {
  id: string
  userId?: string // null for guest carts
  items: CartItem[]
  updatedAt: Date
}

// Order Types
export interface OrderItem {
  id: string
  productId: string
  variantId?: string
  name: string
  quantity: number
  price: number
  discount: number
}

export interface Order {
  id: string
  userId: string
  orderNumber: string
  items: OrderItem[]
  subtotal: number
  tax: number
  shipping: number
  discount: number
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  paymentMethod: 'stripe' | 'cod'
  paymentStatus: 'pending' | 'completed' | 'failed'
  shippingAddress: Address
  billingAddress?: Address
  notes?: string
  couponCode?: string
  trackingNumber?: string
  createdAt: Date
  updatedAt: Date
}

// Wishlist Types
export interface Wishlist {
  id: string
  userId: string
  products: string[] // productIds
  createdAt: Date
}

// Coupon Types
export interface Coupon {
  id: string
  code: string
  description?: string
  discountType: 'percentage' | 'fixed'
  discountValue: number
  maxDiscount?: number
  minOrderValue?: number
  startDate: Date
  endDate: Date
  maxUsage?: number
  currentUsage: number
  applicableCategories?: string[]
  applicableProducts?: string[]
  active: boolean
  createdAt: Date
}

// Inventory Types
export interface InventoryLog {
  id: string
  productId: string
  variantId?: string
  action: 'add' | 'remove' | 'return'
  quantity: number
  reason: string
  createdAt: Date
}

// Settings Types
export interface StoreSettings {
  storeName: string
  storeDescription: string
  logo?: string
  favicon?: string
  primaryColor: string
  secondaryColor: string
  accentColor: string
  supportEmail: string
  supportPhone?: string
  currency: string
  taxRate: number
  shippingCost: number
  returnPolicy?: string
}

// Search & Filter Types
export interface FilterOptions {
  categories?: string[]
  brands?: string[]
  priceRange?: [number, number]
  rating?: number
  inStock?: boolean
  discount?: number
  skinType?: string[]
  sort?: 'newest' | 'price-low' | 'price-high' | 'popular' | 'rating' | 'best-selling'
}

export interface SearchResult {
  products: Product[]
  total: number
  page: number
  pageSize: number
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}
