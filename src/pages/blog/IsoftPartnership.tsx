import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Linkedin, Share2 } from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function IsoftPartnership() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative py-24 pt-32 overflow-hidden border-b border-slate-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white" />
                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-4xl mx-auto"
                        >
                            <Link
                                to="/blog"
                                className="inline-flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors mb-8"
                            >
                                <ArrowLeft className="w-4 h-4" /> Back to Blog
                            </Link>

                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-4 py-1.5 text-sm font-semibold text-emerald-700 bg-emerald-50 rounded-full">Partnership</span>
                                <span className="px-4 py-1.5 text-sm font-semibold text-blue-700 bg-blue-50 rounded-full">Innovation</span>
                                <span className="px-4 py-1.5 text-sm font-semibold text-purple-700 bg-purple-50 rounded-full">CyberSpace</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6 leading-tight">
                                Wityliti Announces Strategic Partnership with <span className="text-red-600">iSOFT</span>
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-slate-500 mb-8">
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5" /> August 20, 2025
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock className="w-5 h-5" /> 3 min read
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
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
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
                            className="max-w-3xl mx-auto prose prose-lg prose-slate prose-headings:font-display prose-a:text-emerald-600"
                        >
                            <p className="text-2xl text-slate-700 font-medium leading-relaxed mb-8">
                                🚀 <strong>Exciting News from Wityliti!</strong>
                            </p>

                            <p>
                                We're proud to announce a new strategic partnership with <strong>iSOFT</strong>, marking a bold
                                step forward in shaping the future of collaboration across cyberspace. 🤝✨
                            </p>

                            <p>
                                This partnership is more than just an alliance; it's about combining strengths, knowledge,
                                and technology to unlock new opportunities, drive innovation, and build resilient digital
                                ecosystems. Together with iSOFT, we're creating pathways to:
                            </p>

                            <ul className="space-y-3 my-8">
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-500 font-bold text-xl">◆</span>
                                    <span><strong>Enhance secure, seamless collaboration</strong> across digital platforms</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-500 font-bold text-xl">◆</span>
                                    <span><strong>Drive cutting-edge secure transformation</strong> in cyberspace</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-500 font-bold text-xl">◆</span>
                                    <span><strong>Deliver more value</strong> to clients and communities</span>
                                </li>
                            </ul>

                            <p>
                                A huge thanks to <strong>Nilay Joshi</strong> and <strong>Adarsh Ananthaswamy</strong> for
                                their incredible support in making this partnership a reality. 🙌
                            </p>

                            <p>
                                At Wityliti, we believe the future of cyberspace is built on trust, innovation, and
                                partnerships that truly make a difference. Our work with iSOFT embodies exactly that spirit.
                            </p>

                            <p className="text-xl font-medium text-slate-800">
                                We're just getting started, and the journey ahead looks incredibly promising. 🚀
                            </p>

                            <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                                <h3 className="text-xl font-bold mb-4">About iSOFT</h3>
                                <p className="text-slate-600 mb-4">
                                    iSOFT is a leading technology solutions provider specializing in enterprise software,
                                    digital transformation, and cybersecurity solutions. With a proven track record of
                                    delivering innovative solutions, iSOFT continues to empower businesses globally.
                                </p>
                                <a
                                    href="https://www.isoftinc.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700"
                                >
                                    Visit iSOFT website →
                                </a>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-2">
                                <span className="text-blue-600">#Partnership</span>
                                <span className="text-blue-600">#Innovation</span>
                                <span className="text-blue-600">#CyberSpace</span>
                                <span className="text-blue-600">#Wityliti</span>
                                <span className="text-blue-600">#iSOFT</span>
                            </div>
                        </motion.div>
                    </div>
                </article>

                {/* CTA Section */}
                <section className="py-16 bg-slate-50 border-t border-slate-100">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-2xl font-bold mb-4">Interested in partnering with Wityliti?</h2>
                        <p className="text-slate-600 mb-8">
                            Let's explore how we can work together to drive innovation.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
