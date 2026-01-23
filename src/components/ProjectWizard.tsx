import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Code, Smartphone, Brain, Radio, ArrowRight, ArrowLeft, Check,
    Calendar, DollarSign, Send
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Step 1: Project Type
const PROJECT_TYPES = [
    { id: 'web', icon: <Code className="w-8 h-8 text-emerald-400" />, label: 'Web Platform', desc: 'SaaS, Dashboard, or Website' },
    { id: 'mobile', icon: <Smartphone className="w-8 h-8 text-cyan-400" />, label: 'Mobile App', desc: 'iOS, Android, or Cross-platform' },
    { id: 'ai', icon: <Brain className="w-8 h-8 text-purple-400" />, label: 'AI Solution', desc: 'LLMs, Predictive Models, or Automation' },
    { id: 'iot', icon: <Radio className="w-8 h-8 text-orange-400" />, label: 'IoT System', desc: 'Hardware Integration & Sensor Networks' },
];

// Step 2: Timeline
const TIMELINES = [
    { id: 'urgent', label: '< 1 Month', desc: 'ASAP / Rush' },
    { id: 'standard', label: '1-3 Months', desc: 'Standard MVP' },
    { id: 'relaxed', label: '3-6 Months', desc: 'Enterprise Scale' },
    { id: 'ongoing', label: 'Ongoing', desc: 'Long-term Retainer' },
];

// Step 3: Budget
const BUDGETS = [
    { id: 'micro', label: '< $10k', desc: 'Small Scope' },
    { id: 'small', label: '$10k - $50k', desc: 'Medium Scope' },
    { id: 'medium', label: '$50k - $100k', desc: 'Large Scope' },
    { id: 'large', label: '$100k+', desc: 'Enterprise' },
];

export default function ProjectWizard() {
    const [step, setStep] = useState(0);
    const [data, setData] = useState({
        type: '',
        timeline: '',
        budget: '',
        name: '',
        email: '',
        details: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const handleSelect = (key: string, value: string) => {
        setData(prev => ({ ...prev, [key]: value }));
        // Auto-advance for selection steps
        if (step < 3) {
            setTimeout(nextStep, 300);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const apiUrl = import.meta.env.VITE_API_URL || '';
            const response = await fetch(`${apiUrl}/api/send-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setIsSuccess(true);
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('Network error. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full bg-white/5 border border-white/10 rounded-3xl p-12 text-center"
            >
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-emerald-400" />
                </div>
                <h2 className="text-3xl font-display font-bold mb-4">Message Sent!</h2>
                <p className="text-muted-foreground text-lg mb-8">
                    We've received your project details. Our team will analyze your requirements and get back to you within 24 hours.
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="px-8 py-3 bg-white/5 hover:bg-white/10 rounded-full font-medium transition-colors"
                >
                    Start Another Project
                </button>
            </motion.div>
        );
    }

    return (
        <div className="w-full max-w-2xl mx-auto">
            {/* Progress Bar */}
            <div className="flex items-center gap-2 mb-8">
                {[0, 1, 2, 3].map((i) => (
                    <div
                        key={i}
                        className={cn(
                            "h-1 flex-1 rounded-full transition-all duration-500",
                            i <= step ? "bg-emerald-400" : "bg-white/10"
                        )}
                    />
                ))}
            </div>

            <div className="min-h-[400px] relative">
                <AnimatePresence mode="wait">
                    {step === 0 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-display font-bold">What are you building?</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {PROJECT_TYPES.map((type) => (
                                    <button
                                        key={type.id}
                                        onClick={() => handleSelect('type', type.id)}
                                        className={cn(
                                            "group p-6 rounded-2xl border text-left transition-all duration-300 hover:scale-[1.02]",
                                            data.type === type.id
                                                ? "bg-emerald-500/10 border-emerald-500/50"
                                                : "bg-white/5 border-white/10 hover:bg-white/[0.08]"
                                        )}
                                    >
                                        <div className="mb-4 p-3 bg-white/5 rounded-xl w-fit group-hover:bg-white/10 transition-colors">
                                            {type.icon}
                                        </div>
                                        <h3 className="text-lg font-bold mb-1">{type.label}</h3>
                                        <p className="text-sm text-muted-foreground">{type.desc}</p>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {step === 1 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <button onClick={prevStep} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                    <ArrowLeft className="w-5 h-5" />
                                </button>
                                <h2 className="text-3xl font-display font-bold">Project Timeline?</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {TIMELINES.map((time) => (
                                    <button
                                        key={time.id}
                                        onClick={() => handleSelect('timeline', time.id)}
                                        className={cn(
                                            "group p-6 rounded-2xl border text-left transition-all duration-300 hover:scale-[1.02]",
                                            data.timeline === time.id
                                                ? "bg-cyan-500/10 border-cyan-500/50"
                                                : "bg-white/5 border-white/10 hover:bg-white/[0.08]"
                                        )}
                                    >
                                        <div className="mb-4 p-3 bg-white/5 rounded-xl w-fit">
                                            <Calendar className="w-6 h-6 text-cyan-400" />
                                        </div>
                                        <h3 className="text-lg font-bold mb-1">{time.label}</h3>
                                        <p className="text-sm text-muted-foreground">{time.desc}</p>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <button onClick={prevStep} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                    <ArrowLeft className="w-5 h-5" />
                                </button>
                                <h2 className="text-3xl font-display font-bold">Ballpark Budget?</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {BUDGETS.map((budget) => (
                                    <button
                                        key={budget.id}
                                        onClick={() => handleSelect('budget', budget.id)}
                                        className={cn(
                                            "group p-6 rounded-2xl border text-left transition-all duration-300 hover:scale-[1.02]",
                                            data.budget === budget.id
                                                ? "bg-indigo-500/10 border-indigo-500/50"
                                                : "bg-white/5 border-white/10 hover:bg-white/[0.08]"
                                        )}
                                    >
                                        <div className="mb-4 p-3 bg-white/5 rounded-xl w-fit">
                                            <DollarSign className="w-6 h-6 text-indigo-400" />
                                        </div>
                                        <h3 className="text-lg font-bold mb-1">{budget.label}</h3>
                                        <p className="text-sm text-muted-foreground">{budget.desc}</p>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step4"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <button onClick={prevStep} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                    <ArrowLeft className="w-5 h-5" />
                                </button>
                                <h2 className="text-3xl font-display font-bold">Final Details</h2>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-muted-foreground">Name</label>
                                        <input
                                            required
                                            type="text"
                                            value={data.name}
                                            onChange={e => setData(prev => ({ ...prev, name: e.target.value }))}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-emerald-400 transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-muted-foreground">Email</label>
                                        <input
                                            required
                                            type="email"
                                            value={data.email}
                                            onChange={e => setData(prev => ({ ...prev, email: e.target.value }))}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-emerald-400 transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground">Project Details</label>
                                    <textarea
                                        rows={4}
                                        value={data.details}
                                        onChange={e => setData(prev => ({ ...prev, details: e.target.value }))}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-emerald-400 transition-colors"
                                        placeholder="Tell us a bit more about your vision..."
                                    />
                                </div>

                                <button
                                    disabled={isSubmitting}
                                    className="w-full bg-foreground text-background font-bold py-4 rounded-xl hover:bg-emerald-400 hover:text-white transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <div className="w-6 h-6 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            Send Request <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
