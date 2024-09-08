"use client"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import config from "@/config"
import { TechnologyType } from "@/types"

const TechCard = ({ icon, name }: { icon: React.ReactNode, name: string }) => (
    <motion.div
        className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-red-500"
        whileHover={{ y: -5, rotateY: 15, borderColor: "#FFD700" }}
        whileTap={{ scale: 0.95 }}
        layout
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
    >
        <div className="text-5xl mb-4 text-red-400">{icon}</div>
        <h3 className="text-sm font-semibold text-gray-200">{name}</h3>
    </motion.div>
)



export default function TechnologiesSection() {
    const [activeTab, setActiveTab] = useState<TechnologyType>(TechnologyType.frontend)
    const { technologies } = config

    return (
        <section id="technologies" className="py-20 bg-gray-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/japanese-wave.svg')] bg-repeat opacity-5"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl text-center mb-12">
                        Technologies I Work With
                    </h2>
                    <div className="flex justify-center mb-8">
                        {Object.keys(technologies).map((category) => (
                            <motion.button
                                key={category}
                                className={`px-4 py-2 mx-2 rounded-lg w-40 text-sm font-medium transition-colors duration-200 ${activeTab === category
                                    ? 'bg-red-600 text-white'
                                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                    }`}
                                onClick={() => setActiveTab(category as TechnologyType)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </motion.button>
                        ))}
                    </div>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
                        >
                            {technologies[activeTab].map((tech, index) => (
                                <TechCard key={tech.name} icon={tech.icon} name={tech.name} />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    )
}