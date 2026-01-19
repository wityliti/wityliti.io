import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Mission() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={containerRef} className="py-32 bg-foreground text-background relative overflow-hidden">
      <div className="container px-4 relative z-10">
        <motion.div
          style={{ scale, opacity }}
          className="max-w-5xl mx-auto text-center"
        >
          <span className="text-emerald-400 font-medium tracking-wider uppercase mb-6 block">Our Philosophy</span>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-12">
            "We don't just write code.<br />
            We engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Resilience</span>."
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left text-lg md:text-xl text-background/80 leading-relaxed mb-16">
            <p>
              <span className="text-emerald-400 font-bold block mb-2">Builders</span>
              We pioneer sustainability software, climate tech, and deeptech innovations to actively reverse climate change, drive business sustainability, and accelerate the circular economy.
              We believe true innovation isn't just about speed—it's about survival.
            </p>
            <p>
              <span className="text-cyan-400 font-bold block mb-2">Defenders</span>
              We fortify complex enterprise networks with military-grade defense.
              By integrating proactive threat intelligence and zero-trust security frameworks, we guarantee business continuity in an unpredictable digital landscape.
              In a world of digital fragility, we ensure every byte of data remains uncompromised.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl md:text-4xl font-display font-bold leading-tight">
              Build it smart.<br />
              Secure it forever.
            </h3>
          </div>
        </motion.div>
      </div>

      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  );
}
