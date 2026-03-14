"use client"
import { AnimatePresence, motion, useInView } from "framer-motion"
import { useState, useRef } from "react"
import config from "@/config"
import { TechnologyType } from "@/types"

const tabLabels: Record<string, string> = {
    frontend: 'フロント',
    backend: 'バック',
    devops: '運用',
}

const TechCard = ({ icon, name, index }: { icon: React.ReactNode, name: string, index: number }) => (
    <motion.div
        className="holo-card glass-panel rounded-xl p-6 flex flex-col items-center justify-center group cursor-default"
        whileHover={{ y: -8, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        layout
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.9 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
    >
        <div className="text-4xl mb-3 text-sakura/70 group-hover:text-sakura transition-colors duration-300 drop-shadow-[0_0_8px_rgba(255,183,197,0.3)]">
            {icon}
        </div>
        <h3 className="text-xs font-medium text-beskar/70 tracking-wider uppercase group-hover:text-beskar transition-colors">
            {name}
        </h3>
    </motion.div>
)

export default function TechnologiesSection() {
    const [activeTab, setActiveTab] = useState<TechnologyType>(TechnologyType.frontend)
    const { technologies } = config
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    return (
        <section id="technologies" className="relative py-24 bg-deep-space overflow-hidden" ref={sectionRef}>
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,195,247,0.05)_0%,transparent_60%)]" />
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: 'repeating-conic-gradient(rgba(255,183,197,0.1) 0% 25%, transparent 0% 50%)',
                backgroundSize: '60px 60px'
            }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    {/* Section header */}
                    <div className="text-center mb-16">
                        <span className="text-saber-blue/40 text-xs tracking-[0.5em] uppercase">技術スタック</span>
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-beskar mt-2 star-wars-heading">
                            Technologies
                        </h2>
                        <div className="mt-4 mx-auto w-24 h-[2px] bg-gradient-to-r from-saber-blue to-sakura" />
                    </div>

                    {/* Tab buttons */}
                    <div className="flex justify-center mb-12 gap-2">
                        {Object.keys(technologies).map((category) => {
                            const isActive = activeTab === category
                            return (
                                <motion.button
                                    key={category}
                                    className={`relative px-6 py-3 rounded-lg text-sm font-medium tracking-wider uppercase transition-all duration-300 ${isActive
                                            ? 'bg-imperial-red/20 text-sakura border border-imperial-red/40 shadow-saber-red'
                                            : 'glass-panel-light text-beskar/60 hover:text-beskar hover:border-sakura/20'
                                        }`}
                                    onClick={() => setActiveTab(category as TechnologyType)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="block text-[10px] opacity-50 mb-0.5">{tabLabels[category]}</span>
                                    {category}
                                    {isActive && (
                                        <motion.div
                                            layoutId="tech-tab-indicator"
                                            className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-8 h-[2px] bg-imperial-red rounded-full"
                                        />
                                    )}
                                </motion.button>
                            )
                        })}
                    </div>

                    {/* Tech grid */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6"
                        >
                            {technologies[activeTab].map((tech, index) => (
                                <TechCard key={tech.name} icon={tech.icon} name={tech.name} index={index} />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 section-divider" />
        </section>
    )
}