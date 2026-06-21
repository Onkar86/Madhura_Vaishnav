import { motion } from 'framer-motion'

export function Couple() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 max-w-6xl mx-auto px-4 w-full">
      
      {/* Bride Side */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center palace-card gold-border p-10 md:p-12 rounded-[2.5rem] w-full max-w-md shadow-2xl relative group overflow-hidden bg-ivory/95"
      >
        <div className="text-gold-deep font-marathi text-lg tracking-wider mb-2">Bride · वधू</div>
        <h3 className="font-marathi-display text-4xl md:text-5xl text-maroon mb-2">चि. सौ. कां. मधुरा</h3>
        <h4 className="font-display text-xl text-maroon/80 mb-6">Madhura Santosh Mahamuni</h4>
        
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-6" />
        
        <div className="font-marathi text-maroon/90 text-lg md:text-xl leading-relaxed">
          <span className="text-gold-deep font-semibold">सुपुत्री —</span><br />
          श्री. संतोष दत्तात्रय महामुनी<br />
          <span className="font-display text-base md:text-lg text-maroon/70 mt-1 block">Mr. Santosh Dattatray Mahamuni</span>
        </div>
      </motion.div>

      {/* Center Motif (Swastika) */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0, rotate: -45 }}
        whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 relative flex items-center justify-center palace-card rounded-full gold-border shadow-[0_0_40px_rgba(199,153,51,0.2)] z-10 bg-ivory"
      >
        <span className="text-5xl md:text-7xl text-maroon drop-shadow-lg leading-none" style={{ textShadow: "0 4px 15px rgba(200,150,50,0.5)" }}>
          卐
        </span>
      </motion.div>

      {/* Groom Side */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center palace-card gold-border p-10 md:p-12 rounded-[2.5rem] w-full max-w-md shadow-2xl relative group overflow-hidden bg-ivory/95"
      >
        <div className="text-gold-deep font-marathi text-lg tracking-wider mb-2">Groom · वर</div>
        <h3 className="font-marathi-display text-4xl md:text-5xl text-maroon mb-2">चि. वैष्णव</h3>
        <h4 className="font-display text-xl text-maroon/80 mb-6">Vaishnav Mahesh Dharashivkar</h4>
        
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-6" />
        
        <div className="font-marathi text-maroon/90 text-lg md:text-xl leading-relaxed">
          <span className="text-gold-deep font-semibold">सुपुत्र —</span><br />
          श्री. महेश नागनाथ धाराशिवकर<br />
          <span className="font-display text-base md:text-lg text-maroon/70 mt-1 block">Mr. Mahesh Naganath Dharashivkar</span>
        </div>
      </motion.div>

    </div>
  )
}
