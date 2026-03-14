"use client"
import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

const sectionLabels: Record<string, { en: string; jp: string }> = {
    home: { en: 'Home', jp: 'ホーム' },
    about: { en: 'About', jp: '紹介' },
    technologies: { en: 'Tech', jp: '技術' },
    projects: { en: 'Projects', jp: '作品' },
    reviews: { en: 'Reviews', jp: '評価' },
    contact: { en: 'Contact', jp: '連絡' },
}

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('home')
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const pathname = usePathname()

    const sections = useMemo(() => ['home', 'about', 'technologies', 'projects', 'reviews', 'contact'], [])

    const isHomePage = pathname === "/"

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
            const currentSection = sections.find(section => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 100 && rect.bottom > 100
                }
                return false
            })
            if (currentSection) {
                setActiveSection(currentSection)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [sections])

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? 'glass-panel shadow-lg shadow-imperial-red/5'
            : 'bg-transparent'
            }`}>
            {/* Top accent line */}
            <div className="h-[2px] bg-gradient-to-r from-transparent via-imperial-red to-transparent opacity-60" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <motion.div
                            className="flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {/* Torii gate icon */}
                            <span className="text-2xl drop-shadow-[0_0_8px_rgba(192,57,43,0.5)] group-hover:drop-shadow-[0_0_12px_rgba(255,183,197,0.6)] transition-all duration-300">⛩️</span>
                            {/* Name */}
                            <span className="text-xl font-extrabold tracking-[0.08em] bg-gradient-to-r from-sakura via-imperial-red to-sakura bg-[length:200%_auto] bg-clip-text text-transparent group-hover:animate-holographic transition-all duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                                Simo
                            </span>
                            <span className="hidden sm:block text-[10px] text-beskar/40 tracking-[0.3em] uppercase font-light">
                                侍
                            </span>
                        </motion.div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {sections.map((section) => {
                            const label = sectionLabels[section]
                            const isActive = activeSection === section
                            const isContactLink = section === 'contact'
                            const href = isContactLink
                                ? '/contact'
                                : isHomePage ? `#${section}` : `/#${section}`
                            return (
                                <Link
                                    key={section}
                                    href={href}
                                    onClick={() => !isContactLink && setActiveSection(section)}
                                    className="relative px-3 py-2 group"
                                >
                                    <motion.div
                                        className={`flex flex-col items-center transition-all duration-300 ${isActive && !isContactLink ? 'text-sakura' : 'text-beskar/70 hover:text-sakura/80'
                                            }`}
                                        whileHover={{ y: -2 }}
                                    >
                                        <span className="text-[10px] font-light tracking-wider opacity-50 group-hover:opacity-100 transition-opacity">
                                            {label.jp}
                                        </span>
                                        <span className="text-xs font-medium tracking-[0.15em] uppercase">
                                            {label.en}
                                        </span>
                                    </motion.div>
                                    {isActive && !isContactLink && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-imperial-red rounded-full shadow-[0_0_10px_rgba(192,57,43,0.5)]"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            )
                        })}
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden text-beskar hover:text-sakura transition-colors p-2"
                    >
                        <motion.div animate={{ rotate: mobileOpen ? 45 : 0 }} className="space-y-1.5">
                            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'translate-y-2 rotate-90' : ''}`} />
                            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? '-translate-y-2' : ''}`} />
                        </motion.div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-panel border-t border-imperial-red/20"
                    >
                        <nav className="px-4 py-4 space-y-2">
                            {sections.map((section, i) => {
                                const label = sectionLabels[section]
                                const isContactLink = section === 'contact'
                                const href = isContactLink
                                    ? '/contact'
                                    : isHomePage ? `#${section}` : `/#${section}`
                                return (
                                    <motion.div
                                        key={section}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <Link
                                            href={href}
                                            onClick={() => { if (!isContactLink) setActiveSection(section); setMobileOpen(false) }}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeSection === section && !isContactLink
                                                ? 'bg-imperial-red/10 text-sakura saber-border-left'
                                                : 'text-beskar/70 hover:bg-white/5 hover:text-sakura'
                                                }`}
                                        >
                                            <span className="text-xs opacity-50">{label.jp}</span>
                                            <span className="text-sm tracking-[0.15em] uppercase">{label.en}</span>
                                        </Link>
                                    </motion.div>
                                )
                            })}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}