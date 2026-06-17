import Navbar from './components/Navigation/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Experience from './components/Sections/Experience';
import Contact from './components/Sections/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/UI/CustomCursor';
import BackgroundGrid from './components/UI/BackgroundGrid';
import ScrollProgress from './components/UI/ScrollProgress';

function App() {
  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <BackgroundGrid />
      <ScrollProgress />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
