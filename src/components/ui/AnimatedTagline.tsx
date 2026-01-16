import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { MouseEvent as ReactMouseEvent } from 'react';

type Tagline = {
  a: string;
  b: string;
  mid?: string;
};

type Props = {
  className?: string;
  aClassName?: string;
  bClassName?: string;
  midClassName?: string;
  cycleMs?: number;
  fixedWidth?: boolean;
  variant?: 'inline' | 'stacked';
  scramble?: boolean;
};

const TAGLINES: Tagline[] = [
  { a: 'NATURE', b: 'CODE' },
  { a: 'HUMANITY', b: 'ALGORITHMS' },
  { a: 'EARTH', b: 'DATA' },
  { a: 'CHAOS', b: 'LOGIC' },
  { a: 'BIOLOGY', b: 'MODELS' },
  { a: 'WILDERNESS', b: 'SYSTEMS' },
  { a: 'REALITY', b: 'DESIGN' },
  { a: 'SENSES', b: 'SIGNALS', mid: 'MEET' },
  { a: 'LIGHT', b: 'PIXELS' },
  { a: 'MOTION', b: 'CIRCUITS' },
  { a: 'MEMORY', b: 'NETWORKS' },
  { a: 'IMAGINATION', b: 'AI' },
  { a: 'INTUITION', b: 'SYNTAX' },
];

