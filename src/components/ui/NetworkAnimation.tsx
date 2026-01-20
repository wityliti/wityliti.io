import { motion } from 'framer-motion';

export default function NetworkAnimation() {
    const nodes = [
        { x: '20%', y: '30%', delay: 0 },
        { x: '40%', y: '60%', delay: 0.2 },
        { x: '70%', y: '40%', delay: 0.4 },
        { x: '80%', y: '70%', delay: 0.6 },
        { x: '50%', y: '20%', delay: 0.8 },
    ];

    return (
        <div className="relative w-full h-full bg-slate-900 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #334155 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <svg className="absolute inset-0 w-full h-full">
                {/* Connecting Lines */}
                <motion.path
                    d="M 20% 30% L 40% 60% L 70% 40% L 80% 70% L 50% 20% Z"
                    fill="none"
                    stroke="rgba(34, 211, 238, 0.3)"
                    strokeWidth="2"
                    strokeDasharray="10 10"
                    initial={{ strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: -100 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
            </svg>

            {/* Pulsing Nodes */}
            {nodes.map((node, i) => (
                <motion.div
                    key={i}
                    className="absolute w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                    style={{ left: node.x, top: node.y }}
                    initial={{ scale: 0.8, opacity: 0.5 }}
                    animate={{
                        scale: [0.8, 1.2, 0.8],
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: node.delay,
                        ease: "easeInOut"
                    }}
                >
                    <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-25" />
                </motion.div>
            ))}

            <div className="absolute bottom-8 left-8">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-[10px] uppercase tracking-[0.2em]">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    Live Route Optimization
                </div>
            </div>
        </div>
    );
}
