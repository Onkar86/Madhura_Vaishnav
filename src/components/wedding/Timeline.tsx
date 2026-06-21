import { motion } from 'framer-motion'
import { CalendarDays, Clock } from 'lucide-react'

export function Timeline() {
  const events = [
    {
      titleMr: 'साखरपुडा',
      titleEn: 'Engagement Ceremony',
      date: '06 जुलै 2026',
      time: 'सायंकाळी 06:00',
    },
    {
      titleMr: 'हळद समारंभ',
      titleEn: 'Haldi Ceremony',
      date: '06 जुलै 2026',
      time: 'सायंकाळी 07:00',
    },
    {
      titleMr: 'विवाह सोहळा',
      titleEn: 'Wedding',
      date: '07 जुलै 2026',
      time: 'दुपारी 12:31',
    }
  ]

  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto relative px-4">
      {events.map((event, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="flex flex-col items-center text-center w-full relative group"
        >
          {/* Beautiful Number Dot */}
          <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center bg-gradient-to-b from-ivory to-[#f8f1e3] shadow-[0_0_15px_rgba(199,153,51,0.3)] z-10 mb-6">
             <span className="text-gold-deep font-display text-xl">{index + 1}</span>
          </div>
          
          {/* Main Event Card */}
          <div className="palace-card gold-border px-8 md:px-16 py-10 rounded-[2rem] md:rounded-[3rem] w-full bg-gradient-to-b from-ivory/95 to-ivory/80 backdrop-blur-xl shadow-2xl relative hover:shadow-[0_20px_40px_-15px_rgba(199,153,51,0.3)] transition-all duration-500">
            <h4 className="font-marathi-display text-4xl md:text-5xl text-maroon mb-3 drop-shadow-sm">{event.titleMr}</h4>
            <h5 className="font-display text-lg md:text-xl text-gold-deep tracking-[0.2em] uppercase mb-8">{event.titleEn}</h5>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 text-maroon/90">
              <div className="flex items-center gap-3">
                <CalendarDays className="w-5 h-5 text-gold-deep" />
                <span className="font-marathi text-xl tracking-wide">{event.date}</span>
              </div>
              
              <div className="hidden md:block w-px h-8 bg-gradient-to-b from-transparent via-gold to-transparent" />
              <div className="md:hidden h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent my-2" />
              
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold-deep" />
                <span className="font-marathi text-xl tracking-wide">{event.time}</span>
              </div>
            </div>
          </div>
          
          {/* Connecting Line (except for last item) */}
          {index !== events.length - 1 && (
            <div className="w-px h-16 md:h-24 bg-gradient-to-b from-gold via-gold/40 to-transparent my-2" />
          )}
        </motion.div>
      ))}
    </div>
  )
}
