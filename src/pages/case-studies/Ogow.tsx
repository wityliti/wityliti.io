import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Lock, ShieldAlert, FileKey, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function OgowCaseStudy() {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-indigo-500/30">
            <Header />

            <main className="pt-32 pb-24">
                {/* Hero Section */}
                <section className="relative px-4 mb-24">
                    <div className="container mx-auto max-w-6xl">
                        <Link to="/case-studies" className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 mb-8 transition-colors group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Case Studies
                        </Link>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-6"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600">
                                        <Lock className="w-8 h-8" />
                                    </div>
                                    <span className="text-indigo-600 font-bold tracking-wide uppercase text-sm bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100">
                                        Healthcare Security
                                    </span>
                                </div>

                                <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 leading-tight">
                                    Securing Patient <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-600">Trust</span>
                                </h1>

                                <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                                    End-to-end cybersecurity and threat detection for OGOW Health. We performed rigorous VAPT and re-engineered infrastructure to ensure HIPAA compliance and data sovereignty.
                                </p>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    {['End-to-End Security', 'Threat Detection', 'VAPT', 'HIPAA Compliance'].map((tag) => (
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
                                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent mix-blend-multiply" />
                                    <img
                                        src="/assets/case-studies/ogow.svg"
                                        alt="OGOW Health Security"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                {/* Decoration */}
                                <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
                                <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
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
                                <p className="text-xl font-bold text-slate-900">Cybersecurity Partner</p>
                                <div className="mt-2 text-sm text-slate-500">VAPT, Infrastructure hardening, Audit</div>
                            </div>
                            <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                                <h3 className="text-slate-500 font-medium mb-2">Duration</h3>
                                <p className="text-xl font-bold text-slate-900">Ongoing</p>
                                <div className="mt-2 text-sm text-slate-500">Continuous monitoring & assessment</div>
                            </div>
                            <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                                <h3 className="text-slate-500 font-medium mb-2">Standards</h3>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {['HIPAA', 'GDPR', 'OWASP Top 10', 'AES-256'].map(tech => (
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
                        <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-4 block">The Challenge</span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8">
                            Protecting Sensitive Medical Records
                        </h2>
                        <div className="prose prose-lg prose-slate text-lg text-slate-600 leading-relaxed">
                            <p>
                                OGOW Health digitizes medical records to improve maternal and child health outcomes in remote regions. Handling such sensitive Personal Health Information (PHI) makes them a prime target for cyber threats.
                            </p>
                            <p>
                                They required a fortress-like infrastructure to assure partners and patients that their data was safe, compliant, and available when needed most.
                            </p>
                            <ul className="grid gap-4 mt-6 list-none pl-0">
                                {[
                                    'Strict adherence to HIPAA and GDPR data privacy regulations.',
                                    'Protection against ransomware and data exfiltration attacks.',
                                    'Secure access for remote health workers on various devices.',
                                    'Zero-downtime architecture for life-critical availability.'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-indigo-500 shrink-0 mt-0.5" />
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
                                <span className="text-indigo-400 font-bold tracking-wider uppercase text-sm mb-4 block">The Solution</span>
                                <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
                                    Defense-in-Depth Architecture
                                </h2>
                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <div className="p-3 bg-indigo-500/10 rounded-xl h-fit border border-indigo-500/20">
                                            <ShieldAlert className="w-6 h-6 text-indigo-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">Rigorous VAPT</h3>
                                            <p className="text-slate-400">Conducted simulated attacks (Penetration Testing) to identify vulnerabilities before bad actors could exploit them, patching critical entry points immediately.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="p-3 bg-indigo-500/10 rounded-xl h-fit border border-indigo-500/20">
                                            <FileKey className="w-6 h-6 text-indigo-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">Encryption Everywhere</h3>
                                            <p className="text-slate-400">Implemented full-lifecycle encryption. Data is encrypted at rest in the database and in transit using TLS 1.3, ensuring it's unreadable to unauthorized eyes.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="p-3 bg-indigo-500/10 rounded-xl h-fit border border-indigo-500/20">
                                            <Server className="w-6 h-6 text-indigo-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">Resilient Infrastructure</h3>
                                            <p className="text-slate-400">Re-architected the backend for high availability with automated failover and immutable backups to defend against ransomware threats.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-[4/5] bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-white/5 p-4 shadow-2xl relative overflow-hidden">
                                    {/* Abstract Representation of Security Layers */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        {[1, 2, 3].map(i => (
                                            <motion.div
                                                key={i}
                                                className="absolute border border-indigo-500/30 rounded-full"
                                                style={{
                                                    width: `${i * 30}%`,
                                                    height: `${i * 30}%`,
                                                    zIndex: 10 - i
                                                }}
                                                animate={{
                                                    scale: [1, 1.05, 1],
                                                    opacity: [0.3, 0.6, 0.3],
                                                    borderColor: ['rgba(99, 102, 241, 0.3)', 'rgba(99, 102, 241, 0.8)', 'rgba(99, 102, 241, 0.3)']
                                                }}
                                                transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                                            />
                                        ))}
                                    </div>
                                    <div className="relative z-20 w-full h-full flex flex-col items-center justify-center gap-6">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", bounce: 0.5 }}
                                            className="bg-indigo-600 p-6 rounded-2xl shadow-[0_0_50px_rgba(99,102,241,0.5)]"
                                        >
                                            <Lock className="w-12 h-12 text-white" />
                                        </motion.div>
                                        <div className="bg-slate-900/90 backdrop-blur px-6 py-3 rounded-full border border-indigo-500/50 flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                            <span className="font-mono text-sm text-indigo-200">SYSTEM SECURE</span>
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
                        <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-4 block">The Impact</span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-16">
                            Compliance & Confidence achieved
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-8 rounded-3xl bg-indigo-50 border border-indigo-100">
                                <div className="text-4xl lg:text-5xl font-bold text-indigo-600 mb-4">100%</div>
                                <div className="text-slate-600 font-medium">HIPAA Compliance Rate</div>
                            </div>
                            <div className="p-8 rounded-3xl bg-indigo-50 border border-indigo-100">
                                <div className="text-4xl lg:text-5xl font-bold text-indigo-600 mb-4">0</div>
                                <div className="text-slate-600 font-medium">Critical Vulnerabilities</div>
                            </div>
                            <div className="p-8 rounded-3xl bg-indigo-50 border border-indigo-100">
                                <div className="text-4xl lg:text-5xl font-bold text-indigo-600 mb-4">24/7</div>
                                <div className="text-slate-600 font-medium">Threat Monitoring</div>
                            </div>
                        </div>

                        <div className="mt-24 p-12 bg-slate-900 rounded-3xl text-white relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 opacity-20 group-hover:opacity-30 transition-opacity" />
                            <div className="relative z-10">
                                <h3 className="text-3xl font-display font-bold mb-6">Worried about your security posture?</h3>
                                <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                                    Let our cybersecurity experts identify your risks before attackers do. Secure your future today.
                                </p>
                                <Link to="/contact" className="inline-block px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-indigo-50 transition-colors">
                                    Get a Security Audit
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
