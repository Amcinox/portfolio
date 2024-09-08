"use client"
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaFacebook, FaGlobe, FaTwitter } from "react-icons/fa6";
import config from "@/config";
import { ContactType } from "@/types";
import { IconType } from "react-icons/lib";
import SakuraParticleField from "@/components/common/SakuraParticleField";

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
    return (
        <section id="contact" className="relative py-20 bg-gradient-to-r from-red-900 to-indigo-900 text-white overflow-hidden">
            <div className="absolute inset-0 z-0">
                <SakuraParticleField />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-extrabold sm:text-4xl mb-8">Get in Touch</h2>
                    <p className="text-xl mb-8">I&apos;m always open to new opportunities and collaborations.</p>
                    <div className="flex justify-center space-x-6">
                        {
                            Object.entries(contact).map(([key, value]) => {
                                const Icon = Icons[ContactType[key as ContactType]];
                                if (!Icon) return null;
                                return (
                                    <motion.a
                                        key={key}
                                        href={value}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-gray-200 transition-colors duration-300"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Icon className="text-4xl" />
                                    </motion.a>
                                )
                            })
                        }

                    </div>
                </motion.div>
            </div>

        </section>

    )
}