const A_WORDS = Array.from(new Set(TAGLINES.map((t) => t.a)));
const B_WORDS = Array.from(new Set(TAGLINES.map((t) => t.b)));

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function useScramble(target: string, enabled: boolean, durationMs = 180) {
  const [text, setText] = useState(target);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(0);
  const fromRef = useRef<string>(target);
  const textRef = useRef<string>(target);

  useEffect(() => {
    textRef.current = text;
  }, [text]);

  useEffect(() => {
    if (!enabled) {
      setText(target);
      return;
    }

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    startRef.current = performance.now();
    fromRef.current = textRef.current;

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const maxLen = Math.max(fromRef.current.length, target.length);

    const tick = () => {
      const now = performance.now();
      const t = clamp((now - startRef.current) / durationMs, 0, 1);
      const lockCount = Math.floor(t * maxLen);
      let next = '';

      for (let i = 0; i < maxLen; i++) {
        const finalChar = target[i] ?? '';
        if (i < lockCount) {
          next += finalChar;
        } else {
          next += letters[Math.floor(Math.random() * letters.length)] ?? '';
        }
      }

      setText(next);

      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setText(target);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [durationMs, enabled, target]);

  return text;
}

function AnimatedLetters({ word, tint }: { word: string; tint: 'a' | 'b' }) {
  const letters = useMemo(() => word.split(''), [word]);

  return (
    <span className="inline-flex" aria-hidden>
      {letters.map((ch, i) => (
        <motion.span
          key={`${ch}-${i}-${word}`}
          initial={{ rotateX: 90, opacity: 0, y: 6 }}
          animate={{ rotateX: 0, opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay: i * 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ transformOrigin: '50% 60%' }}
          className={tint === 'a' ? 'inline-block' : 'inline-block'}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

export default function AnimatedTagline({
  className,
  aClassName,
  bClassName,
  midClassName,
  cycleMs = 2800,
  fixedWidth = true,
  variant = 'inline',
  scramble = false,
}: Props) {
  const reduceMotion = useReducedMotion();
  const [idx, setIdx] = useState(0);
  const [hoverMode, setHoverMode] = useState<null | 'a' | 'b' | 'headline'>(null);
  const [overrideA, setOverrideA] = useState<string | null>(null);
  const [overrideB, setOverrideB] = useState<string | null>(null);
  const [spot, setSpot] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const measureARef = useRef<HTMLSpanElement>(null);
  const measureBRef = useRef<HTMLSpanElement>(null);
  const [maxAWidth, setMaxAWidth] = useState<number>(0);
  const [maxBWidth, setMaxBWidth] = useState<number>(0);
  const [scramblePhase, setScramblePhase] = useState(false);

  const current = TAGLINES[idx % TAGLINES.length] ?? TAGLINES[0]!;
  const aTarget = overrideA ?? current.a;
  const bTarget = overrideB ?? current.b;
  const mid = current.mid ?? 'MEETS';

  useLayoutEffect(() => {
    if (!fixedWidth) return;
    const aEl = measureARef.current;
    const bEl = measureBRef.current;
    if (!aEl || !bEl) return;

    const measureMax = (el: HTMLSpanElement, words: string[]) => {
      const prev = el.textContent;
      let max = 0;
      for (const w of words) {
        el.textContent = w;
        const rect = el.getBoundingClientRect();
        max = Math.max(max, rect.width);
      }
      el.textContent = prev;
      return max;
    };

    const compute = () => {
      const nextA = measureMax(aEl, A_WORDS);
      const nextB = measureMax(bEl, B_WORDS);
      setMaxAWidth(nextA);
      setMaxBWidth(nextB);
    };

    compute();

    const onResize = () => compute();
    window.addEventListener('resize', onResize);
    const fonts = (document as any).fonts as FontFaceSet | undefined;
    if (fonts?.ready) {
      fonts.ready.then(() => compute()).catch(() => undefined);
    }
    return () => window.removeEventListener('resize', onResize);
  }, [fixedWidth, aClassName, bClassName]);

  const containerWidthPx = useMemo(() => {
    return Math.max(maxAWidth, maxBWidth);
  }, [maxAWidth, maxBWidth]);

  const scrambleEnabled = scramble && !reduceMotion && scramblePhase && !overrideA && !overrideB;
  const aText = useScramble(aTarget, scrambleEnabled);
  const bText = useScramble(bTarget, scrambleEnabled);

  useEffect(() => {
    if (reduceMotion) return;
    if (hoverMode) return;

    const t = window.setInterval(() => {
      setScramblePhase(true);
      window.setTimeout(() => setScramblePhase(false), 220);
      setIdx((v) => (v + 1) % TAGLINES.length);
    }, cycleMs);

    return () => window.clearInterval(t);
  }, [cycleMs, hoverMode, reduceMotion]);

  useEffect(() => {
    if (!scramble) return;
    if (reduceMotion) return;
    if (overrideA || overrideB) return;
    setScramblePhase(true);
    const t = window.setTimeout(() => setScramblePhase(false), 220);
    return () => window.clearTimeout(t);
  }, [idx, overrideA, overrideB, reduceMotion, scramble]);

  const onWordMove = (kind: 'a' | 'b') => (e: ReactMouseEvent<HTMLSpanElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = clamp((e.clientX - rect.left) / rect.width, 0, 0.9999);
    const list = kind === 'a' ? A_WORDS : B_WORDS;
    const next = list[Math.floor(x * list.length)] ?? list[0];

    if (kind === 'a') setOverrideA(next);
    else setOverrideB(next);
  };

  const onHeadlineMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clamp(e.clientX - rect.left, 0, rect.width);
    const y = clamp(e.clientY - rect.top, 0, rect.height);
    setSpot({ x, y });
  };

  const tilt = useMemo(() => {
    const el = containerRef.current;
    if (!el) return { rx: 0, ry: 0 };
    const rect = el.getBoundingClientRect();
    const nx = rect.width ? spot.x / rect.width : 0.5;
    const ny = rect.height ? spot.y / rect.height : 0.5;
    return {
      rx: (0.5 - ny) * 10,
      ry: (nx - 0.5) * 12,
    };
  }, [spot.x, spot.y]);

  const ANode = (
    <span
      onMouseEnter={() => setHoverMode('a')}
      onMouseLeave={() => {
        setHoverMode(null);
        setOverrideA(null);
      }}
      onMouseMove={onWordMove('a')}
      className={aClassName}
      style={
        fixedWidth
          ? {
            display: variant === 'stacked' ? 'flex' : 'inline-flex',
            justifyContent: 'center',
            minWidth: variant === 'stacked' ? '100%' : maxAWidth || undefined,
            whiteSpace: 'nowrap',
            overflow: 'visible',
          }
          : { whiteSpace: 'nowrap' }
      }
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={aText}
          initial={{ opacity: 0, rotateX: 80 }}
          animate={{ opacity: 1, rotateX: 0 }}
          exit={{ opacity: 0, rotateX: -80 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'inline-block', transformOrigin: '50% 60%' }}
        >
          <AnimatedLetters word={aText} tint="a" />
        </motion.span>
      </AnimatePresence>
    </span>
  );

  const BNode = (
    <span
      onMouseEnter={() => setHoverMode('b')}
      onMouseLeave={() => {
        setHoverMode(null);
        setOverrideB(null);
      }}
      onMouseMove={onWordMove('b')}
      className={bClassName}
      style={
        fixedWidth
          ? {
            display: variant === 'stacked' ? 'flex' : 'inline-flex',
            justifyContent: 'center',
            minWidth: variant === 'stacked' ? '100%' : maxBWidth || undefined,
            whiteSpace: 'nowrap',
            overflow: 'visible',
          }
          : { whiteSpace: 'nowrap' }
      }
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={bText}
          initial={{ opacity: 0, rotateX: 80 }}
          animate={{ opacity: 1, rotateX: 0 }}
          exit={{ opacity: 0, rotateX: -80 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'inline-block', transformOrigin: '50% 60%' }}
        >
          <AnimatedLetters word={bText} tint="b" />
        </motion.span>
      </AnimatePresence>
    </span>
  );

  return (
    <div
      ref={containerRef}
      className={className}
      onMouseEnter={() => setHoverMode('headline')}
      onMouseLeave={() => {
        setHoverMode(null);
        setOverrideA(null);
        setOverrideB(null);
      }}
      onMouseMove={onHeadlineMove}
      style={
        fixedWidth && variant === 'stacked' && containerWidthPx
          ? {
            display: 'inline-block',
            minWidth: containerWidthPx,
            overflow: 'visible',
          }
          : { overflow: 'visible' }
      }
    >
      <span
        ref={measureARef}
        className={aClassName}
        style={{ position: 'absolute', visibility: 'hidden', pointerEvents: 'none', whiteSpace: 'nowrap', left: -99999, top: -99999 }}
      />
      <span
        ref={measureBRef}
        className={bClassName}
        style={{ position: 'absolute', visibility: 'hidden', pointerEvents: 'none', whiteSpace: 'nowrap', left: -99999, top: -99999 }}
      />
      <motion.div
        style={{
          transformStyle: 'preserve-3d',
          perspective: 900,
        }}
        animate={
          reduceMotion
            ? { rotateX: 0, rotateY: 0, y: 0 }
            : { rotateX: tilt.rx, rotateY: tilt.ry, y: hoverMode ? -2 : 0 }
        }
        transition={{ type: 'spring', stiffness: 120, damping: 18, mass: 0.6 }}
        className="relative"
      >
        {variant === 'stacked' ? (
          <div className="relative flex flex-col items-center gap-8 md:gap-2">
            {ANode}
            <span className={`${midClassName} font-black text-black backdrop-blur-md bg-white/80 shadow-sm rounded-full px-6 py-2 border border-black/5`} style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
              {mid}
            </span>
            {BNode}
          </div>
        ) : (
          <h1 className="relative">
            {ANode}
            <span className={`${midClassName} font-black text-black backdrop-blur-md bg-white/80 shadow-sm rounded-full px-6 py-2 border border-black/5`}>{mid}</span>
            {BNode}
          </h1>
        )}

        <span className="sr-only" aria-live="polite">
          {`${aTarget} ${mid} ${bTarget}`}
        </span>
      </motion.div>
    </div>
  );
}
