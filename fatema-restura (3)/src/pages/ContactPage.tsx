import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function ContactPage() {
  const { addToCart, toastMessage } = useAppContext(); // Using addToCart just for toast trick or better yet use a dedicated toast
  
  // We can just use standard state for form submission UI
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // We can also trigger the app's global toast by adding a dummy item, 
      // but a local success message is cleaner here.
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-3 md:px-6 py-6 md:py-12 lg:py-20 animate-in fade-in duration-500">
      <div className="text-center mb-6 md:mb-16">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gold mb-2 md:mb-4">যোগাযোগ করুন</h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-lg px-2 md:px-4">
          আমাদের সাথে যোগাযোগ করতে নিচের ফর্মটি পূরণ করুন অথবা সরাসরি ফোন করুন। আমরা আপনার সেবায় সর্বদা প্রস্তুত।
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="lg:w-1/3 flex flex-col gap-4 md:gap-6 lg:gap-8">
          <div className="bg-white/5 border border-gold/20 p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl flex flex-col items-center text-center">
            <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full border border-gold flex items-center justify-center text-gold mb-3 md:mb-4 lg:mb-6 shrink-0">
              <MapPin size={20} className="md:w-6 md:h-6 lg:w-8 lg:h-8" strokeWidth={1.5} />
            </div>
            <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gold mb-1 md:mb-2">ঠিকানা</h3>
            <p className="text-gray-300 text-xs md:text-sm lg:text-base">
              বাড়ি নং ১২, রোড নং ৫<br />
              ধানমন্ডি, ঢাকা ১২০৫<br />
              বাংলাদেশ
            </p>
          </div>
          
          <div className="bg-white/5 border border-gold/20 p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl flex flex-col items-center text-center">
            <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full border border-gold flex items-center justify-center text-gold mb-3 md:mb-4 lg:mb-6 shrink-0">
              <Phone size={20} className="md:w-6 md:h-6 lg:w-8 lg:h-8" strokeWidth={1.5} />
            </div>
            <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gold mb-1 md:mb-2">ফোন ও ইমেইল</h3>
            <p className="text-gray-300 mb-1 md:mb-2 text-xs md:text-sm lg:text-base">
              +৮৮০ ১৯১১ ২৩৪ ৫৬৭<br />
              +৮৮০ ১৮১১ ২৩৪ ৫৬৭
            </p>
            <p className="text-gold/80 hover:text-gold transition-colors cursor-pointer text-sm md:text-base">
              info@fatemarestura.com
            </p>
          </div>

          <div className="bg-white/5 border border-gold/20 p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl flex flex-col items-center text-center">
            <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full border border-gold flex items-center justify-center text-gold mb-3 md:mb-4 lg:mb-6 shrink-0">
              <Clock size={20} className="md:w-6 md:h-6 lg:w-8 lg:h-8" strokeWidth={1.5} />
            </div>
            <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gold mb-1 md:mb-2">খোলার সময়</h3>
            <p className="text-gray-300 text-xs md:text-sm lg:text-base">
              প্রতিদিন<br />
              সকাল ১০:০০ - রাত ১১:০০
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-2/3">
          <div className="bg-black/40 border border-gold/30 p-4 md:p-6 lg:p-12 rounded-xl md:rounded-2xl h-full">
            <h2 className="text-xl md:text-3xl font-semibold text-gold mb-4 md:mb-8 text-center md:text-left">আমাদের মেসেজ পাঠান</h2>
            
            {showSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8 md:py-20 animate-in zoom-in-95 duration-300">
                <div className="w-12 h-12 md:w-20 md:h-20 bg-green-500/20 border border-green-500 text-green-500 rounded-full flex items-center justify-center mb-4 md:mb-6">
                  <Send size={24} className="md:w-10 md:h-10" />
                </div>
                <h3 className="text-lg md:text-2xl font-semibold text-white mb-2 md:mb-3">মেসেজ পাঠানো হয়েছে!</h3>
                <p className="text-gray-400 text-xs md:text-base">আপনার বার্তার জন্য ধন্যবাদ। আমরা খুব শীঘ্রই আপনার সাথে যোগাযোগ করবো।</p>
                <button 
                  onClick={() => setShowSuccess(false)}
                  className="mt-6 md:mt-8 text-gold border border-gold/50 px-4 md:px-6 py-2 rounded-full hover:bg-gold hover:text-bg transition-colors text-xs md:text-base"
                >
                  নতুন মেসেজ পাঠান
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-1.5 md:space-y-2">
                    <label htmlFor="name" className="text-gray-300 text-xs md:text-sm font-medium">আপনার নাম</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full bg-transparent border border-gold/30 rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 text-xs md:text-base text-white focus:outline-none focus:border-gold transition-colors placeholder:text-gray-600"
                      placeholder="আপনার নাম লিখুন"
                    />
                  </div>
                  <div className="space-y-1.5 md:space-y-2">
                    <label htmlFor="phone" className="text-gray-300 text-xs md:text-sm font-medium">ফোন নম্বর</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      className="w-full bg-transparent border border-gold/30 rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 text-xs md:text-base text-white focus:outline-none focus:border-gold transition-colors placeholder:text-gray-600"
                      placeholder="আপনার ফোন নম্বর"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 md:space-y-2">
                  <label htmlFor="email" className="text-gray-300 text-xs md:text-sm font-medium">ইমেইল ঠিকানা (ঐচ্ছিক)</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-transparent border border-gold/30 rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 text-xs md:text-base text-white focus:outline-none focus:border-gold transition-colors placeholder:text-gray-600"
                    placeholder="আপনার ইমেইল (যদি থাকে)"
                  />
                </div>

                <div className="space-y-1.5 md:space-y-2">
                  <label htmlFor="message" className="text-gray-300 text-xs md:text-sm font-medium">আপনার বার্তা</label>
                  <textarea 
                    id="message" 
                    required
                    rows={4}
                    className="w-full bg-transparent border border-gold/30 rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 text-xs md:text-base text-white focus:outline-none focus:border-gold transition-colors resize-none placeholder:text-gray-600"
                    placeholder="আপনি কী জানতে চান বা জানাতে চান তা এখানে লিখুন..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-gold/90 text-bg font-semibold py-2.5 md:py-4 rounded-lg md:rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 text-xs md:text-base active:scale-95"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">পাঠানো হচ্ছে...</span>
                  ) : (
                    <>
                      <span>মেসেজ পাঠান</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
