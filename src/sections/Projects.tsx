"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import config from "@/config"
import { Project } from "@/types"
import _ from 'lodash';




const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <motion.div
            className="flex-shrink-0 w-72 mx-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Link href={`/projects/${project.slug}`} passHref className="flex-shrink-0 w-72 mx-4">
                <Card className="h-full bg-gray-800 border-gray-700 overflow-hidden relative cursor-pointer hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-4 flex flex-col h-full justify-center">
                        <div className="flex  justify-center items-center h-20 mb-4 relative">
                            <Image
                                src={project.logo}
                                alt={`${project.name} logo`}
                                width={60}
                                height={60}
                                className="rounded-lg"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
                        <p className="text-gray-400 mb-4 flex-wrap flex ">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, index) => (
                                <Badge key={index} variant="secondary" className="bg-red-600 text-white">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </Link>
        </motion.div>
    )
}
export default function ProjectsSection() {
    const { projects } = config
    return (
        <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/japanese-wave.svg')] bg-repeat opacity-5"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div

                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}

                >
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl text-center mb-12">
                        Featured Projects
                    </h2>
                    <div

                        className="relative overflow-hidden"
                        style={{
                            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                        }}
                    >
                        <motion.div
                            className="flex py-12"
                            animate={{ x: [0, -100 * projects.length + 100] }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    duration: 30,
                                    ease: "linear"
                                }
                            }}
                        >
                            {projects.map((project, index) => (
                                <ProjectCard
                                    key={`${project.slug}-${index}`}
                                    project={project}
                                />
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}