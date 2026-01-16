import { useEffect, useRef } from 'react';

export default function ConvergingBackground({ convergence }: { convergence?: { x: number; y: number } | null }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const targetRef = useRef<{ x: number; y: number } | null>(null);

    useEffect(() => {
        targetRef.current = convergence || null;
    }, [convergence]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        // Configuration
        const particleCount = width > 768 ? 80 : 40;

        canvas.width = width;
        canvas.height = height;

        class Particle {
            x: number;
            y: number;
            targetX: number;
            targetY: number;
            speed: number;
            offset: number;
            color: string;
            isTop: boolean;
            baseAlpha: number;
            // Store the original offset from the center for dynamic target tracking
            originalXOffsetFromCenter: number;

            constructor() {
                this.isTop = Math.random() > 0.5;
                // Restrict start width to match header/navbar area (approx 1000px-1200px) rather than full screen + overflow
                const startSpread = Math.min(width, 1000);
                this.x = (Math.random() - 0.5) * startSpread + (width / 2);
                this.y = this.isTop ? -100 : height + 100;

                // Convergence point
                // Check if we have a dynamic target
                if (targetRef.current) {
                    this.targetY = targetRef.current.y;
                    // We still want the tight spread around the target X
                    const spread = width * 0.02;
                    this.targetX = targetRef.current.x + (Math.random() - 0.5) * spread;
                } else {
                    // Fallback to center
                    this.targetY = height / 2;
                    const spread = width * 0.02;
                    this.targetX = (width / 2) + (Math.random() - 0.5) * spread;
                }

                // Calculate and store the original offset from the center for dynamic target tracking
                this.originalXOffsetFromCenter = this.targetX - (width / 2);


                this.speed = Math.random() * 0.4 + 0.1;
                this.offset = Math.random() * 100;
                this.baseAlpha = Math.random() * 0.4 + 0.1; // Random baseline opacity

                // Subtle colors
                const colors = [
                    '16, 185, 129', // Emerald
                    '6, 182, 212', // Cyan
                    '99, 102, 241', // Indigo
                ];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            draw(time: number) {
                if (!ctx) return;

                const startX = this.x;
                const startY = this.isTop ? 0 : height;

                // REFACTORING FOR DYNAMIC TARGET in draw loop:
                let tx = this.targetX;
                let ty = this.targetY;

                if (targetRef.current) {
                    ty = targetRef.current.y;
                    // Calculate offset from original center (width/2) and apply to new target
                    tx = targetRef.current.x + this.originalXOffsetFromCenter;
                }

                // Improved Tunnel Control Points
                // We want the lines to come "at" the viewer then turn in.
                // CP1 pulls the line straight vertically first
                const cp1x = startX;
                const cp1y = this.isTop ? height * 0.4 : height * 0.6; // Go deeper before turning

                // CP2 guides it into the center
                const cp2x = tx + (startX - tx) * 0.1; // Slight pull towards startX
                const cp2y = ty;

                // Draw the static path (faint)
                ctx.beginPath();
                ctx.moveTo(startX, startY);
                ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, tx, ty);

                // Perspective opacity: Fades out as it goes deep (center)
                // Increased opacity from 0.1 to 0.3 for better visibility
                // Increased line width from 0.5 to 1
                ctx.strokeStyle = 'rgba(' + this.color + ', 0.4)';
                ctx.lineWidth = 1;
                ctx.stroke();

                // Draw moving particle (Data packet)
                const t = (time * this.speed + this.offset) % 100 / 100;

                // Cubic Bezier math
                const mt = 1 - t;
                const mt2 = mt * mt;
                const mt3 = mt2 * mt;
                const t2 = t * t;
                const t3 = t2 * t;

                const px = mt3 * startX + 3 * mt2 * t * cp1x + 3 * mt * t2 * cp2x + t3 * tx;
                const py = mt3 * startY + 3 * mt2 * t * cp1y + 3 * mt * t2 * cp2y + t3 * ty;

                // Perspective scaling
                // t=0 (near), t=1 (center/far).
                // Size should decrease as t increases. opacity should decrease as t increases
                const perspective = 1 - t; // 1 at start, 0 at end

                ctx.beginPath();
                const size = Math.max(0.5, 3 * perspective); // Slightly bigger particles
                ctx.arc(px, py, size, 0, Math.PI * 2);

                const alpha = Math.max(0, this.baseAlpha * perspective * 1.5); // Boost alpha
                ctx.fillStyle = 'rgba(' + this.color + ', ' + alpha + ')';
                ctx.fill();

                // Trail
                // ctx.beginPath();
                // ... could add trail if needed
            }
        }

        let particles: Particle[] = [];

        function init() {
            particles = []; // Initialize particles here
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        let time = 0;
        function animate() {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            time += 0.5;

            particles.forEach(p => p.draw(time));

            requestAnimationFrame(animate);
        }

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            init();
        };

        window.addEventListener('resize', handleResize);
        init();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Update target when prop changes
    useEffect(() => {
        if (!convergence || !canvasRef.current) return;
        // We can expose a method to update targets or just let them update naturally 
        // But since particles are internal to the effect, we might need a ref to access them or a mutable ref for target
        // Actually, best pattern here without rewriting everything is to use a ref for the target that particles read
    }, [convergence]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
        />
    );
}
