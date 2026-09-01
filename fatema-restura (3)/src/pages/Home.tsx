import React, { useState } from 'react';
import { MapPin, Phone, ArrowRight, ChevronRight, Leaf, ChefHat, Users, ShieldCheck, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import smallDishImg from '../assets/images/regenerated_image_1788181598891.png';
import mainDishImg from '../assets/images/regenerated_image_1788181751582.png';

export default function Home() {
  const { addToCart } = useAppContext();
  const [aboutImageIndex, setAboutImageIndex] = useState(0);
  
  const aboutImages = [
    mainDishImg,
    "https://images.unsplash.com/photo-1544025162-83569d6bc444?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600"
  ];

  const nextAboutImage = () => {
    setAboutImageIndex((prev) => (prev + 1) % aboutImages.length);
  };

  const popularMenu = [
    { title: "মোরগ পোলাও", price: "৳৩৮০", image: "https://images.unsplash.com/photo-1589302168068-964664d93cb0?auto=format&fit=crop&q=80&w=400", desc: "সুগন্ধি বাসমতি চাল ও রনন মাংসের অসাধারণ ফিউশন।" },
    { title: "ফ্রাইড চিকেন", price: "৳২৮০", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=400", desc: "ক্রিস্পি ও জুসি ফ্রাইড চিকেন, সবার প্রিয়।" },
    { title: "বিফ স্টেক", price: "৳৬৫০", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=400", desc: "জুসি ও সফট বিফ স্টেক, স্পেশাল সস এবং ভেজিটেবল সহ।" },
    { title: "পাস্তা অ্যারাবিয়াতা", price: "৳৩৫০", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=400", desc: "চিলি টমেটো সসের সাথে টেস্টি ইতালিয়ান পাস্তা।" }
  ];

  return (
    <>
      <section className="container mx-auto px-3 md:px-6 py-6 md:py-12 lg:py-20 flex flex-col lg:flex-row items-center relative">
        <div className="lg:w-1/2 z-10 w-full text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gold mb-3 md:mb-4 leading-tight" style={{ fontFamily: 'serif' }}>
            Fatema Restura
          </h1>
          <h2 className="text-lg md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-6">
            স্বাদে আতিথ্যে আপনজন
          </h2>
          <p className="text-gray-300 text-sm md:text-lg lg:text-xl mb-6 md:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            প্রতিটি পদে ভালোবাসা, মানসম্মত উপকরণ এবং নিখুঁত পরিবেশনায় আমরা প্রতিশ্রুতিবদ্ধ।
          </p>
          
          <Link to="/menu" className="inline-flex items-center justify-center gap-2 bg-gold/90 hover:bg-gold text-white px-4 md:px-8 py-2 md:py-4 rounded-md transition-colors font-medium mb-6 md:mb-12 w-full sm:w-auto active:scale-95 text-sm md:text-base">
            <span>আমাদের মেনু দেখুন</span>
            <ArrowRight size={18} className="md:w-5 md:h-5" />
          </Link>
        </div>

        <div className="lg:w-1/2 mt-10 md:mt-12 lg:mt-0 relative w-full px-3 sm:px-0">
          <div className="relative w-full max-w-[600px] mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1200" 
              alt="Delicious Burger" 
              className="w-full h-auto object-cover rounded-3xl"
              style={{
                 maskImage: 'radial-gradient(ellipse, black 70%, transparent 100%)',
                 WebkitMaskImage: 'radial-gradient(ellipse, black 70%, transparent 100%)'
              }}
            />
            
            <div className="absolute -top-3 -right-2 sm:top-10 sm:right-0 lg:-right-10 w-20 h-20 sm:w-32 sm:h-32 rounded-full border-2 border-gold border-dashed flex items-center justify-center bg-bg/90 backdrop-blur-sm p-1.5 sm:p-4 text-center rotate-12 z-20">
              <span className="text-gold font-medium leading-tight text-[10px] sm:text-base">
                তাজা উপকরণ স্বাস্থ্যকর ও সুস্বাদু
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-3 md:px-6 py-8 md:py-20">
        <div className="text-center mb-8 md:mb-16">
          <div className="text-gold mb-1.5 md:mb-2 text-sm md:text-lg">জনপ্রিয় মেনু</div>
          <h2 className="text-2xl md:text-5xl font-semibold text-gold">আমাদের সেরা কিছু খাবার</h2>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
          {popularMenu.map((item, idx) => (
            <div key={idx} className="bg-card rounded-lg md:rounded-xl overflow-hidden border border-gold/10 hover:border-gold/30 transition-colors group flex flex-col">
              <div className="aspect-square md:aspect-[4/3] overflow-hidden shrink-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-2 md:p-5 flex flex-col flex-grow">
                <h3 className="text-[11px] md:text-xl font-semibold text-gold mb-1 md:mb-2 line-clamp-2 md:line-clamp-none leading-tight break-words">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2 min-h-[40px] hidden md:block">{item.desc}</p>
                <div className="flex items-center justify-between mt-auto w-full pt-1 md:pt-0">
                  <span className="text-xs md:text-xl font-semibold text-gray-200">{item.price}</span>
                  <button 
                    onClick={() => addToCart(item.title)}
                    className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-colors active:scale-95 shrink-0"
                  >
                    <Plus size={16} className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12 mb-6 md:mb-12">
          <Link to="/menu" className="inline-flex items-center justify-center bg-gold/90 hover:bg-gold text-white px-6 md:px-10 py-2 md:py-3 rounded-md transition-colors font-medium w-full sm:w-auto active:scale-95 text-sm md:text-base">
            সম্পূর্ণ মেনু দেখুন
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-3 md:px-6 py-6 md:py-12">
        <div className="border border-gold/30 rounded-xl md:rounded-2xl p-3 md:p-8 lg:p-12">
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
      </section>
      <section id="about" className="container mx-auto px-3 md:px-6 py-6 md:py-20 mt-2 md:mt-10">
        <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-12 lg:gap-16">
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <div className="hidden md:block text-gold mb-1.5 md:mb-2 text-sm md:text-lg">আমাদের গল্প</div>
            <h2 className="hidden md:block text-2xl md:text-4xl font-semibold text-gold mb-3 md:mb-6 leading-tight">
              প্রতিটি মুহূর্তকে করি<br className="hidden md:block" />স্বরণীয় ও স্বাদে ভরপুর
            </h2>
            <p className="hidden md:block text-gray-300 text-sm md:text-lg mb-6 md:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              আমরা বিশ্বাস করি ভালো খাবার শুধু পেট ভরে না, এটা মনও ভরে। তাই প্রতিটি রেসিপিতে থাকে ভালোবাসা, যত্ন এবং আপনজনের ছোঁয়া।
            </p>
            <Link 
              to="/about"
              className="inline-flex items-center justify-center border border-gold text-gold hover:bg-gold hover:text-white px-4 md:px-8 py-2 md:py-3 rounded-full transition-colors font-medium active:scale-95 w-full sm:w-auto text-sm md:text-base"
            >
              আমাদের সম্পর্কে জানুন
            </Link>
          </div>
          
          <div className="lg:w-1/2 relative flex justify-end lg:justify-center items-center w-full mt-2 md:mt-4 lg:mt-0 pr-1 sm:pr-4 lg:pr-0">
            <div className="relative w-[180px] sm:w-[260px] md:w-[340px] lg:w-full lg:max-w-[400px] aspect-square rounded-full border border-gold/40 flex items-center justify-center p-1.5 sm:p-3 md:p-6 ml-auto mr-1 sm:mr-4 lg:mx-auto">
              <div className="w-full h-full rounded-full overflow-hidden border border-gold relative">
                <img 
                  key={aboutImageIndex}
                  src={aboutImages[aboutImageIndex]} 
                  alt="Dish" 
                  className="w-full h-full object-cover animate-in fade-in duration-500"
                />
              </div>
              
              <div className="absolute -top-1 -right-1 sm:top-0 sm:right-6 md:right-10 w-11 h-11 sm:w-20 md:w-32 sm:h-20 md:h-32 rounded-full overflow-hidden border-2 md:border-4 border-bg z-20 shadow-md">
                <img 
                  src={smallDishImg} 
                  alt="Small Dish" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <button 
                onClick={nextAboutImage}
                className="absolute bottom-0 right-0 sm:bottom-4 md:bottom-10 sm:right-0 w-7 h-7 sm:w-9 md:w-12 sm:h-9 md:h-12 rounded-full border border-gold flex items-center justify-center bg-bg text-gold hover:bg-gold hover:text-white transition-colors z-20 active:scale-95 shadow-md"
              >
                <ChevronRight size={14} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
