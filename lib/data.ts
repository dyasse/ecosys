import type { User, Category, Brand, Product, ProductVariant, Order, Coupon } from './types'

// Mock Users
export const mockUsers: User[] = [
  {
    id: 'admin-1',
    email: 'admin@azianline.com',
    name: 'Admin User',
    role: 'super-admin',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
  {
    id: 'user-1',
    email: 'customer@example.com',
    name: 'Sarah Johnson',
    phone: '+1 (555) 123-4567',
    role: 'customer',
    createdAt: new Date('2024-03-15'),
    updatedAt: new Date('2024-03-15'),
  },
]

// Mock Categories
export const mockCategories: Category[] = [
  {
    id: 'cat-1',
    name: 'Skincare',
    slug: 'skincare',
    description: 'Premium skincare products for all skin types',
    image: '/images/categories/skincare.jpg',
    order: 1,
    createdAt: new Date(),
  },
  {
    id: 'cat-2',
    name: 'Makeup',
    slug: 'makeup',
    description: 'Professional makeup and cosmetics',
    image: '/images/categories/makeup.jpg',
    order: 2,
    createdAt: new Date(),
  },
  {
    id: 'cat-3',
    name: 'Haircare',
    slug: 'haircare',
    description: 'Hair treatment and styling products',
    image: '/images/categories/haircare.jpg',
    order: 3,
    createdAt: new Date(),
  },
  {
    id: 'cat-4',
    name: 'Fragrance',
    slug: 'fragrance',
    description: 'Luxurious perfumes and colognes',
    image: '/images/categories/fragrance.jpg',
    order: 4,
    createdAt: new Date(),
  },
  {
    id: 'cat-5',
    name: 'Beauty Tools',
    slug: 'beauty-tools',
    description: 'Professional beauty application tools',
    image: '/images/categories/tools.jpg',
    order: 5,
    createdAt: new Date(),
  },
  {
    id: 'cat-6',
    name: 'Body Care',
    slug: 'body-care',
    description: 'Nourishing body care essentials',
    image: '/images/categories/body.jpg',
    order: 6,
    createdAt: new Date(),
  },
  {
    id: 'cat-7',
    name: 'Men\'s Care',
    slug: 'mens-care',
    description: 'Grooming products for men',
    image: '/images/categories/mens.jpg',
    order: 7,
    createdAt: new Date(),
  },
  {
    id: 'cat-8',
    name: 'Gift Sets',
    slug: 'gift-sets',
    description: 'Curated gift collections',
    image: '/images/categories/gifts.jpg',
    order: 8,
    createdAt: new Date(),
  },
]

// Mock Brands
export const mockBrands: Brand[] = [
  {
    id: 'brand-1',
    name: 'Luxe Glow',
    slug: 'luxe-glow',
    description: 'Premium skincare innovation',
    featured: true,
    createdAt: new Date(),
  },
  {
    id: 'brand-2',
    name: 'Radiant Beauty',
    slug: 'radiant-beauty',
    description: 'Professional makeup excellence',
    featured: true,
    createdAt: new Date(),
  },
  {
    id: 'brand-3',
    name: 'Pure Essentials',
    slug: 'pure-essentials',
    description: 'Natural beauty essentials',
    featured: false,
    createdAt: new Date(),
  },
  {
    id: 'brand-4',
    name: 'Silkened Locks',
    slug: 'silkened-locks',
    description: 'Professional hair care',
    featured: true,
    createdAt: new Date(),
  },
  {
    id: 'brand-5',
    name: 'Velvet Scents',
    slug: 'velvet-scents',
    description: 'Luxury fragrances',
    featured: false,
    createdAt: new Date(),
  },
]

// Helper function to create product variants
const createVariant = (
  productId: string,
  name: string,
  sku: string,
  basePrice: number,
  discount: number = 0,
  stock: number = 50,
  attributes: Record<string, string> = {}
): ProductVariant => ({
  id: `var-${Math.random().toString(36).substr(2, 9)}`,
  productId,
  name,
  sku,
  price: basePrice * (1 - discount / 100),
  originalPrice: basePrice,
  stock,
  attributes,
})

// Mock Products (30 products across categories)
export const mockProducts: Product[] = [
  // Skincare Products
  {
    id: 'prod-1',
    name: 'Hydrating Rose Serum',
    slug: 'hydrating-rose-serum',
    description: 'Luxurious hydrating serum infused with rose extract and hyaluronic acid',
    shortDescription: 'Deep hydration with rose extract',
    categoryId: 'cat-1',
    brandId: 'brand-1',
    basePrice: 89.99,
    discountPercentage: 10,
    images: ['/images/products/serum-1.jpg', '/images/products/serum-1-alt.jpg'],
    mainImage: '/images/products/serum-1.jpg',
    rating: 4.8,
    reviewCount: 234,
    benefits: ['Deep hydration', 'Anti-aging', 'Brightening'],
    ingredients: ['Rose Extract', 'Hyaluronic Acid', 'Vitamin E'],
    howToUse: 'Apply 2-3 drops to clean skin',
    safetyInfo: 'Test on small area first',
    skinType: ['dry', 'normal', 'sensitive'],
    stock: 150,
    sku: 'HRS-001',
    featured: true,
    new: true,
    variants: [
      createVariant('prod-1', '30ml', 'HRS-001-30', 89.99, 10, 50),
      createVariant('prod-1', '60ml', 'HRS-001-60', 149.99, 10, 50),
    ],
    createdAt: new Date('2024-06-15'),
    updatedAt: new Date('2024-06-15'),
  },
  {
    id: 'prod-2',
    name: 'Luminous Face Cream',
    slug: 'luminous-face-cream',
    description: 'Rich moisturizing cream with gold particles for a luminous glow',
    shortDescription: 'Glowing moisturizer with gold',
    categoryId: 'cat-1',
    brandId: 'brand-1',
    basePrice: 79.99,
    discountPercentage: 15,
    images: ['/images/products/cream-1.jpg'],
    mainImage: '/images/products/cream-1.jpg',
    rating: 4.6,
    reviewCount: 189,
    benefits: ['Moisturizing', 'Luminizing', 'Anti-wrinkle'],
    skinType: ['all'],
    stock: 200,
    sku: 'LFC-001',
    featured: true,
    new: false,
    variants: [
      createVariant('prod-2', '50ml', 'LFC-001-50', 79.99, 15),
      createVariant('prod-2', '100ml', 'LFC-001-100', 139.99, 15),
    ],
    createdAt: new Date('2024-05-01'),
    updatedAt: new Date('2024-05-01'),
  },
  {
    id: 'prod-3',
    name: 'Gentle Cleansing Milk',
    slug: 'gentle-cleansing-milk',
    description: 'Soft cleansing milk that removes makeup without harsh chemicals',
    shortDescription: 'Gentle makeup removal',
    categoryId: 'cat-1',
    brandId: 'brand-3',
    basePrice: 34.99,
    discountPercentage: 0,
    images: ['/images/products/cleanser-1.jpg'],
    mainImage: '/images/products/cleanser-1.jpg',
    rating: 4.7,
    reviewCount: 412,
    benefits: ['Gentle removal', 'Non-stripping', 'Hydrating'],
    skinType: ['all'],
    stock: 300,
    sku: 'GCM-001',
    featured: false,
    new: false,
    variants: [
      createVariant('prod-3', '200ml', 'GCM-001-200', 34.99, 0),
      createVariant('prod-3', '400ml', 'GCM-001-400', 59.99, 0),
    ],
    createdAt: new Date('2024-04-10'),
    updatedAt: new Date('2024-04-10'),
  },

  // Makeup Products
  {
    id: 'prod-4',
    name: 'Velvet Matte Lipstick',
    slug: 'velvet-matte-lipstick',
    description: 'Luxurious matte lipstick with 12-hour wear and velvet finish',
    shortDescription: 'Long-lasting matte lipstick',
    categoryId: 'cat-2',
    brandId: 'brand-2',
    basePrice: 29.99,
    discountPercentage: 20,
    images: ['/images/products/lipstick-1.jpg'],
    mainImage: '/images/products/lipstick-1.jpg',
    rating: 4.9,
    reviewCount: 567,
    benefits: ['Long-wearing', 'Velvet finish', 'Rich color'],
    stock: 250,
    sku: 'VML-001',
    featured: true,
    new: true,
    variants: [
      createVariant('prod-4', 'Rose Pink', 'VML-001-RP', 29.99, 20),
      createVariant('prod-4', 'Nude Blush', 'VML-001-NB', 29.99, 20),
      createVariant('prod-4', 'Deep Plum', 'VML-001-DP', 29.99, 20),
      createVariant('prod-4', 'Classic Red', 'VML-001-CR', 29.99, 20),
    ],
    createdAt: new Date('2024-06-20'),
    updatedAt: new Date('2024-06-20'),
  },
  {
    id: 'prod-5',
    name: 'Golden Shimmer Eyeshadow Palette',
    slug: 'golden-shimmer-eyeshadow-palette',
    description: 'Professional eyeshadow palette with 12 luxurious shades',
    shortDescription: '12 professional eyeshadow shades',
    categoryId: 'cat-2',
    brandId: 'brand-2',
    basePrice: 59.99,
    discountPercentage: 10,
    images: ['/images/products/palette-1.jpg'],
    mainImage: '/images/products/palette-1.jpg',
    rating: 4.8,
    reviewCount: 345,
    benefits: ['Blendable', 'Long-lasting', 'Pigmented'],
    stock: 180,
    sku: 'GSP-001',
    featured: true,
    new: true,
    variants: [
      createVariant('prod-5', 'Standard', 'GSP-001-STD', 59.99, 10),
    ],
    createdAt: new Date('2024-06-18'),
    updatedAt: new Date('2024-06-18'),
  },

  // Haircare Products
  {
    id: 'prod-6',
    name: 'Silk Repair Shampoo',
    slug: 'silk-repair-shampoo',
    description: 'Nourishing shampoo that repairs damaged hair and adds shine',
    shortDescription: 'Hair repair and shine',
    categoryId: 'cat-3',
    brandId: 'brand-4',
    basePrice: 24.99,
    discountPercentage: 15,
    images: ['/images/products/shampoo-1.jpg'],
    mainImage: '/images/products/shampoo-1.jpg',
    rating: 4.7,
    reviewCount: 523,
    benefits: ['Repairs damage', 'Adds shine', 'Strengthens'],
    stock: 400,
    sku: 'SRS-001',
    featured: false,
    new: false,
    variants: [
      createVariant('prod-6', '250ml', 'SRS-001-250', 24.99, 15),
      createVariant('prod-6', '500ml', 'SRS-001-500', 39.99, 15),
    ],
    createdAt: new Date('2024-03-05'),
    updatedAt: new Date('2024-03-05'),
  },

  // Fragrance Products
  {
    id: 'prod-7',
    name: 'Enchanted Gardens Perfume',
    slug: 'enchanted-gardens-perfume',
    description: 'Elegant fragrance with notes of rose, jasmine, and sandalwood',
    shortDescription: 'Elegant floral fragrance',
    categoryId: 'cat-4',
    brandId: 'brand-5',
    basePrice: 119.99,
    discountPercentage: 0,
    images: ['/images/products/perfume-1.jpg'],
    mainImage: '/images/products/perfume-1.jpg',
    rating: 4.9,
    reviewCount: 278,
    benefits: ['Long-lasting', 'Elegant', 'Natural notes'],
    stock: 120,
    sku: 'EGP-001',
    featured: true,
    new: false,
    variants: [
      createVariant('prod-7', '50ml', 'EGP-001-50', 119.99, 0),
      createVariant('prod-7', '100ml', 'EGP-001-100', 179.99, 0),
    ],
    createdAt: new Date('2024-02-14'),
    updatedAt: new Date('2024-02-14'),
  },

  // Beauty Tools
  {
    id: 'prod-8',
    name: 'Professional Makeup Brush Set',
    slug: 'professional-makeup-brush-set',
    description: '15-piece professional makeup brush set with premium synthetic hair',
    shortDescription: '15-piece brush set',
    categoryId: 'cat-5',
    brandId: 'brand-2',
    basePrice: 49.99,
    discountPercentage: 25,
    images: ['/images/products/brushes-1.jpg'],
    mainImage: '/images/products/brushes-1.jpg',
    rating: 4.8,
    reviewCount: 289,
    benefits: ['Professional quality', 'Soft bristles', 'Easy to clean'],
    stock: 150,
    sku: 'PMB-001',
    featured: false,
    new: true,
    variants: [
      createVariant('prod-8', 'Pink Handle', 'PMB-001-PH', 49.99, 25),
      createVariant('prod-8', 'Black Handle', 'PMB-001-BH', 49.99, 25),
    ],
    createdAt: new Date('2024-06-10'),
    updatedAt: new Date('2024-06-10'),
  },

  // Body Care
  {
    id: 'prod-9',
    name: 'Luxurious Body Lotion',
    slug: 'luxurious-body-lotion',
    description: 'Rich body lotion with shea butter and rose oil for silky smooth skin',
    shortDescription: 'Rich moisturizing lotion',
    categoryId: 'cat-6',
    brandId: 'brand-3',
    basePrice: 39.99,
    discountPercentage: 10,
    images: ['/images/products/lotion-1.jpg'],
    mainImage: '/images/products/lotion-1.jpg',
    rating: 4.6,
    reviewCount: 234,
    benefits: ['Moisturizing', 'Silky feel', 'Long-lasting'],
    stock: 200,
    sku: 'LBL-001',
    featured: false,
    new: false,
    variants: [
      createVariant('prod-9', '200ml', 'LBL-001-200', 39.99, 10),
      createVariant('prod-9', '400ml', 'LBL-001-400', 69.99, 10),
    ],
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20'),
  },

  // Men's Care
  {
    id: 'prod-10',
    name: 'Premium Beard Oil',
    slug: 'premium-beard-oil',
    description: 'Nourishing beard oil with argan oil and cedarwood fragrance',
    shortDescription: 'Beard nourishment oil',
    categoryId: 'cat-7',
    brandId: 'brand-3',
    basePrice: 34.99,
    discountPercentage: 0,
    images: ['/images/products/beard-oil.jpg'],
    mainImage: '/images/products/beard-oil.jpg',
    rating: 4.7,
    reviewCount: 156,
    benefits: ['Nourishing', 'Softens beard', 'Masculine scent'],
    stock: 100,
    sku: 'PBO-001',
    featured: false,
    new: false,
    variants: [
      createVariant('prod-10', '30ml', 'PBO-001-30', 34.99, 0),
    ],
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10'),
  },

  // Add more products (11-30) - simplified for space
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `prod-${11 + i}`,
    name: `Premium Product ${11 + i}`,
    slug: `premium-product-${11 + i}`,
    description: `High-quality beauty product with premium ingredients for optimal results`,
    shortDescription: `Premium beauty product`,
    categoryId: mockCategories[i % mockCategories.length].id,
    brandId: mockBrands[i % mockBrands.length].id,
    basePrice: 39.99 + i * 5,
    discountPercentage: i % 3 === 0 ? 15 : 0,
    images: ['/images/products/placeholder.jpg'],
    mainImage: '/images/products/placeholder.jpg',
    rating: 4.5 + (i % 5) * 0.1,
    reviewCount: 100 + i * 20,
    benefits: ['Premium', 'Effective', 'Luxury'],
    stock: 50 + i * 5,
    sku: `PROD-${String(11 + i).padStart(3, '0')}`,
    featured: i % 4 === 0,
    new: i % 5 === 0,
    variants: [
      createVariant(`prod-${11 + i}`, 'Standard', `PROD-${String(11 + i).padStart(3, '0')}`, 39.99 + i * 5, i % 3 === 0 ? 15 : 0),
    ],
    createdAt: new Date(2024, i % 6, (i % 28) + 1),
    updatedAt: new Date(2024, i % 6, (i % 28) + 1),
  })),
]

