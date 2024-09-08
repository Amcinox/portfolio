"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import config from '@/config'
export default function AboutSection() {
    const { description, name, avatar } = config.about
    return (
        <section id="about" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl text-center mb-8">
                        About Me
                    </h2>
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <Image
                                src={avatar}
                                alt={name + " profile picture"}
                                width={400}
                                height={400}
                                className="rounded-full border-4 border-red-500"
                            />
                        </div>
                        <div className="md:w-1/2">
                            {description.split("\n").map((desc, index) => (
                                <p key={index} className="text-lg text-gray-300 mb-4">
                                    {desc}
                                </p>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}