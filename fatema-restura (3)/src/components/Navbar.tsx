import React, { useState } from 'react';
import { ConciergeBell, ShoppingBag, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function Navbar() {
  const location = useLocation();
  const { cartCount, openBookingModal, openCart } = useAppContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;
  
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="container mx-auto px-3 md:px-6 py-2.5 md:py-8 relative">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 md:gap-3 cursor-pointer shrink-0" onClick={closeMenu}>
          <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-gold flex items-center justify-center text-gold font-bold text-base md:text-xl shrink-0">
            FR
          </div>
          <div>
            <h1 className="text-lg md:text-3xl text-gold font-bold leading-none" style={{ fontFamily: 'serif' }}>Fatema Restura</h1>
            <p className="text-gray-300 text-[10px] md:text-sm tracking-wide mt-1 hidden sm:block">স্বাদে আতিথ্যে আপনজন</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-gray-300">
          <Link to="/" className={isActive('/') ? "text-gold border-b border-gold pb-1" : "hover:text-gold transition-colors"}>হোম</Link>
          <Link to="/about" className={isActive('/about') ? "text-gold border-b border-gold pb-1" : "hover:text-gold transition-colors"}>আমাদের সম্পর্কে</Link>
          <Link to="/menu" className={isActive('/menu') ? "text-gold border-b border-gold pb-1" : "hover:text-gold transition-colors"}>মেনু</Link>
          <Link to="/gallery" className={isActive('/gallery') ? "text-gold border-b border-gold pb-1" : "hover:text-gold transition-colors"}>গ্যালারী</Link>
          <Link to="/contact" className={isActive('/contact') ? "text-gold border-b border-gold pb-1" : "hover:text-gold transition-colors"}>যোগাযোগ</Link>
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          <div 
            onClick={openCart}
            className="relative cursor-pointer text-gold hover:text-white transition-colors"
          >
            <ShoppingBag size={20} className="md:w-6 md:h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[9px] md:text-xs rounded-full w-3.5 h-3.5 md:w-5 md:h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <button 
            onClick={openBookingModal}
            className="hidden md:flex items-center gap-2 bg-gold/90 hover:bg-gold text-white px-6 py-2.5 rounded-md transition-colors font-medium active:scale-95"
          >
            <ConciergeBell size={18} />
            <span>টেবিল বুক করুন</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-gold hover:text-white transition-colors p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={`absolute top-full left-0 w-full bg-bg/95 backdrop-blur-md border-b border-gold/20 shadow-xl transition-all duration-300 ease-in-out z-50 lg:hidden overflow-hidden ${
          isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-4 py-6 gap-4">
          <Link to="/" onClick={closeMenu} className={isActive('/') ? "text-gold font-medium" : "text-gray-300 hover:text-gold transition-colors"}>হোম</Link>
          <Link to="/about" onClick={closeMenu} className={isActive('/about') ? "text-gold font-medium" : "text-gray-300 hover:text-gold transition-colors"}>আমাদের সম্পর্কে</Link>
          <Link to="/menu" onClick={closeMenu} className={isActive('/menu') ? "text-gold font-medium" : "text-gray-300 hover:text-gold transition-colors"}>মেনু</Link>
          <Link to="/gallery" onClick={closeMenu} className={isActive('/gallery') ? "text-gold font-medium" : "text-gray-300 hover:text-gold transition-colors"}>গ্যালারী</Link>
          <Link to="/contact" onClick={closeMenu} className={isActive('/contact') ? "text-gold font-medium" : "text-gray-300 hover:text-gold transition-colors"}>যোগাযোগ</Link>
          <button 
            onClick={() => { closeMenu(); openBookingModal(); }}
            className="flex items-center justify-center gap-2 bg-gold/90 hover:bg-gold text-white px-6 py-3 rounded-md transition-colors font-medium w-full mt-2"
          >
            <ConciergeBell size={18} />
            <span>টেবিল বুক করুন</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
