import { motion } from 'framer-motion';

interface AnimatedMeshGradientProps {
    className?: string;
}

export default function AnimatedMeshGradient({ className = '' }: AnimatedMeshGradientProps) {
    const blobs = [
        {
            color: 'bg-emerald-500/30',
            size: 'w-[40rem] h-[40rem]',
            initialPosition: { x: '-10%', y: '-20%' },
            animate: {
                x: ['-10%', '5%', '-15%', '-10%'],
                y: ['-20%', '-10%', '-25%', '-20%'],
                scale: [1, 1.1, 0.95, 1],
            },
            duration: 20,
        },
        {
            color: 'bg-cyan-500/25',
            size: 'w-[35rem] h-[35rem]',
            initialPosition: { x: '60%', y: '10%' },
            animate: {
                x: ['60%', '70%', '55%', '60%'],
                y: ['10%', '20%', '5%', '10%'],
                scale: [1, 0.9, 1.15, 1],
            },
            duration: 25,
        },
        {
            color: 'bg-indigo-500/20',
            size: 'w-[30rem] h-[30rem]',
            initialPosition: { x: '20%', y: '60%' },
            animate: {
                x: ['20%', '30%', '10%', '20%'],
                y: ['60%', '70%', '55%', '60%'],
                scale: [1, 1.2, 0.9, 1],
            },
            duration: 22,
        },
        {
            color: 'bg-emerald-600/20',
            size: 'w-[25rem] h-[25rem]',
            initialPosition: { x: '80%', y: '70%' },
            animate: {
                x: ['80%', '85%', '75%', '80%'],
                y: ['70%', '80%', '65%', '70%'],
                scale: [1, 0.85, 1.1, 1],
            },
            duration: 18,
        },
    ];

    return (
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-slate-900/50" />

            {/* Animated blobs */}
            {blobs.map((blob, index) => (
                <motion.div
                    key={index}
                    className={`absolute rounded-full blur-[100px] ${blob.color} ${blob.size}`}
                    initial={blob.initialPosition}
                    animate={blob.animate}
                    transition={{
                        duration: blob.duration,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}

            {/* Noise overlay for texture */}
            <div
                className="absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Vignette overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
        </div>
    );
}
