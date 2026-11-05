'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const { t, language } = useLanguage();
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-amber-800 to-orange-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/data/usman-blacksmith.webp')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 mb-8 animate-fade-in-up">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              {t('heroCta')}
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-900 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              {t('portfolio')}
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-6">
                {t('aboutTitle')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('aboutText')}
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏗️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Custom Designs</h3>
                    <p className="text-gray-600">Tailored to your needs</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Quality Materials</h3>
                    <p className="text-gray-600">Premium iron & aluminum</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👷</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Craftsmanship</h3>
                    <p className="text-gray-600">Years of experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/data/usman-blacksmith.2.webp"
                alt="Iron work"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-amber-900 text-center mb-12">
            {language === 'ar' ? 'خدماتنا' : 'Our Services'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🚪</div>
              <h3 className="text-2xl font-bold text-amber-900 mb-3">
                {language === 'ar' ? 'أبواب' : 'Doors'}
              </h3>
              <p className="text-gray-600">
                {language === 'ar' 
                  ? 'أبواب حديد وألمنيوم عالية الجودة بتصاميم عصرية'
                  : 'High-quality iron and aluminum doors with modern designs'}
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🪟</div>
              <h3 className="text-2xl font-bold text-amber-900 mb-3">
                {language === 'ar' ? 'نوافذ' : 'Windows'}
              </h3>
              <p className="text-gray-600">
                {language === 'ar'
                  ? 'نوافذ ألمنيوم متينة بأفضل المواصفات'
                  : 'Durable aluminum windows with the best specifications'}
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold text-amber-900 mb-3">
                {language === 'ar' ? 'أعمال مخصصة' : 'Custom Works'}
              </h3>
              <p className="text-gray-600">
                {language === 'ar'
                  ? 'تصاميم مخصصة حسب طلبك'
                  : 'Custom designs according to your request'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            {language === 'ar' ? 'تواصل معنا' : 'Get In Touch'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('address')}</h3>
              <p className="text-amber-100">
                QR92+X3W, Salman Al Farsi, Al Khaleej, Riyadh 13223, Saudi Arabia
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('phoneLabel')}</h3>
              <p className="text-amber-100 text-2xl font-bold">+966 56 364 6347</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {language === 'ar' ? 'التقييم' : 'Rating'}
              </h3>
              <p className="text-amber-100 text-2xl font-bold">2.76</p>
              <p className="text-amber-200">Google Reviews</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
