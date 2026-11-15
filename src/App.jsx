import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-ice-white text-charcoal-slate selection:bg-soft-blue selection:text-cobalt-blue">
      {/* 1. Navigation bar */}
      <Navbar />

      <main>
        {/* 2. Hero section */}
        <Hero />

        {/* 3. About Me */}
        <About />

        {/* 4. Education */}
        <Education />

        {/* 5. Technical Skills */}
        <Skills />

        {/* 6. Featured Projects + Ongoing Research + Compact + Other Experiments */}
        <Projects />

        {/* 7. Experience and Programs */}
        <Experience />

        {/* 8. Achievements */}
        <Achievements />

        {/* 9. Certifications */}
        <Certifications />

        {/* 10. Contact + Resume Download Callout */}
        <Contact />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}

export default App;
