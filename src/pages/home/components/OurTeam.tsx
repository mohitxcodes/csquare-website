import { motion, type Variants } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Users } from "lucide-react";

interface TeamMember {
    id: number;
    name: string;
    role: string;
    department: string;
    image: string;
    bio: string;
    skills: string[];
    social: {
        github?: string;
        linkedin?: string;
        twitter?: string;
        email?: string;
    };
}

export default function OurTeam() {
    const teamMembers: TeamMember[] = [
        {
            id: 1,
            name: "Dr. Sarah Chen",
            role: "Faculty Advisor",
            department: "Computer Science & Engineering",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            bio: "Leading researcher in AI and machine learning with over 15 years of experience in academia and industry.",
            skills: ["AI/ML", "Research", "Leadership", "Python", "TensorFlow"],
            social: {
                linkedin: "#",
                email: "sarah.chen@cu.ac.in"
            }
        },
        {
            id: 2,
            name: "Arjun Sharma",
            role: "President",
            department: "Computer Science & Engineering",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            bio: "Full-stack developer and tech enthusiast passionate about building scalable web applications and leading hackathons.",
            skills: ["React", "Node.js", "TypeScript", "AWS", "Leadership"],
            social: {
                github: "#",
                linkedin: "#",
                twitter: "#"
            }
        },
        {
            id: 3,
            name: "Priya Patel",
            role: "Vice President",
            department: "Information Technology",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            bio: "Mobile app developer and UI/UX designer with expertise in Flutter and React Native ecosystems.",
            skills: ["Flutter", "React Native", "UI/UX", "Firebase", "Design"],
            social: {
                github: "#",
                linkedin: "#",
                email: "priya.patel@cu.ac.in"
            }
        },
        {
            id: 4,
            name: "Rohit Kumar",
            role: "Technical Lead",
            department: "Computer Science & Engineering",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            bio: "DevOps engineer and cloud architect specializing in scalable infrastructure and CI/CD pipelines.",
            skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"],
            social: {
                github: "#",
                linkedin: "#"
            }
        },
        {
            id: 5,
            name: "Ananya Singh",
            role: "Design Lead",
            department: "Computer Applications",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            bio: "Creative designer and frontend developer focused on creating beautiful and accessible user experiences.",
            skills: ["Figma", "Adobe XD", "CSS", "JavaScript", "Accessibility"],
            social: {
                linkedin: "#",
                twitter: "#",
                email: "ananya.singh@cu.ac.in"
            }
        },
        {
            id: 6,
            name: "Vikram Mehta",
            role: "Competitive Programming Lead",
            department: "Mathematics & Computing",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            bio: "Competitive programmer and algorithm enthusiast with multiple ICPC and Codeforces achievements.",
            skills: ["C++", "Algorithms", "Data Structures", "Problem Solving", "Python"],
            social: {
                github: "#",
                linkedin: "#"
            }
        },
        {
            id: 7,
            name: "Kavya Reddy",
            role: "Marketing & Outreach",
            department: "Business Administration",
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            bio: "Digital marketing specialist and community manager helping CSquare reach wider audiences and build partnerships.",
            skills: ["Digital Marketing", "Content Creation", "Social Media", "SEO", "Analytics"],
            social: {
                linkedin: "#",
                twitter: "#",
                email: "kavya.reddy@cu.ac.in"
            }
        },
        {
            id: 8,
            name: "Aditya Verma",
            role: "AI/ML Research Lead",
            department: "Computer Science & Engineering",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            bio: "AI researcher working on computer vision and natural language processing applications for social good.",
            skills: ["Computer Vision", "NLP", "PyTorch", "OpenCV", "Research"],
            social: {
                github: "#",
                linkedin: "#",
                email: "aditya.verma@cu.ac.in"
            }
        }
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

    return (
        <motion.div
            className="relative min-h-screen py-0 overflow-hidden"
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

                    <h2 className="text-5xl md:text-6xl font-black mb-6">
                        <span className="bg-gradient-to-r from-white via-sky-200 to-cyan-200 bg-clip-text text-transparent">
                            The Minds Behind
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            CSquare Club
                        </span>
                    </h2>

                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Meet the passionate individuals who drive innovation, foster collaboration, and shape the future of technology at Chandigarh University.
                    </p>
                </motion.div>

                {/* Marquee Team Members */}
                <motion.div
                    variants={itemVariants}
                    className="relative overflow-hidden"
                >
                    {/* Fade Effects */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none" />

                    <div className="flex pl-20 pr-80 gap-8 animate-marquee-bidirectional">
                        {/* First set of team members */}
                        {teamMembers.map((member) => (
                            <motion.div
                                key={`first-${member.id}`}
                                variants={itemVariants}
                                className="flex-shrink-0 w-80 h-48 p-6 rounded-2xl bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-sky-500/10 backdrop-blur-sm hover:border-sky-400/30 transition-all duration-300 group"
                            >
                                {/* Member Image */}
                                <div className="flex items-center gap-4 h-full">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-sky-500/20 to-transparent" />
                                    </div>

                                    {/* Member Info */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-sky-300 transition-colors truncate">
                                            {member.name}
                                        </h3>
                                        <p className="text-sky-400 text-sm font-medium mb-1">{member.role}</p>
                                        <p className="text-gray-400 text-xs mb-2 truncate">{member.department}</p>

                                        {/* Skills */}
                                        <div className="flex flex-wrap gap-1">
                                            {member.skills.slice(0, 3).map((skill, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 text-xs bg-sky-500/20 text-sky-300 rounded-full"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Social Links */}
                                    <div className="flex flex-col gap-2">
                                        {member.social.github && (
                                            <motion.a
                                                href={member.social.github}
                                                whileHover={{ scale: 1.1, color: "#60a5fa" }}
                                                className="text-gray-400 hover:text-sky-400 transition-colors"
                                            >
                                                <Github className="w-4 h-4" />
                                            </motion.a>
                                        )}
                                        {member.social.linkedin && (
                                            <motion.a
                                                href={member.social.linkedin}
                                                whileHover={{ scale: 1.1, color: "#0ea5e9" }}
                                                className="text-gray-400 hover:text-sky-400 transition-colors"
                                            >
                                                <Linkedin className="w-4 h-4" />
                                            </motion.a>
                                        )}
                                        {member.social.email && (
                                            <motion.a
                                                href={`mailto:${member.social.email}`}
                                                whileHover={{ scale: 1.1, color: "#06b6d4" }}
                                                className="text-gray-400 hover:text-sky-400 transition-colors"
                                            >
                                                <Mail className="w-4 h-4" />
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Duplicate set for seamless loop */}
                        {teamMembers.map((member) => (
                            <motion.div
                                key={`second-${member.id}`}
                                variants={itemVariants}
                                className="flex-shrink-0 w-80 h-48 p-6 rounded-2xl bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-sky-500/10 backdrop-blur-sm hover:border-sky-400/30 transition-all duration-300 group"
                            >
                                {/* Member Image */}
                                <div className="flex items-center gap-4 h-full">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-sky-500/20 to-transparent" />
                                    </div>

                                    {/* Member Info */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-sky-300 transition-colors truncate">
                                            {member.name}
                                        </h3>
                                        <p className="text-sky-400 text-sm font-medium mb-1">{member.role}</p>
                                        <p className="text-gray-400 text-xs mb-2 truncate">{member.department}</p>

                                        {/* Skills */}
                                        <div className="flex flex-wrap gap-1">
                                            {member.skills.slice(0, 3).map((skill, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 text-xs bg-sky-500/20 text-sky-300 rounded-full"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Social Links */}
                                    <div className="flex flex-col gap-2">
                                        {member.social.github && (
                                            <motion.a
                                                href={member.social.github}
                                                whileHover={{ scale: 1.1, color: "#60a5fa" }}
                                                className="text-gray-400 hover:text-sky-400 transition-colors"
                                            >
                                                <Github className="w-4 h-4" />
                                            </motion.a>
                                        )}
                                        {member.social.linkedin && (
                                            <motion.a
                                                href={member.social.linkedin}
                                                whileHover={{ scale: 1.1, color: "#0ea5e9" }}
                                                className="text-gray-400 hover:text-sky-400 transition-colors"
                                            >
                                                <Linkedin className="w-4 h-4" />
                                            </motion.a>
                                        )}
                                        {member.social.email && (
                                            <motion.a
                                                href={`mailto:${member.social.email}`}
                                                whileHover={{ scale: 1.1, color: "#06b6d4" }}
                                                className="text-gray-400 hover:text-sky-400 transition-colors"
                                            >
                                                <Mail className="w-4 h-4" />
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}