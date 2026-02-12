import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { useState } from 'react';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "James Whitmore",
      role: "Collector & Entrepreneur",
      quote: "Aureum represents the pinnacle of watchmaking artistry. The attention to detail and mechanical precision is simply unmatched. This is not just a timepiece—it's a legacy.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    {
      name: "Alexandra Chen",
      role: "Art Director",
      quote: "I've owned several luxury watches, but nothing compares to the elegance and sophistication of my Aureum. It's a masterpiece that complements every aspect of my life.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
    {
      name: "Marcus Sterling",
      role: "Investment Banker",
      quote: "The investment value alone makes Aureum exceptional, but it's the timeless design and Swiss precision that truly sets it apart. A watch for those who demand perfection.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    },
    {
      name: "Victoria Laurent",
      role: "Fashion Designer",
      quote: "Aureum captures the essence of luxury and craftsmanship. The bespoke customization options allowed me to create a truly unique piece that reflects my personal style.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 lg:py-32">
      {/* Decorative Background Elements */}
      <div className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#D4AF37]/5 blur-3xl" />
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-[#C9A96E]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-['Playfair_Display'] text-5xl font-bold text-white md:text-6xl">
            Testimonials of <span className="text-[#D4AF37]">Excellence</span>
          </h2>
          <p className="mx-auto max-w-2xl font-['Inter'] text-lg text-gray-400">
            Hear from our distinguished clientele around the world
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#D4AF37]/30"
            >
              {/* Quote Icon */}
              <div className="mb-6 flex items-center justify-between">
                <Quote className="h-8 w-8 text-[#D4AF37]/30" />
              </div>

              {/* Quote Text */}
              <p className="mb-8 font-['Inter'] text-sm leading-relaxed text-gray-300">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#D4AF37]/30">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-full w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                  />
                </div>
                <div>
                  <div className="font-['Inter'] text-sm font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="font-['Inter'] text-xs text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute right-0 top-0 h-20 w-20 bg-gradient-to-bl from-[#D4AF37]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
