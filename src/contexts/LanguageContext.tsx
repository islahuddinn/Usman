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
    // About
    aboutTitle: 'من نحن',
    aboutText: 'نحن شركة متخصصة في أعمال الحديد والألمنيوم عالية الجودة. نقدم حلولاً مبتكرة وتصاميم عصرية تلبي احتياجاتكم.',
    // Portfolio
    portfolioTitle: 'معرض أعمالنا',
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
    // Form
    namePlaceholder: 'أدخل اسمك',
    emailPlaceholder: 'أدخل بريدك الإلكتروني',
    phonePlaceholder: 'أدخل رقم هاتفك',
    messagePlaceholder: 'اكتب رسالتك هنا',
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
    // About
    aboutTitle: 'About Us',
    aboutText: 'We are a company specialized in high-quality iron and aluminum works. We provide innovative solutions and modern designs to meet your needs.',
    // Portfolio
    portfolioTitle: 'Our Portfolio',
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
    // Form
    namePlaceholder: 'Enter your name',
    emailPlaceholder: 'Enter your email',
    phonePlaceholder: 'Enter your phone number',
    messagePlaceholder: 'Write your message here',
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
