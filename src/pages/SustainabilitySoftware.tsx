import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Leaf, BarChart3, Cloud, Database, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        title: 'Carbon Management',
        desc: 'Advanced enterprise software to measure, manage, and mitigate your carbon footprint across all scopes.',
        icon: <Leaf className="w-8 h-8 text-emerald-400" />
    },
    {
        title: 'Supply Chain Transparency',
        desc: 'Trace environmental impact deep into your supply chain with automated data collection tools.',
        icon: <Database className="w-8 h-8 text-cyan-400" />
    },
    {
        title: 'ESG Intelligence',
        desc: 'Turn complex environmental datasets into investor-ready dashboards and actionable business insights.',
        icon: <BarChart3 className="w-8 h-8 text-indigo-400" />
    },
    {
        title: 'Cloud Optimization',
        desc: 'Software-defined sustainability for your digital infrastructure, reducing compute-related emissions.',
        icon: <Cloud className="w-8 h-8 text-purple-400" />
    },
    {
        title: 'Sustainability APIs',
        desc: 'Integrate real-time environmental metrics directly into your existing corporate software stack.',
        icon: <Cpu className="w-8 h-8 text-orange-400" />
    }
];

export default function SustainabilitySoftware() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            <main className="pt-32 pb-24">
                <div className="container px-4 mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium border border-emerald-500/20 mb-6">
                            <Leaf className="w-4 h-4" />
                            <span>Builders Wing</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 uppercase tracking-tight">
                            Sustainability <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Software.</span>
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
                            Engineering the digital infrastructure for a net-zero future. We build the tools that make business sustainability measurable, manageable, and profitable.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link to="/contact" className="px-6 py-3 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition-colors inline-flex items-center gap-2">
                                Start Building <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                </div>

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
            </main>

            <Footer />
        </div>
    );
}
