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
        <span className={`${className} inline-grid grid-cols-1 items-center justify-items-center`}>
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={index}
                    className="col-start-1 row-start-1"
                >
                    <AnimatedLetters word={words[index]} />
                </motion.span>
            </AnimatePresence>
            {/* Invisible duplicate to maintain width/height stability if needed, though grid centering helps */}
            <span className="col-start-1 row-start-1 opacity-0 pointer-events-none select-none" aria-hidden="true">
                {words.sort((a, b) => b.length - a.length)[0]}
            </span>
        </span>
    );
}
