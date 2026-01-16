import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Shield, Lock, Server, Eye, FileKey, Terminal } from 'lucide-react';

const services = [
  {
    title: 'Penetration Testing',
    desc: 'We simulate advanced persistent threats (APTs) to find vulnerabilities before bad actors do.',
    icon: <Terminal className="w-8 h-8 text-emerald-400" />
  },
  {
    title: 'Zero-Trust Architecture',
    desc: 'Redesigning your network so that no user or device is trusted by default, inside or outside the perimeter.',
    icon: <Lock className="w-8 h-8 text-cyan-400" />
  },
  {
    title: 'Cloud Security',
    desc: 'Hardening your AWS/Azure/GCP infrastructure with automated compliance checks and IAM policy audits.',
    icon: <Server className="w-8 h-8 text-indigo-400" />
  },
  {
    title: 'Incident Response',
    desc: '24/7 rapid response team to contain breaches, analyze forensics, and restore operations.',
    icon: <Shield className="w-8 h-8 text-rose-400" />
  },
  {
    title: 'Smart Contract Audits',
    desc: 'Mathematical verification of your Web3 code to prevent reentrancy attacks and logic flaws.',
    icon: <FileKey className="w-8 h-8 text-purple-400" />
  },
  {
    title: 'IoT Security',
    desc: 'Securing the edge. We harden firmware and communication protocols for connected devices.',
    icon: <Eye className="w-8 h-8 text-orange-400" />
  }
];

export default function CyberSecurity() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-32 pb-24">
        {/* Hero */}
        <div className="container mx-auto px-4 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium border border-cyan-500/20 mb-6">
              <Shield className="w-4 h-4" />
              <span>Cyber Defense Division</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              SECURE BY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">DESIGN.</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              In a hyper-connected world, vulnerability is inevitable. Breach is not.
              We provide military-grade cyber security services for the modern enterprise.
            </p>
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
                <h3 className="text-2xl font-headline font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
