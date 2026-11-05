'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const { t, language } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/data/usman-blacksmith.webp')",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950 via-amber-900 to-orange-950 opacity-85"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-amber-400 rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              {t('heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-amber-100 mb-10 max-w-4xl mx-auto font-light">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/contact"
                className="group px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-amber-500/50"
              >
                {t('heroCta')}
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/portfolio"
                className="group px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/50 hover:bg-white hover:text-amber-900 text-white rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-110"
              >
                {t('heroCta2')}
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/data/usman-blacksmith.2.webp')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="animate-scale-in">
              <div className="text-5xl md:text-6xl font-bold mb-2">150+</div>
              <div className="text-lg md:text-xl opacity-90">{t('statsProjects')}</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl md:text-6xl font-bold mb-2">200+</div>
              <div className="text-lg md:text-xl opacity-90">{t('statsClients')}</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl md:text-6xl font-bold mb-2">15+</div>
              <div className="text-lg md:text-xl opacity-90">{t('statsYears')}</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-5xl md:text-6xl font-bold mb-2">4.8</div>
              <div className="text-lg md:text-xl opacity-90">{t('statsRating')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative animate-slide-in-left">
              <div className="relative z-10">
                <Image
                  src="/data/usman-blacksmith.2.webp"
                  alt="Iron work"
                  width={700}
                  height={500}
                  className="rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-amber-200 rounded-3xl -z-0"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-400 rounded-full opacity-20 -z-0"></div>
            </div>
            
            <div className="animate-slide-in-right">
              <span className="text-amber-600 font-semibold text-lg mb-4 block">{t('aboutTitle')}</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {language === 'ar' ? 'نصنع المستقبل بالحديد والألمنيوم' : 'Building the Future with Iron & Aluminum'}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {t('aboutText')}
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: '🎨', title: t('aboutFeature1'), desc: t('aboutFeature1Desc') },
                  { icon: '⚡', title: t('aboutFeature2'), desc: t('aboutFeature2Desc') },
                  { icon: '🏆', title: t('aboutFeature3'), desc: t('aboutFeature3Desc') },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-amber-50 rounded-xl hover:bg-amber-100 transition-colors">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-2xl shadow-lg flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-amber-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-lg mb-4 block">{t('servicesTitle')}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {language === 'ar' ? 'خدمات احترافية لكل احتياجاتك' : 'Professional Services for All Your Needs'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('servicesSubtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🚪', title: t('serviceDoors'), desc: t('serviceDoorsDesc') },
              { icon: '🪟', title: t('serviceWindows'), desc: t('serviceWindowsDesc') },
              { icon: '🔧', title: t('serviceCustom'), desc: t('serviceCustomDesc') },
              { icon: '🏗️', title: t('serviceRailings'), desc: t('serviceRailingsDesc') },
              { icon: '🚪', title: t('serviceGates'), desc: t('serviceGatesDesc') },
              { icon: '🏢', title: t('serviceFacades'), desc: t('serviceFacadesDesc') },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-amber-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                <div className="mt-6 w-12 h-1 bg-amber-500 rounded-full group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-amber-900 to-orange-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/data/usman-blacksmith.3.webp')] bg-cover bg-center opacity-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-amber-300 font-semibold text-lg mb-4 block">{t('testimonialsTitle')}</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {language === 'ar' ? 'ماذا يقول عملاؤنا' : 'What Our Clients Say'}
            </h2>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
              {t('testimonialsSubtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: t('testimonial1'), name: t('testimonial1Name') },
              { text: t('testimonial2'), name: t('testimonial2Name') },
              { text: t('testimonial3'), name: t('testimonial3Name') },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-2xl">★</span>
                  ))}
                </div>
                <p className="text-lg mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-xl font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-amber-200 text-sm">{language === 'ar' ? 'عميل راضٍ' : 'Happy Client'}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/data/usman-blacksmith.4.webp')] bg-cover bg-center opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {language === 'ar' ? 'جاهز لبدء مشروعك؟' : 'Ready to Start Your Project?'}
              </h2>
              <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
                {language === 'ar'
                  ? 'تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر'
                  : 'Contact us today for a free consultation and quote'}
              </p>
              <Link
                href="/contact"
                className="inline-block px-12 py-5 bg-white text-amber-600 rounded-full font-bold text-lg hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                {t('heroCta')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-900 to-amber-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {language === 'ar' ? 'تواصل معنا' : 'Get In Touch'}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                📍
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('address')}</h3>
              <p className="text-amber-100">
                QR92+X3W, Salman Al Farsi<br />
                Al Khaleej, Riyadh 13223<br />
                Saudi Arabia
              </p>
            </div>
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                📞
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('phoneLabel')}</h3>
              <p className="text-amber-100 text-3xl font-bold">+966 56 364 6347</p>
            </div>
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                ⭐
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('statsRating')}</h3>
              <p className="text-amber-100 text-3xl font-bold">2.76</p>
              <p className="text-amber-200">Google Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white text-center">
        <p className="text-gray-400">{t('footerText')}</p>
      </footer>
    </div>
  );
}
