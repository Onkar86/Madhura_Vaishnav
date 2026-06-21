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
    <div className="space-y-12 max-w-4xl mx-auto relative px-4">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gold/50 to-transparent hidden md:block" />
      
      {events.map((event, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 ${
            index % 2 === 0 ? 'md:flex-row-reverse' : ''
          }`}
        >
          <div className="flex-1 w-full hidden md:block opacity-0" />
          
          <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-ivory border-4 border-gold shadow-[0_0_15px_rgba(199,153,51,0.5)] hidden md:block z-10" />
          
          <div className={`flex-1 w-full palace-card bg-ivory/90 gold-border p-8 rounded-[2rem] relative shadow-xl hover:shadow-2xl transition-shadow ${
            index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
          } text-center md:text-left`}>
            
            <h4 className={`font-marathi-display text-4xl text-maroon mb-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
              {event.titleMr}
            </h4>
            <h5 className={`font-display text-lg text-gold-deep mb-6 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
              {event.titleEn}
            </h5>
            
            <div className={`flex flex-col gap-3 text-maroon/90 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} items-center`}>
              <div className="flex items-center gap-3 bg-white/50 px-5 py-2.5 rounded-full gold-border shadow-sm">
                <CalendarDays className="w-5 h-5 text-gold-deep" />
                <span className="font-marathi font-semibold tracking-wide text-lg">{event.date}</span>
              </div>
              <div className="flex items-center gap-3 bg-white/50 px-5 py-2.5 rounded-full gold-border shadow-sm">
                <Clock className="w-5 h-5 text-gold-deep" />
                <span className="font-marathi font-semibold tracking-wide text-lg">{event.time}</span>
              </div>
            </div>
            
          </div>
        </motion.div>
      ))}
    </div>
  )
}
