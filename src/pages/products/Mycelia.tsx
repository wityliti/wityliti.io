import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Truck, Route, Cpu, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MyceliaProduct() {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-cyan-500/30">
            <Header />

            <main className="pt-32 pb-24">
                {/* Hero Section */}
                <section className="relative px-4 mb-24">
                    <div className="container mx-auto max-w-6xl">
                        <Link to="/products" className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-600 mb-8 transition-colors group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Products
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
                                        Bio-Inspired Logistics
                                    </span>
                                </div>

                                <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 leading-tight uppercase">
                                    MYCELIA <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-emerald-500">AI.</span>
                                </h1>

                                <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                                    Adaptive routing logic inspired by nature’s most efficient networks. Mycelia AI optimizes last-mile delivery flows with biological precision and sustainable architecture.
                                </p>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    {['Biomimetic Routing', 'Shopify Native', 'Real-time Network Mesh'].map((tag) => (
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
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 to-black text-white p-12">
                                        <div className="text-center">
                                            <Globe className="w-20 h-20 text-cyan-500 mx-auto mb-6 animate-pulse" />
                                            <h3 className="text-2xl font-display font-bold tracking-widest uppercase">Network Visualization</h3>
                                            <p className="text-slate-400 mt-2">Active Node Optimization in Real-Time</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
                                <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* The Tech Section */}
                <section className="py-24 px-4 bg-slate-900 text-white overflow-hidden relative">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                    <div className="container mx-auto max-w-6xl relative z-10">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className="text-cyan-400 font-bold tracking-wider uppercase text-sm mb-4 block">Engine Logic</span>
                                <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 uppercase">
                                    Nature's Internet for <span className="text-emerald-400">Logistics.</span>
                                </h2>
                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <div className="p-3 bg-cyan-500/10 rounded-xl h-fit border border-cyan-500/20">
                                            <Cpu className="w-6 h-6 text-cyan-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">Neural Route Planning</h3>
                                            <p className="text-slate-400">Proprietary algorithms that mimic mycelial growth to find the path of least resistance across dense urban environments.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="p-3 bg-emerald-500/10 rounded-xl h-fit border border-emerald-500/20">
                                            <Zap className="w-6 h-6 text-emerald-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">Dynamic Load Balancing</h3>
                                            <p className="text-slate-400">Instantly rebalances delivery density as orders flow in, ensuring no single node or driver is overwhelmed.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="p-3 bg-cyan-500/10 rounded-xl h-fit border border-cyan-500/20">
                                            <Route className="w-6 h-6 text-cyan-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">Sustainable Last-Mile</h3>
                                            <p className="text-slate-400">Specifically engineered to reduce the carbon footprint of local delivery by minimizing idle time and total miles traveled.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="aspect-[4/5] bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-white/5 p-4 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center">
                                    <div className="text-center max-w-xs">
                                        <div className="text-5xl font-bold text-cyan-400 mb-2">99.2%</div>
                                        <div className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-6">Network Efficiency</div>
                                        <div className="w-full bg-slate-700 rounded-full h-2 mb-8">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '99.2%' }}
                                                className="h-full bg-cyan-500"
                                            />
                                        </div>
                                        <p className="text-slate-300 text-sm">
                                            Biological systems never waste energy. Neither does Mycelia AI.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-24 px-4">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-8 uppercase">
                            Ready to <span className="text-cyan-600">Optimize?</span>
                        </h2>
                        <p className="text-xl text-slate-600 mb-12">
                            Join the waitlist for the AI logistics platform that respects the planet as much as your bottom line.
                        </p>
                        <Link to="/contact" className="px-10 py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-cyan-600 transition-all transform hover:scale-105">
                            Apply for Beta Access
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
