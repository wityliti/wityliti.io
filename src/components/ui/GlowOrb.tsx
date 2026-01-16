import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface GlowOrbProps {
    className?: string;
    color?: 'emerald' | 'cyan' | 'indigo' | 'rose';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    followMouse?: boolean;
    intensity?: 'low' | 'medium' | 'high';
}

const colorMap = {
    emerald: {
        from: 'from-emerald-500/40',
        to: 'to-emerald-600/20',
        shadow: 'shadow-emerald-500/30',
        glow: 'rgba(16, 185, 129, 0.4)',
    },
    cyan: {
        from: 'from-cyan-500/40',
        to: 'to-cyan-600/20',
        shadow: 'shadow-cyan-500/30',
        glow: 'rgba(6, 182, 212, 0.4)',
    },
    indigo: {
        from: 'from-indigo-500/40',
        to: 'to-indigo-600/20',
        shadow: 'shadow-indigo-500/30',
        glow: 'rgba(99, 102, 241, 0.4)',
    },
    rose: {
        from: 'from-rose-500/40',
        to: 'to-rose-600/20',
        shadow: 'shadow-rose-500/30',
        glow: 'rgba(244, 63, 94, 0.4)',
    },
};

const sizeMap = {
    sm: 'w-32 h-32',
    md: 'w-64 h-64',
    lg: 'w-96 h-96',
    xl: 'w-[32rem] h-[32rem]',
};

const intensityMap = {
    low: 0.3,
    medium: 0.5,
    high: 0.8,
};

export default function GlowOrb({
    className = '',
    color = 'emerald',
    size = 'lg',
    followMouse = false,
    intensity = 'medium',
}: GlowOrbProps) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (!followMouse) return;

        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 100,
                y: (e.clientY / window.innerHeight - 0.5) * 100,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [followMouse]);

    const colors = colorMap[color];

    return (
        <motion.div
            className={`absolute rounded-full blur-3xl pointer-events-none ${sizeMap[size]} ${className}`}
            style={{
                background: `radial-gradient(circle, ${colors.glow} 0%, transparent 70%)`,
                opacity: intensityMap[intensity],
            }}
            animate={
                followMouse
                    ? {
                        x: mousePos.x,
                        y: mousePos.y,
                        scale: [1, 1.1, 1],
                    }
                    : {
                        scale: [1, 1.2, 1],
                        opacity: [
                            intensityMap[intensity],
                            intensityMap[intensity] * 1.3,
                            intensityMap[intensity],
                        ],
                    }
            }
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
        />
    );
}
