"use client"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import config from "@/config"
import { Review } from "@/types"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const ReviewCard = ({ name, role, content, avatar }: Review) => (
    <motion.div
        className="flex-shrink-0 w-full md:w-96 mx-4"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
    >
        <Card className="h-full bg-gray-800 border-gray-700">
            <CardContent className="p-6 flex flex-col h-full">
                <p className="text-gray-300 italic mb-4 flex-grow">{content}</p>
                <div className="flex items-center">

                    <Avatar className="mr-4">
                        <AvatarImage src={avatar} />
                        <AvatarFallback className="bg-red-600 text-white">{name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <h3 className="text-lg font-semibold text-white">{name}</h3>
                        <p className="text-sm text-gray-400">{role}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    </motion.div>
)

export default function ReviewsSection() {
    const { reviews } = config
    return (
        <section id="reviews" className="py-20 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl text-center mb-12">
                        Client Reviews
                    </h2>
                    <div className="relative overflow-hidden"


                        style={{
                            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                        }}
                    >
                        <motion.div
                            className="flex"
                            animate={{ x: [0, -100 * reviews.length + 100] }}
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
        </section>
    )
}
