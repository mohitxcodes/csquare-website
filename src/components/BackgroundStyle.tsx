import React from 'react';

interface BackgroundStyleProps {
    children: React.ReactNode;
}

export default function BackgroundStyle({ children }: BackgroundStyleProps) {
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 overflow-hidden">
            {/* Animated Background Patterns */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Primary background blur orbs */}
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-sky-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>

                {/* Secondary blur orbs for depth */}
                <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/8 rounded-full blur-2xl animate-pulse delay-500"></div>
                <div className="absolute bottom-10 left-10 w-48 h-48 bg-sky-400/8 rounded-full blur-2xl animate-pulse delay-1500"></div>

                {/* Advanced Pattern Overlay */}
                <div className="absolute inset-0 opacity-8">
                    <svg width="100%" height="100%">
                        <defs>
                            <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="rgb(56 189 248 / 0.3)" />
                                <stop offset="50%" stopColor="rgb(6 182 212 / 0.2)" />
                                <stop offset="100%" stopColor="rgb(59 130 246 / 0.3)" />
                            </linearGradient>
                            <pattern id="advancedGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="url(#gridGradient)" strokeWidth="1" />
                                <circle cx="30" cy="30" r="2" fill="rgb(56 189 248 / 0.4)" />
                            </pattern>
                            <pattern id="circuitBoard" width="100" height="100" patternUnits="userSpaceOnUse">
                                <rect width="100" height="100" fill="none" />
                                <path d="M20 20 L80 20 L80 40 L20 40 Z" fill="none" stroke="rgb(6 182 212 / 0.25)" strokeWidth="2" />
                                <path d="M20 60 L80 60 L80 80 L20 80 Z" fill="none" stroke="rgb(14 165 233 / 0.25)" strokeWidth="2" />
                                <path d="M40 10 L40 30 M40 50 L40 70 M40 90 L40 100" fill="none" stroke="rgb(56 189 248 / 0.3)" strokeWidth="1" />
                                <path d="M60 30 L60 50 M60 70 L60 90" fill="none" stroke="rgb(6 182 212 / 0.3)" strokeWidth="1" />
                                <circle cx="40" cy="40" r="3" fill="rgb(56 189 248 / 0.5)" />
                                <circle cx="60" cy="60" r="3" fill="rgb(6 182 212 / 0.5)" />
                            </pattern>
                            <pattern id="hexTech" width="80" height="80" patternUnits="userSpaceOnUse">
                                <path d="M40 10 L60 25 L60 55 L40 70 L20 55 L20 25 Z" fill="none" stroke="rgb(14 165 233 / 0.2)" strokeWidth="1" />
                                <path d="M20 25 L60 25 M40 10 L40 35 M40 45 L40 70 M20 55 L60 55" fill="none" stroke="rgb(56 189 248 / 0.15)" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#advancedGrid)" />
                        <rect width="100%" height="100%" fill="url(#circuitBoard)" />
                        <rect width="100%" height="100%" fill="url(#hexTech)" />
                    </svg>
                </div>

                {/* Enhanced Floating Elements */}
                <div className="absolute top-20 left-20 w-2 h-2 bg-sky-400/40 rounded-full animate-bounce delay-300 shadow-lg shadow-sky-400/20"></div>
                <div className="absolute top-40 right-32 w-1 h-1 bg-cyan-400/50 rounded-full animate-bounce delay-700 shadow-lg shadow-cyan-400/20"></div>
                <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-bounce delay-1000 shadow-lg shadow-blue-400/20"></div>
                <div className="absolute top-1/3 right-20 w-1 h-1 bg-sky-300/50 rounded-full animate-bounce delay-500 shadow-lg shadow-sky-300/20"></div>
                <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-cyan-300/40 rounded-full animate-bounce delay-800 shadow-lg shadow-cyan-300/20"></div>
                <div className="absolute top-60 left-1/2 w-1 h-1 bg-sky-400/30 rounded-full animate-bounce delay-1200 shadow-lg shadow-sky-400/20"></div>

                {/* Dynamic Wave Layers */}
                <div className="absolute bottom-0 left-0 right-0 h-40 opacity-15">
                    <svg width="100%" height="100%" viewBox="0 0 1200 160" preserveAspectRatio="none">
                        <path d="M0,80 C300,120 600,40 900,80 C1050,100 1200,80 1200,80 L1200,160 L0,160 Z" fill="rgb(56 189 248 / 0.4)" />
                        <path d="M0,100 C200,80 400,120 600,100 C800,80 1000,120 1200,100 L1200,160 L0,160 Z" fill="rgb(6 182 212 / 0.3)" />
                        <path d="M0,120 C300,100 600,140 900,120 C1050,100 1200,120 1200,120 L1200,160 L0,160 Z" fill="rgb(14 165 233 / 0.35)" />
                    </svg>
                </div>

                {/* Advanced Grid System */}
                <div className="absolute inset-0 opacity-4">
                    <div className="absolute top-0 left-1/5 w-px h-full bg-gradient-to-b from-transparent via-sky-400/30 to-transparent"></div>
                    <div className="absolute top-0 left-2/5 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"></div>
                    <div className="absolute top-0 left-3/5 w-px h-full bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"></div>
                    <div className="absolute top-0 left-4/5 w-px h-full bg-gradient-to-b from-transparent via-sky-300/30 to-transparent"></div>
                    <div className="absolute top-1/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent"></div>
                    <div className="absolute top-2/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
                    <div className="absolute top-3/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
                    <div className="absolute top-4/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-300/30 to-transparent"></div>
                </div>

                {/* Corner Accent Elements */}
                <div className="absolute top-5 left-5 opacity-10">
                    <svg width="120" height="120" viewBox="0 0 120 120">
                        <path d="M10 10 L110 10 L110 30 L30 30 L30 110 L10 110 Z" fill="none" stroke="rgb(56 189 248 / 0.4)" strokeWidth="2" />
                        <circle cx="60" cy="60" r="20" fill="none" stroke="rgb(6 182 212 / 0.3)" strokeWidth="1" />
                        <circle cx="60" cy="60" r="8" fill="rgb(14 165 233 / 0.4)" />
                    </svg>
                </div>

                <div className="absolute bottom-5 right-5 opacity-10">
                    <svg width="100" height="100" viewBox="0 0 100 100">
                        <path d="M10 90 L90 90 L90 70 L70 70 L70 10 L90 10 L90 30 L10 30 Z" fill="none" stroke="rgb(6 182 212 / 0.4)" strokeWidth="2" />
                        <rect x="25" y="25" width="50" height="50" fill="none" stroke="rgb(56 189 248 / 0.3)" strokeWidth="1" />
                        <rect x="35" y="35" width="30" height="30" fill="rgb(14 165 233 / 0.4)" />
                    </svg>
                </div>

                {/* Subtle Dot Pattern */}
                <div className="absolute inset-0 opacity-6">
                    <svg width="200" height="200">
                        <defs>
                            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                                <circle cx="10" cy="10" r="1" fill="rgb(56 189 248 / 0.3)" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#dots)" />
                    </svg>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center px-6 py-20">
                {children}
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>
    );
}
