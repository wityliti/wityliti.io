import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Truck, Route, Cpu, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ScrollEngineCaseStudy() {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-cyan-500/30">
            <Header />

            <main className="pt-32 pb-24">
                {/* Hero Section */}
                <section className="relative px-4 mb-24">
                    <div className="container mx-auto max-w-6xl">
                        <Link to="/case-studies" className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-600 mb-8 transition-colors group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Case Studies
                        </Link>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-6"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-cyan-100 rounded-xl text-cyan-600">
                                        <Truck className="w-8 h-8" />
                                    </div>
                                    <span className="text-cyan-600 font-bold tracking-wide uppercase text-sm bg-cyan-50 px-4 py-1.5 rounded-full border border-cyan-100">
                                        AI Logistics
                                    </span>
                                </div>

                                <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 leading-tight">
                                    Driving Smarter <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Deliveries</span>
                                </h1>

                                <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                                    Optimizing last-mile delivery for Shopify merchants with ScrollEngine. We engineered the AI routing algorithms and real-time tracking that power thousands of daily shipments.
                                </p>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    {['AI Routing Algorithm', 'Shopify App', 'Real-time Tracking'].map((tag) => (
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
                                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent mix-blend-multiply" />
                                    <img
                                        src="/assets/case-studies/scrollengine.svg"
                                        alt="ScrollEngine Dashboard"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                {/* Decoration */}
                                <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
                                <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
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
                                <p className="text-xl font-bold text-slate-900">Algorithm & Product Engineering</p>
                                <div className="mt-2 text-sm text-slate-500">Core Logic, Shopify Integration, Dashboard</div>
                            </div>
                            <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                                <h3 className="text-slate-500 font-medium mb-2">Timeline</h3>
                                <p className="text-xl font-bold text-slate-900">6 Months</p>
                                <div className="mt-2 text-sm text-slate-500">Continuous iterative development</div>
                            </div>
                            <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                                <h3 className="text-slate-500 font-medium mb-2">Core Stack</h3>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {['Python', 'Redis', 'React', 'Google Maps API'].map(tech => (
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
                        <span className="text-cyan-600 font-bold tracking-wider uppercase text-sm mb-4 block">The Challenge</span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8">
                            The Last-Mile Efficiency Puzzle
                        </h2>
                        <div className="prose prose-lg prose-slate text-lg text-slate-600 leading-relaxed">
                            <p>
                                For small to medium Shopify merchants, last-mile delivery is often the most expensive and complex part of the supply chain. Existing solutions were either too expensive (enterprise-grade) or too simple (manual spreadsheets).
                            </p>
                            <p>
                                ScrollEngine aimed to democratize AI-powered logistics. They needed:
                            </p>
                            <ul className="grid gap-4 mt-6 list-none pl-0">
                                {[
                                    'An intelligent routing engine to minimize fuel and time.',
                                    'Seamless integration with the Shopify ecosystem.',
                                    'Real-time rider tracking for end-customers.',
                                    'A reliable system to handle peak-season order volumes.'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-cyan-500 shrink-0 mt-0.5" />
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
                                <span className="text-cyan-400 font-bold tracking-wider uppercase text-sm mb-4 block">The Solution</span>
                                <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
                                    Algorithmic Delivery Precision
                                </h2>
                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <div className="p-3 bg-cyan-500/10 rounded-xl h-fit border border-cyan-500/20">
                                            <Cpu className="w-6 h-6 text-cyan-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">Smart Routing Engine</h3>
                                            <p className="text-slate-400">Developed a custom Multi-Depot Vehicle Routing Problem (MDVRP) solver that optimizes routes in seconds, factoring in traffic, capacity, and time windows.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="p-3 bg-cyan-500/10 rounded-xl h-fit border border-cyan-500/20">
                                            <Zap className="w-6 h-6 text-cyan-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">Instant Shopify Sync</h3>
                                            <p className="text-slate-400">Built a robust webhook infrastructure to instantly ingest orders from Shopify stores, enabling "one-click" dispatching for merchants.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="p-3 bg-cyan-500/10 rounded-xl h-fit border border-cyan-500/20">
                                            <Route className="w-6 h-6 text-cyan-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">Live Tracking Experience</h3>
                                            <p className="text-slate-400">Created a branded, publicly accessible tracking page for end-customers, reducing "Where is my order?" support tickets by over 60%.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-[4/5] bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-white/5 p-4 shadow-2xl relative overflow-hidden">
                                    {/* Abstract Representation of Map/Routing */}
                                    <div className="absolute inset-0 opacity-20">
                                        {/* Fake Map Grid */}
                                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <pattern id="mapPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                                                </pattern>
                                            </defs>
                                            <rect width="100%" height="100%" fill="url(#mapPattern)" className="text-slate-500" />
                                        </svg>
                                    </div>

                                    <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                                        {/* Animated Nodes */}
                                        <div className="relative w-48 h-48">
                                            <motion.div
                                                animate={{ scale: [1, 1.1, 1] }}
                                                transition={{ duration: 4, repeat: Infinity }}
                                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-500 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.6)]"
                                            />
                                            {/* Orbiting 'Drivers' */}
                                            {[0, 120, 240].map((angle, i) => (
                                                <motion.div
                                                    key={i}
                                                    style={{ rotate: angle }}
                                                    animate={{ rotate: angle + 360 }}
                                                    transition={{ duration: 10 + i, repeat: Infinity, ease: "linear" }}
                                                    className="absolute top-0 left-0 w-full h-full"
                                                >
                                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full" />
                                                </motion.div>
                                            ))}
                                        </div>
                                        <div className="mt-8 bg-slate-950/80 backdrop-blur border border-cyan-500/20 rounded-xl p-4 w-64">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-xs text-slate-400">OPTIMIZATION</span>
                                                <span className="text-xs text-cyan-400 font-bold">98.4% EFFICIENCY</span>
                                            </div>
                                            <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: '98.4%' }}
                                                    transition={{ duration: 1.5 }}
                                                    className="h-full bg-cyan-500"
                                                />
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
                        <span className="text-cyan-600 font-bold tracking-wider uppercase text-sm mb-4 block">The Impact</span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-16">
                            Delivering Tangible ROI
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-8 rounded-3xl bg-cyan-50 border border-cyan-100">
                                <div className="text-4xl lg:text-5xl font-bold text-cyan-600 mb-4">30%</div>
                                <div className="text-slate-600 font-medium">Reduction in Delivery Costs</div>
                            </div>
                            <div className="p-8 rounded-3xl bg-cyan-50 border border-cyan-100">
                                <div className="text-4xl lg:text-5xl font-bold text-cyan-600 mb-4">5k+</div>
                                <div className="text-slate-600 font-medium">Daily Orders Processed</div>
                            </div>
                            <div className="p-8 rounded-3xl bg-cyan-50 border border-cyan-100">
                                <div className="text-4xl lg:text-5xl font-bold text-cyan-600 mb-4">60%</div>
                                <div className="text-slate-600 font-medium">Fewer WISMO Tickets</div>
                            </div>
                        </div>

                        <div className="mt-24 p-12 bg-slate-900 rounded-3xl text-white relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-20 group-hover:opacity-30 transition-opacity" />
                            <div className="relative z-10">
                                <h3 className="text-3xl font-display font-bold mb-6">Need to optimize your operations?</h3>
                                <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                                    From logistics algorithms to workflow automation, we engineer efficiency into your business core.
                                </p>
                                <Link to="/contact" className="inline-block px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-cyan-50 transition-colors">
                                    Contact Sales
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
