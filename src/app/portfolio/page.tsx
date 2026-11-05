'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { useState } from 'react';

const portfolioImages = [
  { src: '/data/usman-blacksmith.webp', title: 'Iron Work 1', titleAr: 'عمل حديد 1' },
  { src: '/data/usman-blacksmith.1.webp', title: 'Iron Work 2', titleAr: 'عمل حديد 2' },
  { src: '/data/usman-blacksmith.2.webp', title: 'Iron Work 3', titleAr: 'عمل حديد 3' },
  { src: '/data/usman-blacksmith.3.webp', title: 'Iron Work 4', titleAr: 'عمل حديد 4' },
  { src: '/data/usman-blacksmith.4.webp', title: 'Iron Work 5', titleAr: 'عمل حديد 5' },
  { src: '/data/usman-blacksmith.5.webp', title: 'Iron Work 6', titleAr: 'عمل حديد 6' },
  { src: '/data/usman-blacksmith.6.webp', title: 'Iron Work 7', titleAr: 'عمل حديد 7' },
];

export default function Portfolio() {
  const { t, language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<typeof portfolioImages[0] | null>(null);

  return (
    <div className="min-h-screen py-20 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-5xl font-bold text-amber-900 text-center mb-4">
          {t('portfolioTitle')}
        </h1>
        <p className="text-xl text-gray-600 text-center">
          {language === 'ar' 
            ? 'استعرض بعض من أعمالنا المتميزة في الحديد والألمنيوم'
            : 'Browse some of our outstanding iron and aluminum works'}
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioImages.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            onClick={() => setSelectedImage(image)}
          >
            <div className="aspect-square relative">
              <Image
                src={image.src}
                alt={language === 'ar' ? image.titleAr : image.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-semibold text-lg">
                  {language === 'ar' ? image.titleAr : image.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <button
              className="absolute -top-12 right-0 text-white text-4xl hover:text-amber-400 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <Image
              src={selectedImage.src}
              alt={language === 'ar' ? selectedImage.titleAr : selectedImage.title}
              width={1200}
              height={800}
              className="rounded-lg shadow-2xl max-w-full max-h-[90vh] object-contain"
            />
            <p className="text-white text-center mt-4 text-xl">
              {language === 'ar' ? selectedImage.titleAr : selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
