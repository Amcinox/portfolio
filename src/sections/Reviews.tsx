"use client"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import config from "@/config"
import { Review } from "@/types"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRef } from "react"

const ReviewCard = ({ name, role, content, avatar }: Review) => (
    <motion.div
        className="flex-shrink-0 w-full md:w-[400px] mx-3"
        whileHover={{ scale: 1.02, y: -3 }}
        whileTap={{ scale: 0.98 }}
    >
        <Card className="h-full holo-card glass-panel rounded-xl border-saber-blue/10">
            <CardContent className="p-8 flex flex-col h-full relative z-10">
                {/* Quote mark */}
                <div className="text-6xl text-imperial-red/20 font-serif leading-none mb-2">“</div>
                <p className="text-beskar/70 italic mb-6 flex-grow leading-relaxed text-sm">{content}</p>
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                    <Avatar className="w-12 h-12 ring-2 ring-imperial-red/20">
                        <AvatarImage src={avatar} />
                        <AvatarFallback className="bg-imperial-red/20 text-sakura font-bold">
                            {name.charAt(0)}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <h3 className="text-sm font-semibold text-beskar tracking-wide">{name}</h3>
                        <p className="text-xs text-sakura/50">{role}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    </motion.div>
)

export default function ReviewsSection() {
    const { reviews } = config
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    return (
        <section id="reviews" className="relative py-24 bg-deep-space overflow-hidden" ref={sectionRef}>
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(79,195,247,0.05)_0%,transparent_60%)]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    {/* Section header */}
                    <div className="text-center mb-16">
                        <span className="text-gold/40 text-xs tracking-[0.5em] uppercase">お客様の声</span>
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-beskar mt-2 star-wars-heading">
                            Client Reviews
                        </h2>
                        <div className="mt-4 mx-auto w-24 h-[2px] bg-gradient-to-r from-gold to-sakura" />
                    </div>

                    <div
                        className="relative overflow-hidden"
                        style={{
                            maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)'
                        }}
                    >
                        <motion.div
                            className="flex py-4 justify-center"
                            animate={reviews.length > 1 ? { x: [0, -100 * reviews.length + 100] } : {}}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    duration: 30,
                                    ease: "linear"
                                }
                            }}
                        >
                            {reviews.map((review, index) => (
                                <ReviewCard key={`${review.name}-${index}`} {...review} />
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 section-divider" />
        </section>
    )
}
