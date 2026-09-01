import React from 'react';
import { X, ShoppingBag } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function CartDrawer() {
  const { isCartOpen, closeCart, cartCount } = useAppContext();

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
        onClick={closeCart}
      />
      
      <div className="fixed top-0 right-0 h-full w-full max-w-md md:w-96 bg-bg border-l border-gold/20 shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-gold/20">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-gold" size={24} />
            <h2 className="text-lg md:text-xl font-semibold text-gold">আপনার কার্ট</h2>
          </div>
          <button 
            onClick={closeCart}
            className="text-gray-400 hover:text-white transition-colors p-1"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 p-4 md:p-6 flex flex-col items-center justify-center text-center overflow-y-auto">
          {cartCount === 0 ? (
            <div className="flex flex-col items-center text-gray-500">
              <ShoppingBag size={48} className="md:w-16 md:h-16 mb-4 text-gold/30" />
              <p className="text-base md:text-lg">আপনার কার্ট খালি আছে</p>
              <button 
                onClick={closeCart}
                className="mt-6 px-6 py-2 border border-gold/50 text-gold hover:bg-gold hover:text-bg transition-colors rounded-full text-sm md:text-base"
              >
                মেনু দেখুন
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-start h-full w-full">
              <p className="text-gray-300 mb-6 w-full text-left text-sm md:text-base">কার্টে মোট {cartCount} টি আইটেম রয়েছে।</p>
              
              <div className="bg-white/5 border border-gold/20 rounded-xl p-3 md:p-4 w-full flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-black/50 rounded-lg overflow-hidden flex items-center justify-center shrink-0">
                    <ShoppingBag size={20} className="md:w-6 md:h-6 text-gold/50" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-medium text-sm md:text-base">নির্বাচিত খাবার</h3>
                    <p className="text-xs md:text-sm text-gray-400">পরিমাণ: {cartCount}</p>
                  </div>
                </div>
              </div>
              
            </div>
          )}
        </div>
        
        {cartCount > 0 && (
          <div className="p-4 md:p-6 border-t border-gold/20 bg-black/20">
            <button className="w-full bg-gold hover:bg-gold/90 text-bg font-semibold py-3 md:py-4 rounded-xl transition-colors active:scale-95 text-sm md:text-base">
              অর্ডার সম্পন্ন করুন
            </button>
          </div>
        )}
      </div>
    </>
  );
}
