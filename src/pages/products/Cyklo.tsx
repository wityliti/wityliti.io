import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BatteryCharging, Bike, ExternalLink, IndianRupee, Receipt, ShieldCheck, Users2 } from 'lucide-react';

const pillars = [
  {
    title: 'Same price as offline',
    desc: 'No inflated menus, no dark patterns, no hidden platform fees at checkout.',
    icon: <Receipt className="w-7 h-7 text-cyan-400" />,
  },
  {
    title: 'Rider-owned cooperatives',
    desc: 'Delivery is performed by independent cooperatives formed and owned by riders.',
    icon: <Users2 className="w-7 h-7 text-indigo-400" />,
  },
  {
    title: 'Flat delivery pricing',
    desc: 'Upfront, predictable fees—no surge pricing, ever.',
    icon: <IndianRupee className="w-7 h-7 text-emerald-400" />,
  },
  {
    title: 'EV-first by design',
    desc: 'Cycle-based delivery optimized for dense, short routes—lower cost and emissions.',
    icon: <BatteryCharging className="w-7 h-7 text-emerald-400" />,
  },
];

const feeCards = [
  { label: 'Up to 2 km', value: '₹39' },
  { label: '2–3 km', value: '₹44' },
  { label: 'Heavy / late', value: '₹49' },
  { label: 'Platform fee', value: '₹3–6' },
];

const flow = [
  {
    title: 'Customer orders',
    desc: 'Customers order from local restaurants at original prices.',
  },
  {
    title: 'Restaurant prepares',
    desc: 'Restaurants receive orders without commission cuts.',
  },
  {
    title: 'Co-op delivers',
    desc: 'A rider cooperative handles routing, delivery, and payout operations.',
  },
  {
    title: 'CYKLO coordinates',
    desc: 'The platform coordinates routing and payment flows with audit-safe separation.',
  },
];

export default function CykloProduct() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between gap-6 mb-10">
              <Link to="/products" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                ← Back to Products
              </Link>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-medium border border-cyan-500/20">
                Product
              </span>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7">
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                  className="text-6xl md:text-8xl font-display font-bold leading-[0.9]"
                >
                  CYKLO
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="mt-6 text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
                >
                  A people-owned, EV-first last‑mile delivery network—built to deliver with honesty, dignity, and efficiency.
                </motion.p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center bg-foreground text-background px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-400 hover:text-white transition-all hover:scale-105 active:scale-95"
                  >
                    Start a Pilot
                  </Link>
                  <a
                    href="https://cyklo.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-lg bg-cyan-500 text-white hover:bg-cyan-600 transition-colors"
                  >
                    Visit Site <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.02] overflow-hidden"
                >
                  <div className="relative p-8 bg-cover bg-center" style={{ backgroundImage: "url(/assets/products/cyklo.jpg)" }}>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/25 backdrop-blur-sm" />
                    <div className="relative">
                      <div className="flex items-center justify-between text-white">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-xl bg-cyan-500/15 border border-cyan-500/20">
                            <Bike className="w-6 h-6 text-cyan-400" />
                          </div>
                          <div>
                            <div className="font-bold">Fee Transparency</div>
                            <div className="text-xs text-white/80">Indicative delivery pricing</div>
                          </div>
                        </div>
                        <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                          <ShieldCheck className="w-5 h-5 text-emerald-400" />
                        </div>
                      </div>

                      <div className="mt-7 grid grid-cols-2 gap-4">
                        {feeCards.map((c) => (
                          <div key={c.label} className="rounded-2xl border border-white/15 bg-black/35 backdrop-blur-md p-4">
                            <div className="text-xs text-white/80">{c.label}</div>
                            <div className="mt-1 font-mono text-lg text-white drop-shadow">{c.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/10 p-6 bg-background/30">
                    <div className="text-sm text-muted-foreground">
                      GST applied only on CYKLO’s platform fee. Audit-safe role separation.
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <section className="mt-24">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pillars.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ delay: i * 0.08 }}
                    className="rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors p-7"
                  >
                    <div className="mb-5 p-3 rounded-2xl bg-white/5 border border-white/5 w-fit">{p.icon}</div>
                    <div className="text-xl font-display font-bold mb-2">{p.title}</div>
                    <div className="text-muted-foreground leading-relaxed">{p.desc}</div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section id="model" className="mt-24 rounded-[2rem] border border-white/10 bg-white/[0.02] overflow-hidden">
              <div className="p-10 md:p-14">
                <div className="text-3xl md:text-4xl font-display font-bold">The delivery model</div>
                <div className="mt-3 text-muted-foreground text-lg max-w-2xl">
                  CYKLO coordinates orders and payments, while independent rider cooperatives handle delivery operations.
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {flow.map((s, i) => (
                    <motion.div
                      key={s.title}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ delay: i * 0.08 }}
                      className="rounded-2xl border border-white/10 bg-background/40 p-6"
                    >
                      <div className="font-mono text-xs tracking-[0.35em] text-muted-foreground/70">PHASE {(i + 1).toString().padStart(2, '0')}</div>
                      <div className="mt-3 text-2xl font-display font-bold">{s.title}</div>
                      <div className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
