import React, { useState, useEffect } from 'react';
import { Radar, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Mission', href: '#hero' },
        { name: 'Intel', href: '#intel' },
        { name: 'The Vault', href: '#vault' },
        { name: 'Allies', href: '#league' },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${isScrolled ? 'bg-black/80 backdrop-blur-md border-white/10 py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <Radar className="w-8 h-8 text-signal animate-pulse" aria-hidden="true" />
                    <div className="flex flex-col">
                        <span className="text-white font-bold tracking-tight text-lg leading-none uppercase">NextGen</span>
                        <span className="text-signal text-[10px] font-bold tracking-[0.3em] uppercase leading-none mt-1 group-hover:tracking-[0.4em] transition-all">
                            Signal
                        </span>
                    </div>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8" aria-label="Desktop Navigation">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-xs font-bold text-white/70 hover:text-signal uppercase tracking-widest transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="px-5 py-2 bg-white/5 border border-white/10 hover:border-signal/50 hover:bg-signal hover:text-black text-white text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer">
                        Login
                    </button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white cursor-pointer"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileMenuOpen}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <nav className="md:hidden absolute top-full left-0 w-full bg-obsidian border-b border-white/10 py-4 px-6 flex flex-col gap-4 shadow-2xl" aria-label="Mobile Navigation">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-sm font-bold text-white/70 hover:text-signal uppercase tracking-widest block"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
};
