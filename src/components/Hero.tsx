import React from 'react';
import { ChevronDown, Zap, Radar } from 'lucide-react';
import BatLogo from '../assets/BatLogo.svg';

export const Hero: React.FC = () => {
    return (
        <section id="hero" aria-label="Hero Section" className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 overflow-hidden bg-noir">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1a00_0%,_#000000_70%)] opacity-60 pointer-events-none" aria-hidden="true"></div>
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} aria-hidden="true"></div>

            <div className="max-w-7xl w-full px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[70vh]">

                {/* Left Flank: Typography */}
                <div className="lg:col-span-4 flex flex-col gap-6 text-center lg:text-left order-2 lg:order-1 animate-fade-in" style={{ animationDelay: '1.4s' }}>
                    <div>
                        <h2 className="text-signal text-sm font-bold tracking-[0.3em] uppercase mb-4 pl-1 border-l-2 border-signal">Transmission Incoming</h2>
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9] mb-4">
                            THE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">SIGNAL</span>
                        </h1>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                            Gotham's digital defenses are down. Join the elite developers at <span className="text-white font-medium">KIET Ghaziabad</span> for a 24-hour code sprint to restore order.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
                        <button aria-label="Participate in the hackathon" className="relative overflow-hidden group bg-signal text-black px-8 py-4 rounded font-bold text-lg uppercase tracking-wider hover:bg-[#ffe033] transition-all shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_40px_rgba(255,215,0,0.5)] flex items-center justify-center gap-2 cursor-pointer">
                            <span className="relative z-10">Participate</span>
                            <Zap className="w-5 h-5 group-hover:fill-current transition-transform group-hover:scale-110" aria-hidden="true" />
                        </button>
                        <button aria-label="View hackathon tracks" className="px-8 py-4 rounded font-bold text-lg uppercase tracking-wider text-white border border-white/20 hover:bg-white/5 transition-all cursor-pointer">
                            View Tracks
                        </button>
                    </div>
                </div>

                {/* Center: The Signal (Visual Focus) */}
                <div className="lg:col-span-4 flex justify-center items-center order-1 lg:order-2" aria-hidden="true">
                    <div className="relative w-64 h-64 md:w-96 md:h-96 animate-float">
                        {/* The Glow */}
                        <div className="absolute inset-0 bg-signal rounded-full blur-[100px] opacity-20 animate-signal-pulse"></div>
                        {/* The Logo */}
                        <div className="relative w-full h-full flex items-center justify-center drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]">
                            <img src={BatLogo} alt="Bat Logo" className="w-32 md:w-48 text-black fill-current drop-shadow-2xl" />

                        </div>
                    </div>
                </div>

                {/* Right Flank: Data Terminal */}
                <div className="lg:col-span-4 flex flex-col justify-center order-3 animate-fade-in" style={{ animationDelay: '1.6s' }}>
                    <div className="bg-obsidian/80 border border-white/10 backdrop-blur-sm p-8 rounded-lg relative overflow-hidden group hover:border-signal/30 transition-colors">
                        <div className="absolute top-0 right-0 p-3 opacity-30">
                            <Radar className="text-signal w-6 h-6" aria-hidden="true" />
                        </div>

                        <div className="space-y-6">
                            <div className="border-l-2 border-white/10 pl-4">
                                <p className="text-gray-500 text-xs uppercase tracking-wider font-mono mb-1">Duration</p>
                                <p className="text-white text-xl font-bold font-mono">24 Hours</p>
                            </div>
                            <div className="border-l-2 border-white/10 pl-4">
                                <p className="text-gray-500 text-xs uppercase tracking-wider font-mono mb-1">Location</p>
                                <p className="text-white text-xl font-bold font-mono">KIET Ghaziabad</p>
                            </div>
                            <div className="border-l-2 border-white/10 pl-4">
                                <p className="text-gray-500 text-xs uppercase tracking-wider font-mono mb-1">Date</p>
                                <p className="text-white text-xl font-bold font-mono">22nd - 23rd Feb 2026</p>
                            </div>
                        </div>

                        <div className="mt-8 flex items-center justify-between pt-4 border-t border-white/5">
                            <span className="text-signal text-xs font-mono animate-pulse">● SIGNAL ACTIVE</span>
                            <span className="text-white/20 text-xs font-mono">ID: 884-XJ</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 animate-bounce opacity-50" aria-hidden="true">
                <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white">Scroll for Intel</span>
                    <ChevronDown className="w-4 h-4 text-white" />
                </div>
            </div>
        </section>
    );
};
