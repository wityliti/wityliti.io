import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Leaf, Globe, BarChart3, Cloud, Database, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        title: 'Carbon Footprint Tracking',
        desc: 'Real-time emissions monitoring across your entire supply chain with automated ESG reporting.',
        icon: <Leaf className="w-8 h-8 text-emerald-400" />
    },
    {
        title: 'Sustainability Dashboards',
        desc: 'Beautiful, investor-ready visualizations of your environmental impact and progress toward net-zero.',
        icon: <BarChart3 className="w-8 h-8 text-cyan-400" />
    },
    {
        title: 'Green Cloud Architecture',
        desc: 'Carbon-optimized infrastructure that routes workloads to renewable-powered data centers.',
        icon: <Cloud className="w-8 h-8 text-indigo-400" />
    },
    {
        title: 'Environmental Data Lakes',
        desc: 'Unified storage for satellite imagery, IoT telemetry, and third-party environmental datasets.',
        icon: <Database className="w-8 h-8 text-purple-400" />
    },
    {
        title: 'Climate AI Models',
        desc: 'Machine learning models for predictive analytics: drought forecasting, crop yield, and carbon sequestration.',
        icon: <Cpu className="w-8 h-8 text-orange-400" />
    },
    {
        title: 'Satellite Integration',
        desc: 'Connecting your platform to Earth observation APIs for vegetation indices and land-use change detection.',
        icon: <Globe className="w-8 h-8 text-rose-400" />
    }
];

export default function EcoDigitalPlatforms() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            <main className="pt-32 pb-24">
                {/* Hero */}
                <div className="container px-4 mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium border border-emerald-500/20 mb-6">
                            <Leaf className="w-4 h-4" />
                            <span>Climate Tech Division</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                            DIGITAL <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">ECOSYSTEMS.</span>
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
                            We build platforms that turn environmental data into actionable intelligence.
                            From carbon accounting to satellite-verified impact — technology for the planet.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link to="/contact" className="px-6 py-3 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition-colors inline-flex items-center gap-2">
                                Start a Project <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link to="/case-studies" className="px-6 py-3 rounded-full font-semibold border border-white/10 hover:bg-white/5 transition-colors">
                                View Case Studies
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Services Grid */}
                <div className="container px-4 bg-white/5 py-24 rounded-3xl border border-white/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {services.map((service, i) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group"
                            >
                                <div className="mb-6 p-4 bg-background border border-white/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-headline font-semibold mb-3 group-hover:text-emerald-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {service.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="container mx-auto px-4 mt-24">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                            Ready to build your <span className="text-emerald-400">eco-digital</span> platform?
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            Let's discuss how we can help you measure, report, and reduce your environmental impact.
                        </p>
                        <Link to="/contact" className="px-8 py-4 bg-foreground text-background rounded-full font-semibold hover:bg-emerald-400 transition-colors inline-flex items-center gap-2">
                            Get in Touch <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
