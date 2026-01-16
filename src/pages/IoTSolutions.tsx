import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Cpu, Radio, Thermometer, Battery, Wifi, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        title: 'Sensor Networks',
        desc: 'Deploying and managing distributed sensor arrays for environmental monitoring at scale.',
        icon: <Radio className="w-8 h-8 text-cyan-400" />
    },
    {
        title: 'Edge Computing',
        desc: 'On-device ML inference for real-time decision making without cloud latency or bandwidth costs.',
        icon: <Cpu className="w-8 h-8 text-indigo-400" />
    },
    {
        title: 'Climate Monitoring',
        desc: 'Air quality, soil moisture, water levels — continuous environmental telemetry with anomaly detection.',
        icon: <Thermometer className="w-8 h-8 text-emerald-400" />
    },
    {
        title: 'Smart Energy',
        desc: 'IoT solutions for renewable energy optimization, battery management, and grid balancing.',
        icon: <Battery className="w-8 h-8 text-orange-400" />
    },
    {
        title: 'LPWAN Connectivity',
        desc: 'LoRaWAN and NB-IoT deployments for low-power, long-range sensor communication.',
        icon: <Wifi className="w-8 h-8 text-purple-400" />
    },
    {
        title: 'Asset Tracking',
        desc: 'GPS and RFID solutions for supply chain visibility and carbon footprint tracking.',
        icon: <MapPin className="w-8 h-8 text-rose-400" />
    }
];

export default function IoTSolutions() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            <main className="pt-32 pb-24">
                {/* Hero */}
                <div className="container px-4 mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium border border-indigo-500/20 mb-6">
                            <Cpu className="w-4 h-4" />
                            <span>Connected Devices Division</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                            INTELLIGENT <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">INFRASTRUCTURE.</span>
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
                            We deploy and manage IoT systems that bridge the physical and digital worlds.
                            From sensor networks to edge AI — connecting nature to code.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link to="/contact" className="px-6 py-3 bg-indigo-500 text-white rounded-full font-semibold hover:bg-indigo-600 transition-colors inline-flex items-center gap-2">
                                Start a Project <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link to="/case-studies" className="px-6 py-3 rounded-full font-semibold border border-white/10 hover:bg-white/5 transition-colors">
                                View Case Studies
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Services Grid */}
                <div className="container px-4 bg-white/5 py-24 rounded-3xl border border-white/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {services.map((service, i) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group"
                            >
                                <div className="mb-6 p-4 bg-background border border-white/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-headline font-semibold mb-3 group-hover:text-indigo-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {service.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Use Cases */}
                <div className="container px-4 mt-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                            Real-World <span className="text-cyan-400">Applications</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Our IoT solutions power critical infrastructure across industries
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                            <h4 className="text-xl font-headline font-semibold mb-3 text-emerald-400">Agriculture</h4>
                            <p className="text-muted-foreground leading-relaxed">Precision farming with soil sensors, weather stations, and automated irrigation.</p>
                        </div>
                        <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                            <h4 className="text-xl font-headline font-semibold mb-3 text-cyan-400">Smart Cities</h4>
                            <p className="text-muted-foreground leading-relaxed">Air quality monitoring, smart lighting, and waste management optimization.</p>
                        </div>
                        <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                            <h4 className="text-xl font-headline font-semibold mb-3 text-indigo-400">Renewable Energy</h4>
                            <p className="text-muted-foreground leading-relaxed">Solar panel monitoring, wind turbine telemetry, and grid integration.</p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="container mx-auto px-4 mt-24">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                            Ready to connect your <span className="text-indigo-400">infrastructure</span>?
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            Let's discuss how IoT can transform your operations and environmental monitoring.
                        </p>
                        <Link to="/contact" className="px-8 py-4 bg-foreground text-background rounded-full font-semibold hover:bg-indigo-400 transition-colors inline-flex items-center gap-2">
                            Get in Touch <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
