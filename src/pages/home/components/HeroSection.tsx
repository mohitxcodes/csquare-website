import { motion, type Variants } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import {
    ArrowRight,
    Trophy,
    Target,
    Zap,
    Star,
    ChevronDown,
    Github,
    Linkedin,
    Twitter,
    Sparkles,
    Code,
    Users,
    Award
} from "lucide-react";

interface StatItem {
    number: string;
    label: string;
    color: string;
    icon: React.ComponentType<{ className?: string }>;
}

interface FeatureItem {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    gradient: string;
}

interface SocialLink {
    Icon: React.ComponentType<{ className?: string }>;
    href: string;
    label: string;
    color: string;
}

export default function HeroSection() {
    const [currentStat, setCurrentStat] = useState<number>(0);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    const stats: StatItem[] = [
        { number: "500+", label: "Active Members", color: "text-sky-400", icon: Users },
        { number: "50+", label: "Projects Built", color: "text-cyan-400", icon: Code },
        { number: "15+", label: "Hackathons Won", color: "text-blue-400", icon: Trophy },
        { number: "100%", label: "Innovation Rate", color: "text-sky-300", icon: Award },
    ];

    const features: FeatureItem[] = [
        {
            icon: Zap,
            title: "Lightning Fast",
            description: "Rapid development and deployment with cutting-edge technologies",
            gradient: "from-yellow-400 to-orange-500"
        },
        {
            icon: Target,
            title: "Precision Code",
            description: "Clean, efficient, and scalable solutions that stand the test of time",
            gradient: "from-green-400 to-emerald-500"
        },
        {
            icon: Trophy,
            title: "Award Winning",
            description: "Recognized excellence in innovation and technical achievement",
            gradient: "from-purple-400 to-pink-500"
        }
    ];

    const socialLinks: SocialLink[] = [
        { Icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-300" },
        { Icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-300" },
        { Icon: Twitter, href: "#", label: "Twitter", color: "hover:text-sky-300" }
    ];

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setCurrentStat((prev) => (prev + 1) % stats.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    }, []);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const itemVariants: Variants = {
        hidden: {
            y: 80,
            opacity: 0,
            scale: 0.8
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 120,
                mass: 0.8
            }
        }
    };

    const floatingVariants: Variants = {
        animate: {
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.div
            className="relative z-10 max-w-7xl pt-12 mx-auto text-center overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            onMouseMove={handleMouseMove}
        >
            {/* Professional Background Effects */}
            <div className="absolute inset-0 -z-10">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-sky-400/10 to-cyan-400/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.7, 0.4]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
            </div>

            {/* Enhanced Welcome Badge */}
            <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-sky-500/30 mb-12 backdrop-blur-xl shadow-2xl"
            >
                <motion.div
                    className="relative"
                >
                    <Sparkles className="w-5 h-5 text-sky-400" />
                    <motion.div
                        className="absolute -top-1 -right-1 w-2 h-2 bg-sky-400 rounded-full"
                        animate={{ scale: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>
                <span className="text-sky-300 text-sm font-medium tracking-wide">Welcome to CSqaure Club</span>
                <motion.div
                    className="w-2 h-2 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </motion.div>

            {/* Ultra-Modern Main Heading */}
            <motion.div variants={itemVariants} className="mb-6">
                <div className="relative">
                    <motion.h1
                        className="flex gap-4 items-center justify-center text-6xl md:text-6xl lg:text-8xl font-black leading-none"
                        style={{
                            background: 'linear-gradient(135deg, #ffffff 0%, #e0f2fe 25%, #7dd3fc 50%, #0ea5e9 75%, #ffffff 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            backgroundSize: '400% 400%'
                        }}
                        animate={{
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <motion.span
                            className="relative inline-block bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent"
                            whileHover={{
                                scale: 1.05,
                                background: 'linear-gradient(45deg, #60a5fa, #06b6d4, #3b82f6)',
                                backgroundClip: 'text'
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Code
                        </motion.span>
                        <motion.span
                            className="relative inline-block bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
                            whileHover={{
                                scale: 1.05,
                                background: 'linear-gradient(45deg, #60a5fa, #06b6d4, #3b82f6)',
                                backgroundClip: 'text'
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Beyond
                        </motion.span>
                        <motion.span
                            className="relative inline-block bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent"
                            whileHover={{
                                scale: 1.05,
                                background: 'linear-gradient(45deg, #60a5fa, #06b6d4, #3b82f6)',
                                backgroundClip: 'text'
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Limits
                        </motion.span>
                    </motion.h1>

                    {/* Sophisticated Decorative Elements */}
                    <motion.div
                        variants={floatingVariants}
                        animate="animate"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    >
                        <motion.div
                            className="w-40 h-40 border-2 border-sky-400/20 rounded-full absolute"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className="w-32 h-32 border border-cyan-400/30 rounded-full absolute top-1 left-1"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className="w-24 h-24 border border-blue-400/40 rounded-full absolute top-2 left-2"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        />
                    </motion.div>
                </div>
            </motion.div>

            {/* Enhanced Subtitle */}
            <motion.div
                variants={itemVariants}
                className="mb-16 max-w-6xl mx-auto"
            >
                <motion.p className="text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed font-light mb-8">
                    Chandigarh University's{" "}
                    <motion.span
                        className="text-transparent bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text font-semibold relative"
                        whileHover={{
                            scale: 1.05,
                            background: 'linear-gradient(45deg, #60a5fa, #06b6d4, #3b82f6)',
                            backgroundClip: 'text'
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        premier coding club
                        <motion.div
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-400/50 to-cyan-400/50 rounded-full"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        />
                    </motion.span>{" "}
                    where innovation meets excellence.{" "}
                    <motion.span
                        className="text-cyan-300 font-medium relative group cursor-pointer"
                        whileHover={{
                            scale: 1.02,
                            textShadow: "0 0 20px rgba(34, 211, 238, 0.5)"
                        }}
                    >
                        Join the revolution
                        <motion.div
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400/30 to-cyan-300/30 rounded-full"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        />
                    </motion.span>{" "}
                    in technology and push the boundaries of what's possible.
                </motion.p>
            </motion.div>



            {/* Enhanced CTA Buttons */}
            <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
                <motion.button
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(56, 189, 248, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-10 py-5 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-bold rounded-xl overflow-hidden shadow-lg shadow-sky-500/25"
                >
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.7 }}
                    />
                    <span className="relative flex items-center gap-3 text-xl">
                        Join CSqaure
                        <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <ArrowRight className="w-6 h-6" />
                        </motion.div>
                    </span>
                </motion.button>

                <motion.button
                    whileHover={{
                        scale: 1.05,
                        borderColor: "rgb(14 165 233)",
                        backgroundColor: "rgba(14, 165, 233, 0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 border-2 border-sky-400/30 text-sky-400 font-bold rounded-xl text-xl hover:text-sky-300 transition-all duration-300"
                >
                    View Projects
                </motion.button>
            </motion.div>

            {/* Animated Stats Section */}
            <motion.div
                variants={itemVariants}
                className="mb-12"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                delay: 1.4 + index * 0.1
                            }}
                            whileHover={{
                                scale: 1.05,
                                y: -5,
                                transition: { type: "spring", stiffness: 400 }
                            }}
                            className="group p-6 rounded-xl bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-sky-500/10 backdrop-blur-sm"
                        >
                            <motion.div
                                className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}
                                key={currentStat}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{
                                    scale: index === currentStat ? 1.1 : 1,
                                    opacity: 1,
                                    color: index === currentStat ? "#00D4FF" : undefined
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                {stat.number}
                            </motion.div>
                            <div className="text-gray-400 text-sm md:text-base font-medium group-hover:text-gray-300 transition-colors">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
                variants={itemVariants}
                className="flex justify-center gap-6 mb-8"
            >
                {socialLinks.map(({ Icon, href, label, color }, index) => (
                    <motion.a
                        key={label}
                        href={href}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.6 + index * 0.1 }}
                        whileHover={{
                            scale: 1.2,
                            y: -3,
                            boxShadow: "0 10px 20px rgba(56, 189, 248, 0.3)"
                        }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-3 rounded-full bg-slate-800/50 border border-sky-500/20 text-sky-400 transition-all duration-300 ${color}`}
                        aria-label={label}
                    >
                        <Icon className="w-5 h-5" />
                    </motion.a>
                ))}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                variants={itemVariants}
                className="flex flex-col items-center"
            >
                <span className="text-gray-400 text-sm mb-4">Scroll to explore more</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="p-2 border border-sky-500/30 rounded-full"
                >
                    <ChevronDown className="w-5 h-5 text-sky-400" />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}