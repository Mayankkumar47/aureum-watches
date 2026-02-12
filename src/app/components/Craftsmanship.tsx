import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface CraftsmanshipItemProps {
  image: string;
  title: string;
  description: string;
  reverse?: boolean;
}

function CraftsmanshipItem({ image, title, description, reverse }: CraftsmanshipItemProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div
      ref={ref}
      className={`relative grid items-center gap-12 lg:grid-cols-2 ${reverse ? 'lg:grid-flow-dense' : ''}`}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`relative h-[400px] overflow-hidden lg:h-[600px] ${reverse ? 'lg:col-start-2' : ''}`}
      >
        <div className="relative h-full w-full">
          <motion.img
            style={{ y }}
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`${reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}
      >
        <div className="max-w-xl">
          <h3 className="mb-6 font-['Playfair_Display'] text-4xl font-bold text-white md:text-5xl">
            {title}
          </h3>
          <p className="mb-8 font-['Inter'] text-lg leading-relaxed text-gray-300">
            {description}
          </p>
          <div className="h-px w-24 bg-gradient-to-r from-[#D4AF37] to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}

export function Craftsmanship() {
  const items = [
    {
      image: "https://images.unsplash.com/photo-1770381446972-58c44c9a54fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaCUyMHNhcHBoaXJlJTIwY3J5c3RhbHxlbnwxfHx8fDE3NzA4NzczNTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Sapphire Crystal Excellence",
      description: "Each Aureum timepiece features scratch-resistant sapphire crystal, meticulously crafted to provide perfect clarity while protecting the intricate dial beneath. Our multi-layer anti-reflective coating ensures optimal legibility in any lighting condition.",
    },
    {
      image: "https://images.unsplash.com/photo-1745305023239-b476a0faa159?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbWVjaGFuaWNhbCUyMHdhdGNoJTIwbW92ZW1lbnR8ZW58MXx8fHwxNzcwODc3MzU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Hand-Assembled Movements",
      description: "Master watchmakers dedicate hundreds of hours to assembling each mechanical movement by hand. Every component is individually inspected and adjusted to ensure precision that lasts generations. Our in-house calibers represent the pinnacle of horological engineering.",
      reverse: true,
    },
    {
      image: "https://images.unsplash.com/photo-1765446904774-999141010af0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaCUyMGNyYWZ0c21hbnNoaXAlMjBoYW5kc3xlbnwxfHx8fDE3NzA4NzczNTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Precious Metals & Materials",
      description: "We use only the finest materials—18k gold, 950 platinum, and surgical-grade stainless steel. Each case is meticulously finished by hand, combining polished and brushed surfaces to create a sophisticated interplay of light and shadow.",
    },
  ];

  return (
    <section className="bg-zinc-950 px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-4 font-['Playfair_Display'] text-5xl font-bold text-white md:text-6xl">
            The Art of <span className="text-[#D4AF37]">Craftsmanship</span>
          </h2>
          <p className="mx-auto max-w-2xl font-['Inter'] text-lg text-gray-400">
            Every detail matters in the pursuit of horological perfection
          </p>
        </motion.div>

        <div className="space-y-32">
          {items.map((item, index) => (
            <CraftsmanshipItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}