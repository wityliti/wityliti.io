import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Mission from '@/components/Mission';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Mission />
        <Services />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
