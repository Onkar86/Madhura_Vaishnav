import { motion } from 'framer-motion'
import { Navigation } from 'lucide-react'

export function Venue() {
  return (
    <div className="max-w-5xl mx-auto px-4 w-full">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="palace-card gold-border p-4 md:p-8 rounded-[2rem] md:rounded-[3rem] shadow-2xl bg-ivory/95 overflow-hidden"
      >
        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="font-marathi-display text-4xl md:text-5xl text-maroon mb-2">विठ्ठल मंगल कार्यालय</h3>
          <h4 className="font-display text-xl text-gold-deep mb-8">Vitthal Mangal Karyalay, Vadala</h4>
          
          <div className="w-full max-w-3xl rounded-2xl overflow-hidden gold-border shadow-inner relative group mb-8 bg-ivory">
            {/* The Map */}
            <iframe 
              src="https://maps.google.com/maps?q=Vitthal%20Mangal%20Karyalay,%20Vadala&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="300" 
              className="grayscale-[30%] contrast-125 hover:grayscale-0 transition-all duration-700 pointer-events-auto"
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Decorative Overlay for Map */}
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-gold/20 rounded-2xl" />
          </div>

          <a 
            href="https://maps.app.goo.gl/Ko5xWFKWkDu3eEbQ9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-gold-deep to-gold text-ivory rounded-full font-display tracking-widest uppercase hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md"
          >
            <Navigation className="w-4 h-4" />
            Get Directions
          </a>
        </div>
      </motion.div>
    </div>
  )
}
