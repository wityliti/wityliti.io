import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion, useReducedMotion } from 'framer-motion';
import { Users, Target, Zap } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const stats = [
  { label: 'Carbon Offset', value: '850', unit: 'Tons' },
  { label: 'Projects Delivered', value: '24', unit: 'Completed' },
  { label: 'Global Clients', value: '8', unit: 'Countries' },
];

// Rotating identity pairs
const IDENTITY_PAIRS = [
  { role: 'ARCHITECTS', value: 'RESILIENCE' },
  { role: 'BUILDERS', value: 'TRUST' },
  { role: 'ENGINEERS', value: 'SUSTAINABILITY' },
  { role: 'GUARDIANS', value: 'INTEGRITY' },
  { role: 'PIONEERS', value: 'INNOVATION' },
];

// Scramble hook
function useScramble(target: string, enabled: boolean, durationMs = 400) {
  const [text, setText] = useState(target);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(0);

  useEffect(() => {
    if (!enabled) {
      setText(target);
      return;
    }

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    startRef.current = performance.now();

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const maxLen = target.length;

    const tick = () => {
      const now = performance.now();
      const t = Math.min((now - startRef.current) / durationMs, 1);
      const lockCount = Math.floor(t * maxLen);
      let next = '';

      for (let i = 0; i < maxLen; i++) {
        if (i < lockCount) {
          next += target[i] ?? '';
        } else {
          next += letters[Math.floor(Math.random() * letters.length)] ?? '';
        }
      }

      setText(next);

      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setText(target);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [durationMs, enabled, target]);

  return text;
}

function ScrambleWord({ word, isActive, className }: { word: string; isActive: boolean; className?: string }) {
  const reduceMotion = useReducedMotion();
  const scrambledText = useScramble(word, isActive && !reduceMotion, 350);
  return <span className={className}>{scrambledText}</span>;
}

function RotatingIdentity() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrambling, setIsScrambling] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const interval = setInterval(() => {
      setIsScrambling(true);
      setCurrentIndex((prev) => (prev + 1) % IDENTITY_PAIRS.length);
      setTimeout(() => setIsScrambling(false), 400);
    }, 3000);

    const initialTimeout = setTimeout(() => setIsScrambling(false), 400);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, [reduceMotion]);

  const current = IDENTITY_PAIRS[currentIndex];

  return (
    <div className="flex flex-col">
      {/* First word - ARCHITECTS/BUILDERS/etc */}
      <ScrambleWord word={current.role} isActive={isScrambling} className="text-emerald-400" />

      {/* OF - on its own line, smaller and subtle */}
      <span className="text-muted-foreground/50 text-4xl md:text-6xl">OF</span>

      {/* Last word - RESILIENCE/TRUST/etc */}
      <ScrambleWord word={current.value} isActive={isScrambling} className="text-cyan-400" />

      <span className="sr-only">
        {IDENTITY_PAIRS.map(p => `${p.role} of ${p.value}`).join(', ')}
      </span>
    </div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          {/* Hero Section */}
          <div className="max-w-5xl mx-auto mb-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95]">
                <span className="block mb-2">WE ARE THE</span>
                <RotatingIdentity />
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-sans font-light max-w-3xl mx-auto"
            >
              Wityliti was born from a simple observation: The most sustainable systems in nature are also the most secure. We apply biomimicry principles to digital infrastructure.
            </motion.p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 flex flex-col items-center justify-center text-center"
              >
                <div className="flex flex-col items-center gap-1 mb-3">
                  <span className="text-6xl font-display font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                  <span className="text-lg font-mono text-emerald-400 uppercase tracking-widest">
                    {stat.unit}
                  </span>
                </div>
                <div className="text-muted-foreground text-lg font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Core Values */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Our DNA</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We are a collective of environmental scientists, ethical hackers, and full-stack engineers. We don't just write code; we engineer ecosystems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="group p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 w-fit mb-6">
                  <Target className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Purpose-Driven Code</h3>
                <p className="text-muted-foreground leading-relaxed">Every line of code we write is optimized for energy efficiency and environmental impact.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="group p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 w-fit mb-6">
                  <Zap className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Zero-Trust Security</h3>
                <p className="text-muted-foreground leading-relaxed">We assume breach and verify explicitly. Your data is your most valuable asset.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="group p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 w-fit mb-6">
                  <Users className="w-7 h-7 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Radical Transparency</h3>
                <p className="text-muted-foreground leading-relaxed">Open source where possible. Clear metrics. No greenwashing.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function ValueRow({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 p-2 bg-white/5 rounded-lg h-fit">{icon}</div>
      <div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}
