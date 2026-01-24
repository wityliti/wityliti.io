import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Link as LinkIcon, TreePine, Leaf, Globe, Smartphone, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AfforestationLaunch = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleLinkedInShare = () => {
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent('Wityliti Launches Afforestation.org - Entering Climate & Nature Tech');
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative py-20 pt-32 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 left-20 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
                    </div>

                    <div className="max-w-4xl mx-auto px-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Link to="/blog" className="inline-flex items-center gap-2 text-green-200 hover:text-white mb-8 transition-colors">
                                <ArrowLeft className="w-4 h-4" />
                                Back to Blog
                            </Link>

                            <div className="flex flex-wrap gap-3 mb-6">
                                <span className="px-3 py-1 bg-green-500/20 text-green-200 rounded-full text-sm font-medium border border-green-400/30">
                                    🌱 Launch
                                </span>
                                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-200 rounded-full text-sm font-medium border border-emerald-400/30">
                                    Climate Tech
                                </span>
                                <span className="px-3 py-1 bg-teal-500/20 text-teal-200 rounded-full text-sm font-medium border border-teal-400/30">
                                    Nature Tech
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                                Wityliti Launches <span className="text-green-400">Afforestation.org</span> - Entering Climate & Nature Tech
                            </h1>

                            <p className="text-xl text-green-100 mb-8">
                                Announcing our flagship climate-tech platform that goes beyond carbon offsets to build resilient ecosystems through technology, community, and verified impact.
                            </p>

                            <div className="flex flex-wrap items-center gap-6 text-green-200">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5" />
                                    <span>January 25, 2026</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5" />
                                    <span>7 min read</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="prose prose-lg max-w-none"
                        >
                            <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                                Today marks a pivotal moment in Wityliti's journey as we officially launch <strong>Afforestation.org</strong> -
                                our comprehensive climate-tech platform designed to make environmental action measurable, rewarding, and accessible to everyone.
                            </p>

                            <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
                                Beyond Carbon Offsets
                            </h2>

                            <p className="text-lg text-slate-600 mb-6">
                                While carbon offsets have become the default solution for corporate sustainability, we believe the climate crisis
                                demands more innovative approaches. Afforestation.org represents our commitment to building <strong>resilient ecosystems</strong>
                                through a combination of behavioral change, advanced technology verification, and community engagement.
                            </p>

                            {/* Vision Section */}
                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 my-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Globe className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-green-900 mb-2">Our Vision</h3>
                                        <p className="text-green-800">
                                            Making climate action measurable, rewarding, and accessible to everyone - from individuals taking small daily actions
                                            to enterprises managing large-scale sustainability initiatives.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Platform Features */}
                            <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
                                Three Pillars of Impact
                            </h2>

                            {/* Grow App */}
                            <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-6 shadow-sm">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Smartphone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Grow App - Gamified Productivity</h3>
                                        <p className="text-slate-600 mb-4">
                                            A unique tool that links <strong>personal productivity with real-world impact</strong>. Using a Pomodoro-style timer,
                                            users plant "virtual trees" during focus sessions, which are then translated into <strong>real trees planted</strong>
                                            in verified projects around the world.
                                        </p>
                                        <div className="flex flex-wrap gap-3">
                                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Carbon Impact Tracking</span>
                                            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">Virtual Forest Visualization</span>
                                            <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">Focus Timer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Seed Revolution */}
                            <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-6 shadow-sm">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Users className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Seed Revolution - Community Rewilding</h3>
                                        <p className="text-slate-600 mb-4">
                                            A grassroots initiative where urban community members collect seeds from daily fruits and drop them at
                                            designated collection centers. These seeds are used to grow <strong>urban microforests</strong>,
                                            with a focus on local biodiversity and neighborhood tracking.
                                        </p>
                                        <div className="flex flex-wrap gap-3">
                                            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Urban Microforests</span>
                                            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Local Biodiversity</span>
                                            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Community Engagement</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Nature Bank */}
                            <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-8 shadow-sm">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <TreePine className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Nature Bank - Land Restoration at Scale</h3>
                                        <p className="text-slate-600 mb-4">
                                            A stewardship program for <strong>large-scale land restoration</strong> (minimum 10-acre parcels). We offer landowners
                                            feasibility studies, careful assessments, and fully funded establishment for native woodlands,
                                            aiming for accountable and long-term ecological regeneration.
                                        </p>
                                        <div className="flex flex-wrap gap-3">
                                            <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">Feasibility Studies</span>
                                            <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">Fully Funded Establishment</span>
                                            <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm">Native Woodlands</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Technology Section */}
                            <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
                                Technology-First Verification
                            </h2>

                            <p className="text-lg text-slate-600 mb-6">
                                Trust is the foundation of effective climate action. That's why Afforestation.org employs cutting-edge technology
                                to ensure complete transparency and accountability in every tree planted.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mb-10">
                                <div className="bg-slate-50 rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <CheckCircle className="w-6 h-6 text-green-600" />
                                        <h4 className="font-bold text-slate-900">IoT Sensors</h4>
                                    </div>
                                    <p className="text-slate-600">Real-time monitoring of soil conditions, moisture levels, and tree health.</p>
                                </div>
                                <div className="bg-slate-50 rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <CheckCircle className="w-6 h-6 text-green-600" />
                                        <h4 className="font-bold text-slate-900">Satellite Imagery</h4>
                                    </div>
                                    <p className="text-slate-600">Periodic verification of planting sites and forest growth over time.</p>
                                </div>
                                <div className="bg-slate-50 rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <CheckCircle className="w-6 h-6 text-green-600" />
                                        <h4 className="font-bold text-slate-900">Blockchain Verification</h4>
                                    </div>
                                    <p className="text-slate-600">Immutable records of every tree planted and carbon sequestered.</p>
                                </div>
                                <div className="bg-slate-50 rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <CheckCircle className="w-6 h-6 text-green-600" />
                                        <h4 className="font-bold text-slate-900">Fractional Carbon Credits</h4>
                                    </div>
                                    <p className="text-slate-600">Enabling smaller contributors and landowners to participate in carbon markets.</p>
                                </div>
                            </div>

                            {/* Business Solutions */}
                            <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
                                Enterprise Solutions
                            </h2>

                            <p className="text-lg text-slate-600 mb-6">
                                For businesses looking to integrate sustainability into their core operations, Afforestation.org offers:
                            </p>

                            <ul className="space-y-4 mb-10">
                                <li className="flex items-start gap-3">
                                    <Leaf className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <strong className="text-slate-900">ESG-Ready Dashboards:</strong>
                                        <span className="text-slate-600"> Real-time data and transparency reports for environmental compliance and CSR goals.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Leaf className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <strong className="text-slate-900">Employee Engagement:</strong>
                                        <span className="text-slate-600"> Use the Grow App to boost employee focus while contributing to sustainability targets.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Leaf className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <strong className="text-slate-900">API-First Integration:</strong>
                                        <span className="text-slate-600"> White-label solutions to embed tree-planting and carbon-tracking into your products or e-commerce platforms.</span>
                                    </div>
                                </li>
                            </ul>

                            {/* Quote */}
                            <blockquote className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-2xl my-10">
                                <p className="text-xl italic mb-4">
                                    "Afforestation.org represents our core belief that technology should serve the planet, not just profit margins.
                                    By making climate action measurable, rewarding, and accessible, we're empowering individuals and organizations
                                    to become active participants in the fight against climate change."
                                </p>
                                <footer className="text-green-200 font-semibold">
                                    - Sushil Singh, CEO, Wityliti
                                </footer>
                            </blockquote>

                            {/* Looking Forward */}
                            <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
                                Looking Forward
                            </h2>

                            <p className="text-lg text-slate-600 mb-6">
                                The launch of Afforestation.org marks just the beginning of Wityliti's commitment to climate and nature tech.
                                We envision a future where every digital interaction can contribute to environmental regeneration, where communities
                                worldwide are empowered to restore local ecosystems, and where technology serves as the bridge between intention and impact.
                            </p>

                            <p className="text-lg text-slate-600 mb-10">
                                Join us on this journey. Whether you're an individual looking to make your daily habits count, a community organizer
                                interested in urban rewilding, or a business seeking meaningful sustainability integration - there's a place for you
                                in this mission.
                            </p>

                            {/* CTA */}
                            <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-center">
                                <h3 className="text-2xl font-bold text-white mb-4">Explore Afforestation.org</h3>
                                <p className="text-green-100 mb-6">
                                    Discover how you can make a real impact on the environment through technology and community action.
                                </p>
                                <a
                                    href="https://afforestation.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-8 py-3 bg-white text-green-700 font-semibold rounded-full hover:bg-green-50 transition-colors"
                                >
                                    <TreePine className="w-5 h-5" />
                                    Visit Afforestation.org
                                </a>
                            </div>
                        </motion.div>

                        {/* Share Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-12 pt-8 border-t border-slate-200"
                        >
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div className="flex items-center gap-2 text-slate-600">
                                    <Share2 className="w-5 h-5" />
                                    <span>Share this announcement</span>
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        onClick={handleLinkedInShare}
                                        className="flex items-center gap-2 px-4 py-2 bg-[#0077B5] text-white rounded-lg hover:bg-[#006699] transition-colors"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                        LinkedIn
                                    </button>
                                    <button
                                        onClick={handleCopyLink}
                                        className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
                                    >
                                        <LinkIcon className="w-5 h-5" />
                                        {copied ? 'Copied!' : 'Copy Link'}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* About Afforestation.org Section */}
                <section className="py-16 bg-gradient-to-b from-green-50 to-white">
                    <div className="max-w-4xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">About Afforestation.org</h2>
                            <p className="text-slate-600 mb-6">
                                Afforestation.org is a climate-tech platform developed by Wityliti that goes "beyond carbon offsets" to build
                                resilient ecosystems. Through innovative programs like the Grow App, Seed Revolution, and Nature Bank, combined
                                with advanced verification technology, it makes climate action measurable, rewarding, and accessible to everyone.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://afforestation.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
                                >
                                    <Globe className="w-5 h-5" />
                                    afforestation.org
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AfforestationLaunch;
