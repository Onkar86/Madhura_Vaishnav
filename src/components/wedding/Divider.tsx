import { motion } from 'framer-motion'

export function Divider({ labelEn, labelMr }: { labelEn: string, labelMr: string }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 w-full my-12">
      <div className="flex items-center justify-center w-full max-w-2xl gap-2 md:gap-4 px-4">
        {/* SVG Motif Left */}
        <motion.svg 
          viewBox="0 0 100 20" 
          className="h-3 md:h-4 text-gold flex-1 scale-x-[-1]" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5"
        >
          <motion.path 
            d="M100 10 Q75 20 50 10 T0 10" 
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.circle 
            cx="5" cy="10" r="3" fill="currentColor"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 1.2 }}
          />
        </motion.svg>
        
        <div className="flex flex-col items-center justify-center px-4">
          <h2 className="font-display text-xl md:text-2xl tracking-widest text-gold-deep text-center whitespace-nowrap mb-1">
            {labelEn}
          </h2>
          <h3 className="font-marathi-display text-3xl md:text-4xl text-maroon text-center whitespace-nowrap">
            {labelMr}
          </h3>
        </div>

        {/* SVG Motif Right */}
        <motion.svg 
          viewBox="0 0 100 20" 
          className="h-3 md:h-4 text-gold flex-1" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5"
        >
          <motion.path 
            d="M100 10 Q75 20 50 10 T0 10" 
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.circle 
            cx="5" cy="10" r="3" fill="currentColor"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 1.2 }}
          />
        </motion.svg>
      </div>
    </div>
  )
}
