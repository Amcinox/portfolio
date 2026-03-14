"use client"
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import config from '@/config'
import { useRef } from 'react'

export default function AboutSection() {
    const { description, name, avatar } = config.about
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    return (
        <section id="about" className="relative py-24 bg-void overflow-hidden" ref={sectionRef}>
            {/* Section divider top */}
            <div className="section-divider" />

            {/* Background decoration */}
            <div className="absolute inset-0 kanji-bg" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-imperial-red/5 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-sakura/40 text-xs tracking-[0.5em] uppercase">自己紹介</span>
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-beskar mt-2 star-wars-heading">
                        About Me
                    </h2>
                    <div className="mt-4 mx-auto w-24 h-[2px] bg-gradient-to-r from-imperial-red to-saber-blue" />
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Avatar */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-5/12 flex justify-center"
                    >
                        <div className="relative">
                            {/* Glow ring */}
                            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-imperial-red/20 via-transparent to-saber-blue/20 blur-xl animate-pulse-glow" />

                            {/* Decorative ring */}
                            <motion.div
                                className="absolute -inset-3 rounded-full border border-imperial-red/20"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-imperial-red rounded-full shadow-saber-red" />
                            </motion.div>

                            <Image
                                src={avatar}
                                alt={name + " profile picture"}
                                width={320}
                                height={320}
                                className="rounded-full border-2 border-imperial-red/40 shadow-imperial relative z-10"
                            />
                        </div>
                    </motion.div>

                    {/* Description */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:w-7/12"
                    >
                        <div className="glass-panel rounded-xl p-8 saber-border-left">
                            {description.split("\n").map((desc, index) => (
                                <motion.p
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.6 + index * 0.15, duration: 0.6 }}
                                    className="text-beskar/80 leading-relaxed mb-4 last:mb-0"
                                >
                                    {desc}
                                </motion.p>
                            ))}
                        </div>

                        {/* Stats row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 1, duration: 0.6 }}
                            className="flex gap-8 mt-8"
                        >
                            {[
                                { value: '9+', label: 'Years', jp: '年' },
                                { value: '🇲🇦', label: 'Morocco', jp: 'モロッコ' },
                                { value: '🇯🇵', label: 'Japan', jp: '日本' },
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-2xl font-bold text-sakura">{stat.value}</div>
                                    <div className="text-xs text-beskar/50 tracking-wider uppercase">{stat.label}</div>
                                    <div className="text-[10px] text-sakura/30">{stat.jp}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Section divider bottom */}
            <div className="absolute bottom-0 left-0 right-0 section-divider" />
        </section>
    )
}