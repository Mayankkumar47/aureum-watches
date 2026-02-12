import { motion } from 'motion/react';
import { Award, Shield, Palette, TrendingUp } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function BenefitCard({ icon, title, description, index }: BenefitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative overflow-hidden border border-zinc-800 bg-zinc-900/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-[#D4AF37]/50 hover:bg-zinc-900/50"
    >
      {/* Animated Background Glow */}
      <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-[#D4AF37]/0 blur-3xl transition-all duration-500 group-hover:bg-[#D4AF37]/10" />

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative z-10 mb-6 inline-flex h-16 w-16 items-center justify-center border border-[#D4AF37]/30 bg-black transition-all duration-300 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10"
      >
        {icon}
      </motion.div>

      {/* Content */}
      <h3 className="relative z-10 mb-4 font-['Playfair_Display'] text-2xl font-bold text-white">
        {title}
      </h3>
      <p className="relative z-10 font-['Inter'] text-sm leading-relaxed text-gray-400">
        {description}
      </p>

      {/* Decorative Line */}
      <div className="relative z-10 mt-6 h-px w-0 bg-gradient-to-r from-[#D4AF37] to-transparent transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
}

export function WhyChoose() {
  const benefits = [
    {
      icon: <Award className="h-8 w-8 text-[#D4AF37]" />,
      title: "Swiss Precision",
      description: "Crafted in Switzerland with centuries-old techniques combined with cutting-edge innovation. Each movement undergoes rigorous testing to ensure accuracy within seconds per day.",
    },
    {
      icon: <Shield className="h-8 w-8 text-[#D4AF37]" />,
      title: "Lifetime Warranty",
      description: "We stand behind our craftsmanship with a comprehensive lifetime warranty. Your Aureum timepiece is protected for generations with full servicing and support.",
    },
    {
      icon: <Palette className="h-8 w-8 text-[#D4AF37]" />,
      title: "Bespoke Customization",
      description: "Create a truly unique timepiece with our bespoke service. Choose from rare materials, custom dials, and personalized engravings to reflect your individual style.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-[#D4AF37]" />,
      title: "Investment Value",
      description: "Aureum watches consistently appreciate in value. Our limited production and exceptional quality make each piece a sound investment and a treasured heirloom.",
    },
  ];

  return (
    <section className="relative bg-zinc-950 px-6 py-24 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-['Playfair_Display'] text-5xl font-bold text-white md:text-6xl">
            Why Choose <span className="text-[#D4AF37]">Aureum</span>
          </h2>
          <p className="mx-auto max-w-2xl font-['Inter'] text-lg text-gray-400">
            Uncompromising excellence in every aspect of luxury watchmaking
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} {...benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
