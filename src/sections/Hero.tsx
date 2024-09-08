"use client"
import SakuraParticleField from "@/components/common/SakuraParticleField";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import config from "@/config";
const HeroSection = () => {
    const { name, title, info } = config.about
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-indigo-900 opacity-80"></div>
                <div className="absolute inset-0 bg-[url('/japanese-pattern.svg')] bg-repeat opacity-10"></div>
            </div>
            <SakuraParticleField />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <motion.h1
                        className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600 mb-4"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    >

                        {name}

                    </motion.h1>
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 mb-6"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        {title}
                    </motion.h2>
                    <p className="mt-3 max-w-md mx-auto text-xl text-gray-300 sm:text-2xl md:mt-5 md:max-w-3xl">
                        {info}
                    </p>
                    <div className="mt-10 flex justify-center gap-4">
                        <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                            <Link href="#contact">Get in Touch</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="text-red-400 border-red-400 hover:bg-red-400 hover:text-white">
                            <Link href="#projects">View Projects</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <a href="#about" className="text-white">
                    <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </a>
            </motion.div>
        </section>
    )
}

export default HeroSection