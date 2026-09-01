import React, { useState } from 'react';
import { Plus, Search } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const allMenuItems = [
  { id: 1, category: "দেশী", title: "মোরগ পোলাও", price: "৳৩৮০", image: "https://images.unsplash.com/photo-1589302168068-964664d93cb0?auto=format&fit=crop&q=80&w=400", desc: "সুগন্ধি বাসমতি চাল ও রনন মাংসের অসাধারণ ফিউশন।" },
  { id: 2, category: "ফাস্ট ফুড", title: "ফ্রাইড চিকেন", price: "৳২৮০", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=400", desc: "ক্রিস্পি ও জুসি ফ্রাইড চিকেন, সবার প্রিয়।" },
  { id: 3, category: "কন্টিনেন্টাল", title: "বিফ স্টেক", price: "৳৬৫০", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=400", desc: "জুসি ও সফট বিফ স্টেক, স্পেশাল সস এবং ভেজিটেবল সহ।" },
  { id: 4, category: "ইতালিয়ান", title: "পাস্তা অ্যারাবিয়াতা", price: "৳৩৫০", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=400", desc: "চিলি টমেটো সসের সাথে টেস্টি ইতালিয়ান পাস্তা।" },
  { id: 5, category: "দেশী", title: "কাচ্চি বিরিয়ানি", price: "৳৪৫০", image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=400", desc: "ঐতিহ্যবাহী পুরান ঢাকার স্পেশাল কাচ্চি।" },
  { id: 6, category: "ফাস্ট ফুড", title: "বিফ বার্গার", price: "৳৩২০", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400", desc: "ডাবল প্যাটি, চিজ ও স্পেশাল সস সহ ক্লাসিক বার্গার।" },
  { id: 7, category: "দেশী", title: "মাটন রেজালা", price: "৳৪২০", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=400", desc: "স্পেশাল মসলায় তৈরি সুস্বাদু মাটন রেজালা।" },
  { id: 8, category: "চাইনিজ", title: "চিকেন চাউমিন", price: "৳২৬০", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=400", desc: "ভেজিটেবল ও চিকেন দিয়ে তৈরি অথেনটিক চাউমিন।" },
];

const categories = ["সব", "দেশী", "ফাস্ট ফুড", "ইতালিয়ান", "কন্টিনেন্টাল", "চাইনিজ"];

export default function MenuPage() {
  const { addToCart } = useAppContext();
  const [activeCategory, setActiveCategory] = useState("সব");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMenu = allMenuItems.filter(item => {
    const matchesCategory = activeCategory === "সব" || item.category === activeCategory;
    const matchesSearch = item.title.includes(searchQuery) || item.desc.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-3 md:px-6 py-6 md:py-12 animate-in fade-in duration-500">
      <div className="text-center mb-6 md:mb-12">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gold mb-2 md:mb-4">আমাদের সম্পূর্ণ মেনু</h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-lg">
          আপনার পছন্দের খাবার বেছে নিন আমাদের বৈচিত্র্যময় মেনু থেকে। প্রতিটি খাবারই তৈরি হয় তাজা উপকরণ আর ভালোবাসায়।
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 mb-6 md:mb-10">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 md:px-5 py-1.5 md:py-2 rounded-full border transition-colors text-xs md:text-base ${
                activeCategory === cat 
                  ? "bg-gold border-gold text-white" 
                  : "border-gold/30 text-gray-300 hover:border-gold hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-64 shrink-0">
          <input 
            type="text" 
            placeholder="খাবার খুঁজুন..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-card border border-gold/30 rounded-full px-4 py-2 md:py-2.5 pl-9 md:pl-10 text-white focus:outline-none focus:border-gold text-xs md:text-base"
          />
          <Search className="absolute left-3 top-2.5 md:top-3 text-gray-400 w-[14px] h-[14px] md:w-[18px] md:h-[18px]" strokeWidth={2} />
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
        {filteredMenu.map((item) => (
          <div key={item.id} className="bg-card rounded-lg md:rounded-xl overflow-hidden border border-gold/10 hover:border-gold/30 transition-colors group flex flex-col">
            <div className="aspect-square md:aspect-[4/3] overflow-hidden shrink-0">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-2 md:p-5 flex flex-col flex-grow">
              <div className="hidden md:inline-block text-xs text-gold/80 mb-2 border border-gold/30 rounded-full px-2 py-0.5 self-start">
                {item.category}
              </div>
              <h3 className="text-[11px] md:text-xl font-semibold text-gold mb-1 md:mb-2 line-clamp-2 md:line-clamp-none leading-tight break-words">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2 min-h-[40px] hidden md:block">{item.desc}</p>
              <div className="flex items-center justify-between mt-auto w-full pt-1 md:pt-0">
                <span className="text-xs md:text-xl font-semibold text-gray-200">{item.price}</span>
                <button 
                  onClick={() => addToCart(item.title)}
                  className="w-6 h-6 md:w-9 md:h-9 rounded-full border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-colors active:scale-95 shrink-0"
                >
                  <Plus size={16} className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredMenu.length === 0 && (
        <div className="text-center py-12 md:py-20 text-gray-400 text-sm md:text-base">
          কোনো খাবার পাওয়া যায়নি। অন্য কিছু দিয়ে খুঁজুন।
        </div>
      )}
    </div>
  );
}
