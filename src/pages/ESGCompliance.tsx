import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { FileText, ShieldCheck, ClipboardCheck, BarChart3, Scale, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        title: 'Regulatory Alignment',
        desc: 'Automated gap analysis and alignment with global frameworks including CSRD, SEC, and ISSB.',
        icon: <Scale className="w-8 h-8 text-emerald-400" />
    },
    {
        title: 'Audit-Ready Reporting',
        desc: 'Generate comprehensive, transparent reports that are fully verifiable and ready for third-party assurance.',
        icon: <ClipboardCheck className="w-8 h-8 text-cyan-400" />
    },
    {
        title: 'Risk Frameworks',
        desc: 'Implement TCFD-aligned climate risk assessments to identify and manage physical and transition risks.',
        icon: <ShieldCheck className="w-8 h-8 text-indigo-400" />
    },
    {
        title: 'Disclosure Automation',
        desc: 'Streamline the collection and normalization of sustainability data for year-round compliance.',
        icon: <FileText className="w-8 h-8 text-purple-400" />
    }
];

export default function ESGCompliance() {
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
                            <BarChart3 className="w-4 h-4" />
                            <span>Builders Wing</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 uppercase tracking-tight">
                            ESG & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">COMPLIANCE.</span>
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
                            Navigating the complex landscape of climate regulation with precision. We build the automated frameworks that ensure your business remains compliant and beyond reproach.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link to="/contact" className="px-6 py-3 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition-colors inline-flex items-center gap-2">
                                Get Compliant <ArrowRight className="w-4 h-4" />
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
