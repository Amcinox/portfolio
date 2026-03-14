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
            {/* Layered backgrounds */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-hero-gradient" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(192,57,43,0.15)_0%,transparent_70%)]" />
                {/* Japanese pattern overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,183,197,0.1) 50px, rgba(255,183,197,0.1) 51px),
                    repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,183,197,0.1) 50px, rgba(255,183,197,0.1) 51px)`
                }} />
            </div>

            <SakuraParticleField />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-center"
                >
                    {/* Japanese subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-sakura/60 text-sm tracking-[0.5em] uppercase mb-6 font-light"
                    >
                        フルスタック開発者 ・ Full Stack Developer
                    </motion.p>

                    <motion.h1
                        className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mb-4 holographic-text"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    >
                        {name}
                    </motion.h1>

                    <motion.div
                        className="flex items-center justify-center gap-4 mb-8"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-imperial-red" />
                        <motion.h2
                            className="text-xl sm:text-2xl md:text-3xl font-light text-beskar tracking-[0.1em]"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            {title}
                        </motion.h2>
                        <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-saber-blue" />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        className="max-w-2xl mx-auto text-lg text-beskar/70 leading-relaxed mb-12"
                    >
                        {info}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                        className="flex flex-col sm:flex-row justify-center gap-4"
                    >
                        <Button asChild size="lg" className="bg-imperial-red hover:bg-crimson shadow-saber-red transition-all duration-300 tracking-wider uppercase text-sm">
                            <Link href="#contact">Get in Touch</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="border-sakura/30 text-sakura hover:bg-sakura/10 hover:border-sakura/60 tracking-wider uppercase text-sm transition-all duration-300">
                            <Link href="#projects">View Projects</Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
                <span className="text-[10px] tracking-[0.3em] uppercase text-beskar/40">Scroll</span>
                <a href="#about" className="text-sakura/50 hover:text-sakura transition-colors">
                    <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </a>
            </motion.div>

            {/* Corner decorations */}
            <div className="absolute top-20 left-6 w-12 h-12 border-l border-t border-imperial-red/20" />
            <div className="absolute top-20 right-6 w-12 h-12 border-r border-t border-saber-blue/20" />
            <div className="absolute bottom-20 left-6 w-12 h-12 border-l border-b border-saber-blue/20" />
            <div className="absolute bottom-20 right-6 w-12 h-12 border-r border-b border-imperial-red/20" />
        </section>
    )
}

export default HeroSection