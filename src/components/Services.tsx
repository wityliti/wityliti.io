import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Globe, Leaf, Shield, Smartphone, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    title: "Sustainability Software",
    description: "We build platforms that measure, manage, and optimize environmental impact—from carbon accounting to ESG compliance tools.",
    icon: <Leaf className="w-8 h-8" />,
    color: "text-emerald-400",
    gradient: "from-emerald-400/20 to-emerald-900/0",
    link: "/eco-digital-platforms",
    category: "Builders",
    categoryColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
  },
  {
    title: "Enterprise Security",
    description: "Military-grade protection for critical infrastructure. Zero-trust architectures, threat intelligence, and 24/7 SOC operations.",
    icon: <Shield className="w-8 h-8" />,
    color: "text-cyan-400",
    gradient: "from-cyan-400/20 to-cyan-900/0",
    link: "/cyber-security",
    category: "Defenders",
    categoryColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
  },
  {
    title: "Climate Intelligence",
    description: "Real-time environmental monitoring at scale. From soil sensors to satellite integration, we turn planetary data into actionable insights.",
    icon: <Cpu className="w-8 h-8" />,
    color: "text-indigo-400",
    gradient: "from-indigo-400/20 to-indigo-900/0",
    link: "/iot-solutions",
    category: "Builders",
    categoryColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
  }
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="services" ref={containerRef} className="py-32 relative overflow-hidden bg-background">
      <div className="container px-4">
        {/* Section Header */}
        <div className="mb-24 md:mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-display font-bold mb-6"
          >
            Engineering the <br />
            <span className="text-muted-foreground">Anthropocene.</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-emerald-500"
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      className="group relative p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 overflow-hidden h-full flex flex-col shadow-lg hover:shadow-2xl"
    >
      <Link to={service.link} className="absolute inset-0 z-20">
        <span className="sr-only">Learn more about {service.title}</span>
      </Link>

      <div className={cn("absolute inset-0 bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-500", service.gradient)} />

      <div className="relative z-10 flex flex-col h-full pointer-events-none">
        {/* Category Badge */}
        <div className="flex items-center justify-between mb-6">
          <div className={cn("mb-0 p-4 rounded-2xl bg-white/5 w-fit", service.color)}>
            {service.icon}
          </div>
          <span className={cn("text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border", service.categoryColor)}>
            {service.category}
          </span>
        </div>

        <h3 className="text-2xl font-bold mb-4 font-display group-hover:text-white transition-colors">{service.title}</h3>
        <p className="text-muted-foreground leading-relaxed flex-grow group-hover:text-white/80 transition-colors">
          {service.description}
        </p>

        <div className={cn("mt-8 pt-8 border-t border-white/5 flex items-center gap-2 text-sm font-medium opacity-50 group-hover:opacity-100 transition-opacity", service.color)}>
          Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
        </div>
      </div>
    </motion.div>
  );
}

function ArrowRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
