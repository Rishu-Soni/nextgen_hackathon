import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Vault } from './components/Vault';
import { Intel } from './components/Intel';
import { League } from './components/League';
import { Footer } from './components/Footer';
import { SignalIntro } from './components/SignalIntro';
import { Navbar } from './components/Navbar';

// Custom hook for managing intro sequence state
const useIntroSequence = (duration: number = 1300) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return showContent;
};

function App() {
  const showContent = useIntroSequence();

  return (
    <div className="min-h-screen bg-noir text-white selection:bg-signal selection:text-black font-sans">
      {!showContent && <SignalIntro />}

      <div
        className={`transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}
        aria-hidden={!showContent}
      >
        <Navbar />
        <main className="flex flex-col gap-0" role="main">
          <Hero />
          <Vault />
          <Intel />
          <League />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
