import { motion, useScroll, useTransform } from 'framer-motion'
import heroImg from '@/assets/hero-palace.jpg'
import { useRef } from 'react'

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])

  return (
    <section ref={ref} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat origin-top"
        style={{ backgroundImage: `url(${heroImg})`, y: backgroundY }}
      >
        {/* Darker overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 w-full max-w-4xl mx-auto pt-20">
        <motion.div
          style={{ y: textY }}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center w-full"
        >
          <div className="text-gold-deep text-4xl md:text-5xl mb-4 drop-shadow-md">ॐ</div>
          <p className="font-marathi-display text-xl md:text-2xl text-gold mb-8 tracking-widest drop-shadow-md">
            || श्री गणेशाय नमः ||
          </p>

          <div className="relative flex flex-col items-center justify-center my-6 md:my-12 w-full">
            {/* Background glowing aura */}
            <div className="absolute inset-0 bg-gold/20 blur-[80px] rounded-full pointer-events-none mix-blend-screen" />
            
            {/* Elegant Ring Frame behind names */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 text-gold-deep"
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-[110%] md:w-[90%] aspect-square border-[1px] border-gold/40 rounded-[50%] border-dashed" />
              <div className="absolute w-[100%] md:w-[80%] aspect-square border-[1px] border-gold/20 rounded-[50%]" />
            </motion.div>

            <motion.div 
              className="relative z-10 flex flex-col items-center"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-ivory/90 text-lg md:text-xl font-marathi tracking-wider mb-1 drop-shadow-md">चि. सौ. कां.</span>
              <h1 className="font-marathi-display text-7xl md:text-[8rem] leading-tight text-transparent bg-clip-text bg-gradient-to-br from-[#f2e3c6] via-gold to-[#8c6b22] filter drop-shadow-[0_0_15px_rgba(199,153,51,0.6)] z-20 px-4">
                मधुरा
              </h1>
            </motion.div>
            
            {/* The beautiful center connector */}
            <motion.div 
              className="relative z-30 my-2 md:my-4"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-full palace-card gold-border flex items-center justify-center shadow-[0_0_25px_rgba(199,153,51,0.5)] backdrop-blur-xl bg-gradient-to-br from-maroon to-black">
                <span className="text-2xl md:text-4xl text-gold drop-shadow-lg mt-1">❤️</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative z-10 flex flex-col items-center"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <span className="text-ivory/90 text-lg md:text-xl font-marathi tracking-wider mb-1 mt-2 drop-shadow-md">चि.</span>
              <h1 className="font-marathi-display text-7xl md:text-[8rem] leading-tight text-transparent bg-clip-text bg-gradient-to-bl from-[#f2e3c6] via-gold to-[#8c6b22] filter drop-shadow-[0_0_15px_rgba(199,153,51,0.6)] z-20 px-4">
                वैष्णव
              </h1>
            </motion.div>
          </div>

          <p className="font-marathi-display text-2xl md:text-4xl text-ivory mt-8 mb-6 tracking-widest drop-shadow-lg">
            ॥ शुभविवाह सोहळा ॥
          </p>

          <p className="font-marathi text-gold-deep text-lg md:text-xl max-w-2xl text-center leading-relaxed drop-shadow-md italic px-4">
            "मंगलम् भगवान विष्णुः, मंगलम् गरुडध्वजः।<br/>मंगलम् पुण्डरीकाक्षः, मंगलायतनं हरिः॥"
          </p>
        </motion.div>
      </div>
    </section>
  )
}
