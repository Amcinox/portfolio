"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaUser, FaEnvelope, FaHeading, FaComment, FaPaperPlane, FaCheck, FaTriangleExclamation } from "react-icons/fa6"
import Link from "next/link"

type FormStatus = "idle" | "sending" | "success" | "error"

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
    const [status, setStatus] = useState<FormStatus>("idle")
    const [errorMsg, setErrorMsg] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("sending")
        setErrorMsg("")

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            })
            const data = await res.json()
            if (!res.ok) throw new Error(data.error || "Something went wrong")
            setStatus("success")
            setForm({ name: "", email: "", subject: "", message: "" })
        } catch (err: unknown) {
            setStatus("error")
            setErrorMsg(err instanceof Error ? err.message : "Failed to send message")
        }
    }

    const inputClass =
        "w-full bg-void/60 border border-beskar/10 rounded-lg px-4 py-3 pl-11 text-beskar placeholder:text-beskar/30 focus:outline-none focus:border-imperial-red/50 focus:ring-1 focus:ring-imperial-red/30 transition-all duration-300"

    return (
        <section className="min-h-screen pt-28 pb-20 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-imperial-red/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-sakura/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-saber-blue/3 rounded-full blur-3xl" />
            </div>

            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <p className="text-xs tracking-[0.3em] uppercase text-imperial-red/60 mb-2 font-light">連絡先</p>
                    <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-sakura via-imperial-red to-sakura bg-clip-text text-transparent mb-4">
                        Get In Touch
                    </h1>
                    <p className="text-beskar/50 max-w-md mx-auto">
                        Have a project in mind or want to collaborate? Send me a message and I&apos;ll get back to you as soon as possible.
                    </p>

                    {/* Decorative line */}
                    <div className="flex items-center justify-center gap-3 mt-6">
                        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-imperial-red/40" />
                        <div className="w-1.5 h-1.5 rotate-45 bg-imperial-red/60" />
                        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-imperial-red/40" />
                    </div>
                </motion.div>

                {/* Form Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="glass-panel rounded-2xl p-8 sm:p-10 relative overflow-hidden"
                >
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-imperial-red/20 rounded-tl-2xl" />
                    <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-imperial-red/20 rounded-tr-2xl" />
                    <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-imperial-red/20 rounded-bl-2xl" />
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-imperial-red/20 rounded-br-2xl" />

                    <AnimatePresence mode="wait">
                        {status === "success" ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="text-center py-16"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", delay: 0.2 }}
                                    className="w-16 h-16 mx-auto mb-6 rounded-full bg-grogu-green/20 border border-grogu-green/30 flex items-center justify-center"
                                >
                                    <FaCheck className="text-2xl text-grogu-green" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-beskar mb-2">Message Sent!</h3>
                                <p className="text-beskar/50 mb-2">ありがとうございます</p>
                                <p className="text-beskar/40 text-sm mb-8">
                                    Thank you for reaching out. I&apos;ll get back to you soon.
                                </p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="text-sm text-imperial-red hover:text-sakura transition-colors underline underline-offset-4"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                {/* Name */}
                                <div className="relative">
                                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-beskar/20 text-sm" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        required
                                        className={inputClass}
                                    />
                                </div>

                                {/* Email */}
                                <div className="relative">
                                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-beskar/20 text-sm" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                        required
                                        className={inputClass}
                                    />
                                </div>

                                {/* Subject */}
                                <div className="relative">
                                    <FaHeading className="absolute left-4 top-1/2 -translate-y-1/2 text-beskar/20 text-sm" />
                                    <input
                                        type="text"
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        placeholder="Subject"
                                        required
                                        className={inputClass}
                                    />
                                </div>

                                {/* Message */}
                                <div className="relative">
                                    <FaComment className="absolute left-4 top-4 text-beskar/20 text-sm" />
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Your message..."
                                        required
                                        rows={6}
                                        className={`${inputClass} resize-none`}
                                    />
                                </div>

                                {/* Error message */}
                                <AnimatePresence>
                                    {status === "error" && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3"
                                        >
                                            <FaTriangleExclamation />
                                            <span>{errorMsg}</span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Submit */}
                                <motion.button
                                    type="submit"
                                    disabled={status === "sending"}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-3.5 rounded-lg bg-gradient-to-r from-imperial-red to-crimson text-white font-semibold tracking-wide flex items-center justify-center gap-2 hover:shadow-saber-red transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === "sending" ? (
                                        <>
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                            />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane className="text-sm" />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>

                                {/* Back link */}
                                <p className="text-center text-beskar/30 text-xs pt-2">
                                    or go{" "}
                                    <Link
                                        href="/"
                                        className="text-imperial-red/60 hover:text-sakura transition-colors underline underline-offset-2"
                                    >
                                        back home
                                    </Link>
                                </p>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    )
}
