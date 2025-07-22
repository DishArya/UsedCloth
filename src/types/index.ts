export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: 'user' | 'admin';
  phone?: string;
  address?: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  size: string;
  condition: string;
  brand: string;
  sellerId: string;
  status: 'available' | 'sold' | 'pending';
  createdAt: string;
}

export interface Order {
  id: string;
  productId: string;
  buyerId: string;
  sellerId: string;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  buyerInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
}