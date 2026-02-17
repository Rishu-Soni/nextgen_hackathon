import React from 'react';
import { Medal, Award, Cpu, Star } from 'lucide-react';
import type { Prize } from '../types';

export const Vault: React.FC = () => {
    const prizes: Prize[] = [
        {
            tier: "Silver Tier",
            title: "The Runner Up",
            amount: "₹30,000",
            perks: ["Exclusive Swag", "Certificates", "Sponsor Credits"],
            icon: "2",
            color: "text-gray-300"
        },
        {
            tier: "Gold Tier",
            title: "Champion Agent",
            amount: "₹50,000",
            perks: ["Supercomputer Access", "Internships", "Premium Swag"],
            icon: "1",
            color: "text-signal"
        },
        {
            tier: "Bronze Tier",
            title: "The Finalist",
            amount: "₹20,000",
            perks: ["Exclusive Swag", "Certificates", "Digital Badges"],
            icon: "3",
            color: "text-orange-400"
        }
    ];

    return (
        <section id="vault" aria-label="Rewards and Prizes" className="py-24 bg-black relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-signal/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <div className="flex items-center justify-center gap-2 mb-4" aria-hidden="true">
                        <span className="h-[1px] w-12 bg-signal"></span>
                        <span className="text-signal text-xs font-bold tracking-[0.3em] uppercase">Rewards & Honors</span>
                        <span className="h-[1px] w-12 bg-signal"></span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tight">The Vault</h2>
                    <p className="text-gray-400 max-w-lg mx-auto">
                        Crack the code to unlock the ultimate rewards. Total prize pool exceeds <span className="text-white font-bold">₹1,00,000+</span>.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
                    {/* Silver */}
                    <article className="bg-obsidian border border-white/10 rounded-2xl p-8 hover:border-gray-400/50 transition-all duration-300 group order-2 lg:order-1">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-gray-400/10 rounded-full text-gray-300">
                                <Medal size={32} aria-hidden="true" />
                            </div>
                            <span className="text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors" aria-hidden="true">02</span>
                        </div>
                        <h3 className="text-gray-300 text-xl font-bold uppercase tracking-wide mb-1">Silver Tier</h3>
                        <p className="text-gray-500 text-xs uppercase tracking-wider mb-6">The Runner Up</p>
                        <div className="text-4xl font-bold text-white mb-6" aria-label="Prize amount: 30,000 rupees">₹30,000</div>
                        <ul className="space-y-3" aria-label="Silver tier perks">
                            {prizes[0].perks.map((perk, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" aria-hidden="true"></span>
                                    {perk}
                                </li>
                            ))}
                        </ul>
                    </article>

                    {/* Gold */}
                    <article className="bg-obsidian border border-signal/30 rounded-2xl p-10 transform lg:-translate-y-12 shadow-[0_0_30px_rgba(255,215,0,0.1)] hover:shadow-[0_0_50px_rgba(255,215,0,0.2)] transition-all duration-300 relative overflow-hidden order-1 lg:order-2">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-signal to-transparent" aria-hidden="true"></div>
                        <div className="flex justify-center mb-8">
                            <div className="relative">
                                <div className="absolute inset-0 bg-signal blur-xl opacity-40" aria-hidden="true"></div>
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8yIrC3f0zaHV6qXEVVgu7OlUs4vkFEf7_klehNy4NBYnq1LEtlewuUPMpJ_tfcixqpSXtlZ6mbYxxMdf9CPTUXQ33yRG2qimpS00kzUiADWn2HveJIIaHkpsZotEUNNzhJk3_Fbmf-HA6CcKGw4BhKssspWv75dI7w7YCXXkO_G_uaOdBFCbpHDL6-wMYYMnltUkMoQP57-kqQ6zjT07LOHXJeEaqT2JlVvAfAOuWS8LlfXSJL3M2MSywVq5e_ChVu01VEkrjBIY"
                                    alt="Gold Trophy"
                                    className="w-40 h-40 object-contain animate-float relative z-10"
                                />
                            </div>
                        </div>
                        <div className="text-center">
                            <h3 className="text-signal text-2xl font-black uppercase tracking-widest mb-1">Gold Tier</h3>
                            <p className="text-gray-400 text-xs uppercase tracking-widest mb-6">Champion Agent</p>
                            <div className="text-6xl font-black text-white mb-6" aria-label="Prize amount: 50,000 rupees">₹50,000</div>
                            <div className="flex flex-wrap justify-center gap-2 mb-6">
                                <span className="px-3 py-1 bg-signal/10 border border-signal/20 text-signal text-[10px] font-bold rounded uppercase">Internships</span>
                                <span className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-[10px] font-bold rounded uppercase">Premium Swag</span>
                            </div>
                        </div>
                    </article>

                    {/* Bronze */}
                    <article className="bg-obsidian border border-white/10 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 group order-3">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-orange-500/10 rounded-full text-orange-500">
                                <Award size={32} aria-hidden="true" />
                            </div>
                            <span className="text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors" aria-hidden="true">03</span>
                        </div>
                        <h3 className="text-orange-500 text-xl font-bold uppercase tracking-wide mb-1">Bronze Tier</h3>
                        <p className="text-gray-500 text-xs uppercase tracking-wider mb-6">The Finalist</p>
                        <div className="text-4xl font-bold text-white mb-6" aria-label="Prize amount: 20,000 rupees">₹20,000</div>
                        <ul className="space-y-3" aria-label="Bronze tier perks">
                            {prizes[2].perks.map((perk, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" aria-hidden="true"></span>
                                    {perk}
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>

                {/* Supercomputer Access */}
                <div className="mt-16 max-w-4xl mx-auto">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 hover:bg-white/10 transition-colors">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shrink-0">
                            <Cpu className="text-white w-8 h-8" aria-hidden="true" />
                        </div>
                        <div className="flex-grow text-center md:text-left">
                            <h3 className="text-xl font-bold text-white uppercase mb-2">Top 5: Supercomputer Access</h3>
                            <p className="text-gray-400 text-sm">
                                Unlock 24h access to the KIET High-Performance Computing Cluster for your next AI project. Includes industry mentorship.
                            </p>
                        </div>
                        <button className="flex items-center gap-2 text-signal text-sm font-bold uppercase tracking-wider border-b border-signal pb-1 hover:text-white hover:border-white transition-all cursor-pointer">
                            Hardware Specs <Star className="w-4 h-4" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
