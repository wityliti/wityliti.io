import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import ProjectWizard from '@/components/ProjectWizard';

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-12 text-center"
          >
            Start Your <span className="text-emerald-400">Project</span>
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            {/* Contact Info Side */}
            <div className="space-y-8 lg:sticky lg:top-32">
              <h2 className="text-2xl font-display font-bold mb-6">Contact Info</h2>
              <ContactItem
                icon={<Mail className="w-6 h-6 text-cyan-400" />}
                title="Email"
                value="contact@wityliti.io"
              />
              <ContactItem
                icon={<MapPin className="w-6 h-6 text-emerald-400" />}
                title="Headquarters"
                value="Bangalore, India"
              />
              <ContactItem
                icon={<Phone className="w-6 h-6 text-indigo-400" />}
                title="Phone"
                value="+91 80 4123 5678"
              />

              <div className="p-6 bg-white/5 rounded-2xl border border-white/5 mt-8">
                <h3 className="text-lg font-bold mb-2">Why Wityliti?</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Sustainable by Design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Military-Grade Security
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    24/7 Global Support
                  </li>
                </ul>
              </div>
            </div>

            {/* Interactive Wizard Side */}
            <div className="lg:col-span-2 bg-white/[0.02] border border-white/5 rounded-3xl p-4 md:p-8">
              <ProjectWizard />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function ContactItem({ icon, title, value }: { icon: any, title: string, value: string }) {
  return (
    <div className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/[0.08] transition-colors">
      <div className="p-3 bg-white/5 rounded-xl">{icon}</div>
      <div>
        <div className="text-sm text-muted-foreground">{title}</div>
        <div className="text-xl font-medium">{value}</div>
      </div>
    </div>
  );
}
