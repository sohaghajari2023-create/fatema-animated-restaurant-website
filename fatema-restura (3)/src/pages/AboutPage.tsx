import React from 'react';
import { MapPin, ExternalLink, Leaf, ChefHat, Users, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-3 md:px-6 py-6 md:py-12 animate-in fade-in duration-500">
      <div className="text-center mb-6 md:mb-16">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gold mb-2 md:mb-4">আমাদের সম্পর্কে</h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-lg">
          ঐতিহ্যবাহী স্বাদ আর আতিথেয়তায় আপনাদের সেবায় আমরা সর্বদা প্রস্তুত।
        </p>
      </div>

      {/* Story section */}
      <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-16 mb-12 md:mb-24">
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h2 className="text-xl md:text-4xl font-semibold text-gold mb-3 md:mb-6 leading-tight">
            প্রতিটি মুহূর্তকে করি<br className="hidden md:block" />স্বরণীয় ও স্বাদে ভরপুর
          </h2>
          <p className="text-gray-300 text-sm md:text-lg mb-3 md:mb-6 leading-relaxed">
            আমরা বিশ্বাস করি ভালো খাবার শুধু পেট ভরে না, এটা মনও ভরে। তাই প্রতিটি রেসিপিতে থাকে ভালোবাসা, যত্ন এবং আপনজনের ছোঁয়া। আমাদের লক্ষ্য হলো আপনাকে শুধু খাবার নয়, একটি সুন্দর অভিজ্ঞতা উপহার দেওয়া।
          </p>
          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            দীর্ঘদিনের অভিজ্ঞতা এবং তাজা উপকরণের সমন্বয়ে আমাদের শেফরা প্রতিদিন তৈরি করেন অসাধারণ সব পদ। পরিবারের সাথে সময় কাটানো হোক বা বন্ধুদের সাথে আড্ডা, ফাতেমা রেস্তোরাঁ আপনার জন্য পারফেক্ট গন্তব্য।
          </p>
        </div>
        <div className="lg:w-1/2 w-full">
          <img 
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800" 
            alt="Restaurant Interior" 
            className="w-full h-auto object-cover rounded-2xl border border-gold/20 shadow-2xl shadow-gold/10"
          />
        </div>
      </div>

      {/* Features */}
      <div className="border border-gold/30 rounded-xl md:rounded-2xl p-3 md:p-8 lg:p-12 mb-12 md:mb-24 bg-card/40">
        <div className="grid grid-cols-4 gap-1 md:gap-4 divide-x divide-gold/20">
          <div className="flex flex-col items-center text-center px-1 md:px-4">
            <div className="text-gold mb-1.5 md:mb-4"><Leaf size={16} className="md:w-10 md:h-10" strokeWidth={1.5} /></div>
            <h3 className="text-[9px] md:text-xl font-semibold text-gold mb-0.5 md:mb-3 leading-tight break-words">তাজা ও মানসম্মত উপকরণ</h3>
            <p className="text-gray-400 text-xs md:text-sm hidden md:block">প্রতিদিন তাজা উপকরণ দিয়ে রান্না করা হয়।</p>
          </div>
          <div className="flex flex-col items-center text-center px-1 md:px-4">
            <div className="text-gold mb-1.5 md:mb-4"><ChefHat size={16} className="md:w-10 md:h-10" strokeWidth={1.5} /></div>
            <h3 className="text-[9px] md:text-xl font-semibold text-gold mb-0.5 md:mb-3 leading-tight break-words">অভিজ্ঞ শেফ</h3>
            <p className="text-gray-400 text-xs md:text-sm hidden md:block">অভিজ্ঞ শেফদের হাতে তৈরি অসাধারণ সব পদ।</p>
          </div>
          <div className="flex flex-col items-center text-center px-1 md:px-4">
            <div className="text-gold mb-1.5 md:mb-4"><Users size={16} className="md:w-10 md:h-10" strokeWidth={1.5} /></div>
            <h3 className="text-[9px] md:text-xl font-semibold text-gold mb-0.5 md:mb-3 leading-tight break-words">পারিবারিক পরিবেশ</h3>
            <p className="text-gray-400 text-xs md:text-sm hidden md:block">পরিবার ও বন্ধু সাথে সময় কাটানোর জন্য পারফেক্ট জায়গা।</p>
          </div>
          <div className="flex flex-col items-center text-center px-1 md:px-4">
            <div className="text-gold mb-1.5 md:mb-4"><ShieldCheck size={16} className="md:w-10 md:h-10" strokeWidth={1.5} /></div>
            <h3 className="text-[9px] md:text-xl font-semibold text-gold mb-0.5 md:mb-3 leading-tight break-words">পরিষ্কার ও নিরাপদ</h3>
            <p className="text-gray-400 text-xs md:text-sm hidden md:block">স্বাস্থ্যবিধি মেনে পরিচ্ছন্ন রান্না ও পরিবেশন।</p>
          </div>
        </div>
      </div>

      {/* Location Map Section */}
      <div className="text-center mb-6 md:mb-12">
        <h2 className="text-xl md:text-4xl font-semibold text-gold mb-2 md:mb-4">আমাদের অবস্থান</h2>
        <p className="text-gray-300 mb-6 md:mb-10 max-w-xl mx-auto text-sm md:text-base px-4">
          খুব সহজেই আমাদের রেস্তোরাঁয় পৌঁছে যান। নিচে গুগল ম্যাপে আমাদের লোকেশন দেওয়া হলো।
        </p>
        
        <div className="bg-card border border-gold/20 rounded-xl md:rounded-2xl p-1 md:p-4 overflow-hidden mb-6 md:mb-10 max-w-5xl mx-auto shadow-2xl shadow-gold/5">
          <iframe 
            src="https://maps.google.com/maps?q=Dhanmondi,+Dhaka&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            className="h-[250px] md:h-[450px]"
            style={{ border: 0, borderRadius: '0.75rem' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>

        <a 
          href="https://maps.app.goo.gl/RLaNXDxCJM2pP4Qu5" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/80 text-white px-5 md:px-8 py-2.5 md:py-3 rounded-full transition-colors font-medium active:scale-95 text-sm md:text-lg w-full sm:w-auto"
        >
          <MapPin size={18} className="md:w-[22px] md:h-[22px] shrink-0" />
          <span>গুগল ম্যাপে খুলুন</span>
          <ExternalLink size={16} className="md:w-[18px] md:h-[18px] ml-1 shrink-0" />
        </a>
      </div>
    </div>
  );
}
