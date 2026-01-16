import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BarChart3, CheckCircle2, ExternalLink, Globe, Leaf, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: 'Satellite Verification',
    desc: 'Orbital monitoring validates regeneration at scale with consistent evidence trails.',
    icon: <Globe className="w-7 h-7 text-cyan-400" />,
  },
  {
    title: 'Ground Truth via IoT',
    desc: 'Sensor networks confirm soil health, humidity, and growth signals in near real time.',
    icon: <Leaf className="w-7 h-7 text-emerald-400" />,
  },
  {
    title: 'Audit-Ready Ledger',
    desc: 'Structured reporting for credit issuance, compliance, and transparent allocation.',
    icon: <BarChart3 className="w-7 h-7 text-indigo-400" />,
  },
  {
    title: 'Fraud Resistance',
    desc: 'Security-first workflows that prevent double counting and preserve integrity.',
    icon: <ShieldCheck className="w-7 h-7 text-rose-400" />,
  },
];

const steps = [
  {
    title: 'Register a Project',
    desc: 'Define boundaries, baseline data, and verification objectives.',
  },
  {
    title: 'Instrument the Site',
    desc: 'Deploy sensors and data sources that feed the verification pipeline.',
  },
  {
    title: 'Monitor & Verify',
    desc: 'Continuously validate growth signals with anomaly detection and audit logs.',
  },
  {
    title: 'Issue & Report',
    desc: 'Generate compliance outputs and track credit issuance over time.',
  },
];

export default function AfforestationProduct() {
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
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
                Product
              </span>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7">
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[0.95] tracking-tight"
                >
                  Afforestation<span className="text-emerald-500">.com</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="mt-6 text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
                >
                  Verification infrastructure for carbon projects—combining satellite imagery, ground sensors, and audit-ready reporting.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="mt-10 flex flex-col sm:flex-row gap-4"
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center bg-foreground text-background px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-400 hover:text-white transition-all hover:scale-105 active:scale-95"
                  >
                    Request Access
                  </Link>
                  <a
                    href="https://afforestation.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
                  >
                    Visit Site <ExternalLink className="w-5 h-5" />
                  </a>
                </motion.div>
              </div>

              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.02] overflow-hidden"
                >
                  <div className="relative p-8 bg-cover bg-center" style={{ backgroundImage: "url(/assets/products/afforestation.jpg)" }}>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/20 backdrop-blur-sm" />
                    <div className="relative">
                      <div className="flex items-center justify-between text-white">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-xl bg-emerald-500/15 border border-emerald-500/20">
                            <Leaf className="w-6 h-6 text-emerald-400" />
                          </div>
                          <div>
                            <div className="font-bold">Regeneration Index</div>
                            <div className="text-xs text-white/80">Live verification signals</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-mono text-3xl text-emerald-300 drop-shadow-md">0.92</div>
                          <div className="text-xs text-white/80">Confidence</div>
                        </div>
                      </div>
                      <div className="mt-7 grid grid-cols-2 gap-4">
                        <Metric label="NDVI Trend" value="↑ Stable" tone="text-emerald-400" />
                        <Metric label="Soil Health" value="Good" tone="text-cyan-400" />
                        <Metric label="Anomalies" value="Low" tone="text-indigo-400" />
                        <Metric label="Audit Logs" value="Ready" tone="text-rose-400" />
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-white/10 p-4 bg-background/60">
                    <div className="flex items-center gap-2 text-[11px] text-foreground whitespace-nowrap">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Evidence-first verification designed for compliance.
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <section id="capabilities" className="mt-24">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ delay: i * 0.08 }}
                    className="rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors p-7"
                  >
                    <div className="mb-5 p-3 rounded-2xl bg-white/5 border border-white/5 w-fit">{f.icon}</div>
                    <div className="text-xl font-display font-bold mb-2">{f.title}</div>
                    <div className="text-muted-foreground leading-relaxed">{f.desc}</div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="mt-24 rounded-[2rem] border border-white/10 bg-white/[0.02] overflow-hidden">
              <div className="p-10 md:p-14">
                <div className="text-3xl md:text-4xl font-display font-bold">How it works</div>
                <div className="mt-3 text-muted-foreground text-lg max-w-2xl">
                  A clean pipeline from field data to verified reporting—with security and provenance built in.
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {steps.map((s, i) => (
                    <motion.div
                      key={s.title}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ delay: i * 0.08 }}
                      className="rounded-2xl border border-white/10 bg-background/40 p-6"
                    >
                      <div className="font-mono text-xs tracking-[0.35em] text-muted-foreground/70">STEP {(i + 1).toString().padStart(2, '0')}</div>
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

function Metric({ label, value, tone }: { label: string; value: string; tone: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-black/35 backdrop-blur-md p-4">
      <div className="text-xs text-white/80">{label}</div>
      <div className={`mt-1 font-mono text-lg drop-shadow ${tone}`}>{value}</div>
    </div>
  );
}
