import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Leaf, Bike, ArrowRight, ExternalLink, Globe, BarChart3,
  CheckCircle2, Satellite, Shield, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 'afforestation',
    name: 'Afforestation.com',
    tagline: 'The OS for Planetary Regeneration',
    description: 'Satellite imagery, drone mapping, and IoT sensors verify carbon credits with 99.9% accuracy.',
    status: 'Beta Access Open',
    statusColor: 'emerald',
    icon: <Leaf className="w-10 h-10" />,
    gradient: 'from-emerald-500 to-emerald-600',
    stats: [
      { label: 'Verification Accuracy', value: '99.9%' },
      { label: 'Projects Active', value: '47' },
      { label: 'Trees Tracked', value: '2.4M' },
    ],
    features: ['Real-time satellite monitoring', 'Immutable carbon ledger', 'Audit-ready ESG reports'],
    link: '/products/afforestation',
    externalUrl: 'https://afforestation.com',
  },
  {
    id: 'cyklo',
    name: 'CYKLO',
    tagline: 'Fair, Sustainable Last-Mile Delivery',
    description: 'A people-owned delivery platform built as infrastructure, not an extractive marketplace.',
    status: 'Pilot Programs',
    statusColor: 'cyan',
    icon: <Bike className="w-10 h-10" />,
    gradient: 'from-cyan-500 to-cyan-600',
    stats: [
      { label: 'Platform Commission', value: '0%' },
      { label: 'Fleet', value: '100% EV' },
      { label: 'Avg. Delivery', value: '₹39' },
    ],
    features: ['Rider cooperatives', 'Transparent pricing', 'Carbon-negative operations'],
    link: '/products/cyklo',
    externalUrl: 'https://cyklo.in',
  },
];

const techStack = [
  {
    icon: <Satellite className="w-7 h-7 text-cyan-400" />,
    title: 'Orbital Verification',
    desc: 'Multi-spectral satellite imagery for ground-truth validation'
  },
  {
    icon: <Shield className="w-7 h-7 text-emerald-400" />,
    title: 'Zero-Trust Architecture',
    desc: 'Every transaction verified, every access authenticated'
  },
  {
    icon: <Zap className="w-7 h-7 text-indigo-400" />,
    title: 'Edge Computing',
    desc: 'On-device ML inference for real-time environmental data'
  },
];

export default function Products() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="container mx-auto px-4 mb-24">
          <motion.div
            initial={reduceMotion ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-[0.95]">
              Building <span className="text-emerald-400">Impact</span>,<br />
              Delivering <span className="text-cyan-400">Trust</span>.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Products that create measurable environmental impact, backed by enterprise-grade security and real-time verification.
            </p>

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-sm text-muted-foreground">2 Products Live</span>
              </span>
              <span className="w-px h-4 bg-white/10" />
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                <span className="text-sm text-muted-foreground">99.9% Accuracy</span>
              </span>
            </div>
          </motion.div>
        </section>

        {/* Products Grid */}
        <section className="container px-4 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, idx) => (
              <motion.article
                key={product.id}
                initial={reduceMotion ? {} : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative"
              >
                {/* Card with glass effect */}
                <div className={`h-full p-8 rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/10 hover:border-white/20 shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 relative overflow-hidden`}>


                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-white mb-6`}>
                    {product.icon}
                  </div>

                  {/* Status Badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border mb-4 ${product.statusColor === 'emerald' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'}`}>
                    <span className="relative flex h-2 w-2">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${product.statusColor === 'emerald' ? 'bg-emerald-400' : 'bg-cyan-400'}`} />
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${product.statusColor === 'emerald' ? 'bg-emerald-500' : 'bg-cyan-500'}`} />
                    </span>
                    {product.status}
                  </div>

                  {/* Title & Tagline */}
                  <h2 className="text-2xl md:text-3xl font-display font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                    {product.name}
                  </h2>
                  <p className="font-headline text-muted-foreground mb-4">
                    {product.tagline}
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-3 mb-6 py-4 border-y border-white/5">
                    {product.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="font-mono text-lg font-bold text-foreground">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex gap-3">
                    <Link
                      to={product.link}
                      className="flex-1 px-4 py-3 rounded-full font-semibold inline-flex items-center justify-center gap-2 transition-all border border-white/10 hover:bg-white/5"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href={product.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 px-4 py-3 rounded-full font-semibold inline-flex items-center justify-center gap-2 transition-all bg-gradient-to-r ${product.gradient} text-white hover:shadow-lg`}
                    >
                      Visit Site <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="container px-4">
          <div className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/5">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">
                Verified Infrastructure
              </h3>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Every product is built on our battle-tested technology stack
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {techStack.map((tech) => (
                <div key={tech.title} className="text-center">
                  <div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/5 mb-4">
                    {tech.icon}
                  </div>
                  <h4 className="font-headline font-semibold text-lg mb-2">{tech.title}</h4>
                  <p className="text-sm text-muted-foreground">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
