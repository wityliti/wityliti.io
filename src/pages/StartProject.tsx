import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import ProjectWizard from '@/components/ProjectWizard';

export default function StartProject() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="pt-32 pb-24">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                            <Sparkles className="w-4 h-4" />
                            Let's Build Something Amazing
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                            Start Your <span className="text-emerald-400">Project</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Tell us about your vision. Our team will analyze your requirements and craft a tailored solution.
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 md:p-10"
                        >
                            <ProjectWizard />
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mt-12 text-center"
                        >
                            <p className="text-muted-foreground mb-4">
                                Have questions before starting a project?
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                            >
                                Get in Touch <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
