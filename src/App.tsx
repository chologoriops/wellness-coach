import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Testimonials from './components/sections/Testimonials';
import SocialFeed from './components/sections/SocialFeed';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="bg-[#0A0F1C] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <SocialFeed />
      <Footer />
    </div>
  );
}

export default App;