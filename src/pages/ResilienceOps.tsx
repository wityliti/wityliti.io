import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Activity, Shield, Zap, Search, LifeBuoy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        title: 'Proactive Threat Hunting',
        desc: 'Don’t wait for alarms. We actively hunt for indicators of compromise (IoCs) within your environment using advanced behavioral analysis.',
        icon: <Search className="w-8 h-8 text-cyan-400" />
    },
    {
        title: 'Strategic Incident Response',
        desc: 'A battle-tested framework for containment, eradication, and recovery, led by military-grade security experts.',
        icon: <Zap className="w-8 h-8 text-emerald-400" />
    },
    {
        title: 'SOC-as-a-Service',
        desc: 'Round-the-clock monitoring and triage of security events, providing a continuous shield for your mission-critical operations.',
        icon: <Activity className="w-8 h-8 text-indigo-400" />
    },
    {
        title: 'Digital Resilience Audits',
        desc: 'Holistic assessment of your business continuity plans and technical disaster recovery readiness.',
        icon: <LifeBuoy className="w-8 h-8 text-purple-400" />
    }
];

export default function ResilienceOps() {
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
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium border border-cyan-500/20 mb-6">
                            <Activity className="w-4 h-4" />
                            <span>Defenders Wing</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 uppercase tracking-tight">
                            Resilience <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Operations.</span>
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
                            Beyond defense lies resilience. We provide more than just security; we ensure your business can withstand, adapt, and thrive through any digital disruption.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link to="/contact" className="px-6 py-3 bg-cyan-500 text-white rounded-full font-semibold hover:bg-cyan-600 transition-colors inline-flex items-center gap-2">
                                Strengthen Your Defense <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                </div>

                <div className="container px-4 bg-white/5 py-24 rounded-3xl border border-white/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
                                <h3 className="text-2xl font-headline font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
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
