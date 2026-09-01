/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import BookingModal from './components/BookingModal';
import CartDrawer from './components/CartDrawer';
import Toast from './components/Toast';
import { AppProvider } from './context/AppContext';
import VideoScrollBackground from './components/VideoScrollBackground';

export default function App() {
  return (
    <AppProvider>
      <Router>
        <VideoScrollBackground />
        <div className="min-h-screen bg-black/40 text-white font-bengali overflow-x-hidden flex flex-col relative">
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          
          {/* Footer */}
          <footer className="border-t border-gold/20 pt-8 pb-6 md:pt-12 md:pb-8 text-center text-gray-400 text-xs md:text-sm mt-auto px-4 bg-black/20">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
              <div className="flex flex-col items-center md:items-start gap-2">
                <h3 className="text-gold font-semibold text-lg" style={{ fontFamily: 'serif' }}>Fatema Restura</h3>
                <Link to="/about" className="text-gray-300 hover:text-gold transition-colors text-sm">
                  আমাদের সম্পর্কে জানুন (About Us)
                </Link>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 md:gap-8 text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full border border-gold/50 flex items-center justify-center text-gold shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <span className="text-sm">ধানমন্ডি, ঢাকা, বাংলাদেশ</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full border border-gold/50 flex items-center justify-center text-gold shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <span className="text-sm">০১৯১১২ ৩৪৫ ৬৭৮</span>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-gold/10">
              <p>&copy; {new Date().getFullYear()} Fatema Restura. All rights reserved.</p>
            </div>
          </footer>

          <BookingModal />
          <CartDrawer />
          <Toast />
        </div>
      </Router>
    </AppProvider>
  );
}
