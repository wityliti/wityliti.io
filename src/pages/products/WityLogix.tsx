import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Truck, Route, Cpu, Zap, Globe, ShoppingCart, Settings, ZapOff, Activity } from 'lucide-react';
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

const features = [
    {
        title: 'Neural Route Planning',
        desc: 'Advanced MDVRP solver that optimizes routes in seconds, factoring in traffic, fleet capacity, and delivery windows.',
        icon: <Zap className="w-8 h-8 text-cyan-400" />
    },
    {
        title: 'EV-First Routing',
        desc: 'Intelligent paths optimized for electric vehicle ranges and charging infrastructure proximity.',
        icon: <Zap className="w-8 h-8 text-emerald-400" />
    },
    {
        title: 'Swarm Intelligence',
        desc: 'Collective fleet logic that self-corrects in real-time when drivers encounter obstacles or delays.',
        icon: <Activity className="w-8 h-8 text-cyan-400" />
    },
    {
        title: 'Predictive Fulfillment',
        desc: 'AI that forecasts local demand 24 hours in advance to pre-position high-velocity inventory.',
        icon: <Cpu className="w-8 h-8 text-indigo-400" />
    },
    {
        title: 'Instant Platform Sync',
        desc: 'Robust webhook infrastructure to instantly ingest orders from e-commerce platforms for one-click dispatch.',
        icon: <Settings className="w-8 h-8 text-orange-400" />
    },
    {
        title: 'Carbon-Zero Logic',
        desc: 'Automated granular offsetting for every single mile, integrated directly into the delivery cost.',
        icon: <ZapOff className="w-8 h-8 text-purple-400" />
    }
];

export default function WityLogixProduct() {
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
                                        Intelligence-as-a-Utility
                                    </span>
                                </div>

                                <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 leading-tight uppercase">
                                    Wity<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500">Logix AI.</span>
                                </h1>

                                <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                                    The definitive AI logistics layer for high-scale merchants. WityLogix orchestrates the last mile with industrial-grade precision and biological efficiency, powered by Wityliti's core grid.
                                </p>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    {['Distributed Routing', 'Shopify & More', 'Carbon-Neutral'].map((tag) => (
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
                                            <Globe className="w-20 h-20 text-cyan-500 mx-auto mb-6" />
                                            <h3 className="text-2xl font-display font-bold tracking-widest uppercase">Global Logix Grid</h3>
                                            <p className="text-slate-400 mt-2">Connecting Every Merchant to Every Mile</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Impact Results */}
                <section className="bg-slate-50 py-16 border-y border-slate-200 mb-24">
                    <div className="container mx-auto px-4 max-w-6xl text-center">
                        <span className="text-cyan-600 font-bold tracking-wider uppercase text-sm mb-4 block underline decoration-cyan-500/30 decoration-4">The Impact</span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-12 uppercase">Delivering Tangible <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-emerald-500">ROI.</span></h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm transition-all hover:translate-y-[-5px]">
                                <div className="text-4xl lg:text-5xl font-bold text-cyan-600 mb-4">30%</div>
                                <div className="text-slate-600 font-medium">Reduction in Delivery Costs</div>
                            </div>
                            <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm transition-all hover:translate-y-[-5px]">
                                <div className="text-4xl lg:text-5xl font-bold text-cyan-600 mb-4">99.2%</div>
                                <div className="text-slate-600 font-medium">Network Efficiency Rating</div>
                            </div>
                            <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm transition-all hover:translate-y-[-5px]">
                                <div className="text-4xl lg:text-5xl font-bold text-cyan-600 mb-4">60%</div>
                                <div className="text-slate-600 font-medium">Fewer WISMO tickets</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Platforms Section */}
                <section className="py-24 bg-background border-b border-slate-100">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-display font-bold uppercase mb-4">Native Platform Mesh</h2>
                            <p className="text-slate-600">Sync WityLogix with your entire stack in zero-deployment minutes.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                            {platforms.map((platform) => (
                                <div key={platform.name} className="flex flex-col items-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
                                    <div className="mb-4 text-cyan-500">{platform.icon}</div>
                                    <span className="font-bold text-slate-900">{platform.name}</span>
                                    <span className="text-xs text-slate-500 mt-1">{platform.desc}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-32 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-24 items-center">
                            <div className="space-y-12">
                                {features.map((feature, i) => (
                                    <motion.div
                                        key={feature.title}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex gap-6"
                                    >
                                        <div className="p-4 bg-slate-100 rounded-2xl h-fit border border-slate-200">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-display font-bold mb-2 uppercase">{feature.title}</h3>
                                            <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="relative">
                                <div className="p-12 bg-slate-900 rounded-[3rem] text-white aspect-square flex flex-col items-center justify-center text-center relative overflow-hidden">
                                    {/* Fake Map Grid decoration */}
                                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <pattern id="mapPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                                                </pattern>
                                            </defs>
                                            <rect width="100%" height="100%" fill="url(#mapPattern)" className="text-slate-500" />
                                        </svg>
                                    </div>
                                    <div className="relative z-10">
                                        <div className="text-7xl font-bold text-cyan-400 mb-4">24%</div>
                                        <h4 className="text-2xl font-display font-bold mb-4 uppercase">Operational Alpha</h4>
                                        <p className="text-slate-400 max-w-xs mx-auto">
                                            WityLogix provides an immediate efficiency alpha by removing manual decision-making from the logistics chain.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-24 px-4 bg-background relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
                    <div className="container mx-auto max-w-4xl text-center relative z-10">
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-8 uppercase">
                            Go Beyond the <span className="text-cyan-600">Last Mile.</span>
                        </h2>
                        <p className="text-xl text-slate-600 mb-12">
                            The most intelligent logistics utility ever built. Powered by Wityliti.
                        </p>
                        <Link to="/contact" className="px-12 py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-cyan-600 transition-all shadow-xl hover:shadow-cyan-500/20">
                            Book a WityLogix Demo
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
