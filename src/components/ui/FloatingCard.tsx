import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface FloatingCardProps {
    children: ReactNode;
    className?: string;
    glowColor?: 'emerald' | 'cyan' | 'indigo';
    depth?: 'shallow' | 'medium' | 'deep';
}

const glowColors = {
    emerald: 'rgba(16, 185, 129, 0.15)',
    cyan: 'rgba(6, 182, 212, 0.15)',
    indigo: 'rgba(99, 102, 241, 0.15)',
};

const depthConfig = {
    shallow: { rotateMax: 5, translateZ: 10 },
    medium: { rotateMax: 10, translateZ: 20 },
    deep: { rotateMax: 15, translateZ: 30 },
};

export default function FloatingCard({
    children,
    className = '',
    glowColor = 'emerald',
    depth = 'medium',
}: FloatingCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 200 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const { rotateMax, translateZ } = depthConfig[depth];

    const rotateX = useTransform(springY, [-0.5, 0.5], [rotateMax, -rotateMax]);
    const rotateY = useTransform(springX, [-0.5, 0.5], [-rotateMax, rotateMax]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const normalizedX = (e.clientX - centerX) / (rect.width / 2);
        const normalizedY = (e.clientY - centerY) / (rect.height / 2);

        x.set(normalizedX * 0.5);
        y.set(normalizedY * 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                perspective: 1000,
            }}
            className={`relative group ${className}`}
        >
            {/* Animated gradient border */}
            <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-emerald-500/20 via-cyan-500/30 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

            {/* Main card */}
            <div
                className="relative rounded-[2rem] border border-white/10 bg-background/60 backdrop-blur-xl overflow-hidden"
                style={{
                    transform: `translateZ(${translateZ}px)`,
                    boxShadow: `0 25px 50px -12px ${glowColors[glowColor]}`,
                }}
            >
                {/* Inner glow */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${glowColors[glowColor]}, transparent 40%)`,
                    }}
                />

                {/* Shimmer effect */}
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                        background:
                            'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.03) 55%, transparent 60%)',
                    }}
                    animate={{
                        x: ['-100%', '200%'],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: 'easeInOut',
                    }}
                />

                {children}
            </div>

            {/* Floating shadow */}
            <motion.div
                className="absolute inset-x-8 -bottom-6 h-16 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"
                style={{
                    background: glowColors[glowColor],
                    transform: 'translateZ(-20px)',
                }}
            />
        </motion.div>
    );
}
