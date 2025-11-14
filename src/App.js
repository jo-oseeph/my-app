import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import ServicesSection from './pages/Services';   
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <Header />
      
      {/* Main Content - All sections in one page */}
      <main>
        {/* Home Section */}
        <section id="home">
          <Home />
        </section>
        {/* Services Section */}
        <section id="services">
          <ServicesSection />
        </section>
        
        {/* About Section */}
        <section id="about">
          <About />
        </section>
        
        {/* Projects Section */}
        <section id="projects">
          <Projects />
        </section>
        
        {/* Skills Section */}
        <section id="skills">
          <Skills />
        </section>
        
        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
