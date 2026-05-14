/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Globe, 
  ChevronRight, 
  HardHat, 
  Truck, 
  ShieldCheck, 
  Construction, 
  MapPin, 
  Menu, 
  X 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { translations, type Language } from './translations';

export default function App() {
  const [lang, setLang] = useState<Language>('EN');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(prev => prev === 'EN' ? 'PL' : 'EN');
  };

  return (
    <div className="min-h-screen bg-brand-dark flex flex-col font-sans overflow-x-hidden selection:bg-brand-yellow selection:text-black">
      {/* Navigation */}
      <nav className="h-16 border-b border-white/10 flex items-center bg-brand-nav fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-yellow flex items-center justify-center font-black text-black text-xl italic leading-none">PR</div>
            <span className="text-xl font-bold tracking-tighter uppercase whitespace-nowrap">
              PolRoad <span className="font-light text-white/50 hidden sm:inline">Construction</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-semibold">
            <a href="#about" className="hover:text-brand-yellow">{t.nav.about}</a>
            <a href="#projects" className="hover:text-brand-yellow">{t.nav.projects}</a>
            <a href="#careers" className="hover:text-brand-yellow">{t.nav.careers}</a>
            <a href="#contact" className="hover:text-brand-yellow">{t.nav.contact}</a>
            <div className="h-4 w-[1px] bg-white/20"></div>
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 hover:border-brand-yellow hover:bg-brand-yellow hover:text-black transition-all group"
            >
              <Globe size={14} />
              <span className="font-bold">{t.nav.lang}</span>
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Floating Language Switcher */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleLang}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-brand-yellow text-black rounded-full shadow-2xl flex flex-col items-center justify-center border-4 border-brand-dark md:hidden"
      >
        <Globe size={20} />
        <span className="text-[10px] font-black">{lang === 'EN' ? 'PL' : 'EN'}</span>
      </motion.button>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-brand-nav p-8 flex flex-col"
          >
            <div className="flex justify-end mb-12">
              <button onClick={() => setMobileMenuOpen(false)}><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-6 text-2xl font-bold uppercase tracking-widest text-white">
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>{t.nav.about}</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)}>{t.nav.projects}</a>
              <a href="#careers" onClick={() => setMobileMenuOpen(false)}>{t.nav.careers}</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>{t.nav.contact}</a>
              <button onClick={() => { toggleLang(); setMobileMenuOpen(false); }} className="text-brand-yellow text-left">
                {t.nav.lang} ({lang === 'EN' ? 'PL' : 'EN'})
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pt-16 flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center overflow-hidden border-b border-white/10" id="home">
          {/* Geometric Road Graphic Background */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <div className="road-gradient"></div>
            <div className="geometric-line bottom-10 h-[2px]"></div>
            <div className="geometric-line bottom-20 h-[1px] opacity-50"></div>
            <div className="skew-line"></div>
            <div 
              className="absolute inset-0 bg-center bg-cover opacity-20 filter grayscale contrast-125"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1545147980-606038f90647?q=80&w=2600&auto=format&fit=crop')` }}
            />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-brand-yellow text-[10px] uppercase tracking-[0.2em] font-bold mb-8">
                <span className="w-2 h-2 bg-brand-yellow rounded-full animate-pulse"></span>
                Poland's Infrastructure Leader
              </div>
              <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase mb-8 text-white">
                {t.hero.title.split('.')[0]}<br/>
                <span className="text-brand-yellow italic">Backbone.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light mb-10 max-w-xl italic">
                {t.hero.subtext}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-brand-yellow text-black font-black uppercase tracking-wider text-sm hover:bg-yellow-500 transition-colors">
                  {t.hero.btn1}
                </button>
                <button className="px-8 py-4 border border-white/30 text-white font-black uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-all">
                  {t.hero.btn2}
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section: Careers & Why Us */}
        <section className="flex-1 grid lg:grid-cols-2 lg:divide-x divide-white/10 border-b border-white/10">
          {/* Careers Column */}
          <div className="p-8 md:p-16 flex flex-col border-b lg:border-b-0 border-white/10" id="careers">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-black uppercase tracking-tight text-white">{t.careers.title}</h2>
              <span className="text-[10px] uppercase font-bold text-white/30 tracking-widest italic hidden sm:inline">Hiring Now // 2026</span>
            </div>
            
            <div className="space-y-6 flex-1">
              <p className="text-white/50 italic mb-8 max-w-md">
                {t.careers.description}
              </p>
              {t.careers.roles.map((role, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  className={`group p-6 bg-white/5 border-l-4 transition-all cursor-pointer flex justify-between items-center ${i === 0 ? 'border-brand-yellow' : 'border-white/20 hover:border-brand-yellow/50'}`}
                >
                  <div className="text-white">
                    <h3 className="font-bold text-xl uppercase mb-1">{role.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-white/40 uppercase tracking-widest font-medium">
                      <MapPin size={12} />
                      {role.location}
                    </div>
                  </div>
                  <ChevronRight className="opacity-30 group-hover:opacity-100 transition-opacity text-brand-yellow" size={24} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Why Choose Us Column */}
          <div className="p-8 md:p-16 flex flex-col bg-brand-surface" id="about">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-12 text-white">{t.why.title}</h2>
            <div className="grid gap-10">
              {t.why.features.map((feature, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 flex-shrink-0 bg-white/5 flex items-center justify-center border border-white/10 font-black text-brand-yellow text-xl italic group-hover:bg-brand-yellow group-hover:text-black transition-all">
                    0{i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-base mb-2 group-hover:text-brand-yellow transition-colors text-white">{feature.title}</h4>
                    <p className="text-sm text-white/50 leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing Road Graphic Section */}
        <section className="h-48 relative overflow-hidden flex items-center justify-center border-b border-white/10">
           <div className="absolute inset-0 z-0 opacity-10">
            <div className="skew-line left-1/2 -ml-[50px]"></div>
            <div className="geometric-line top-1/2 -mt-[1px] h-[2px]"></div>
          </div>
          <div className="relative z-10 text-center">
            <span className="text-brand-yellow font-black text-xs uppercase tracking-[0.5em] italic">Poland Connected</span>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="h-20 sm:h-14 border-t border-white/10 px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between bg-brand-footer text-[10px] uppercase tracking-[0.2em] font-medium text-white/40 gap-4 py-4 sm:py-0">
        <div>{t.footer.rights}</div>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <span className="text-brand-yellow italic font-black hidden sm:inline">Built for the Road Ahead</span>
        </div>
      </footer>
    </div>
  );
}
