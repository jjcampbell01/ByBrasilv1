
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Segments from './components/Segments';
import Process from './components/Process';
import About from './components/About';
import Footer from './components/Footer';
import Products from './components/Products';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 relative">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        <Products />
        <Segments />
        <Process />
        <About />
      </main>
      
      <Footer />
      
      {/* Floating WhatsApp CTA for Mobile */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 md:hidden w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95"
        aria-label="Contato pelo WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
};

export default App;
