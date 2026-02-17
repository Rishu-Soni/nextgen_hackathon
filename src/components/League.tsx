import React from 'react';
import type { TeamMember } from '../types';

export const League: React.FC = () => {
    const team: TeamMember[] = [
        { name: "Alex R.", role: "Lead Ops", subRole: "Systems", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9-wTOOJSquCnZuB--BNMFJMQl52nPrvEFJlrYWsvICcpj5toIE1xyYUiBN6CxPSC3gdDBWmYMbns4YpeugYetMi72e1E4ElT7qtUlid7ZkkneAF0WqG76Lr_d5u3qKbmyykMsdTce51zOTurqZa4kCcomT-Zl05HrpZLlMeW3HQR7CEt3jJCSc6Aw4Uvi07C4ZP3EIVotdGQYHgPuDXng9hvNmN12_LG6Mikx31ZfXA4d7Nbv3VX8h4KHOatzAOvy8eRs6SfJPyM" },
        { name: "Sarah K.", role: "Logistics", subRole: "Ground Control", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrAn1CYXwF5ioWUtQCDwgj5jy8o5sHyzO67qrtRHHsy3piGxG5X1MdMHZjz1MTqB83hENxhrrjRmTrfibAbZhZXIauhH-LAelwoIL8gbDlmYIM4rNh2SfA2enC5hagHhi8POlbD_eL10maQAWMCVqPrx-vTlDecQbaXiIjRqSkl3iUWb1yEsMdyHadA1Hmx5KSBI7cu6vZBkxj1726qXPeZmojHkNSvB7o41NSm8vclsMLU103YaJepJFXCLbgvf6m7eR8cjJX7CI" },
        { name: "David L.", role: "Tech Lead", subRole: "Mainframe", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA72zxuMi-BW-YkcHjKtCS6k_ntE9Yd4pfo1Be9SXYRlepM5LZ06ebS6zNfH-a-IMoIwWrQpyY9lO6N6fwySy6mo40y-GNkQlOUR1ioJfqJisN4TaAx8ryQcwMmVY2a5NWXcTrCxQQJ-Jp-pw55naSn6XLu60IzcczbBAUQmr1aN9_JqCMZdMXxYSV4dTvrdbzQ5T5Gl9xs188XMsdee1cuopNEipf4c1a9PXWHM5-ueGn_RodYXTt_eAq8YPYfKKkyq6WIMh7X5UY" },
        { name: "Elena M.", role: "Design", subRole: "Visuals", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0DLaCE8PMdaddu5tQzYqqUbXrnOY2yv_tA9tHqk8Vsmcef2ruXnuUZwAR4l1dClOkRv1KBSpdaNCz8eHqjLS2W_Ikwzko72kDL2TUpuQ9pB1bofOwIxcQhr15YCi4zewpDZl6gVBqVF_aQSpZoLK_QCRXwiA3u-mpDP6fl11q7V-ICBfUR3cPK9WKQPKjYUNByeznZ4toa03qlKav_0WgP1e3hEj6zRp1mNDdDnY6IqODLWVArvb9UPbEVQkvwTPV8tuNJQn37Us" },
        { name: "Marcus J.", role: "Outreach", subRole: "Signals", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKTQZb8r3L4xRNubRjS52uPKZEVH1DvRCZ35CjvGugS3FClohERTnoM-d32tZ2ZCc-6SSAWDkfFtEgWW9YXhOsamXsy9lyXqhdFp2QpPcEcWQGazDaQmG8wOedNg3yvM66Wk7isab3GeODOQ1d77JO_QWelUXavcBD5vNZ7OB7Q7Wnun9n8_X59fPut_vodNVqsfXo2rTacZFRTCLsYl-lBElHfdYhU4BEZL8-p1ux_rRLDWyCE6ZN7UZGK5N7i6E4xZRN1xt2YoA" },
    ];

    return (
        <section id="league" aria-label="Team Members" className="py-24 bg-noir relative overflow-hidden">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FFD700 1px, transparent 1px)', backgroundSize: '40px 40px' }} aria-hidden="true"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
                <div className="flex items-center gap-3 mb-8" aria-hidden="true">
                    <span className="h-[2px] w-12 bg-signal"></span>
                    <span className="text-signal tracking-[0.3em] text-xs font-bold uppercase">Command Squad</span>
                    <span className="h-[2px] w-12 bg-signal"></span>
                </div>
                <h2 className="text-5xl font-bold tracking-tighter text-white mb-20 text-center uppercase">The League</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-16 w-full max-w-6xl">
                    {team.map((member) => (
                        <div key={member.name} className="flex flex-col items-center group cursor-pointer">
                            <div className="relative mb-6">
                                <div className="w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-signal p-1 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_#FFD700] overflow-hidden bg-zinc-900">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover rounded-full filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-signal text-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded whitespace-nowrap">
                                    {member.role}
                                </div>
                            </div>
                            <h3 className="text-white font-bold text-lg tracking-wide text-center">{member.name}</h3>
                            <p className="text-zinc-500 text-xs uppercase tracking-widest mt-1">{member.subRole}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
