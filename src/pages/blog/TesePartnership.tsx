import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Linkedin, Share2, Leaf, Globe, TrendingUp, TreePine } from 'lucide-react';

export default function TesePartnership() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden border-b border-slate-100">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-teal-800" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.2),transparent_50%)]" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-emerald-200 hover:text-white transition-colors mb-8"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back to Blog
                        </Link>

                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-4 py-1.5 text-sm font-semibold text-emerald-200 bg-emerald-500/20 rounded-full border border-emerald-400/30">Climate Tech</span>
                            <span className="px-4 py-1.5 text-sm font-semibold text-teal-200 bg-teal-500/20 rounded-full border border-teal-400/30">New Client</span>
                            <span className="px-4 py-1.5 text-sm font-semibold text-green-200 bg-green-500/20 rounded-full border border-green-400/30">Sustainability</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                            Wityliti Signs <span className="text-emerald-400">Tese.io</span> - Entering the Climate Tech Space
                        </h1>

                        <p className="text-xl text-emerald-100 mb-8">
                            A landmark partnership marking Wityliti's strategic entry into climate technology and sustainable digital solutions.
                        </p>

                        <div className="flex flex-wrap items-center gap-6 text-emerald-200 mb-8">
                            <span className="flex items-center gap-2">
                                <Calendar className="w-5 h-5" /> January 15, 2023
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock className="w-5 h-5" /> 5 min read
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
                            🌱 <strong>Wityliti is thrilled to announce our partnership with Tese.io</strong>, marking a pivotal moment in our journey as we enter the climate technology space with a clear mission: to build digital solutions that drive real environmental impact.
                        </p>

                        <p className="text-lg text-slate-600 mb-6">
                            This partnership represents more than a business collaboration-it's a commitment to leveraging technology
                            for climate action. As the world faces unprecedented environmental challenges, we believe that innovative
                            digital platforms hold the key to accelerating sustainable practices across industries.
                        </p>

                        {/* Leadership Highlight */}
                        <div className="my-12 p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl border border-emerald-200">
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                                    <Leaf className="w-10 h-10 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">
                                        Led by Sushil Singh
                                    </h3>
                                    <p className="text-emerald-600 font-semibold mb-3">
                                        CEO, Wityliti | CTO, Tese.io
                                    </p>
                                    <p className="text-slate-600">
                                        With <strong>Sushil Singh</strong> at the helm-serving as CEO of Wityliti and CTO of Tese.io-this
                                        partnership benefits from unified leadership and a shared vision for sustainable technology.
                                        This dual role ensures seamless collaboration and alignment between both organizations as we
                                        work together to build impactful climate solutions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
                            About Tese.io
                        </h2>

                        <p className="text-lg text-slate-600 mb-6">
                            <a href="https://tese.io" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 font-semibold">Tese.io</a> is
                            at the forefront of climate technology, developing innovative platforms that help organizations measure,
                            reduce, and offset their environmental footprint. Their mission aligns perfectly with our commitment to
                            building technology that serves both business needs and planetary health.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                                    <Globe className="w-6 h-6 text-emerald-600" />
                                </div>
                                <h4 className="font-bold text-slate-900 mb-2">Carbon Accounting</h4>
                                <p className="text-slate-600 text-sm">
                                    Digital platforms for accurate measurement and tracking of organizational carbon emissions.
                                </p>
                            </div>
                            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                                    <TreePine className="w-6 h-6 text-teal-600" />
                                </div>
                                <h4 className="font-bold text-slate-900 mb-2">Afforestation Programs</h4>
                                <p className="text-slate-600 text-sm">
                                    Technology-driven tree planting initiatives with transparent impact tracking.
                                </p>
                            </div>
                            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                                    <TrendingUp className="w-6 h-6 text-green-600" />
                                </div>
                                <h4 className="font-bold text-slate-900 mb-2">Sustainability Reporting</h4>
                                <p className="text-slate-600 text-sm">
                                    Automated ESG reporting tools that meet international sustainability standards.
                                </p>
                            </div>
                            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                                <div className="w-12 h-12 bg-lime-100 rounded-xl flex items-center justify-center mb-4">
                                    <Leaf className="w-6 h-6 text-lime-600" />
                                </div>
                                <h4 className="font-bold text-slate-900 mb-2">Green Finance</h4>
                                <p className="text-slate-600 text-sm">
                                    Solutions that connect sustainable projects with impact-driven investors.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
                            Why Climate Tech Matters
                        </h2>

                        <p className="text-lg text-slate-600 mb-6">
                            The climate crisis demands urgent action, and technology is a powerful enabler. By entering the climate
                            tech space, Wityliti is committing to:
                        </p>

                        <ul className="space-y-4 my-8">
                            <li className="flex items-start gap-4">
                                <span className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-white text-sm font-bold">🌍</span>
                                </span>
                                <span className="text-slate-600">
                                    <strong>Building sustainable digital infrastructure</strong> that minimizes environmental impact while maximizing efficiency
                                </span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-white text-sm font-bold">📊</span>
                                </span>
                                <span className="text-slate-600">
                                    <strong>Developing data-driven solutions</strong> that help organizations understand and reduce their carbon footprint
                                </span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-white text-sm font-bold">🤝</span>
                                </span>
                                <span className="text-slate-600">
                                    <strong>Partnering with climate-focused organizations</strong> to amplify collective impact
                                </span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-white text-sm font-bold">🚀</span>
                                </span>
                                <span className="text-slate-600">
                                    <strong>Innovating for a net-zero future</strong> by creating tools that make sustainability accessible and actionable
                                </span>
                            </li>
                        </ul>

                        <blockquote className="my-12 p-8 bg-gradient-to-br from-emerald-900 to-teal-800 text-white rounded-2xl relative">
                            <div className="absolute top-4 left-4 text-6xl text-emerald-400 opacity-50">"</div>
                            <p className="text-xl font-medium mb-4 relative z-10">
                                Climate change is the defining challenge of our generation. At Wityliti, we believe technology
                                should be part of the solution, not the problem. Our partnership with Tese.io marks the beginning
                                of our journey to build digital tools that drive real, measurable environmental impact.
                            </p>
                            <footer className="text-emerald-300 font-semibold">
                                - Sushil Singh, CEO, Wityliti
                            </footer>
                        </blockquote>

                        <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
                            Looking Ahead
                        </h2>

                        <p className="text-lg text-slate-600 mb-6">
                            This partnership with Tese.io is just the beginning. We're excited to explore new frontiers in climate
                            technology, from IoT-enabled environmental monitoring to AI-powered sustainability analytics. Together,
                            we're building a future where technology and environmental stewardship go hand in hand.
                        </p>

                        <p className="text-lg text-slate-600 mb-6">
                            Stay tuned for updates on our climate tech initiatives and the innovative solutions we're developing
                            with Tese.io. The journey to a sustainable digital future starts now.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-2">
                            <span className="text-emerald-600">#ClimateTech</span>
                            <span className="text-emerald-600">#Sustainability</span>
                            <span className="text-emerald-600">#Wityliti</span>
                            <span className="text-emerald-600">#Tese</span>
                            <span className="text-emerald-600">#NetZero</span>
                            <span className="text-emerald-600">#GreenTech</span>
                        </div>
                    </motion.div>
                </div>
            </article>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-br from-emerald-900 to-teal-800 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold mb-4">Interested in Climate Tech Solutions?</h2>
                    <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
                        Let's explore how technology can drive sustainability for your organization.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-900 font-bold rounded-full hover:shadow-lg transition-all"
                        >
                            Start a Conversation
                        </Link>
                        <a
                            href="https://tese.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-500 transition-all"
                        >
                            Visit Tese.io
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
