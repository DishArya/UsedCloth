import { Product, User } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@example.com',
    password: 'admin123',
    name: 'Admin User',
    role: 'admin'
  },
  {
    id: '2',
    email: 'user@example.com',
    password: 'user123',
    name: 'John Doe',
    role: 'user',
    phone: '+1-234-567-8900',
    address: '123 Main St, City, State 12345'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    title: 'Vintage Denim Jacket',
    description: 'Classic blue denim jacket in excellent condition. Perfect for casual outings.',
    price: 45,
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
    category: 'Outerwear',
    size: 'M',
    condition: 'Good',
    brand: "Levi's",
    sellerId: '2',
    status: 'available',
    createdAt: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    title: 'Designer Silk Blouse',
    description: 'Elegant silk blouse with floral pattern. Great for office or special occasions.',
    price: 65,
    image: 'https://images.pexels.com/photos/4473864/pexels-photo-4473864.jpeg',
    category: 'Tops',
    size: 'S',
    condition: 'Excellent',
    brand: 'Zara',
    sellerId: '2',
    status: 'available',
    createdAt: '2024-01-14T15:20:00Z'
  },
  {
    id: '3',
    title: 'Leather Ankle Boots',
    description: 'Stylish black leather boots with low heel. Comfortable for everyday wear.',
    price: 80,
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg',
    category: 'Shoes',
    size: '8',
    condition: 'Very Good',
    brand: 'Steve Madden',
    sellerId: '2',
    status: 'available',
    createdAt: '2024-01-13T09:45:00Z'
  },
  {
    id: '4',
    title: 'Casual Cotton Dress',
    description: 'Comfortable summer dress in mint green. Perfect for warm weather.',
    price: 35,
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg',
    category: 'Dresses',
    size: 'L',
    condition: 'Good',
    brand: 'H&M',
    sellerId: '2',
    status: 'available',
    createdAt: '2024-01-12T14:10:00Z'
  },
  {
    id: '5',
    title: 'Classic Wool Sweater',
    description: 'Cozy wool sweater in burgundy. Perfect for fall and winter.',
    price: 55,
    image: 'https://images.pexels.com/photos/2735037/pexels-photo-2735037.jpeg',
    category: 'Sweaters',
    size: 'M',
    condition: 'Excellent',
    brand: 'Gap',
    sellerId: '2',
    status: 'available',
    createdAt: '2024-01-11T11:30:00Z'
  },
  {
    id: '6',
    title: 'Running Sneakers',
    description: 'Comfortable athletic shoes for running and gym workouts.',
    price: 70,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
    category: 'Shoes',
    size: '9',
    condition: 'Good',
    brand: 'Nike',
    sellerId: '2',
    status: 'available',
    createdAt: '2024-01-10T16:50:00Z'
  }
];