import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Shield, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import LogoMark from '@/components/ui/LogoMark';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  {
    name: 'Services',
    path: '#',
    children: [
      { name: 'Sustainability Software', path: '/sustainability-software' },
      { name: 'IoT & Sensor Networks', path: '/iot-solutions' },
      { name: 'ESG & Compliance', path: '/esg-compliance' },
      { name: 'Enterprise Security', path: '/cyber-security' },
      { name: 'Cloud Security', path: '/cloud-security' },
      { name: 'Resilience Operations', path: '/resilience-ops' }
    ]
  },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Blog', path: '/blog' },
  { name: 'About', path: '/about' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Floating Navigation */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-6 left-0 right-0 z-50 hidden md:flex justify-center pointer-events-none"
      >
        <div className={cn(
          "pointer-events-auto flex items-center gap-2 p-2 rounded-full border transition-all duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/20"
            : "bg-transparent border-transparent"
        )}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors group">
            <div className="relative w-6 h-6 flex items-center justify-center">
              <LogoMark className="w-5 h-5 absolute transition-all duration-300 group-hover:scale-0" />
              <Shield className="w-5 h-5 text-cyan-400 absolute scale-0 transition-all duration-300 group-hover:scale-100" />
            </div>
            <span className="font-headline font-semibold text-lg tracking-tight">
              Wityliti
            </span>
          </Link>

          {/* Nav Items */}
          <nav className="flex items-center px-2" onMouseLeave={() => setHoveredItem(null)}>
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setHoveredItem(item.name)}
              >
                {item.children ? (
                  <button className="relative px-5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group flex items-center gap-1">
                    {item.name}
                    <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                    <span className="absolute inset-x-4 -bottom-px h-px bg-gradient-to-r from-emerald-400/0 via-emerald-400/70 to-emerald-400/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className="relative px-5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group block"
                  >
                    {item.name}
                    <span className="absolute inset-x-4 -bottom-px h-px bg-gradient-to-r from-emerald-400/0 via-emerald-400/70 to-emerald-400/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && hoveredItem === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-56"
                  >
                    <div className="bg-background/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl p-2 flex flex-col gap-1 overflow-hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          className="px-4 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors text-center"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <Link to="/contact" className="bg-foreground text-background px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-400 hover:text-white transition-all hover:scale-105 active:scale-95">
            Start Project
          </Link>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center bg-background/50 backdrop-blur-lg border-b border-white/5">
        <Link to="/" className="flex items-center gap-2">
          <LogoMark className="w-6 h-6" />
          <span className="font-headline font-semibold text-lg">Wityliti</span>
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-4 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {item.children ? (
                    <div className="space-y-4">
                      <div className="text-3xl font-display font-bold text-muted-foreground">{item.name}</div>
                      <div className="pl-4 border-l border-white/10 flex flex-col gap-4">
                        {item.children.map(child => (
                          <Link
                            key={child.name}
                            to={child.path}
                            onClick={() => setIsOpen(false)}
                            className="text-xl font-medium text-muted-foreground hover:text-foreground"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="text-3xl font-display font-bold text-muted-foreground hover:text-foreground"
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
