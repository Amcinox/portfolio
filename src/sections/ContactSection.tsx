"use client"
import { motion, useInView } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaFacebook, FaGlobe, FaTwitter } from "react-icons/fa6";
import config from "@/config";
import { ContactType } from "@/types";
import { IconType } from "react-icons/lib";
import SakuraParticleField from "@/components/common/SakuraParticleField";
import { useRef } from "react";

const Icons: Record<ContactType, IconType> = {
    [ContactType.github]: FaGithub,
    [ContactType.linkedin]: FaLinkedin,
    [ContactType.email]: FaEnvelope,
    [ContactType.instagram]: FaInstagram,
    [ContactType.youtube]: FaYoutube,
    [ContactType.facebook]: FaFacebook,
    [ContactType.url]: FaGlobe,
    [ContactType.x]: FaTwitter
}

export default function ContactSection() {
    const { contact } = config;
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    return (
        <section id="contact" className="relative py-24 overflow-hidden" ref={sectionRef}>
            {/* Background */}
            <div className="absolute inset-0 bg-hero-gradient" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(192,57,43,0.1)_0%,transparent_70%)]" />

            <div className="absolute inset-0 z-0">
                <SakuraParticleField />
            </div>

            {/* Corner decorations */}
            <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-imperial-red/20" />
            <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-saber-blue/20" />
            <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-saber-blue/20" />
            <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-imperial-red/20" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    {/* Section header */}
                    <span className="text-sakura/40 text-xs tracking-[0.5em] uppercase">連絡先</span>
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-beskar mt-2 mb-4 star-wars-heading">
                        Get in Touch
                    </h2>
                    <div className="mx-auto w-24 h-[2px] bg-gradient-to-r from-imperial-red to-sakura mb-8" />

                    <p className="text-lg text-beskar/60 mb-12 max-w-lg mx-auto leading-relaxed">
                        I&apos;m always open to new opportunities and collaborations.
                        <br />
                        <span className="text-sakura/40 text-sm">お気軽にご連絡ください</span>
                    </p>

                    {/* Social icons grid */}
                    <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
                        {Object.entries(contact).map(([key, value], i) => {
                            const Icon = Icons[ContactType[key as ContactType]];
                            if (!Icon) return null;
                            const color = getSocialMediaColor(ContactType[key as ContactType]);

                            return (
                                <motion.div
                                    key={key}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                                    className="flex justify-center"
                                >
                                    <motion.a
                                        href={value}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{
                                            scale: 1.3,
                                            rotate: 8,
                                            color,
                                            filter: `drop-shadow(0 0 12px ${color})`
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-3 rounded-xl glass-panel-light hover:border-white/20 transition-all duration-300"
                                    >
                                        <Icon className="text-3xl text-beskar/60" />
                                    </motion.a>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

const getSocialMediaColor = (type: ContactType) => {
    switch (type) {
        case ContactType.github:
            return "#b0b8c4";
        case ContactType.linkedin:
            return "#0077b5";
        case ContactType.email:
            return "#ffd700";
        case ContactType.instagram:
            return "#e4405f";
        case ContactType.youtube:
            return "#ff0000";
        case ContactType.facebook:
            return "#1877f2";
        case ContactType.url:
            return "#4fc3f7";
        case ContactType.x:
            return "#b0b8c4";
    }
}