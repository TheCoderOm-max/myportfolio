import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Publications from '@/components/Publications';
import Skills from '@/components/Skills';
import CompetitiveProgramming from '@/components/CompetitiveProgramming';
import Achievements from '@/components/Achievements';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Experience />
        <Projects />
        <Publications />
        <Skills />
        <CompetitiveProgramming />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
