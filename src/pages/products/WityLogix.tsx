import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Truck, Route, Cpu, Zap, Globe, ShoppingCart, Settings, ZapOff, Activity, BarChart3, Database, Workflow, Mail, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RotatingWord from '@/components/ui/RotatingWord';

const platforms = [
    { name: 'Shopify', desc: 'Native App integration', icon: <ShoppingCart className="w-5 h-5" /> },
    { name: 'WooCommerce', desc: 'Plug-and-play plugin', icon: <Settings className="w-5 h-5" /> },
    { name: 'Magento', desc: 'Enterprise connector', icon: <Activity className="w-5 h-5" /> },
    { name: 'BigCommerce', desc: 'Seamless API sync', icon: <Globe className="w-5 h-5" /> },
    { name: 'Custom ERP', desc: 'RESTful API access', icon: <Cpu className="w-5 h-5" /> }
];

export default function WityLogixProduct() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 3000);
            setEmail('');
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-cyan-500/30">
            <Header />

            <main className="pt-32 pb-24 space-y-32">
                {/* 1. Hero Section: Focused & Clean */}
                <section className="px-4 relative">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
                    <div className="container mx-auto max-w-6xl relative z-10">
                        <Link to="/products" className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-600 mb-12 transition-colors group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Products
                        </Link>

                        <div className="max-w-4xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-8"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-cyan-100/50 rounded-lg text-cyan-600 backdrop-blur-sm border border-cyan-100">
                                        <Truck className="w-6 h-6" />
                                    </div>
                                    <span className="text-cyan-600 font-bold tracking-[0.2em] uppercase text-xs">
                                        Intelligence-as-a-Utility
                                    </span>
                                </div>

                                <div className="space-y-4">
                                    <h1 className="text-6xl md:text-[7rem] font-display font-bold text-slate-900 leading-[0.85] uppercase tracking-tighter">
                                        Wity<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500">Logix.</span>
                                    </h1>
                                    <div className="text-3xl md:text-5xl font-display font-bold text-slate-400 uppercase tracking-tight flex flex-wrap items-center gap-x-4">
                                        Optimizing
                                        <RotatingWord
                                            words={['Last Mile', 'Logistics', 'Supply Chains', 'Delivery Flows']}
                                            className="text-slate-900"
                                            interval={2500}
                                        />
                                    </div>
                                </div>

                                <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-headline max-w-2xl border-l-4 border-cyan-500/20 pl-6 py-2">
                                    The definitive AI logistics layer for high-scale merchants. Industrial-grade precision for every node in your network.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 2. Impact Section: High Signal/Results */}
                <section className="bg-slate-900 py-32 text-white overflow-hidden relative mx-4 md:mx-0 md:rounded-none rounded-[3rem]">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

                    <div className="container mx-auto px-4 max-w-6xl relative z-10">
                        <div className="grid lg:grid-cols-2 gap-24 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 uppercase leading-tight">
                                    Quantifiable <br />
                                    <span className="text-cyan-400 underline decoration-cyan-400/30 decoration-8 underline-offset-8">Operational Alpha.</span>
                                </h2>
                                <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-lg">
                                    WityLogix doesn't just route—it optimizes the financial unit of every delivery. By removing manual decision-making, we deliver immediate ROI.
                                </p>
                                <div className="flex flex-col gap-6">
                                    {[
                                        '30% Reduction in delivery overhead',
                                        '99.2% Network utilization rating',
                                        '60% Decrease in WISMO support tickets'
                                    ].map((check) => (
                                        <div key={check} className="flex items-center gap-4 group">
                                            <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                                                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                                            </div>
                                            <span className="text-slate-200 font-medium tracking-tight group-hover:text-white transition-colors">{check}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                                <div className="absolute inset-0 bg-cyan-500/5 blur-[80px] rounded-full" />
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md relative z-10"
                                >
                                    <BarChart3 className="w-12 h-12 text-cyan-400 mb-6" />
                                    <div className="text-6xl font-bold mb-2 font-display uppercase">30%</div>
                                    <p className="text-xs text-slate-400 uppercase tracking-widest font-black opacity-60">Cost Saved</p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md relative z-10 md:translate-y-12"
                                >
                                    <Activity className="w-12 h-12 text-emerald-400 mb-6" />
                                    <div className="text-6xl font-bold mb-2 font-display uppercase">99%</div>
                                    <p className="text-xs text-slate-400 uppercase tracking-widest font-black opacity-60">Efficiency</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Core Engine: Intelligence Section */}
                <section className="px-4">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-24">
                            <span className="text-cyan-600 font-black tracking-[0.3em] uppercase text-xs mb-4 block">The Core Logic</span>
                            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase mb-6 tracking-tight">Technical Sophistication</h2>
                            <p className="text-slate-500 text-xl max-w-3xl mx-auto leading-relaxed">
                                Our proprietary MDVRP solver and swarm intelligence algorithms power every delivery decision with zero manual intervention.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group space-y-8 p-12 rounded-[3rem] bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-2xl hover:shadow-cyan-500/10 cursor-default"
                            >
                                <div className="p-5 bg-cyan-100 rounded-3xl w-fit text-cyan-600 group-hover:scale-110 transition-transform">
                                    <Zap className="w-10 h-10" />
                                </div>
                                <h3 className="text-3xl font-display font-bold uppercase tracking-tight">Neural Route Planning</h3>
                                <p className="text-slate-600 leading-relaxed text-lg pb-6 border-b border-slate-200">
                                    An advanced solver that processes thousands of variables in milliseconds—traffic, capacity, windows, and driver performance—to find the mathematically perfect path.
                                </p>
                                <div className="flex items-center gap-4 pt-2">
                                    <div className="w-2 h-2 rounded-full bg-cyan-500" />
                                    <span className="text-xs font-bold uppercase text-slate-400 tracking-widest">Active Solver: v2.4-MDVRP</span>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="group space-y-8 p-12 rounded-[3rem] bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 cursor-default"
                            >
                                <div className="p-5 bg-indigo-100 rounded-3xl w-fit text-indigo-600 group-hover:scale-110 transition-transform">
                                    <Activity className="w-10 h-10" />
                                </div>
                                <h3 className="text-3xl font-display font-bold uppercase tracking-tight">Swarm Intelligence</h3>
                                <p className="text-slate-600 leading-relaxed text-lg pb-6 border-b border-slate-200">
                                    Collective fleet logic that self-corrects in real-time. If one driver is delayed, the entire "hive" recalibrates to ensure fulfillment SLAs are never breached.
                                </p>
                                <div className="flex items-center gap-4 pt-2">
                                    <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                    <span className="text-xs font-bold uppercase text-slate-400 tracking-widest">Logic Type: Hive Calibration</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 4. Connectivity Section: Ecosystem Sync */}
                <section className="bg-slate-50 py-32 border-y border-slate-200 relative">
                    <div className="absolute inset-0 opacity-5 pointer-events-none grayscale">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                    </div>

                    <div className="container mx-auto px-4 max-w-6xl relative z-10">
                        <div className="grid lg:grid-cols-2 gap-24 items-center">
                            <div className="order-2 lg:order-1">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    className="grid grid-cols-2 md:grid-cols-3 gap-4"
                                >
                                    {platforms.map((platform) => (
                                        <div key={platform.name} className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:border-cyan-500/30 transition-all hover:shadow-xl hover:shadow-cyan-500/5">
                                            <div className="text-slate-400 group-hover:text-cyan-500 group-hover:scale-110 transition-all mb-6">{platform.icon}</div>
                                            <span className="font-bold text-slate-900 text-sm tracking-tight">{platform.name}</span>
                                        </div>
                                    ))}
                                    <div className="p-8 bg-slate-900 rounded-[2rem] border border-slate-800 flex flex-col items-center justify-center text-center">
                                        <Database className="w-6 h-6 text-cyan-400 mb-4" />
                                        <span className="text-xs font-black text-white uppercase tracking-widest">API Native</span>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="order-1 lg:order-2 space-y-8">
                                <span className="text-indigo-600 font-black tracking-[0.3em] uppercase text-xs">Ecosystem Integration</span>
                                <h2 className="text-4xl md:text-6xl font-display font-bold uppercase leading-[0.9] tracking-tighter">
                                    Universal <br /><span className="text-indigo-500 italic">Platform Mesh.</span>
                                </h2>
                                <p className="text-slate-600 text-xl leading-relaxed">
                                    WityLogix connects natively to your entire stack via a robust webhook infrastructure, enabling one-click dispatch from any data source—Shopify to legacy ERPs.
                                </p>
                                <div className="flex items-center gap-6 pt-6">
                                    <div className="px-6 py-2 bg-slate-200/50 rounded-full text-xs font-bold uppercase tracking-widest text-slate-500 border border-slate-300">
                                        Zero-Deployment Sync
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Sustainability Section: The Future Layer */}
                <section className="px-4 py-32 relative">
                    <div className="container mx-auto max-w-6xl">
                        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
                            <div className="max-w-2xl space-y-6">
                                <span className="text-emerald-600 font-black tracking-[0.3em] uppercase text-xs">Green Logic</span>
                                <h2 className="text-5xl md:text-[5.5rem] font-display font-bold uppercase mb-6 leading-[0.8] tracking-tighter">Verified <br /> <span className="text-emerald-500">Regeneration.</span></h2>
                                <p className="text-slate-500 text-2xl leading-relaxed font-headline">Every mile saved is a gram of carbon removed. We build environmental utility into the very core of our routing.</p>
                            </div>
                            <div className="p-6 rounded-full bg-emerald-50 border border-emerald-100 hidden md:block">
                                <Workflow className="w-16 h-16 text-emerald-500" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-8 p-12 rounded-[3.5rem] bg-emerald-50/30 border border-emerald-100/50 group hover:bg-white hover:shadow-2xl hover:shadow-emerald-500/5 transition-all">
                                <Zap className="w-16 h-16 text-emerald-500/40 group-hover:text-emerald-500 transition-colors" />
                                <div>
                                    <h4 className="text-3xl font-display font-bold mb-4 uppercase tracking-tight">EV-First Routing</h4>
                                    <p className="text-slate-600 text-lg leading-relaxed">Intelligent paths optimized for electric vehicle ranges and charging proximity, ensuring your green fleet operates at peak availability.</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-8 p-12 rounded-[3.5rem] bg-indigo-50/30 border border-indigo-100/50 group hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/5 transition-all">
                                <ZapOff className="w-16 h-16 text-indigo-500/40 group-hover:text-indigo-500 transition-colors" />
                                <div>
                                    <h4 className="text-3xl font-display font-bold mb-4 uppercase tracking-tight">Carbon-Zero Logic</h4>
                                    <p className="text-slate-600 text-lg leading-relaxed">Automated granular offsetting for every single mile, integrated directly into the delivery cost for transparent planetary impact.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. CTA & Inquiry Form: High Focus */}
                <section className="px-4 py-32">
                    <div className="container mx-auto max-w-6xl">
                        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden group border border-white/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-indigo-500/10 opacity-30 group-hover:opacity-100 transition-opacity duration-1000" />

                            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center space-y-12">
                                <div className="space-y-6">
                                    <h2 className="text-5xl md:text-8xl font-display font-bold text-white uppercase leading-[0.85] tracking-tighter">
                                        Build Your <br /> <span className="text-cyan-400 italic">Alpha.</span>
                                    </h2>
                                    <p className="text-slate-400 text-xl md:text-2xl max-w-xl mx-auto leading-relaxed font-headline">
                                        Join the high-scale merchants defining the next era of logistics.
                                    </p>
                                </div>

                                {/* Minimalist Lead Form */}
                                <div className="w-full max-w-md">
                                    {!submitted ? (
                                        <form onSubmit={handleSubmit} className="relative group/form">
                                            <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl p-2 focus-within:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm">
                                                <div className="pl-4 text-slate-500">
                                                    <Mail className="w-5 h-5" />
                                                </div>
                                                <input
                                                    type="email"
                                                    placeholder="Enter your work email for CTT/Inquiry"
                                                    className="w-full bg-transparent px-4 py-3 text-white outline-none placeholder:text-slate-500 font-medium text-sm"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />
                                                <button
                                                    type="submit"
                                                    className="px-6 py-3 bg-cyan-500 text-slate-900 rounded-xl font-bold text-sm hover:bg-white transition-all flex items-center gap-2 group/btn active:scale-95"
                                                >
                                                    Enquire <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                                </button>
                                            </div>
                                            <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-4 font-black">Secure • No-Spam • Direct Response</p>
                                        </form>
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="py-4 px-8 bg-emerald-500/20 border border-emerald-500/50 rounded-2xl text-emerald-400 font-bold"
                                        >
                                            Inquiry Sent. We'll be in touch.
                                        </motion.div>
                                    )}
                                </div>

                                <div className="pt-8 border-t border-white/5 w-full flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-30 select-none pointer-events-none grayscale invert">
                                    <span className="font-display font-black uppercase tracking-tight text-white h-6">Merchant Core</span>
                                    <span className="font-display font-black uppercase tracking-tight text-white h-6 font-serif italic">Global Flux</span>
                                    <span className="font-display font-black uppercase tracking-tight text-white h-6">Supply Grid</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
