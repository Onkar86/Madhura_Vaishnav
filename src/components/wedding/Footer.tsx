import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function Footer() {
  const [visitors, setVisitors] = useState<number | null>(null)

  useEffect(() => {
    // Mock visitor counter. In production, connect this to an analytics API.
    const baseVisitors = 1000
    const localVisits = parseInt(localStorage.getItem('wedding_visits') || '0')
    const newVisits = localVisits + 1
    localStorage.setItem('wedding_visits', newVisits.toString())
    
    // Simulate network delay for realism
    setTimeout(() => {
      setVisitors(baseVisitors + newVisits)
    }, 800)
  }, [])

  return (
    <footer className="w-full py-16 px-4 text-center relative mt-20">
      <div className="absolute inset-0 bg-gradient-to-t from-maroon/10 to-transparent pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <div className="flex flex-col items-center justify-center space-y-4 px-4 text-center">
          <h3 className="font-marathi-display text-2xl md:text-4xl text-maroon mb-2 drop-shadow-sm leading-relaxed">
            आपले शुभाशीर्वाद आणि उपस्थिती प्रार्थनीय... 🙏
          </h3>
          <p className="font-display text-gold-deep md:text-lg tracking-widest uppercase">
            Your presence will be our greatest blessing
          </p>
        </div>

        <div className="mt-16 text-maroon/60 font-body text-xs md:text-sm flex flex-col items-center justify-center gap-3">
          <span className="tracking-widest uppercase">Developed by :- Onkar Mahamuni</span>
          <span className="opacity-50">© 2026 Shubh Vivah</span>
          
          <div className="flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full border border-maroon/10 bg-ivory/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-deep"></span>
            </span>
            <span className="font-mono opacity-70 tracking-widest">
              {visitors !== null ? `${visitors} VISITORS` : 'LOADING...'}
            </span>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
