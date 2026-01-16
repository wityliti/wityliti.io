import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const effectiveDate = '2026-01-15';

export default function Terms() {
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
              Terms of Service
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
              <Section title="Acceptance of These Terms">
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using wityliti.io (the "Site"), you agree to these Terms of Service ("Terms"). If you do not agree, do not use the Site.
                </p>
              </Section>

              <Section title="The Site">
                <p className="text-muted-foreground leading-relaxed">
                  The Site provides information about Wityliti’s services and products and offers ways to contact us. We may add, remove, or modify features at any time.
                </p>
              </Section>

              <Section title="Permitted Use">
                <ul className="space-y-3 text-muted-foreground leading-relaxed">
                  <li>Use the Site for lawful purposes only.</li>
                  <li>Do not interfere with the Site’s operation, security, or availability.</li>
                  <li>Do not attempt to access non-public areas, systems, or data.</li>
                  <li>Do not use the Site to transmit malware or abusive content.</li>
                </ul>
              </Section>

              <Section title="Intellectual Property">
                <p className="text-muted-foreground leading-relaxed">
                  The Site and its content (including text, visuals, logos, and design) are owned by Wityliti or its licensors and are protected by applicable intellectual property laws. You may not copy, modify, distribute, or create derivative works without permission.
                </p>
              </Section>

              <Section title="Third-Party Links">
                <p className="text-muted-foreground leading-relaxed">
                  The Site may include links to third-party sites or services. We are not responsible for third-party content, policies, or practices.
                </p>
              </Section>

              <Section title="Disclaimers">
                <p className="text-muted-foreground leading-relaxed">
                  The Site is provided on an “as is” and “as available” basis. To the fullest extent permitted by law, we disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>
              </Section>

              <Section title="Limitation of Liability">
                <p className="text-muted-foreground leading-relaxed">
                  To the fullest extent permitted by law, Wityliti will not be liable for indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenues, data, or goodwill arising from or related to your use of the Site.
                </p>
              </Section>

              <Section title="Indemnity">
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify and hold harmless Wityliti from and against claims, liabilities, damages, losses, and expenses arising out of your use of the Site or violation of these Terms.
                </p>
              </Section>

              <Section title="Termination">
                <p className="text-muted-foreground leading-relaxed">
                  We may suspend or terminate access to the Site at any time for any reason, including if we believe you have violated these Terms.
                </p>
              </Section>

              <Section title="Governing Law">
                <p className="text-muted-foreground leading-relaxed">
                  These Terms are governed by the laws of India, without regard to conflict of laws principles.
                </p>
              </Section>

              <Section title="Changes to These Terms">
                <p className="text-muted-foreground leading-relaxed">
                  We may update these Terms from time to time. If we make material changes, we will update the effective date and post the revised Terms on this page.
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

