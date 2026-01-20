import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Truck, Route, Cpu, Zap, Globe, ShoppingCart, Settings, ZapOff, Activity, BarChart3, Database, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const platforms = [
    { name: 'Shopify', desc: 'Native App integration', icon: <ShoppingCart className="w-5 h-5" /> },
    { name: 'WooCommerce', desc: 'Plug-and-play plugin', icon: <Settings className="w-5 h-5" /> },
    { name: 'Magento', desc: 'Enterprise connector', icon: <Activity className="w-5 h-5" /> },
    { name: 'BigCommerce', desc: 'Seamless API sync', icon: <Globe className="w-5 h-5" /> },
    { name: 'Custom ERP', desc: 'RESTful API access', icon: <Cpu className="w-5 h-5" /> }
];

export default function WityLogixProduct() {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-cyan-500/30">
            <Header />

            <main className="pt-32 pb-24 space-y-32">
                {/* 1. Hero Section: Focused & Clean */}
                <section className="px-4">
                    <div className="container mx-auto max-w-6xl">
                        <Link to="/products" className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-600 mb-8 transition-colors group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Products
                        </Link>

                        <div className="max-w-4xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-6"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-cyan-100 rounded-lg text-cyan-600">
                                        <Truck className="w-6 h-6" />
                                    </div>
                                    <span className="text-cyan-600 font-bold tracking-widest uppercase text-xs">
                                        Intelligence-as-a-Utility
                                    </span>
                                </div>

                                <h1 className="text-6xl md:text-8xl font-display font-bold text-slate-900 leading-[0.9] uppercase tracking-tighter">
                                    Wity<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500">Logix.</span>
                                </h1>

                                <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-headline max-w-2xl">
                                    The definitive AI logistics layer for high-scale merchants. Industrial-grade precision for the last mile.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 2. Impact Section: High Signal/Results */}
                <section className="bg-slate-900 py-32 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

                    <div className="container mx-auto px-4 max-w-6xl relative z-10">
                        <div className="grid lg:grid-cols-2 gap-24 items-center">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 uppercase leading-tight">
                                    Quantifiable <br />
                                    <span className="text-cyan-400">Operational Alpha.</span>
                                </h2>
                                <p className="text-slate-400 text-lg leading-relaxed mb-12">
                                    WityLogix doesn't just route—it optimizes the entire financial unit of a delivery. By removing manual decision-making, we deliver immediate ROI.
                                </p>
                                <div className="flex flex-col gap-6">
                                    {[
                                        '30% Reduction in delivery overhead',
                                        '99.2% Network utilization rating',
                                        '60% Decrease in WISMO support tickets'
                                    ].map((check) => (
                                        <div key={check} className="flex items-center gap-4">
                                            <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center">
                                                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                                            </div>
                                            <span className="text-slate-200 font-medium">{check}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                    <BarChart3 className="w-10 h-10 text-cyan-400 mb-4" />
                                    <div className="text-4xl font-bold mb-2">30%</div>
                                    <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">Cost Saved</p>
                                </div>
                                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm md:translate-y-8">
                                    <Activity className="w-10 h-10 text-emerald-400 mb-4" />
                                    <div className="text-4xl font-bold mb-2">99%</div>
                                    <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">Efficiency</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Core Engine: Intelligence Section */}
                <section className="px-4">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-24">
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-6">The Core Engine</h2>
                            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
                                Our proprietary MDVRP solver and swarm intelligence algorithms power every delivery decision.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-16">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="space-y-6 p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-2xl hover:shadow-cyan-500/5"
                            >
                                <div className="p-4 bg-cyan-100 rounded-2xl w-fit text-cyan-600">
                                    <Zap className="w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-display font-bold uppercase">Neural Route Planning</h3>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    An advanced solver that processes thousands of variables in milliseconds—traffic, vehicle capacity, windows, and driver performance—to find the mathematically perfect path.
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5 }}
                                className="space-y-6 p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/5"
                            >
                                <div className="p-4 bg-indigo-100 rounded-2xl w-fit text-indigo-600">
                                    <Activity className="w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-display font-bold uppercase">Swarm Intelligence</h3>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    Collective fleet logic that self-corrects in real-time. If one driver is delayed, the entire "hive" recalibrates to ensure fulfillment SLAs are never breached.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 4. Connectivity Section: Ecosystem Sync */}
                <section className="bg-slate-50 py-32 border-y border-slate-200">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-24 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {platforms.map((platform) => (
                                        <div key={platform.name} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:border-cyan-500/30 transition-colors">
                                            <div className="text-slate-400 group-hover:text-cyan-500 transition-colors mb-4">{platform.icon}</div>
                                            <span className="font-bold text-slate-900 text-sm tracking-tight">{platform.name}</span>
                                        </div>
                                    ))}
                                    <div className="p-6 bg-slate-100 rounded-2xl border border-dashed border-slate-300 flex flex-col items-center justify-center text-center">
                                        <Database className="w-5 h-5 text-slate-400 mb-2" />
                                        <span className="text-xs font-bold text-slate-500 uppercase">API Native</span>
                                    </div>
                                </div>
                            </div>

                            <div className="order-1 lg:order-2 space-y-8">
                                <h2 className="text-4xl md:text-5xl font-display font-bold uppercase leading-tight">
                                    The <span className="text-indigo-500">Platform</span> Mesh.
                                </h2>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    WityLogix doesn't live in a silo. It connects natively to your existing storefront and ERP via a robust webhook infrastructure, enabling one-click dispatch from any data source.
                                </p>
                                <div className="flex items-center gap-6">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map(i => <div key={i} className="w-12 h-12 rounded-full bg-slate-200 border-2 border-slate-50" />)}
                                    </div>
                                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Connected Merchants</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Sustainability Section: The Future Layer */}
                <section className="px-4 py-32 relative overflow-hidden">
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

                    <div className="container mx-auto max-w-6xl relative z-10">
                        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
                            <div className="max-w-2xl">
                                <h2 className="text-4xl md:text-6xl font-display font-bold uppercase mb-6 leading-none">Sustainable <br /> <span className="text-emerald-500">By Design.</span></h2>
                                <p className="text-slate-600 text-xl leading-relaxed">Every mile saved is a gram of carbon removed. WityLogix builds environmental utility into the very core of its routing logic.</p>
                            </div>
                            <Workflow className="w-24 h-24 text-emerald-100 hidden md:block" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="flex gap-8 p-10 rounded-[3rem] bg-emerald-50/50 border border-emerald-100 group hover:bg-white transition-all">
                                <Zap className="w-12 h-12 text-emerald-500 shrink-0" />
                                <div>
                                    <h4 className="text-2xl font-display font-bold mb-3 uppercase">EV-First Routing</h4>
                                    <p className="text-slate-600 leading-relaxed">Intelligent paths optimized for electric vehicle ranges and charging proximity, ensuring your green fleet operates at peak availability.</p>
                                </div>
                            </div>
                            <div className="flex gap-8 p-10 rounded-[3rem] bg-purple-50/50 border border-purple-100 group hover:bg-white transition-all">
                                <ZapOff className="w-12 h-12 text-purple-500 shrink-0" />
                                <div>
                                    <h4 className="text-2xl font-display font-bold mb-3 uppercase">Carbon-Zero Logic</h4>
                                    <p className="text-slate-600 leading-relaxed">Automated granular offsetting for every single mile, integrated directly into the delivery cost for transparent planetary impact.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. CTA: High Focus */}
                <section className="px-4 py-32 bg-slate-900 mx-4 md:mx-12 rounded-[4rem] text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                    <div className="relative z-10 max-w-4xl mx-auto space-y-12">
                        <h2 className="text-5xl md:text-7xl font-display font-bold text-white uppercase leading-none tracking-tighter">
                            Ready for the <br /> <span className="text-cyan-400 italic">Predictable</span> Future?
                        </h2>
                        <p className="text-slate-400 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
                            Join the merchants defining the next era of sustainable last-mile logistics.
                        </p>
                        <div className="pt-8">
                            <Link to="/contact" className="px-16 py-6 bg-cyan-500 text-slate-900 rounded-full font-bold text-xl hover:bg-white hover:scale-105 transition-all shadow-2xl shadow-cyan-500/20 active:scale-95">
                                Start Your Implementation
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
