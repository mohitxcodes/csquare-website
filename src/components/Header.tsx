import { motion } from "framer-motion";
import { useState } from "react";
import {
    Home,
    Calendar,
    Users,
    Settings,
    Menu,
    X,
} from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "#home", icon: Home },
        { name: "Events", href: "#events", icon: Calendar },
        { name: "Team", href: "#team", icon: Users },
        { name: "Admin", href: "#admin", icon: Settings },
    ];

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-slate-900/20 backdrop-blur-xs border-b border-sky-500/20"
        >
            <div className="max-w-7xl mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo Section */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex items-center gap-3"
                    >
                        <div className="relative">
                            <div className="size-8 rounded-lg flex items-center justify-center">
                                <img src="/assets/logo/csquare-logo.png" alt="" />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-md font-bold text-white">CSqaure</h1>
                            <p className="text-[9px] text-sky-400">Code Beyond Limits</p>
                        </div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <motion.nav
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="hidden md:flex items-center gap-2"
                    >
                        {navItems.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative flex items-center gap-2 px-4 py-2 rounded-lg text-gray-300 hover:text-sky-400 transition-all duration-300 hover:bg-sky-500/10"
                                >
                                    <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                                    <span className="font-medium">{item.name}</span>
                                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-sky-500/0 via-sky-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </motion.a>
                            );
                        })}
                    </motion.nav>

                    {/* Mobile Menu Button */}
                    <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 hover:bg-sky-500/20 transition-all duration-300"
                    >
                        {isMenuOpen ? (
                            <X className="w-5 h-5" />
                        ) : (
                            <Menu className="w-5 h-5" />
                        )}
                    </motion.button>
                </div>

                {/* Mobile Navigation */}
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                        height: isMenuOpen ? "auto" : 0,
                        opacity: isMenuOpen ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden overflow-hidden"
                >
                    <div className="pt-4 pb-2 space-y-2">
                        {navItems.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{
                                        x: isMenuOpen ? 0 : -20,
                                        opacity: isMenuOpen ? 1 : 0
                                    }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:text-sky-400 hover:bg-sky-500/10 transition-all duration-300"
                                >
                                    <Icon className="w-4 h-4" />
                                    <span className="font-medium">{item.name}</span>
                                </motion.a>
                            );
                        })}
                    </div>
                </motion.div>
            </div>

            {/* Animated border */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent"
            />
        </motion.header>
    );
}
