import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Globe, Leaf, Lock, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

const cases = [
  {
    id: 'tese',
    client: 'Tese.io',
    category: 'Sustainable Finance',
    title: 'Connecting Capital to Impact',
    description: 'A comprehensive ESG reporting platform that bridges the gap between sustainable businesses and green financing. We built a secure, real-time data pipeline for environmental metrics.',
    metrics: ['IoT Integration', 'Real-time ESG Data', 'Secure Reporting'],
    color: 'emerald',
    icon: <Globe className="w-12 h-12 text-emerald-400" />,
    gradient: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
    image: '/assets/case-studies/tese.svg'
  },
  {
    id: 'scrollengine',
    client: 'scrollengine.com',
    category: 'AI Logistics',
    title: 'Smarter Retail Delivery',
    description: 'Optimizing last-mile delivery for Shopify merchants using AI. We engineered the routing algorithms and real-time tracking dashboard that powers thousands of daily deliveries.',
    metrics: ['AI Routing', 'Shopify App', 'Real-time Tracking'],
    color: 'cyan',
    icon: <Truck className="w-12 h-12 text-cyan-400" />,
    gradient: 'from-cyan-500/20 via-cyan-500/5 to-transparent',
    image: '/assets/case-studies/scrollengine.svg'
  },
  {
    id: 'ogow',
    client: 'OGOW Health',
    category: 'Healthcare Security',
    title: 'Securing Patient Data',
    description: <span>End-to-end cyber security and threat detection for <a href="https://ogowhealth.com/en/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">OGOW Health</a> digital records. We performed rigorous VAPT to ensure HIPAA compliance and data sovereignty.</span>,
    metrics: ['End-to-End Security', 'Threat Detection', 'VAPT'],
    color: 'indigo',
    icon: <Lock className="w-12 h-12 text-indigo-400" />,
    gradient: 'from-indigo-500/20 via-indigo-500/5 to-transparent',
    image: '/assets/case-studies/ogow.svg'
  }
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-emerald-500/30">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-bold mb-6"
            >
              Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">Studies</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600"
            >
              Where we apply our "Nature Meets Code" philosophy to solve real-world problems.
            </motion.p>
          </div>

          {/* Cases List */}
          <div className="space-y-32">
            {cases.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={cn(
                  "flex flex-col gap-12 items-center",
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                )}
              >
                {/* Visual Side */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-tr rounded-3xl blur-2xl opacity-40 transition-opacity duration-500 group-hover:opacity-60",
                    project.gradient
                  )} />
                  <div className="relative aspect-video bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                    {/* Banner Image */}
                    <img
                      src={project.image}
                      alt={`${project.client} case study`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback if image missing
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement?.classList.add(project.color === 'emerald' ? 'bg-emerald-50' : project.color === 'cyan' ? 'bg-cyan-50' : 'bg-indigo-50');
                      }}
                    />

                    {/* Overlay - lighter for better visibility of image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                    {/* Floating Icon */}

                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <div className={cn(
                    "relative p-8 md:p-10 rounded-3xl border transition-all duration-300 hover:translate-y-[-5px] bg-white shadow-sm hover:shadow-md",
                    `border-slate-200 hover:border-${project.color}-500/30`
                  )}>
                    {/* Decorative Gradient Blob */}
                    <div className={cn(
                      "absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br rounded-full blur-[100px] opacity-10 pointer-events-none",
                      project.gradient
                    )} />

                    <div className="space-y-6 relative z-10">
                      <div className="flex items-center gap-4">
                        <span className={cn("px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-slate-50 border border-slate-200", `text-${project.color}-600`)}>
                          {project.client}
                        </span>
                        <span className="text-sm text-slate-500 font-medium">{project.category}</span>
                      </div>

                      <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-slate-900">
                        {project.title}
                      </h2>

                      <p className="text-lg text-slate-600 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-3 pt-2">
                        {project.metrics.map((metric) => (
                          <span
                            key={metric}
                            className="px-3 py-1 text-sm text-slate-600 bg-slate-100/80 rounded-lg border border-slate-200"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>

                      <div className="pt-8">
                        <Link to={`/case-studies/${project.id}`}>
                          <motion.button
                            whileHover={{ x: 10 }}
                            className={cn(
                              "flex items-center gap-2 text-lg font-semibold transition-colors",
                              `text-${project.color}-600 hover:text-${project.color}-500`
                            )}
                          >
                            Read Full Story <ArrowRight className="w-5 h-5" />
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
