import React, { useState } from 'react';
import { Terminal, ChevronDown, Clock, Users, Layers } from 'lucide-react';
import type { Rule } from '../types';

export const Intel: React.FC = () => {
    const [openRule, setOpenRule] = useState<string | null>('rule1');

    const rules: Rule[] = [
        { id: 'rule1', title: 'Eligibility Criteria', content: 'All active undergraduate students are eligible to apply. Participation is open to all current undergraduates (internal or external), but on-site attendance is required. Each agent must carry a valid university ID card.' },
        { id: 'rule2', title: 'Code of Conduct', content: 'Respect is paramount. Harassment of any kind will result in immediate disqualification. Intellectual property belongs to the college, but code must be open-sourced.' },
        { id: 'rule3', title: 'Submission Guidelines', content: 'All code must be pushed to a public GitHub repository. The final submission must include a 2-minute video demo and a working prototype link.' },
        { id: 'rule4', title: 'Evaluation Matrix', content: 'Innovation & Originality (30%), Technical Complexity (30%), Design & Usability (20%), Pitch & Presentation (20%).' },
    ];

    return (
        <section id="intel" aria-label="Rules and Protocol" className="py-20 bg-noir border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16">

                {/* Left: Stats & Info */}
                <div className="md:w-1/3 space-y-8">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <Terminal className="text-signal w-5 h-5" aria-hidden="true" />
                            <span className="text-signal text-xs font-bold tracking-[0.2em] uppercase">Protocol 001</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-4 uppercase tracking-tight">Mission Parameters</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Your objective is clear. Navigate the constraints, execute your code, and deploy before the countdown hits zero.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-obsidian border border-white/5 p-4 rounded-lg">
                            <Clock className="text-gray-500 mb-2 w-5 h-5" aria-hidden="true" />
                            <div className="text-2xl font-bold text-white font-mono" aria-label="Duration: 24 Hours">24H</div>
                            <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">Duration</div>
                        </div>
                        <div className="bg-obsidian border border-white/5 p-4 rounded-lg">
                            <Users className="text-gray-500 mb-2 w-5 h-5" aria-hidden="true" />
                            <div className="text-2xl font-bold text-white font-mono" aria-label="Team Size: 2 to 4 Agents">2-4</div>
                            <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">Agents/Team</div>
                        </div>
                        <div className="bg-obsidian border border-white/5 p-4 rounded-lg col-span-2">
                            <Layers className="text-gray-500 mb-2 w-5 h-5" aria-hidden="true" />
                            <div className="text-2xl font-bold text-white font-mono">3 ROUNDS</div>
                            <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">Ideation, Prototype, Pitch</div>
                        </div>
                    </div>
                </div>

                {/* Right: Accordion */}
                <div className="md:w-2/3 space-y-4">
                    {rules.map((rule, idx) => (
                        <div key={rule.id} className="bg-obsidian border border-white/5 rounded-lg overflow-hidden transition-all hover:border-white/20">
                            <button
                                onClick={() => setOpenRule(openRule === rule.id ? null : rule.id)}
                                className="w-full flex items-center justify-between p-6 text-left"
                                aria-expanded={openRule === rule.id}
                                aria-controls={`rule-content-${rule.id}`}
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-gray-600 font-mono text-sm" aria-hidden="true">0{idx + 1}</span>
                                    <h3 className="text-lg font-bold text-white">{rule.title}</h3>
                                </div>
                                <ChevronDown className={`text-gray-500 transition-transform duration-300 ${openRule === rule.id ? 'rotate-180' : ''}`} aria-hidden="true" />
                            </button>
                            <div
                                id={`rule-content-${rule.id}`}
                                className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${openRule === rule.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="px-6 pb-6 md:pl-14 text-gray-400 text-sm leading-relaxed">
                                    {rule.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
