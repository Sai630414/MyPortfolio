import React from 'react';
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
import Preloader from './components/UI/Preloader';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0B0B0B] text-white font-sans selection:bg-white selection:text-black">
      <Preloader />
      <CustomCursor />
      <BackgroundGrid />
      
      <Navbar />
      
      <main className="relative z-10">
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
