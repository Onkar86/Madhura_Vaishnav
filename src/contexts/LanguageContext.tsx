import React, { createContext, useContext, useState, useEffect } from 'react'
import { BRIDE_MR, BRIDE_EN, GROOM_MR, GROOM_EN, VENUE_MR } from '../lib/wedding-config'

type Language = 'mr' | 'en' | 'hi'

export const translations = {
  mr: {
    'hero.tagline': 'शुभमंगल सावधान',
    'hero.bride': BRIDE_MR,
    'hero.groom': GROOM_MR,
    'countdown.title': 'Save the Date',
    'countdown.subtitle': 'क्षण क्षण मोजताना...',
    'countdown.days': 'दिवस',
    'countdown.hours': 'तास',
    'countdown.minutes': 'मिनिटे',
    'countdown.seconds': 'सेकंद',
    'countdown.today': 'आज शुभदिन आहे 🙏',
    'couple.title': 'आमचे परिवार',
    'couple.subtitle': 'दोन हृदयांचा एक प्रवास',
    'couple.bride_desc': 'सुपुत्री',
    'couple.groom_desc': 'सुपुत्र',
    'timeline.title': 'Event Timeline',
    'timeline.subtitle': 'शुभ क्षणांची मालिका',
    'timeline.sakharpuda': 'साखरपुडा',
    'timeline.haldi': 'हळद',
    'timeline.wedding': 'विवाह',
    'venue.title': 'Wedding Venue',
    'venue.subtitle': 'जिथे स्वप्न साकार होणार',
    'venue.name': VENUE_MR,
    'footer.title': 'आपल्या आशीर्वादाची प्रतीक्षा 🙏',
  },
  en: {
    'hero.tagline': 'Shubh Vivah',
    'hero.bride': BRIDE_EN,
    'hero.groom': GROOM_EN,
    'countdown.title': 'Save the Date',
    'countdown.subtitle': 'Counting every moment...',
    'countdown.days': 'Days',
    'countdown.hours': 'Hours',
    'countdown.minutes': 'Mins',
    'countdown.seconds': 'Secs',
    'countdown.today': 'The auspicious day is here 🙏',
    'couple.title': 'Our Families',
    'couple.subtitle': 'A journey of two hearts',
    'couple.bride_desc': 'Daughter of',
    'couple.groom_desc': 'Son of',
    'timeline.title': 'Event Timeline',
    'timeline.subtitle': 'A series of auspicious moments',
    'timeline.sakharpuda': 'Engagement',
    'timeline.haldi': 'Haldi',
    'timeline.wedding': 'Wedding',
    'venue.title': 'Wedding Venue',
    'venue.subtitle': 'Where dreams come true',
    'venue.name': 'Vitthal Mangal Karyalaya, Wadala',
    'footer.title': 'Awaiting your presence & blessings 🙏',
  },
  hi: {
    'hero.tagline': 'शुभ विवाह',
    'hero.bride': BRIDE_MR,
    'hero.groom': GROOM_MR,
    'countdown.title': 'Save the Date',
    'countdown.subtitle': 'हर पल का इंतज़ार...',
    'countdown.days': 'दिन',
    'countdown.hours': 'घंटे',
    'countdown.minutes': 'मिनट',
    'countdown.seconds': 'सेकंड',
    'countdown.today': 'आज शुभ दिन है 🙏',
    'couple.title': 'हमारा परिवार',
    'couple.subtitle': 'दो दिलों का सफर',
    'couple.bride_desc': 'सुपुत्री',
    'couple.groom_desc': 'सुपुत्र',
    'timeline.title': 'Event Timeline',
    'timeline.subtitle': 'शुभ क्षणों की शृंखला',
    'timeline.sakharpuda': 'सगाई',
    'timeline.haldi': 'हल्दी',
    'timeline.wedding': 'विवाह',
    'venue.title': 'Wedding Venue',
    'venue.subtitle': 'जहाँ सपने सच होंगे',
    'venue.name': VENUE_MR,
    'footer.title': 'आपके आशीर्वाद की प्रतीक्षा में 🙏',
  }
}

export type TranslationKey = keyof typeof translations.mr

interface LangContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LangContextType | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('mr')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('wedding-lang') as Language
    if (saved && ['mr', 'en', 'hi'].includes(saved)) {
      setLang(saved)
    }
    setMounted(true)
  }, [])

  const handleSetLang = (newLang: Language) => {
    setLang(newLang)
    localStorage.setItem('wedding-lang', newLang)
  }

  const t = (key: TranslationKey) => {
    return translations[lang][key] || translations.mr[key]
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      <div className={`transition-opacity duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useTranslation must be used within LanguageProvider')
  return context
}
