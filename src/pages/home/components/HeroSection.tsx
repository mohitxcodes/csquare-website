
export default function HeroSection() {
    return (
        <div className="relative z-10 max-w-7xl mx-auto text-center">
            {/* Main Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 mb-8">
                <span className="text-sky-400 text-sm font-medium">Welcome to CSqaure</span>
            </div>

            {/* Main Heading */}
            <h1 className="flex gap-4 items-center justify-center text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-none">
                <span className="block">CODE</span>
                <span className="block bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    BEYOND
                </span>
                <span className="block">LIMITS</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
                Chandigarh University's premier coding club where innovation meets excellence.
                <span className="text-sky-400 font-medium">Join the revolution</span> in technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/25 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <span className="relative flex items-center gap-3 text-lg">
                        Join CSqaure
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                </button>

                <button className="px-8 py-4 border-2 border-sky-400/30 text-sky-400 font-semibold rounded-xl hover:border-sky-400 hover:bg-sky-400/10 hover:text-sky-300 transition-all duration-300 text-lg">
                    View Projects
                </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                <div className="group">
                    <div className="text-4xl md:text-5xl font-bold text-sky-400 mb-2 transition-all duration-300 group-hover:text-cyan-400 group-hover:scale-110">500+</div>
                    <div className="text-gray-400 text-sm md:text-base font-medium">Active Members</div>
                </div>

                <div className="group">
                    <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2 transition-all duration-300 group-hover:text-sky-400 group-hover:scale-110">50+</div>
                    <div className="text-gray-400 text-sm md:text-base font-medium">Projects Built</div>
                </div>

                <div className="group">
                    <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2 transition-all duration-300 group-hover:text-sky-400 group-hover:scale-110">15+</div>
                    <div className="text-gray-400 text-sm md:text-base font-medium">Hackathons Won</div>
                </div>

                <div className="group">
                    <div className="text-4xl md:text-5xl font-bold text-sky-300 mb-2 transition-all duration-300 group-hover:text-cyan-300 group-hover:scale-110">100%</div>
                    <div className="text-gray-400 text-sm md:text-base font-medium">Innovation Rate</div>
                </div>
            </div>
        </div>

    )
}