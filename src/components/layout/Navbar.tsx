"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('home')
    const sections = ['home', 'about', 'technologies', 'projects', 'reviews', 'contact']
    const pathname = usePathname()

    const isHomePage = pathname === "/"

    useEffect(() => {
        const handleScroll = () => {
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
        <header className="bg-gray-900 bg-opacity-90 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/"><Image src="/torii-gate.svg" alt="Logo" width={40} height={40} /></Link>
                        <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            {sections.map((section) => (
                                <Link
                                    key={section}
                                    href={isHomePage ? `#${section}` : `/#${section}`}
                                    onClick={() => setActiveSection(section)}
                                    className={`${activeSection === section
                                        ? 'border-red-500 text-white'
                                        : 'border-transparent text-gray-300 hover:border-gray-300 hover:text-white'
                                        } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-300`}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}