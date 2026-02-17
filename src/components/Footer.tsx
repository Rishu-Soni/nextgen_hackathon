import React from 'react';
import { Terminal, MapPin, Twitter, Github, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">

            {/* Massive CTA */}
            <div className="relative z-10 flex justify-center mb-24 group cursor-pointer px-4">
                <h2 className="text-[18vw] leading-none font-black text-white/5 group-hover:text-signal transition-colors duration-200 uppercase font-impact tracking-tighter select-none perspective-text text-center">
                    Get in
                </h2>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <span className="bg-black text-signal border border-signal px-6 py-3 text-lg md:text-2xl font-bold uppercase tracking-widest whitespace-nowrap shadow-[0_0_20px_rgba(255,215,0,0.5)]">
                        Register for 2026
                    </span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

                {/* Links Column */}
                <div className="lg:col-span-5 flex flex-col gap-10">
                    <div>
                        <div className="flex items-center gap-3 text-signal mb-6">
                            <Terminal size={24} aria-hidden="true" />
                            <span className="text-lg font-bold tracking-widest uppercase">System Links</span>
                        </div>
                        <nav className="flex flex-col gap-4 items-start" aria-label="Footer Navigation">
                            {['Rules & Protocol', 'Hack Schedule', 'Problem Tracks', 'Bounty Board'].map((item) => (
                                <a key={item} href="#" className="text-2xl font-light text-zinc-500 hover:text-white hover:pl-4 transition-all duration-300 uppercase tracking-widest flex items-center gap-2 group">
                                    <span className="w-0 overflow-hidden group-hover:w-6 transition-all duration-300 text-signal" aria-hidden="true">•</span> {item}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="pt-8 border-t border-zinc-800">
                        <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">Connect on Frequency</h4>
                        <div className="flex gap-4">
                            <a href="#" aria-label="Twitter" className="w-12 h-12 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-signal hover:border-signal transition-all"><Twitter size={20} aria-hidden="true" /></a>
                            <a href="#" aria-label="GitHub" className="w-12 h-12 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-signal hover:border-signal transition-all"><Github size={20} aria-hidden="true" /></a>
                            <a href="#" aria-label="Instagram" className="w-12 h-12 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-signal hover:border-signal transition-all"><Instagram size={20} aria-hidden="true" /></a>
                        </div>
                    </div>
                </div>

                {/* Map Column */}
                <div className="lg:col-span-7 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-4">
                        <MapPin className="text-signal" size={20} aria-hidden="true" />
                        <h3 className="text-white font-bold tracking-wide uppercase">KIET GROUP OF INSTITUTIONS</h3>
                        <span className="text-zinc-500 text-sm ml-auto font-mono">GHAZIABAD, IN</span>
                    </div>
                    <div className="w-full h-[300px] lg:h-[400px] bg-zinc-900 rounded-lg overflow-hidden relative border border-zinc-800 group" role="img" aria-label="Map location of KIET Group of Institutions">
                        {/* Static map image hotlinked from user prompt data */}
                        <div className="absolute inset-0 z-0 bg-[#242424]">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_zzVcyWGrZC_aqP0f4G1rU6BBODj7Q8Y-NOzKtm80BJJnnX7Ps6FlM3hd-ONa9W6M7u-eBFdZ4HuamlV3mWXaWtQcnXQ8QSWaifxNJyKbKtJ6QvMidsHb_E6TRtayMS74aLtIcDq_YDn9jR1YqgesZtmO1FnjTro0Anh_vg2dw8_SIR3KSNNBA5EOkplavMrCueBHSZssLe0V95sK7ikR6bPv4Y48ulqUlPZShlut-XD0QI5KQwhZucQhJsKL9TwKqyiU250qQt4"
                                alt="Map Location of KIET"
                                className="w-full h-full object-cover filter grayscale invert contrast-125 mix-blend-luminosity opacity-60 group-hover:opacity-80 transition-opacity"
                                loading="lazy"
                            />
                        </div>
                        {/* Map Overlay Gradient */}
                        <div className="absolute inset-0 bg-radial-gradient from-transparent to-black opacity-40 pointer-events-none" aria-hidden="true"></div>

                        {/* Custom Pin Animation */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                            <div className="w-4 h-4 bg-signal rounded-full animate-ping absolute"></div>
                            <div className="w-4 h-4 bg-signal rounded-full border-2 border-black relative z-10"></div>
                        </div>

                        <div className="absolute bottom-4 left-4 z-20 bg-black/80 backdrop-blur px-3 py-1 rounded text-[10px] text-signal font-mono border border-signal/30">
                            COORD: 28.7521° N, 77.4988° E
                        </div>
                    </div>
                </div>

            </div>

            <div className="border-t border-zinc-900 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-xs font-mono uppercase tracking-widest gap-4 px-6 max-w-7xl mx-auto">
                <p>© 2026 The NextGen Signal. All systems operational.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-signal transition-colors">Privacy</a>
                    <a href="#" className="hover:text-signal transition-colors">Code of Conduct</a>
                </div>
            </div>
        </footer>
    );
};
