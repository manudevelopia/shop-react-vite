import { Product, Category } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    category: 'audio',
    description: 'Experience immersive sound with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort for all-day listening.',
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Premium comfort ear cups',
      'High-resolution audio',
      'Quick charge - 5 hours of playback from 10 minutes of charging'
    ],
    images: [
      'https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1591/technology-music-sound-things.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.8,
    reviews: 246,
    stock: 15
  },
  {
    id: '2',
    name: 'Ultra-slim Laptop Pro',
    price: 1299.99,
    category: 'computers',
    description: 'The Ultra-slim Laptop Pro combines power and portability in an elegant design. With a stunning 4K display, all-day battery life, and the latest processor.',
    features: [
      '14-inch 4K display',
      'Latest generation processor',
      '16GB RAM, 512GB SSD',
      'All-day battery life',
      'Backlit keyboard'
    ],
    images: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.9,
    reviews: 189,
    stock: 8
  },
  {
    id: '3',
    name: 'Smart Watch Series 5',
    price: 399.99,
    category: 'wearables',
    description: 'Stay connected and track your fitness with our Smart Watch Series 5. Featuring health monitoring, notifications, and a beautiful always-on display.',
    features: [
      'Always-on Retina display',
      'Heart rate and ECG monitoring',
      'Water resistant to 50 meters',
      '18-hour battery life',
      'GPS and cellular connectivity'
    ],
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.7,
    reviews: 352,
    stock: 22
  },
  {
    id: '4',
    name: 'Professional Camera Kit',
    price: 1899.99,
    category: 'photography',
    description: 'Capture stunning photos and videos with our Professional Camera Kit. Includes a high-resolution sensor, 4K video capability, and premium lenses.',
    features: [
      '45MP full-frame sensor',
      '4K 60fps video recording',
      'In-body image stabilization',
      'Weather-sealed construction',
      'Includes 24-70mm f/2.8 lens'
    ],
    images: [
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1787235/pexels-photo-1787235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.9,
    reviews: 87,
    stock: 5
  },
  {
    id: '5',
    name: 'Wireless Charging Pad',
    price: 59.99,
    category: 'accessories',
    description: 'Convenient wireless charging for your compatible devices. Features fast charging technology and a sleek, minimalist design that complements any space.',
    features: [
      'Fast wireless charging up to 15W',
      'Multi-device compatibility',
      'LED charging indicator',
      'Non-slip surface',
      'Slim, minimalist design'
    ],
    images: [
      'https://images.pexels.com/photos/6021105/pexels-photo-6021105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4526126/pexels-photo-4526126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.5,
    reviews: 134,
    stock: 30
  },
  {
    id: '6',
    name: 'Smart Home Speaker',
    price: 199.99,
    category: 'audio',
    description: 'Transform your home with our Smart Home Speaker. Featuring premium sound quality, voice assistant integration, and multi-room audio capability.',
    features: [
      'Premium 360° sound',
      'Voice assistant compatible',
      'Multi-room audio sync',
      'Adaptive audio technology',
      'Elegant fabric design'
    ],
    images: [
      'https://images.pexels.com/photos/6686455/pexels-photo-6686455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6494000/pexels-photo-6494000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.6,
    reviews: 198,
    stock: 18
  }
];

export const categories: Category[] = [
  {
    id: 'audio',
    name: 'Audio',
    image: 'https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'computers',
    name: 'Computers',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'wearables',
    name: 'Wearables',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'photography',
    name: 'Photography',
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    image: 'https://images.pexels.com/photos/6021105/pexels-photo-6021105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];