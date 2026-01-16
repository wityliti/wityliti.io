import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Globe, TrendingUp, ShieldCheck, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TeseCaseStudy() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-emerald-500/30">
      <Header />

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="relative px-4 mb-24">
          <div className="container mx-auto max-w-6xl">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 mb-8 transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Case Studies
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-100 rounded-xl text-emerald-600">
                    <Globe className="w-8 h-8" />
                  </div>
                  <span className="text-emerald-600 font-bold tracking-wide uppercase text-sm bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100">
                    Sustainable Finance
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 leading-tight">
                  Connecting Capital to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Impact</span>
                </h1>

                <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                  How we helped Tese.io build a secure, real-time ESG data pipeline to bridge the gap between sustainable businesses and green financing.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  {['IoT Integration', 'Real-time Data', 'Secure Reporting'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-50 relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent mix-blend-multiply" />
                  <img
                    src="/assets/case-studies/tese.svg"
                    alt="Tese.io Dashboard"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Decoration */}
                <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
                <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Overview Stats */}
        <section className="bg-slate-50 py-16 border-y border-slate-200">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-slate-500 font-medium mb-2">Role</h3>
                <p className="text-xl font-bold text-slate-900">End-to-End Engineering</p>
                <div className="mt-2 text-sm text-slate-500">Architecture, Frontend, Backend, Security</div>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-slate-500 font-medium mb-2">Timeline</h3>
                <p className="text-xl font-bold text-slate-900">4 Months</p>
                <div className="mt-2 text-sm text-slate-500">From concept to MVP launch</div>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-slate-500 font-medium mb-2">Core Stack</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['React', 'Node.js', 'PostgreSQL', 'AWS IoT'].map(tech => (
                    <span key={tech} className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-600 font-bold border border-slate-200">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-4 block">The Challenge</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8">
              Verification Gap in Green Finance
            </h2>
            <div className="prose prose-lg prose-slate text-lg text-slate-600 leading-relaxed">
              <p>
                ESG (Environmental, Social, and Governance) investing is booming, but it suffers from a critical data problem: verification. Financial institutions struggle to trust self-reported data from sustainable businesses, and businesses struggle to provide verifiable, real-time proof of their impact.
              </p>
              <p>
                Tese.io needed a platform that could:
              </p>
              <ul className="grid gap-4 mt-6 list-none pl-0">
                {[
                  'Ingest disparate data from manual reports and IoT sensors.',
                  'Provide immutable proof of environmental metrics.',
                  'Visualise complex data for financial auditors.',
                  'Scale securely to handle sensitive financial and operational data.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="py-24 px-4 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-emerald-400 font-bold tracking-wider uppercase text-sm mb-4 block">The Solution</span>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
                  A Trust-Layer for ESG Data
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="p-3 bg-emerald-500/10 rounded-xl h-fit border border-emerald-500/20">
                      <Database className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Unified Data Pipeline</h3>
                      <p className="text-slate-400">We engineered a robust pipeline capable of normalizing data formats from various sources, ensuring consistency and reliability across the board.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="p-3 bg-emerald-500/10 rounded-xl h-fit border border-emerald-500/20">
                      <ShieldCheck className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Audit-Grade Security</h3>
                      <p className="text-slate-400">Implemented military-grade encryption for data at rest and in transit, with granular access controls designed for financial auditors.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="p-3 bg-emerald-500/10 rounded-xl h-fit border border-emerald-500/20">
                      <TrendingUp className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Real-Time Visualization</h3>
                      <p className="text-slate-400">Built an intuitive React-based dashboard that turns complex datasets into actionable insights, enabling investors to make decisions in seconds, not weeks.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-white/5 p-4 shadow-2xl">
                  {/* Abstract Representation of Data Pipeline */}
                  <div className="w-full h-full rounded-2xl bg-slate-950 overflow-hidden relative flex flex-col justify-between p-6">
                    <div className="flex justify-between items-center mb-8">
                      <div className="h-3 w-24 bg-slate-800 rounded-full animate-pulse" />
                      <div className="h-8 w-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="h-2 w-2 rounded-full bg-slate-700" />
                          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${Math.random() * 60 + 20}%` }}
                              transition={{ duration: 1.5, delay: i * 0.1 }}
                              className="h-full bg-emerald-500/50"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 pt-8 border-t border-white/5">
                      <div className="flex justify-between text-xs text-slate-500 font-mono mb-2">
                        <span>INCOMING STREAMS</span>
                        <span>STATUS: ACTIVE</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        {[1, 2, 3, 4].map(i => (
                          <div key={i} className="h-16 bg-emerald-900/20 rounded border border-emerald-500/10 flex items-end justify-center pb-2">
                            <motion.div
                              initial={{ height: '0%' }}
                              whileInView={{ height: `${Math.random() * 80 + 20}%` }}
                              className="w-2 bg-emerald-500 rounded-t"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-4 block">The Impact</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-16">
              Empowering Sustainable Growth
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-100">
                <div className="text-4xl lg:text-5xl font-bold text-emerald-600 mb-4">50+</div>
                <div className="text-slate-600 font-medium">Sustainable Ventures Onboarded</div>
              </div>
              <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-100">
                <div className="text-4xl lg:text-5xl font-bold text-emerald-600 mb-4">100%</div>
                <div className="text-slate-600 font-medium">Data Reporting Accuracy</div>
              </div>
              <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-100">
                <div className="text-4xl lg:text-5xl font-bold text-emerald-600 mb-4">&lt;200ms</div>
                <div className="text-slate-600 font-medium">Dashboard Latency</div>
              </div>
            </div>

            <div className="mt-24 p-12 bg-slate-900 rounded-3xl text-white relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative z-10">
                <h3 className="text-3xl font-display font-bold mb-6">Ready to build your impact platform?</h3>
                <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                  Transform your sustainability goals into verifiable, data-driven reality with Wityliti's engineering expertise.
                </p>
                <Link to="/contact" className="inline-block px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-emerald-50 transition-colors">
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
