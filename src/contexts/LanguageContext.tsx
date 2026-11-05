'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    portfolio: 'معرض الأعمال',
    contact: 'اتصل بنا',
    // Hero
    heroTitle: 'محمد عثمان حداد و المنيوم',
    heroSubtitle: 'أعمال الحديد والألمنيوم في الرياض، المملكة العربية السعودية',
    heroCta: 'تواصل معنا',
    heroCta2: 'استعرض أعمالنا',
    // About
    aboutTitle: 'من نحن',
    aboutText: 'نحن شركة متخصصة في أعمال الحديد والألمنيوم عالية الجودة. نقدم حلولاً مبتكرة وتصاميم عصرية تلبي احتياجاتكم.',
    aboutFeature1: 'تصاميم مخصصة',
    aboutFeature1Desc: 'حسب طلبك تماماً',
    aboutFeature2: 'مواد عالية الجودة',
    aboutFeature2Desc: 'حديد وألمنيوم ممتاز',
    aboutFeature3: 'حرفية خبراء',
    aboutFeature3Desc: 'سنوات من الخبرة',
    // Services
    servicesTitle: 'خدماتنا',
    servicesSubtitle: 'نقدم أفضل الخدمات في مجال الحديد والألمنيوم',
    serviceDoors: 'أبواب',
    serviceDoorsDesc: 'أبواب حديد وألمنيوم عالية الجودة بتصاميم عصرية',
    serviceWindows: 'نوافذ',
    serviceWindowsDesc: 'نوافذ ألمنيوم متينة بأفضل المواصفات',
    serviceCustom: 'أعمال مخصصة',
    serviceCustomDesc: 'تصاميم مخصصة حسب طلبك',
    serviceRailings: 'درابزين',
    serviceRailingsDesc: 'درابزين حديد وألمنيوم بتصاميم أنيقة',
    serviceGates: 'بوابات',
    serviceGatesDesc: 'بوابات حديدية متينة وآمنة',
    serviceFacades: 'واجهات',
    serviceFacadesDesc: 'واجهات ألمنيوم عصرية للمباني',
    // Stats
    statsTitle: 'إنجازاتنا بالأرقام',
    statsProjects: 'مشروع منجز',
    statsClients: 'عميل سعيد',
    statsYears: 'سنوات خبرة',
    statsRating: 'تقييم جوجل',
    // Testimonials
    testimonialsTitle: 'آراء عملائنا',
    testimonialsSubtitle: 'ماذا يقول عملاؤنا عنا',
    testimonial1: 'خدمة ممتازة وجودة عالية في العمل. أنصح بهم بشدة!',
    testimonial1Name: 'أحمد محمد',
    testimonial2: 'تصاميم رائعة وتنفيذ احترافي. شكراً لكم!',
    testimonial2Name: 'سارة أحمد',
    testimonial3: 'أفضل شركة تعاملت معها في الرياض.',
    testimonial3Name: 'خالد العتيبي',
    // Portfolio
    portfolioTitle: 'معرض أعمالنا',
    portfolioSubtitle: 'استعرض بعض من أعمالنا المتميزة في الحديد والألمنيوم',
    // Contact
    contactTitle: 'اتصل بنا',
    contactSubtitle: 'نحن هنا لمساعدتك',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    phone: 'رقم الهاتف',
    message: 'الرسالة',
    send: 'إرسال',
    address: 'العنوان',
    phoneLabel: 'الهاتف',
    workingHours: 'ساعات العمل',
    workingHoursText: 'السبت - الخميس: 8:00 ص - 8:00 م',
    quickContact: 'تواصل السريع',
    quickContactDesc: 'يمكنك أيضاً التواصل معنا عبر واتساب للرد الفوري',
    map: 'الخريطة',
    // Form
    namePlaceholder: 'أدخل اسمك',
    emailPlaceholder: 'أدخل بريدك الإلكتروني',
    phonePlaceholder: 'أدخل رقم هاتفك',
    messagePlaceholder: 'اكتب رسالتك هنا',
    sendMessage: 'أرسل لنا رسالة',
    contactInfo: 'معلومات الاتصال',
    // Footer
    footerText: 'جميع الحقوق محفوظة © 2024 محمد عثمان حداد',
  },
  en: {
    // Navigation
    home: 'Home',
    portfolio: 'Portfolio',
    contact: 'Contact Us',
    // Hero
    heroTitle: 'Mohammed Osman Haddad Aluminum & Iron Works',
    heroSubtitle: 'Iron works in Riyadh, Saudi Arabia',
    heroCta: 'Contact Us',
    heroCta2: 'View Our Work',
    // About
    aboutTitle: 'About Us',
    aboutText: 'We are a company specialized in high-quality iron and aluminum works. We provide innovative solutions and modern designs to meet your needs.',
    aboutFeature1: 'Custom Designs',
    aboutFeature1Desc: 'Tailored to your needs',
    aboutFeature2: 'Quality Materials',
    aboutFeature2Desc: 'Premium iron & aluminum',
    aboutFeature3: 'Expert Craftsmanship',
    aboutFeature3Desc: 'Years of experience',
    // Services
    servicesTitle: 'Our Services',
    servicesSubtitle: 'We offer the best services in iron and aluminum works',
    serviceDoors: 'Doors',
    serviceDoorsDesc: 'High-quality iron and aluminum doors with modern designs',
    serviceWindows: 'Windows',
    serviceWindowsDesc: 'Durable aluminum windows with the best specifications',
    serviceCustom: 'Custom Works',
    serviceCustomDesc: 'Custom designs according to your request',
    serviceRailings: 'Railings',
    serviceRailingsDesc: 'Elegant iron and aluminum railings',
    serviceGates: 'Gates',
    serviceGatesDesc: 'Durable and secure iron gates',
    serviceFacades: 'Facades',
    serviceFacadesDesc: 'Modern aluminum building facades',
    // Stats
    statsTitle: 'Our Achievements',
    statsProjects: 'Projects Completed',
    statsClients: 'Happy Clients',
    statsYears: 'Years Experience',
    statsRating: 'Google Rating',
    // Testimonials
    testimonialsTitle: 'Client Reviews',
    testimonialsSubtitle: 'What our clients say about us',
    testimonial1: 'Excellent service and high-quality work. Highly recommended!',
    testimonial1Name: 'Ahmed Mohammed',
    testimonial2: 'Great designs and professional execution. Thank you!',
    testimonial2Name: 'Sara Ahmed',
    testimonial3: 'Best company I have dealt with in Riyadh.',
    testimonial3Name: 'Khaled Al-Otaibi',
    // Portfolio
    portfolioTitle: 'Our Portfolio',
    portfolioSubtitle: 'Browse some of our outstanding iron and aluminum works',
    // Contact
    contactTitle: 'Contact Us',
    contactSubtitle: 'We are here to help you',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    send: 'Send',
    address: 'Address',
    phoneLabel: 'Phone',
    workingHours: 'Working Hours',
    workingHoursText: 'Saturday - Thursday: 8:00 AM - 8:00 PM',
    quickContact: 'Quick Contact',
    quickContactDesc: 'You can also reach us via WhatsApp for instant response',
    map: 'Map',
    // Form
    namePlaceholder: 'Enter your name',
    emailPlaceholder: 'Enter your email',
    phonePlaceholder: 'Enter your phone number',
    messagePlaceholder: 'Write your message here',
    sendMessage: 'Send us a message',
    contactInfo: 'Contact Information',
    // Footer
    footerText: 'All rights reserved © 2024 Mohammed Osman Haddad',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ar] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
