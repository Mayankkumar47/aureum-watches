import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606391376558-31313ada3aa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaCUyMGNsb3NlLXVwJTIwZHJhbWF0aWMlMjBsaWdodGluZ3xlbnwxfHx8fDE3NzA4NzczNTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Luxury Watch"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 font-['Playfair_Display'] text-5xl font-bold leading-tight text-white md:text-7xl lg:text-8xl"
        >
          Timeless Excellence
          <br />
          <span className="text-[#D4AF37]">Crafted by Hand</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-12 max-w-2xl font-['Inter'] text-lg text-gray-300 md:text-xl"
        >
          Swiss-made masterpieces for the discerning collector
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)' }}
          whileTap={{ scale: 0.95 }}
          className="group relative overflow-hidden rounded-none border border-[#D4AF37] bg-[#D4AF37] px-12 py-4 font-['Inter'] text-base font-semibold uppercase tracking-wider text-black transition-all duration-300 hover:bg-transparent hover:text-[#D4AF37]"
        >
          <span className="relative z-10">Explore the Collection</span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-8 w-8 text-[#D4AF37]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
