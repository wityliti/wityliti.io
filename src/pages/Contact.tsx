import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, MessageSquare, ArrowRight, Clock, Globe, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "30min" });
      cal("ui", {
        "theme": "dark",
        "cssVarsPerTheme": {
          "light": { "cal-brand": "#43939c" },
          "dark": { "cal-brand": "#34d399" }
        },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    })();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              We'd Love to Hear From You
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Get in <span className="text-cyan-400">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Reach out for inquiries, partnerships, or just to say hello. Our team is here to help.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              <ContactCard
                icon={<Mail className="w-7 h-7 text-cyan-400" />}
                title="Email Us"
                value="connect@wityliti.io"
                subtitle="We respond within 24 hours"
                href="mailto:connect@wityliti.io"
                color="cyan"
              />
              <ContactCard
                icon={<MapPin className="w-7 h-7 text-emerald-400" />}
                title="Headquarters"
                value="Bangalore, India"
                subtitle="Global Operations"
                color="emerald"
              />
              <ContactCard
                icon={<Phone className="w-7 h-7 text-purple-400" />}
                title="Phone"
                value="+91 87687 77710"
                subtitle="Mon-Fri, 9AM-6PM IST"
                href="tel:+918768777710"
                color="purple"
              />
            </div>

            {/* Book a Call Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 md:p-10 mb-12"
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
                  <Calendar className="w-4 h-4" />
                  Schedule a Meeting
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
                  Book a <span className="text-emerald-400">Discovery Call</span>
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Let's discuss your project in a 30-minute call. Pick a time that works for you.
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5" style={{ height: '600px' }}>
                <Cal
                  namespace="30min"
                  calLink="wityliti/30min"
                  style={{ width: "100%", height: "100%", overflow: "scroll" }}
                  config={{ "layout": "month_view", "theme": "dark" }}
                />
              </div>
            </motion.div>

            {/* Why Choose Us Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12 mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">
                Why Partner with <span className="text-emerald-400">Wityliti</span>?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureItem
                  icon={<Globe className="w-6 h-6 text-emerald-400" />}
                  title="Sustainable by Design"
                  description="Every solution we build prioritizes environmental responsibility and long-term sustainability."
                />
                <FeatureItem
                  icon={<Clock className="w-6 h-6 text-cyan-400" />}
                  title="24/7 Global Support"
                  description="Our distributed team ensures round-the-clock assistance for all our clients worldwide."
                />
                <FeatureItem
                  icon={<MessageSquare className="w-6 h-6 text-purple-400" />}
                  title="Clear Communication"
                  description="We believe in transparency and keep you informed at every step of the journey."
                />
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-purple-500/10 rounded-3xl p-8 md:p-12 border border-white/5"
            >
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Ready to Start a Project?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Use our interactive project wizard to share your vision and get a tailored proposal.
              </p>
              <Link
                to="/start-project"
                className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-bold rounded-xl hover:bg-emerald-400 hover:text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Start Your Project <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
  href?: string;
  color: 'cyan' | 'emerald' | 'purple';
}

function ContactCard({ icon, title, value, subtitle, href, color }: ContactCardProps) {
  const colorClasses = {
    cyan: 'hover:border-cyan-500/30',
    emerald: 'hover:border-emerald-500/30',
    purple: 'hover:border-purple-500/30',
  };

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className={`p-8 bg-white/[0.03] rounded-2xl border border-white/5 transition-all duration-300 h-full ${colorClasses[color]} hover:bg-white/[0.05]`}
    >
      <div className="p-4 bg-white/5 rounded-xl w-fit mb-6">{icon}</div>
      <div className="text-sm text-muted-foreground mb-2">{title}</div>
      <div className="text-xl font-bold mb-2">{value}</div>
      <div className="text-sm text-muted-foreground">{subtitle}</div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="text-center">
      <div className="p-3 bg-white/5 rounded-xl w-fit mx-auto mb-4">{icon}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
