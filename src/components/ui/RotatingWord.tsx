import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Props = {
    words: string[];
    className?: string;
    interval?: number;
};

export default function RotatingWord({ words, className, interval = 2000 }: Props) {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);
    const [delta, setDelta] = useState(150);

    useEffect(() => {
        const ticker = setTimeout(() => {
            tick();
        }, delta);

        return () => clearTimeout(ticker);
    }, [text, delta]);

    const tick = () => {
        const currentWord = words[wordIndex % words.length];
        const updatedText = isDeleting
            ? currentWord.substring(0, text.length - 1)
            : currentWord.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(50); // Faster deletion
        } else {
            setDelta(100); // Normal typing speed
        }

        if (!isDeleting && updatedText === currentWord) {
            // Finished typing, wait before deleting
            setDelta(interval);
            setIsDeleting(true);
        } else if (isDeleting && updatedText === '') {
            // Finished deleting, start typing next word
            setIsDeleting(false);
            setWordIndex(wordIndex + 1);
            setDelta(200);
        }
    };

    return (
        <span className={`${className} inline-flex items-center relative min-h-[1.2em] min-w-[3ch]`}>
            <span>{text}</span>
            <span className="animate-pulse ml-0.5 inline-block w-[2px] h-[1em] bg-emerald-400 opacity-70" />
        </span>
    );
}
