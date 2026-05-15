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
  const [lang, setLang] = useState<Language>('PL');
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

  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans overflow-x-hidden selection:bg-brand-red selection:text-white">
      {/* Top Banner with Language Switcher */}
      <div className="bg-brand-blue text-white py-2 px-6 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] uppercase font-bold tracking-widest">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><MapPin size={10} className="text-brand-red" /> {t.footer.location}</span>
            <span className="opacity-50">|</span>
            <span className="text-white/60">PolRoad: Tak! Damy radę</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/40">{t.nav.lang}:</span>
            <div className="flex gap-2">
              {(['PL', 'EN', 'DE'] as Language[]).map((l) => (
                <button 
                  key={l}
                  onClick={() => handleLangChange(l)}
                  className={`px-2 py-0.5 border ${lang === l ? 'bg-brand-red border-brand-red text-white' : 'border-white/20 text-white/60 hover:border-white/40'}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`h-20 flex items-center transition-all duration-300 ${isScrolled ? 'bg-white shadow-xl shadow-brand-blue/5' : 'bg-white'} sticky top-0 sm:top-auto sm:relative z-50`}>
        <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-brand-red flex items-center justify-center font-black text-white text-xl italic leading-none">PR</div>
              <span className="text-2xl font-black tracking-tighter uppercase whitespace-nowrap text-brand-blue">
                Pol<span className="text-brand-red">Road</span>
              </span>
            </div>
            <div className="h-8 w-[2px] bg-brand-blue/10 hidden lg:block"></div>
            <div className="px-4 py-1.5 bg-brand-blue skew-x-[-12deg] hidden md:block">
              <span className="text-[10px] sm:text-xs font-black uppercase italic tracking-widest text-white block skew-x-[12deg]">
                Tak! Damy radę
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] font-bold text-brand-blue">
            <a href="#about" className="hover:text-brand-red transition-all">{t.nav.about}</a>
            <a href="#projects" className="hover:text-brand-red transition-all">{t.nav.projects}</a>
            <a href="#careers" className="hover:text-brand-red transition-all">{t.nav.careers}</a>
            <a href="#contact" className="hover:text-brand-red transition-all">{t.nav.contact}</a>
            <button className="px-6 py-2.5 bg-brand-red text-white text-[10px] hover:bg-brand-dark transition-all">
              {t.nav.contact}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <div className="flex gap-1">
               {(['PL', 'EN', 'DE'] as Language[]).map((l) => (
                <button 
                  key={l}
                  onClick={() => handleLangChange(l)}
                  className={`w-8 h-8 text-[10px] font-black border ${lang === l ? 'bg-brand-red border-brand-red text-white' : 'border-brand-blue/10 text-brand-blue'}`}
                >
                  {l}
                </button>
              ))}
            </div>
            <button className="text-brand-blue" onClick={() => setMobileMenuOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[100] bg-brand-blue p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="text-white font-black italic">PolRoad</div>
              <button onClick={() => setMobileMenuOpen(false)} className="text-white"><X size={36} /></button>
            </div>
            <div className="flex flex-col gap-8 text-3xl font-black uppercase tracking-tighter text-white">
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>{t.nav.about}</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)}>{t.nav.projects}</a>
              <a href="#careers" onClick={() => setMobileMenuOpen(false)}>{t.nav.careers}</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>{t.nav.contact}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center overflow-hidden bg-brand-surface" id="home">
          <div className="absolute inset-0 z-0">
             <div 
              className="absolute inset-0 bg-center bg-cover mix-blend-multiply opacity-20 filter grayscale"
              style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE3yxx3NP4uAFj3qK-_U9vGaMYtN_ZTPqaQexSEFSBvVf6yatLaJGki4RT&s=10')` }}
            />
            {/* Geometric accents */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/5 skew-x-[-12deg] translate-x-1/2"></div>
            <div className="absolute bottom-0 left-10 w-64 h-1/2 border-l border-brand-red/20 skew-x-[12deg]"></div>
          </div>
 
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-brand-red text-white text-[10px] uppercase font-black tracking-[0.3em] mb-10 shadow-lg shadow-brand-red/20">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Poland Connecting
              </div>
              <h1 className="text-6xl lg:text-9xl font-black leading-[0.85] tracking-tighter uppercase mb-10 text-brand-blue">
                Pol<span className="text-brand-red italic">Road</span><br/>
                <span className="text-4xl lg:text-7xl block mt-2 opacity-90 italic">Tak! Damy radę.</span>
              </h1>
              <p className="text-lg lg:text-xl text-brand-muted leading-relaxed font-medium mb-12 max-w-xl">
                {t.hero.subtext}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-10 py-5 bg-brand-blue text-white font-black uppercase tracking-widest text-xs hover:bg-brand-red transition-all shadow-xl shadow-brand-blue/20">
                  {t.hero.btn1}
                </button>
                <button className="px-10 py-5 border-2 border-brand-blue text-brand-blue font-black uppercase tracking-widest text-xs hover:bg-brand-blue hover:text-white transition-all">
                  {t.hero.btn2}
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="flex-1 relative hidden lg:block"
            >
              <div className="relative z-10 w-full aspect-[4/5] bg-brand-blue overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src="https://s40823.pcdn.co/wp-content/uploads/2018/10/yoal-desurmont-712284-unsplash-768x1024.jpg" 
                  alt="Construction Infrastructure"
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[2s]"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-brand-red z-20 flex items-center justify-center p-8 text-white font-black italic text-4xl">
                25+ <span className="text-[10px] uppercase not-italic tracking-widest block mt-2 ml-2">Years</span>
              </div>
              <div className="absolute -top-8 -right-8 w-32 h-64 border-4 border-brand-red/20 -z-10"></div>
            </motion.div>
          </div>
        </section>

        {/* Announcement Section */}
        <section className="bg-brand-red py-20 px-6 overflow-hidden relative">
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 flex flex-wrap gap-4 p-4 pointer-events-none">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="w-16 h-16 border-2 border-white skew-x-12"></div>
            ))}
          </div>
          <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <span className="px-4 py-1.5 bg-white text-brand-red text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                {t.announcement.tag}
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 italic">
                {t.announcement.title}
              </h2>
              <p className="text-xl text-white opacity-90 max-w-xl font-medium leading-relaxed italic">
                {t.announcement.description}
              </p>
            </div>
            <button className="group px-12 py-6 bg-brand-blue text-white font-black uppercase tracking-widest text-sm hover:bg-white hover:text-brand-blue transition-all flex items-center gap-4 shadow-2xl">
              {t.announcement.btn}
              <ChevronRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </section>

        {/* Infrastructure & About Section */}
        <section className="bg-white grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-brand-blue/5 border-b border-brand-blue/10">
          {/* Expertise Column */}
          <div className="p-8 md:p-24 flex flex-col" id="careers">
            <div className="flex items-center justify-between mb-16">
              <div className="h-1 w-12 bg-brand-red"></div>
              <span className="text-[11px] uppercase font-black text-brand-blue/30 tracking-[0.4em] italic">Established Excellence // 2026</span>
            </div>
            
            <h2 className="text-5xl font-black uppercase tracking-tight text-brand-blue mb-10 leading-none">
              {t.careers.title.split(' ').slice(0, 2).join(' ')}<br/>
              <span className="text-brand-red">{t.careers.title.split(' ').slice(2).join(' ')}</span>
            </h2>

            <div className="space-y-8 flex-1">
              <p className="text-brand-muted text-lg font-medium leading-relaxed mb-12 max-w-lg border-l-4 border-brand-red/10 pl-6 italic">
                {t.careers.description}
              </p>
              
              <div className="grid gap-6">
                {t.careers.roles.map((role, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="group overflow-hidden bg-brand-surface border border-brand-blue/5 p-8 relative flex flex-col sm:flex-row gap-8"
                  >
                    <div className="flex-1 relative z-10">
                      <h3 className="font-black text-2xl uppercase text-brand-blue mb-2 group-hover:text-brand-red transition-colors">{role.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-brand-red uppercase tracking-widest font-black mb-4">
                        <Construction size={14} />
                        {role.location}
                      </div>
                      <p className="text-sm text-brand-muted leading-relaxed font-medium">
                        {role.description}
                      </p>
                    </div>
                    <div className="w-full sm:w-32 h-32 flex-shrink-0 bg-brand-blue/5 grayscale group-hover:grayscale-0 transition-all overflow-hidden rounded-sm">
                      <img 
                        src={i === 0 
                          ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk96BNllwB08AQXuXSJGXJVk01V7rrPn4AqJjLVI0I5Qu3IgkUkUpMuXH6&s=10" 
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE3yxx3NP4uAFj3qK-_U9vGaMYtN_ZTPqaQexSEFSBvVf6yatLaJGki4RT&s=10"
                        } 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        alt="Project detail"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
 
          {/* Why Us Column */}
          <div className="p-8 md:p-24 flex flex-col bg-brand-surface" id="about">
             <div className="flex items-center justify-between mb-16">
              <h2 className="text-5xl font-black uppercase tracking-tight text-brand-blue leading-none">{t.why.title}</h2>
              <div className="w-16 h-16 border-4 border-brand-red rounded-full flex items-center justify-center font-black text-brand-red">PL</div>
            </div>

            <div className="grid gap-12">
              {t.why.features.map((feature, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="w-16 h-16 flex-shrink-0 bg-brand-blue flex items-center justify-center font-black text-brand-red text-2xl italic group-hover:bg-brand-red group-hover:text-white transition-all shadow-xl shadow-brand-blue/10">
                    <HardHat size={28} />
                  </div>
                  <div className="pt-2">
                    <h4 className="font-black uppercase text-xl mb-3 group-hover:text-brand-red transition-colors text-brand-blue italic">{feature.title}</h4>
                    <p className="text-sm text-brand-muted leading-relaxed font-semibold max-w-md">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Extra decorative element */}
            <div className="mt-20 p-12 bg-brand-blue text-white relative overflow-hidden group">
               <div className="absolute inset-0 bg-brand-red translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
               <div className="relative z-10">
                 <p className="text-3xl font-black italic uppercase leading-none mb-4 tracking-tighter">Paving Poland's Future Since 2001</p>
                 <span className="text-[10px] uppercase font-bold tracking-[0.4em] opacity-60">Tak! Damy radę</span>
               </div>
            </div>
          </div>
        </section>

        {/* Closing Road Graphic Section */}
        <section className="h-48 relative overflow-hidden flex items-center justify-center border-b border-brand-blue/10 bg-brand-surface">
           <div className="absolute inset-0 z-0 opacity-10">
            <div className="skew-line left-1/2 -ml-[50px] border-brand-blue"></div>
            <div className="geometric-line top-1/2 -mt-[1px] h-[4px] bg-brand-red"></div>
          </div>
          <div className="relative z-10 text-center">
            <span className="text-brand-blue font-black text-xs uppercase tracking-[0.5em] italic">{t.footer.location} & Connected</span>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="h-auto border-t border-brand-blue/5 px-6 sm:px-10 flex flex-col items-center justify-center bg-brand-footer text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 py-12 gap-10">
        <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-7xl justify-between px-6">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <div className="text-white font-black italic text-xl">PolRoad</div>
            <span className="text-white/60">{t.footer.rights}</span>
            <span className="text-brand-red">{t.footer.location} | Pomorskie, PL</span>
          </div>

          <div className="flex flex-wrap justify-center gap-10">
            <a href="#" className="hover:text-brand-red transition-all">Privacy Policy</a>
            <a href="#" className="hover:text-brand-red transition-all">Terms of Service</a>
            <a href="#" className="hover:text-brand-red transition-all">Safety Standards</a>
          </div>

          <div className="flex gap-4">
             <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all cursor-pointer">
               <Globe size={16} />
             </div>
             <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all cursor-pointer">
               <MapPin size={16} />
             </div>
          </div>
        </div>
        
        <div className="w-full max-w-7xl border-t border-white/5 pt-10 text-center flex flex-col gap-4">
          <span className="text-white/20 italic font-black text-xs tracking-[0.8em]">Build // Excellence // Infrastructure</span>
          <span className="text-brand-red animate-pulse">● Live Operations in North Poland</span>
        </div>
      </footer>
    </div>
  );
}
