import React from 'react';
import NavMenu from './components/NavMenu';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/projects/section/ProjectsSection';
import AboutSection from './components/about/section/AboutSection';
import ContactSection from './components/contact/section/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavMenu />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
