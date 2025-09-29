import { motion, type Variants } from "framer-motion";
import { Calendar, MapPin, Clock, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Event {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    type: string;
    attendees: number;
    image: string;
}

export default function Events() {
    const events: Event[] = [
        {
            id: 1,
            title: "Tech Talk: AI & Machine Learning",
            date: "2024-02-15",
            time: "2:00 PM",
            location: "Main Auditorium",
            description: "Join us for an insightful discussion on the latest trends in AI and machine learning, featuring industry experts.",
            type: "Workshop",
            attendees: 150,
            image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            title: "Hackathon 2024",
            date: "2024-03-20",
            time: "9:00 AM",
            location: "Tech Hub",
            description: "48-hour coding challenge to build innovative solutions for real-world problems.",
            type: "Competition",
            attendees: 200,
            image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "Web Development Bootcamp",
            date: "2024-04-10",
            time: "10:00 AM",
            location: "Computer Lab 3",
            description: "Intensive 3-day workshop covering modern web development technologies and best practices.",
            type: "Workshop",
            attendees: 80,
            image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
    ];

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

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextEvent = () => {
        setCurrentIndex((prev) => (prev + 1) % events.length);
    };

    const prevEvent = () => {
        setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
    };

    const getCardPosition = (eventIndex: number) => {
        const relativeIndex = (eventIndex - currentIndex + events.length) % events.length;

        if (relativeIndex === 0) {
            // Center card - full opacity, normal size, center position
            return { x: 0, y: 0, scale: 1, zIndex: 3, opacity: 1 };
        } else if (relativeIndex === 1) {
            // Right card - reduced opacity, same size, right position with gap
            return { x: 350, y: 30, scale: 1, zIndex: 2, opacity: 0.6 };
        } else if (relativeIndex === events.length - 1) {
            // Left card - reduced opacity, same size, left position with gap
            return { x: -350, y: 30, scale: 1, zIndex: 1, opacity: 0.6 };
        } else {
            // Hidden cards - zero opacity, zero size
            return { x: 0, y: 0, scale: 0, zIndex: 0, opacity: 0 };
        }
    };

    return (
        <motion.div
            className="relative min-h-screen py-20 overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Background Effects */}
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    variants={itemVariants}
                    className="text-center mb-16"
                >

                    <h2 className="text-5xl flex items-center justify-center gap-2 md:text-6xl font-black mb-6">
                        <span className="bg-gradient-to-r from-white via-sky-200 to-cyan-200 bg-clip-text text-transparent">
                            Join Our
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            Amazing Events
                        </span>
                    </h2>

                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Discover exciting opportunities to learn, network, and grow with our vibrant tech community.
                        From workshops to hackathons, there's something for everyone.
                    </p>
                </motion.div>

                {/* Events Carousel with Navigation */}
                <div className="relative">
                    <motion.div
                        variants={itemVariants}
                        className="relative flex justify-center items-center"
                        style={{ height: '600px' }}
                    >
                        {events.map((event, index) => {
                            const position = getCardPosition(index);

                            return (
                                <motion.div
                                    key={event.id}
                                    variants={itemVariants}
                                    animate={{
                                        x: position.x,
                                        y: position.y,
                                        scale: position.scale,
                                        opacity: position.opacity,
                                        zIndex: position.zIndex,
                                    }}
                                    transition={{
                                        type: "spring",
                                        damping: 18,
                                        stiffness: 150,
                                        mass: 0.6
                                    }}
                                    className="group absolute w-80 px-4 py-6 rounded-2xl bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-sky-500/10 backdrop-blur-sm hover:border-sky-400/30 transition-all duration-300"
                                >
                                    {/* Event Image */}
                                    <div className="relative h-48 mb-6 overflow-hidden rounded-xl">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                                        {/* Event Type Badge */}
                                        <div className="absolute top-4 right-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${event.type === 'Workshop'
                                                ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white'
                                                : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                                                }`}>
                                                {event.type}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Event Content */}
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                                                {event.title}
                                            </h3>
                                            <p className="text-gray-400 leading-relaxed text-sm">
                                                {event.description}
                                            </p>
                                        </div>

                                        {/* Event Details */}
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-gray-300 text-sm">
                                                <Calendar className="w-4 h-4 text-sky-400" />
                                                <span>{new Date(event.date).toLocaleDateString('en-US', {
                                                    weekday: 'short',
                                                    month: 'short',
                                                    day: 'numeric'
                                                })}</span>
                                            </div>

                                            <div className="flex items-center gap-2 text-gray-300 text-sm">
                                                <Clock className="w-4 h-4 text-sky-400" />
                                                <span>{event.time}</span>
                                            </div>

                                            <div className="flex items-center gap-2 text-gray-300 text-sm">
                                                <MapPin className="w-4 h-4 text-sky-400" />
                                                <span>{event.location}</span>
                                            </div>

                                            <div className="flex items-center gap-2 text-gray-300 text-sm">
                                                <Users className="w-4 h-4 text-sky-400" />
                                                <span>{event.attendees} attending</span>
                                            </div>
                                        </div>

                                        {/* CTA Button */}
                                        <motion.button
                                            whileHover={{
                                                scale: 1.05,
                                                backgroundColor: "rgb(14 165 233)"
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-lg text-sm transition-all duration-300"
                                        >
                                            Register Now
                                        </motion.button>
                                    </div>

                                    {/* Hover Effect Overlay */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Navigation Buttons */}
                    <motion.button
                        variants={itemVariants}
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(56, 189, 248, 0.2)" }}
                        whileTap={{ scale: 0.9 }}
                        onClick={prevEvent}
                        className="absolute left-[-30px] top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-800/50 border border-sky-500/30 backdrop-blur-sm text-sky-400 hover:text-sky-300 transition-all duration-300 z-10 cursor-pointer"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </motion.button>

                    <motion.button
                        variants={itemVariants}
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(56, 189, 248, 0.2)" }}
                        whileTap={{ scale: 0.9 }}
                        onClick={nextEvent}
                        className="absolute right-[-30px] top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-800/50 border border-sky-500/30 backdrop-blur-sm text-sky-400 hover:text-sky-300 transition-all duration-300 z-10 cursor-pointer"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </motion.button>
                </div>

                {/* View All Events Button */}
                <motion.div
                    variants={itemVariants}
                    className="text-center mt-16"
                >
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 20px 40px rgba(56, 189, 248, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-5 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-sky-500/25"
                    >
                        View All Events
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
}