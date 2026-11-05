'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

export default function Contact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-24 px-4 bg-gradient-to-br from-gray-50 to-amber-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200 rounded-full opacity-20 blur-3xl"></div>
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center relative z-10">
        <span className="text-amber-600 font-semibold text-lg mb-4 block">{t('contactTitle')}</span>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          {language === 'ar' ? 'تواصل معنا' : 'Get In Touch'}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {t('contactSubtitle')}
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 relative z-10">
        {/* Contact Form */}
        <div className="bg-white p-10 rounded-3xl shadow-2xl animate-slide-in-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {t('sendMessage')}
          </h2>
          
          {isSubmitted && (
            <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-xl animate-fade-in">
              {language === 'ar' 
                ? 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.'
                : 'Your message has been sent successfully! We will contact you soon.'}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                {t('name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t('namePlaceholder')}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all hover:border-amber-300"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                {t('email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t('emailPlaceholder')}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all hover:border-amber-300"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                {t('phone')}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t('phonePlaceholder')}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all hover:border-amber-300"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                {t('message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder={t('messagePlaceholder')}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all hover:border-amber-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-amber-500/50"
            >
              {t('send')}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8 animate-slide-in-right">
          <div className="bg-gradient-to-br from-amber-900 to-orange-900 p-10 rounded-3xl shadow-2xl text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/data/usman-blacksmith.2.webp')] bg-cover bg-center opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-8">
                {t('contactInfo')}
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">{t('address')}</h3>
                    <p className="text-amber-100 text-lg">
                      QR92+X3W, Salman Al Farsi<br />
                      Al Khaleej, Riyadh 13223<br />
                      Saudi Arabia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">{t('phoneLabel')}</h3>
                    <p className="text-amber-100 text-3xl font-bold">+966 56 364 6347</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">⏰</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">{t('workingHours')}</h3>
                    <p className="text-amber-100 text-lg">
                      {t('workingHoursText')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white p-8 rounded-3xl shadow-xl flex items-center justify-center h-80 border-2 border-gray-100 hover:border-amber-300 transition-colors">
            <div className="text-center">
              <span className="text-7xl mb-4 block">🗺️</span>
              <p className="text-2xl font-bold text-gray-900 mb-2">{t('map')}</p>
              <p className="text-gray-600">
                QR92+X3W, Salman Al Farsi, Al Khaleej, Riyadh
              </p>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-green-100 hover:border-green-300 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center">
                <span className="text-4xl">💬</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{t('quickContact')}</h3>
                <p className="text-green-600 font-semibold">WhatsApp</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              {t('quickContactDesc')}
            </p>
            <p className="text-2xl font-bold text-green-600">+966 56 364 6347</p>
          </div>
        </div>
      </div>
    </div>
  );
}
