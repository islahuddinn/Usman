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
    <div className="min-h-screen py-24 px-4 bg-gradient-to-br from-gray-50 to-amber-50">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <span className="text-amber-600 font-semibold text-lg mb-4 block">{t('portfolioTitle')}</span>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          {language === 'ar' ? 'معرض أعمالنا المتميزة' : 'Our Outstanding Portfolio'}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {t('portfolioSubtitle')}
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioImages.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
            onClick={() => setSelectedImage(image)}
          >
            <div className="aspect-square relative">
              <Image
                src={image.src}
                alt={language === 'ar' ? image.titleAr : image.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 via-amber-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white font-bold text-xl mb-2">
                  {language === 'ar' ? image.titleAr : image.title}
                </h3>
                <p className="text-amber-200 text-sm">
                  {language === 'ar' ? 'انقر للتكبير' : 'Click to enlarge'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] animate-scale-in">
            <button
              className="absolute -top-16 right-0 text-white text-5xl hover:text-amber-400 transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <Image
              src={selectedImage.src}
              alt={language === 'ar' ? selectedImage.titleAr : selectedImage.title}
              width={1200}
              height={800}
              className="rounded-2xl shadow-2xl max-w-full max-h-[90vh] object-contain"
            />
            <p className="text-white text-center mt-6 text-2xl font-semibold">
              {language === 'ar' ? selectedImage.titleAr : selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
