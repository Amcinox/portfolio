"use client"
import { motion } from "framer-motion";
import React from "react";

interface SectionsContainerProps {
    children: React.ReactNode;
}

export default function SectionsContainer({ children }: SectionsContainerProps) {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
        >
            {children}
        </motion.main>
    )
}
