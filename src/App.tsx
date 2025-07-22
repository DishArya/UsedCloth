import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import BuySection from './components/BuySection';
import SellSection from './components/SellSection';
import AdminPanel from './components/AdminPanel';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import { Product, User, Order } from './types';
import { mockProducts, mockUsers } from './data/mockData';

export type Section = 'home' | 'buy' | 'sell' | 'admin';

function App() {
  const [currentSection, setCurrentSection] = useState<Section>('home');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [orders, setOrders] = useState<Order[]>([]);

  // Check for saved login state
  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (email: string, password: string) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      setShowLoginModal(false);
      return true;
    }
    return false;
  };

  const handleRegister = (userData: Omit<User, 'id'>) => {
    const newUser: User = {
      ...userData,
      id: Date.now().toString()
    };
    setUsers([...users, newUser]);
    setCurrentUser(newUser);
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    setShowRegisterModal(false);
    return true;
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    setCurrentSection('home');
  };

  const handleAddProduct = (productData: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...productData,
      id: Date.now().toString()
    };
    setProducts([...products, newProduct]);
  };

  const handleUpdateProduct = (productId: string, updates: Partial<Product>) => {
    setProducts(products.map(p => 
      p.id === productId ? { ...p, ...updates } : p
    ));
  };

  const handleDeleteProduct = (productId: string) => {
    setProducts(products.filter(p => p.id !== productId));
  };

  const handlePlaceOrder = (productId: string, buyerInfo: any) => {
    const product = products.find(p => p.id === productId);
    if (product && currentUser) {
      const newOrder: Order = {
        id: Date.now().toString(),
        productId,
        buyerId: currentUser.id,
        sellerId: product.sellerId,
        status: 'pending',
        createdAt: new Date().toISOString(),
        buyerInfo
      };
      setOrders([...orders, newOrder]);
      
      // Update product status
      handleUpdateProduct(productId, { status: 'sold' });
      return true;
    }
    return false;
  };

  const requireAuth = (targetSection: Section) => {
    if (targetSection === 'admin' && (!currentUser || currentUser.role !== 'admin')) {
      setShowLoginModal(true);
      return;
    }
    if ((targetSection === 'buy' || targetSection === 'sell') && !currentUser) {
      setShowLoginModal(true);
      return;
    }
    setCurrentSection(targetSection);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        currentSection={currentSection}
        onSectionChange={requireAuth}
        currentUser={currentUser}
        onLogin={() => setShowLoginModal(true)}
        onLogout={handleLogout}
      />
      
      <main className="pt-16">
        {currentSection === 'home' && (
          <HomePage 
            products={products.filter(p => p.status === 'available')}
            onViewProduct={(id) => {
              setCurrentSection('buy');
            }}
          />
        )}
        
        {currentSection === 'buy' && currentUser && (
          <BuySection
            products={products.filter(p => p.status === 'available')}
            onPlaceOrder={handlePlaceOrder}
          />
        )}
        
        {currentSection === 'sell' && currentUser && (
          <SellSection
            onAddProduct={handleAddProduct}
            currentUser={currentUser}
          />
        )}
        
        {currentSection === 'admin' && currentUser?.role === 'admin' && (
          <AdminPanel
            products={products}
            users={users}
            orders={orders}
            onUpdateProduct={handleUpdateProduct}
            onDeleteProduct={handleDeleteProduct}
          />
        )}
      </main>

      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          onLogin={handleLogin}
          onSwitchToRegister={() => {
            setShowLoginModal(false);
            setShowRegisterModal(true);
          }}
        />
      )}

      {showRegisterModal && (
        <RegisterModal
          onClose={() => setShowRegisterModal(false)}
          onRegister={handleRegister}
          onSwitchToLogin={() => {
            setShowRegisterModal(false);
            setShowLoginModal(true);
          }}
        />
      )}
    </div>
  );
}

export default App;