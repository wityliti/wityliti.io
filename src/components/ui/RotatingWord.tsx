import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

type Props = {
    words: string[];
    className?: string;
    interval?: number;
};

function AnimatedLetters({ word }: { word: string }) {
    const letters = useMemo(() => word.split(''), [word]);

    return (
        <span className="inline-flex" aria-hidden>
            {letters.map((ch, i) => (
                <motion.span
                    key={`${ch}-${i}-${word}`}
                    initial={{ rotateX: 90, opacity: 0, y: 10 }}
                    animate={{ rotateX: 0, opacity: 1, y: 0 }}
                    exit={{ rotateX: -90, opacity: 0, y: -10 }}
                    transition={{
                        duration: 0.5,
                        delay: i * 0.05,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ transformOrigin: '50% 60%', display: 'inline-block' }}
                >
                    {ch === ' ' ? '\u00A0' : ch}
                </motion.span>
            ))}
        </span>
    );
}

export default function RotatingWord({ words, className, interval = 3000 }: Props) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, interval);

        return () => clearInterval(timer);
    }, [interval, words.length]);

    return (
        <span className={`${className} inline-flex relative`}>
            <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                    key={index} // Use index as key to differentiate
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                        opacity: { duration: 0.2 }
                    }}
                    layout
                    className="whitespace-nowrap"
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}
