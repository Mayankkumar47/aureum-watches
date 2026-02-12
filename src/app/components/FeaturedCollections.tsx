import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

interface WatchCardProps {
  image: string;
  name: string;
  price: string;
  badge?: 'Limited Edition' | 'New';
  index: number;
}

function WatchCard({ image, name, price, badge, index }: WatchCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative overflow-hidden bg-zinc-900/50 backdrop-blur-sm"
    >
      {/* Badge */}
      {badge && (
        <div className="absolute left-6 top-6 z-20 border border-[#D4AF37] bg-black/80 px-4 py-2 font-['Inter'] text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
          {badge}
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700"
          whileHover={{ scale: 1.1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="mb-3 font-['Playfair_Display'] text-3xl font-semibold text-white">
          {name}
        </h3>
        <p className="font-['Inter'] text-2xl text-[#D4AF37]">{price}</p>

        {/* Hover CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="mt-6 border border-[#C9A96E] px-8 py-3 font-['Inter'] text-sm uppercase tracking-wider text-[#C9A96E] opacity-0 transition-all duration-300 group-hover:opacity-100"
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
}

export function FeaturedCollections() {
  const watches = [
    {
      image: "https://images.unsplash.com/photo-1758348844348-acaf8d854665?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZ29sZCUyMHdhdGNoJTIwcHJvZHVjdHxlbnwxfHx8fDE3NzA4NzczNTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      name: "Heritage Gold",
      price: "$45,000",
      badge: "Limited Edition" as const,
    },
    {
      image: "https://images.unsplash.com/photo-1598644721376-aaa1abf4978e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjBjaHJvbm9ncmFwaCUyMHdhdGNofGVufDF8fHx8MTc3MDg3NzM1OHww&ixlib=rb-4.1.0&q=80&w=1080",
      name: "Precision Steel",
      price: "$32,000",
      badge: "New" as const,
    },
    {
      image: "https://images.unsplash.com/photo-1606391376558-31313ada3aa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaCUyMGNsb3NlLXVwJTIwZHJhbWF0aWMlMjBsaWdodGluZ3xlbnwxfHx8fDE3NzA4NzczNTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      name: "Midnight Edition",
      price: "$38,500",
    },
    {
      image: "https://images.unsplash.com/photo-1770381446972-58c44c9a54fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaCUyMHNhcHBoaXJlJTIwY3J5c3RhbHxlbnwxfHx8fDE3NzA4NzczNTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      name: "Celestial Blue",
      price: "$52,000",
      badge: "Limited Edition" as const,
    },
  ];

  return (
    <section className="bg-black px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-['Playfair_Display'] text-5xl font-bold text-white md:text-6xl">
            Featured <span className="text-[#D4AF37]">Collections</span>
          </h2>
          <p className="mx-auto max-w-2xl font-['Inter'] text-lg text-gray-400">
            Each timepiece is a testament to uncompromising craftsmanship and timeless design
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {watches.map((watch, index) => (
            <WatchCard key={watch.name} {...watch} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
