import React from 'react';
import { X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function BookingModal() {
  const { isBookingModalOpen, closeBookingModal } = useAppContext();

  if (!isBookingModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6">
      <div className="bg-card border border-gold/30 rounded-2xl w-full max-w-md p-6 relative max-h-[90vh] overflow-y-auto">
        <button 
          onClick={closeBookingModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-gold transition-colors"
        >
          <X size={24} />
        </button>
        <h2 className="text-xl md:text-2xl font-semibold text-gold mb-4 md:mb-6 pr-8">টেবিল বুকিং</h2>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('আপনার বুকিং সফলভাবে গ্রহণ করা হয়েছে!'); closeBookingModal(); }}>
          <div>
            <label className="block text-sm text-gray-300 mb-1.5">নাম</label>
            <input required type="text" className="w-full bg-bg border border-gold/20 rounded-md px-4 py-2 text-sm md:text-base text-white focus:outline-none focus:border-gold" />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1.5">ফোন নম্বর</label>
            <input required type="tel" className="w-full bg-bg border border-gold/20 rounded-md px-4 py-2 text-sm md:text-base text-white focus:outline-none focus:border-gold" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1.5">তারিখ</label>
              <input required type="date" className="w-full bg-bg border border-gold/20 rounded-md px-4 py-2 text-sm md:text-base text-white focus:outline-none focus:border-gold" />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1.5">সময়</label>
              <input required type="time" className="w-full bg-bg border border-gold/20 rounded-md px-4 py-2 text-sm md:text-base text-white focus:outline-none focus:border-gold" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1.5">গেস্ট সংখ্যা</label>
            <input required type="number" min="1" max="20" className="w-full bg-bg border border-gold/20 rounded-md px-4 py-2 text-sm md:text-base text-white focus:outline-none focus:border-gold" />
          </div>
          <button type="submit" className="w-full bg-gold hover:bg-gold/80 text-white py-3 rounded-md transition-colors font-medium mt-2 active:scale-95 text-sm md:text-base">
            বুকিং কনফার্ম করুন
          </button>
        </form>
      </div>
    </div>
  );
}
