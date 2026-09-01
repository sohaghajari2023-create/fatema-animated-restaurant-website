import React from 'react';

export default function GalleryPage() {
  // Using high-quality placeholder images that match the cozy, warm, outdoor dining vibe of the requested photos
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
      title: "মনোরম পরিবেশ"
    },
    {
      url: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
      title: "ছাদের উপরের দৃশ্য"
    },
    {
      url: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=800",
      title: "স্নিগ্ধ সন্ধ্যা"
    },
    {
      url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
      title: "রোমান্টিক ডিনার সেটআপ"
    }
  ];

  return (
    <div className="container mx-auto px-3 md:px-6 py-6 md:py-12 animate-in fade-in duration-500">
      <div className="text-center mb-6 md:mb-16">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gold mb-2 md:mb-4">আমাদের গ্যালারী</h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-lg px-4">
          ফাতেমা রেস্তোরাঁর মনোরম পরিবেশ এবং সুন্দর মুহূর্তগুলোর এক ঝলক।
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto mb-10 md:mb-20">
        {galleryImages.map((img, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-xl md:rounded-2xl border border-gold/20 aspect-square sm:aspect-[4/5] cursor-pointer">
            <img 
              src={img.url} 
              alt={img.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
              <div className="p-4 md:p-8 w-full transform sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg md:text-2xl font-semibold text-gold drop-shadow-md">{img.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
