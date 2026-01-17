import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Linkedin, Share2, Shield, Users, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CyfinitiAcquisition() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative py-24 pt-32 overflow-hidden border-b border-slate-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.15),transparent_50%)]" />
                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-4xl mx-auto"
                        >
                            <Link
                                to="/blog"
                                className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-8"
                            >
                                <ArrowLeft className="w-4 h-4" /> Back to Blog
                            </Link>

                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-4 py-1.5 text-sm font-semibold text-cyan-300 bg-cyan-500/20 rounded-full border border-cyan-500/30">Acquisition</span>
                                <span className="px-4 py-1.5 text-sm font-semibold text-emerald-300 bg-emerald-500/20 rounded-full border border-emerald-500/30">Cyber Security</span>
                                <span className="px-4 py-1.5 text-sm font-semibold text-purple-300 bg-purple-500/20 rounded-full border border-purple-500/30">Leadership</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                                Wityliti Acquires <span className="text-cyan-400">Cyfiniti Labs</span> to Strengthen Cybersecurity Division
                            </h1>

                            <p className="text-xl text-slate-300 mb-8">
                                Strategic acquisition brings world-class security expertise and OWASP Project Leadership to power Wityliti's cybersecurity wing.
                            </p>

                            <div className="flex flex-wrap items-center gap-6 text-slate-400 mb-8">
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5" /> April 15, 2025
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock className="w-5 h-5" /> 4 min read
                                </span>
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href="https://www.linkedin.com/company/wityliti/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    <Linkedin className="w-4 h-4" /> Share on LinkedIn
                                </a>
                                <button
                                    onClick={() => navigator.clipboard.writeText(window.location.href)}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                                >
                                    <Share2 className="w-4 h-4" /> Copy Link
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Article Content */}
                <article className="py-16">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="max-w-3xl mx-auto"
                        >
                            <p className="text-2xl text-slate-700 font-medium leading-relaxed mb-8">
                                🛡️ <strong>Wityliti is proud to announce the acquisition of Cyfiniti Labs</strong>, a leading cybersecurity consultancy specializing in vulnerability assessment, penetration testing, and securing modern digital infrastructure.
                            </p>

                            <p className="text-lg text-slate-600 mb-6">
                                This strategic acquisition marks a significant milestone in Wityliti's journey to become a comprehensive technology solutions provider. By integrating Cyfiniti Labs' deep expertise in cybersecurity, we are building a robust foundation to protect digital ecosystems and empower organizations to operate securely in an increasingly connected world.
                            </p>

                            {/* Leadership Highlight */}
                            <div className="my-12 p-8 bg-gradient-to-br from-slate-50 to-cyan-50 rounded-3xl border border-slate-200">
                                <div className="flex flex-col md:flex-row gap-6 items-start">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                                        <Shield className="w-10 h-10 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">
                                            Led by Faiz Ahmed Zaidi
                                        </h3>
                                        <p className="text-cyan-600 font-semibold mb-3">
                                            CISO | Head of Security | OWASP Project Leader
                                        </p>
                                        <p className="text-slate-600">
                                            Faiz brings exceptional credentials to lead Wityliti's cybersecurity division. As an
                                            <strong> OWASP Project Leader</strong> working on the OWASP Maritime Top 10, and with
                                            recognition from global tech giants including <strong>Apple, Microsoft, and Intel</strong> for
                                            identifying critical security vulnerabilities, Faiz represents the caliber of expertise that
                                            will drive our security initiatives forward.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
                                About Cyfiniti Labs
                            </h2>

                            <p className="text-lg text-slate-600 mb-6">
                                Founded with the mission to <em>"make the future secure,"</em> Cyfiniti Labs has built a
                                reputation for delivering cutting-edge security solutions across multiple domains:
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 my-8">
                                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                                    <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                                        <Shield className="w-6 h-6 text-cyan-600" />
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-2">VAPT Services</h4>
                                    <p className="text-slate-600 text-sm">
                                        Comprehensive Vulnerability Assessment and Penetration Testing for web, mobile, cloud, and blockchain systems.
                                    </p>
                                </div>
                                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                                        <Zap className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-2">Specialized Security</h4>
                                    <p className="text-slate-600 text-sm">
                                        Deep expertise in securing blockchain applications and cloud-native environments.
                                    </p>
                                </div>
                                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                                        <Users className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-2">Security Training</h4>
                                    <p className="text-slate-600 text-sm">
                                        Security awareness training programs to build a security-first culture within organizations.
                                    </p>
                                </div>
                                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                                        <Shield className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-2">Threat Intelligence</h4>
                                    <p className="text-slate-600 text-sm">
                                        Open-source threat intelligence services to stay ahead of emerging cyber threats.
                                    </p>
                                </div>
                            </div>

                            <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
                                What This Means for Wityliti
                            </h2>

                            <p className="text-lg text-slate-600 mb-6">
                                With this acquisition, Wityliti strengthens its position as a trusted partner for organizations
                                seeking comprehensive technology solutions. Our enhanced cybersecurity capabilities will enable us to:
                            </p>

                            <ul className="space-y-4 my-8">
                                <li className="flex items-start gap-4">
                                    <span className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-sm font-bold">✓</span>
                                    </span>
                                    <span className="text-slate-600">
                                        <strong>Provide end-to-end security solutions</strong> for our Climate Tech and IoT platforms
                                    </span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-sm font-bold">✓</span>
                                    </span>
                                    <span className="text-slate-600">
                                        <strong>Offer dedicated cybersecurity services</strong> to clients across industries
                                    </span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-sm font-bold">✓</span>
                                    </span>
                                    <span className="text-slate-600">
                                        <strong>Build secure-by-design products</strong> with integrated threat protection
                                    </span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-sm font-bold">✓</span>
                                    </span>
                                    <span className="text-slate-600">
                                        <strong>Contribute to global security standards</strong> through OWASP initiatives
                                    </span>
                                </li>
                            </ul>

                            <blockquote className="my-12 p-8 bg-slate-900 text-white rounded-2xl relative">
                                <div className="absolute top-4 left-4 text-6xl text-cyan-500 opacity-50">"</div>
                                <p className="text-xl font-medium mb-4 relative z-10">
                                    Security is not just a feature—it's a fundamental pillar of digital trust. With Cyfiniti Labs
                                    joining Wityliti, we're committed to building solutions that organizations can rely on with confidence.
                                </p>
                                <footer className="text-cyan-400 font-semibold">
                                    — Faiz Ahmed Zaidi, Head of Cybersecurity, Wityliti
                                </footer>
                            </blockquote>

                            <p className="text-lg text-slate-600 mb-6">
                                We're excited about this new chapter and the opportunities it brings to serve our clients better.
                                Stay tuned for more updates as we continue to expand our capabilities and deliver innovative solutions.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-2">
                                <span className="text-blue-600">#Acquisition</span>
                                <span className="text-blue-600">#CyberSecurity</span>
                                <span className="text-blue-600">#Wityliti</span>
                                <span className="text-blue-600">#CyfinitiLabs</span>
                                <span className="text-blue-600">#OWASP</span>
                                <span className="text-blue-600">#DigitalSecurity</span>
                            </div>
                        </motion.div>
                    </div>
                </article>

                {/* CTA Section */}
                <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-2xl font-bold mb-4">Need Cybersecurity Expertise?</h2>
                        <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                            Our security team is ready to help protect your digital assets and infrastructure.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                        >
                            Contact Our Security Team
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
