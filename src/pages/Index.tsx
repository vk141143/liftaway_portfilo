import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import Features from '@/components/Features';
import TechStack from '@/components/TechStack';
import Architecture from '@/components/Architecture';
import Challenges from '@/components/Challenges';
import Impact from '@/components/Impact';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <About />
        <Features />
        <TechStack />
        <Architecture />
        <Challenges />
        <Impact />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
