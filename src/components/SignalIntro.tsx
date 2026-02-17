import React, { useEffect, useState } from 'react';
import BatLogo from '../assets/BatLogo.svg';

export const SignalIntro: React.FC = () => {
    const [stage, setStage] = useState(0);

    useEffect(() => {
        // Frame 0: Mount (0s)

        // Frame 1: Signal Flash (0.1s)
        const timer1 = setTimeout(() => setStage(1), 500);

        // Frame 2: Logo Appear (0.4s)
        const timer2 = setTimeout(() => setStage(2), 800);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[100] bg-noir flex items-center justify-center overflow-hidden pointer-events-none" aria-hidden="true">
            {/* The Sky Beam/Flash */}
            <div
                className={`absolute w-[50vmin] h-[50vmin] rounded-full transition-all duration-300 ease-out
        ${stage >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
        `}
                style={{
                    background: 'radial-gradient(circle, rgba(255,215,0,1) 0%, rgba(255,215,0,0.2) 50%, transparent 70%)',
                    // boxShadow: '0 0 100px 50px rgba(255, 215, 0, 0.1)'
                }}
            />

            {/* The Logo Silhouette */}
            <div className={`relative z-10 transition-all duration-300 transform ${stage >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                {/* Bat/Signal Abstract Shape SVG */}
                <img src={BatLogo} alt="Bat Logo" className="w-32 md:w-48 text-black fill-current drop-shadow-2xl" />
            </div>
        </div>
    );
};
