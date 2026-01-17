import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    tags: string[];
    image?: string;
    featured?: boolean;
}

const blogPosts: BlogPost[] = [
    {
        id: 'isoft-partnership',
        title: 'Wityliti Announces Strategic Partnership with iSOFT',
        excerpt: 'We\'re proud to announce a new strategic partnership with iSOFT, marking a bold step forward in shaping the future of collaboration across cyberspace.',
        date: 'August 20, 2025',
        readTime: '3 min read',
        tags: ['Partnership', 'Innovation', 'CyberSpace'],
        featured: true,
    },
    {
        id: 'cyfiniti-acquisition',
        title: 'Wityliti Acquires Cyfiniti Labs to Strengthen Cybersecurity Division',
        excerpt: 'Strategic acquisition brings world-class security expertise and OWASP Project Leadership to power Wityliti\'s cybersecurity wing, led by Faiz Ahmed Zaidi.',
        date: 'April 15, 2025',
        readTime: '4 min read',
        tags: ['Acquisition', 'Cyber Security', 'Leadership'],
    },
    {
        id: 'tese-partnership',
        title: 'Wityliti Signs Tese.io — Entering the Climate Tech Space',
        excerpt: 'A landmark partnership marking Wityliti\'s strategic entry into climate technology, led by Sushil Singh as CEO of Wityliti and CTO of Tese.io.',
        date: 'January 15, 2023',
        readTime: '5 min read',
        tags: ['Climate Tech', 'Sustainability'],
    },
    {
        id: 'afforestation-launch',
        title: 'Wityliti Launches Afforestation.org - Entering Climate & Nature Tech',
        excerpt: 'Announcing our flagship climate-tech platform that goes beyond carbon offsets to build resilient ecosystems through the Grow App, Seed Revolution, and Nature Bank.',
        date: 'December 15, 2022',
        readTime: '7 min read',
        tags: ['Launch', 'Climate Tech', 'Nature Tech'],
    }
];

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Blog() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative py-16 pt-32 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white" />
                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-3xl mx-auto text-center"
                        >
                            <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-emerald-600 bg-emerald-50 rounded-full">
                                Blog & Updates
                            </span>
                            <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-6">
                                Insights & <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">Announcements</span>
                            </h1>
                            <p className="text-xl text-slate-600">
                                Stay updated with the latest news, partnerships, and innovations from Wityliti.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Blog Posts Grid */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogPosts.map((post, index) => (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-emerald-200 transition-all duration-300 ${post.featured ? 'md:col-span-2 lg:col-span-3' : ''}`}
                                >
                                    <Link to={`/blog/${post.id}`} className="block">
                                        {post.featured ? (
                                            <div className="p-8 md:p-12">
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {post.tags.map(tag => (
                                                        <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-full">
                                                            <Tag className="w-3 h-3" />{tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">
                                                    {post.title}
                                                </h2>
                                                <p className="text-lg text-slate-600 mb-6 max-w-3xl">
                                                    {post.excerpt}
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-6 text-sm text-slate-500">
                                                        <span className="flex items-center gap-2">
                                                            <Calendar className="w-4 h-4" />{post.date}
                                                        </span>
                                                        <span className="flex items-center gap-2">
                                                            <Clock className="w-4 h-4" />{post.readTime}
                                                        </span>
                                                    </div>
                                                    <span className="inline-flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all">
                                                        Read more <ArrowRight className="w-4 h-4" />
                                                    </span>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="p-6">
                                                <div className="flex flex-wrap gap-2 mb-3">
                                                    {post.tags.slice(0, 2).map(tag => (
                                                        <span key={tag} className="px-2 py-1 text-xs font-medium text-emerald-700 bg-emerald-50 rounded-full">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                                                    {post.title}
                                                </h3>
                                                <p className="text-slate-600 mb-4 line-clamp-2">
                                                    {post.excerpt}
                                                </p>
                                                <div className="flex items-center gap-4 text-sm text-slate-500">
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="w-3 h-3" />{post.date}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="w-3 h-3" />{post.readTime}
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </Link>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
