import { motion } from 'motion/react';
import { Instagram, Facebook, Youtube, Mail, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter submission
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="relative bg-black px-6 py-16 lg:py-24">
      {/* Decorative Top Border */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <div className="mb-6">
              <h3 className="font-['Playfair_Display'] text-4xl font-bold text-[#D4AF37]">
                AUREUM
              </h3>
              <p className="mt-2 font-['Inter'] text-xs uppercase tracking-widest text-gray-500">
                Swiss Watchmakers Since 1847
              </p>
            </div>
            <p className="mb-8 font-['Inter'] text-sm leading-relaxed text-gray-400">
              Crafting timeless masterpieces for the discerning collector. Each Aureum watch represents the pinnacle of Swiss horological excellence.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: '#' },
                { icon: Facebook, href: '#' },
                { icon: Youtube, href: '#' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center border border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10"
                >
                  <social.icon className="h-4 w-4 text-gray-400 transition-colors hover:text-[#D4AF37]" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h4 className="mb-6 font-['Playfair_Display'] text-lg font-semibold text-white">
              Collections
            </h4>
            <ul className="space-y-3">
              {['Heritage', 'Contemporary', 'Sport', 'Limited Editions', 'Bespoke'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="group inline-flex items-center font-['Inter'] text-sm text-gray-400 transition-colors hover:text-[#D4AF37]"
                  >
                    <span className="relative">
                      {link}
                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h4 className="mb-6 font-['Playfair_Display'] text-lg font-semibold text-white">
              Company
            </h4>
            <ul className="space-y-3">
              {['About Aureum', 'Craftsmanship', 'Journal', 'Contact', 'Boutiques'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="group inline-flex items-center font-['Inter'] text-sm text-gray-400 transition-colors hover:text-[#D4AF37]"
                  >
                    <span className="relative">
                      {link}
                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4"
          >
            <h4 className="mb-6 font-['Playfair_Display'] text-lg font-semibold text-white">
              Stay Connected
            </h4>
            <p className="mb-6 font-['Inter'] text-sm text-gray-400">
              Subscribe to receive exclusive updates, new releases, and special offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="relative">
              <div className="relative flex">
                <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 border border-zinc-800 bg-zinc-900/50 px-12 py-3 font-['Inter'] text-sm text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-[#D4AF37]"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-[#D4AF37] bg-[#D4AF37] px-6 transition-all duration-300 hover:bg-transparent"
                >
                  <ArrowRight className="h-4 w-4 text-black transition-colors hover:text-[#D4AF37]" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-zinc-900 pt-8 md:flex-row"
        >
          <p className="font-['Inter'] text-xs text-gray-600">
            © 2026 Aureum Watches. All rights reserved. Crafted with precision in Switzerland.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Warranty'].map((link) => (
              <a
                key={link}
                href="#"
                className="font-['Inter'] text-xs text-gray-600 transition-colors hover:text-[#D4AF37]"
              >
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
