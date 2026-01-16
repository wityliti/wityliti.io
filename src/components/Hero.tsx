import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import InteractiveBackground from './ui/InteractiveBackground';
import AnimatedTagline from './ui/AnimatedTagline';
import Lenis from '@studio-freight/lenis';

export default function Hero() {
  // Initialize Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-background to-background z-0" />
        <InteractiveBackground />
      </div>

      <motion.div style={{ opacity }} className="container relative z-20 px-4 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm font-medium text-emerald-400 flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Rebuilding the Web for the AI Era
          </div>
        </motion.div>

        <div className="relative mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <AnimatedTagline
              className="relative inline-block"
              variant="stacked"
              aClassName="relative inline-flex text-5xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight leading-[0.9] md:leading-[0.85] text-foreground"
              midClassName="pointer-events-none inline-block text-[10px] md:text-xs font-mono tracking-[0.55em] text-muted-foreground/70"
              bClassName="relative inline-flex text-5xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight leading-[0.9] md:leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 animate-gradient-x"
            />
          </motion.div>
          
          <motion.div style={{ y: y1 }} className="absolute -top-10 -left-10 hidden md:block opacity-20 text-emerald-500">
            <svg width="200" height="200" viewBox="0 0 100 100" className="animate-[spin_20s_linear_infinite]">
              <path d="M50 0 A50 50 0 0 1 50 100 A50 50 0 0 1 50 0" fill="none" stroke="currentColor" strokeDasharray="5,5" />
            </svg>
          </motion.div>
          <motion.div style={{ y: y2 }} className="absolute -bottom-10 -right-10 hidden md:block opacity-20 text-blue-500">
            <svg width="150" height="150" viewBox="0 0 100 100" className="animate-[spin_15s_linear_infinite_reverse]">
              <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" />
            </svg>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 font-light leading-relaxed"
        >
          We are <span className="text-foreground font-medium">Wityliti</span>. A Climate Tech First agency engineering the future.
          We fuse <span className="text-emerald-400">Environmental Intelligence</span> with military-grade <span className="text-cyan-400">Cyber Security</span> to build resilient digital ecosystems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <button className="group relative px-8 py-4 bg-foreground text-background rounded-full font-semibold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2 group-hover:text-white transition-colors">
              Our Vision <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button className="px-8 py-4 text-foreground rounded-full font-semibold text-lg border border-white/10 hover:border-white/20 hover:bg-white/5 hover:text-emerald-400 transition-colors">
            Explore Services
          </button>
        </motion.div>
      </motion.div>
      
      <motion.div 
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 right-10 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-emerald-500 to-transparent opacity-50" />
      </motion.div>
    </section>
  );
}
