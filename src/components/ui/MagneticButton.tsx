import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'ghost';
    magnetStrength?: number;
}

export default function MagneticButton({
    children,
    className = '',
    onClick,
    variant = 'primary',
    magnetStrength = 0.3,
}: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const glowOpacity = useTransform(
        [springX, springY],
        ([latestX, latestY]) => {
            const distance = Math.sqrt(
                (latestX as number) ** 2 + (latestY as number) ** 2
            );
            return Math.min(distance / 20, 1);
        }
    );

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = (e.clientX - centerX) * magnetStrength;
        const deltaY = (e.clientY - centerY) * magnetStrength;

        x.set(deltaX);
        y.set(deltaY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const variantStyles = {
        primary:
            'bg-foreground text-background hover:shadow-[0_0_40px_-5px] hover:shadow-emerald-500/50',
        secondary:
            'bg-transparent border border-white/20 text-foreground hover:border-emerald-500/50 hover:shadow-[0_0_30px_-5px] hover:shadow-emerald-500/30',
        ghost:
            'bg-white/5 text-foreground hover:bg-white/10 hover:shadow-[0_0_20px_-5px] hover:shadow-white/20',
    };

    return (
        <motion.button
            ref={ref}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                x: springX,
                y: springY,
            }}
            whileTap={{ scale: 0.95 }}
            className={`
        relative px-8 py-4 rounded-full font-bold text-lg
        transition-all duration-300 overflow-hidden
        ${variantStyles[variant]}
        ${className}
      `}
        >
            {/* Glow overlay */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-cyan-400/20 to-emerald-400/20 rounded-full"
                style={{ opacity: glowOpacity }}
            />

            {/* Content */}
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>

            {/* Animated border glow */}
            <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                    background:
                        'linear-gradient(90deg, transparent, rgba(16,185,129,0.3), transparent)',
                    backgroundSize: '200% 100%',
                }}
                animate={{
                    backgroundPosition: ['0% 0%', '200% 0%'],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />
        </motion.button>
    );
}
