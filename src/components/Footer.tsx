import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin } from 'lucide-react';
import LogoMark from '@/components/ui/LogoMark';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 pt-24 pb-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <LogoMark className="w-6 h-6" />
              <span className="font-headline font-semibold text-2xl">Wityliti</span>
            </Link>
            <p className="text-muted-foreground max-w-sm text-lg">
              Rebuilding the web for the AI era. <br />
              Climate Tech First. Cyber Security Always.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6">Sitemap</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="hover:text-emerald-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/products" className="hover:text-emerald-400 transition-colors">Products</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Connect</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="https://www.linkedin.com/company/wityliti/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-2"><Linkedin className="w-4 h-4" /> LinkedIn</a></li>
              <li><a href="https://x.com/Wityliti" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-2"><Twitter className="w-4 h-4" /> Twitter</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2"><Github className="w-4 h-4" /> GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 Wityliti.io. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
