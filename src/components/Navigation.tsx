'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

export default function Navigation() {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-950 via-amber-900 to-orange-950 shadow-2xl backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">
              {language === 'ar' ? '🔩' : '🔩'}
            </span>
            <span className="text-xl font-bold text-white hidden sm:block">
              {t('heroTitle')}
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-amber-200 transition-colors font-medium"
            >
              {t('home')}
            </Link>
            <Link
              href="/portfolio"
              className="text-white hover:text-amber-200 transition-colors font-medium"
            >
              {t('portfolio')}
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-amber-200 transition-colors font-medium"
            >
              {t('contact')}
            </Link>
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors font-medium"
            >
              {language === 'ar' ? 'English' : 'العربية'}
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-amber-950 border-t border-amber-800">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block text-white hover:text-amber-200 transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {t('home')}
            </Link>
            <Link
              href="/portfolio"
              className="block text-white hover:text-amber-200 transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {t('portfolio')}
            </Link>
            <Link
              href="/contact"
              className="block text-white hover:text-amber-200 transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {t('contact')}
            </Link>
            <button
              onClick={toggleLanguage}
              className="w-full px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors font-medium"
            >
              {language === 'ar' ? 'English' : 'العربية'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
