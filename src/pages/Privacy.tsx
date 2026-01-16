import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const effectiveDate = '2026-01-15';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container px-4">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-display font-bold tracking-tight"
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-muted-foreground"
            >
              Effective date: <span className="text-foreground">{effectiveDate}</span>
            </motion.p>

            <div className="mt-12 space-y-12">
              <Section title="Overview">
                <p className="text-muted-foreground leading-relaxed">
                  This Privacy Policy explains how Wityliti ("we", "us", "our") collects, uses, and shares information when you visit our website at wityliti.io (the "Site"), contact us, or use any related services, pages, and features.
                </p>
              </Section>

              <Section title="Information We Collect">
                <ul className="space-y-3 text-muted-foreground leading-relaxed">
                  <li>
                    <span className="text-foreground font-medium">Contact information</span>: name, email address, company, and any details you submit through forms or communications.
                  </li>
                  <li>
                    <span className="text-foreground font-medium">Usage data</span>: pages viewed, approximate location (derived from IP), device/browser information, and site interactions.
                  </li>
                  <li>
                    <span className="text-foreground font-medium">Cookies and similar technologies</span>: used to operate the Site, remember preferences, and improve performance.
                  </li>
                </ul>
              </Section>

              <Section title="How We Use Information">
                <ul className="space-y-3 text-muted-foreground leading-relaxed">
                  <li>Provide and operate the Site and respond to inquiries.</li>
                  <li>Understand how the Site is used and improve content, performance, and security.</li>
                  <li>Send service-related communications and updates you request.</li>
                  <li>Prevent abuse, fraud, and unauthorized access.</li>
                </ul>
              </Section>

              <Section title="How We Share Information">
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell your personal information. We may share information with vendors and service providers that help us run the Site and operate our business (e.g., hosting, analytics, email). We may also share information to comply with legal obligations, enforce our terms, or protect rights, safety, and security.
                </p>
              </Section>

              <Section title="Data Retention">
                <p className="text-muted-foreground leading-relaxed">
                  We retain personal information only as long as needed for the purposes described in this policy, unless a longer retention period is required or permitted by law.
                </p>
              </Section>

              <Section title="Security">
                <p className="text-muted-foreground leading-relaxed">
                  We use reasonable administrative, technical, and organizational measures designed to protect information. However, no method of transmission or storage is completely secure.
                </p>
              </Section>

              <Section title="International Transfers">
                <p className="text-muted-foreground leading-relaxed">
                  If you access the Site from outside India, your information may be processed in countries where we or our service providers operate. We take steps designed to ensure appropriate safeguards are in place.
                </p>
              </Section>

              <Section title="Your Choices">
                <ul className="space-y-3 text-muted-foreground leading-relaxed">
                  <li>You can contact us to access, correct, or delete certain information, subject to legal requirements.</li>
                  <li>You can adjust cookie settings in your browser; some features may not function properly if cookies are disabled.</li>
                </ul>
              </Section>

              <Section title="Children's Privacy">
                <p className="text-muted-foreground leading-relaxed">
                  The Site is not directed to children, and we do not knowingly collect personal information from children.
                </p>
              </Section>

              <Section title="Changes to This Policy">
                <p className="text-muted-foreground leading-relaxed">
                  We may update this policy from time to time. If we make material changes, we will update the effective date and post the revised policy on this page.
                </p>
              </Section>

              <Section title="Contact">
                <div className="text-muted-foreground leading-relaxed">
                  <div>
                    <span className="text-foreground font-medium">Email</span>: contact@wityliti.io
                  </div>
                  <div>
                    <span className="text-foreground font-medium">Location</span>: Bangalore, India
                  </div>
                </div>
              </Section>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-sm text-muted-foreground leading-relaxed">
                This page is provided for informational purposes and may not reflect all legal requirements for your jurisdiction.
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl md:text-2xl font-display font-bold">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