// Mock Coupons
export const mockCoupons: Coupon[] = [
  {
    id: 'coup-1',
    code: 'SUMMER20',
    description: 'Summer sale - 20% off',
    discountType: 'percentage',
    discountValue: 20,
    minOrderValue: 50,
    startDate: new Date('2024-06-01'),
    endDate: new Date('2024-08-31'),
    maxUsage: 1000,
    currentUsage: 234,
    active: true,
    createdAt: new Date(),
  },
  {
    id: 'coup-2',
    code: 'WELCOME10',
    description: 'Welcome coupon for new customers',
    discountType: 'percentage',
    discountValue: 10,
    minOrderValue: 25,
    startDate: new Date('2024-01-01'),
    endDate: new Date('2024-12-31'),
    maxUsage: 5000,
    currentUsage: 1200,
    active: true,
    createdAt: new Date(),
  },
  {
    id: 'coup-3',
    code: 'FREESHIP',
    description: 'Free shipping on orders over $100',
    discountType: 'fixed',
    discountValue: 10,
    minOrderValue: 100,
    startDate: new Date('2024-05-01'),
    endDate: new Date('2024-12-31'),
    maxUsage: 500,
    currentUsage: 45,
    active: true,
    createdAt: new Date(),
  },
]

// Export factory functions for creating mock data
export function getProductsByCategory(categoryId: string) {
  return mockProducts.filter((p) => p.categoryId === categoryId)
}

export function getFeaturedProducts() {
  return mockProducts.filter((p) => p.featured).slice(0, 8)
}

export function getNewProducts() {
  return mockProducts.filter((p) => p.new).slice(0, 8)
}

export function getProductBySlug(slug: string) {
  return mockProducts.find((p) => p.slug === slug)
}

export function getCategoryBySlug(slug: string) {
  return mockCategories.find((c) => c.slug === slug)
}

export function searchProducts(query: string) {
  const q = query.toLowerCase()
  return mockProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.shortDescription?.toLowerCase().includes(q)
  )
}
