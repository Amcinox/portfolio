"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import config from "@/config"
import { Project } from "@/types"
import { useRef } from "react"

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    return (
        <motion.div
            className="flex-shrink-0 w-80 mx-3"
            whileHover={{ scale: 1.03, y: -5 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link href={`/projects/${project.slug}`} passHref>
                <Card className="h-full holo-card glass-panel rounded-xl border-imperial-red/10 overflow-hidden cursor-pointer group">
                    <CardContent className="p-6 flex flex-col h-full justify-center relative z-10">
                        <div className="flex justify-center items-center h-20 mb-5">
                            <div className="relative">
                                <div className="absolute -inset-3 bg-sakura/5 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                                <Image
                                    src={project.logo}
                                    alt={`${project.name} logo`}
                                    width={56}
                                    height={56}
                                    className="rounded-lg relative z-10"
                                />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-beskar mb-2 tracking-wide group-hover:text-sakura transition-colors">
                            {project.name}
                        </h3>
                        <p className="text-sm text-beskar/50 mb-5 leading-relaxed line-clamp-3">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                            {project.tags.map((tag, i) => (
                                <Badge
                                    key={i}
                                    variant="secondary"
                                    className="bg-imperial-red/10 text-sakura/80 border border-imperial-red/20 text-[10px] tracking-wider uppercase hover:bg-imperial-red/20 transition-colors"
                                >
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
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    return (
        <section id="projects" className="relative py-24 bg-void overflow-hidden" ref={sectionRef}>
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(192,57,43,0.08)_0%,transparent_60%)]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    {/* Section header */}
                    <div className="text-center mb-16">
                        <span className="text-imperial-red/40 text-xs tracking-[0.5em] uppercase">作品集</span>
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-beskar mt-2 star-wars-heading">
                            Featured Projects
                        </h2>
                        <div className="mt-4 mx-auto w-24 h-[2px] bg-gradient-to-r from-imperial-red to-gold" />
                    </div>

                    {/* Scrolling project cards */}
                    <div
                        className="relative overflow-hidden"
                        style={{
                            maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)'
                        }}
                    >
                        <motion.div
                            className="flex py-8"
                            animate={{ x: [0, -100 * projects.length + 100] }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    duration: 35,
                                    ease: "linear"
                                }
                            }}
                        >
                            {[...projects, ...projects].map((project, index) => (
                                <ProjectCard
                                    key={`${project.slug}-${index}`}
                                    project={project}
                                    index={index}
                                />
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 section-divider" />
        </section>
    )
}