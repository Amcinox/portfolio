"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

interface SectionsContainerProps {
    children: React.ReactNode;
}

export default function SectionsContainer({ children }: SectionsContainerProps) {
    const { scrollYProgress } = useScroll()
    const yRange = useTransform(scrollYProgress, [0, 1], [0, 100])
    return (
        <motion.main style={{ y: yRange }} >
            {children}
        </motion.main>
    )
}
