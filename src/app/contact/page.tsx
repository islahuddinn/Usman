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
    // Here you would typically send the form data to a server
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
    <div className="min-h-screen py-20 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-5xl font-bold text-amber-900 text-center mb-4">
          {t('contactTitle')}
        </h1>
        <p className="text-xl text-gray-600 text-center">
          {t('contactSubtitle')}
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">
            {language === 'ar' ? 'أرسل لنا رسالة' : 'Send us a message'}
          </h2>
          
          {isSubmitted && (
            <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t('send')}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-amber-900 to-amber-800 p-8 rounded-2xl shadow-xl text-white">
            <h2 className="text-3xl font-bold mb-6">
              {language === 'ar' ? 'معلومات الاتصال' : 'Contact Information'}
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t('address')}</h3>
                  <p className="text-amber-100">
                    QR92+X3W, Salman Al Farsi<br />
                    Al Khaleej, Riyadh 13223<br />
                    Saudi Arabia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t('phoneLabel')}</h3>
                  <p className="text-amber-100 text-2xl font-bold">+966 56 364 6347</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⏰</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    {language === 'ar' ? 'ساعات العمل' : 'Working Hours'}
                  </h3>
                  <p className="text-amber-100">
                    {language === 'ar' 
                      ? 'السبت - الخميس: 8:00 ص - 8:00 م'
                      : 'Saturday - Thursday: 8:00 AM - 8:00 PM'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-200 p-8 rounded-2xl shadow-xl flex items-center justify-center h-64">
            <div className="text-center text-gray-500">
              <span className="text-6xl mb-4 block">🗺️</span>
              <p className="text-lg">
                {language === 'ar' ? 'الخريطة' : 'Map'}
              </p>
              <p className="text-sm mt-2">
                {language === 'ar' 
                  ? 'QR92+X3W, Salman Al Farsi, Al Khaleej, Riyadh'
                  : 'QR92+X3W, Salman Al Farsi, Al Khaleej, Riyadh'}
              </p>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">
              {language === 'ar' ? 'تواصل السريع' : 'Quick Contact'}
            </h3>
            <p className="text-gray-600 mb-4">
              {language === 'ar'
                ? 'يمكنك أيضاً التواصل معنا عبر واتساب للرد الفوري'
                : 'You can also reach us via WhatsApp for instant response'}
            </p>
            <div className="flex items-center gap-3 text-green-600">
              <span className="text-3xl">💬</span>
              <span className="font-semibold">WhatsApp: +966 56 364 6347</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
