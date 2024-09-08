"use client"
import React from "react";
import config from "@/config";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function TermsOfService() {
    const { siteMetadata } = config;

    return (
        <section className="py-20 bg-gray-900 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600 mb-8 text-center">
                        Terms of Service
                    </h1>
                    <Card className="bg-gray-800 border-red-500 border">
                        <CardContent className="text-gray-300 space-y-4 py-12">
                            <p>
                                By accessing and using this website ({siteMetadata.siteUrl}), you agree to comply with and be bound by the following terms and conditions. If you disagree with any part of these terms, please do not use the website.
                            </p>
                            <h2 className="text-2xl font-bold text-red-400">Use License</h2>
                            <p>
                                Permission is granted to temporarily view the materials (information or software) on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>modify or copy the materials;</li>
                                <li>use the materials for any commercial purpose or for any public display;</li>
                                <li>attempt to decompile or reverse engineer any software contained on the website;</li>
                                <li>remove any copyright or other proprietary notations from the materials; or</li>
                                <li>transfer the materials to another person or &ldquo;mirror&ldquo; the materials on any other server.</li>
                            </ul>
                            <h2 className="text-2xl font-bold text-red-400">Disclaimer</h2>
                            <p>
                                The materials on this website are provided on an &lsquo;as is&lsquo; basis. I make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                            </p>
                            <h2 className="text-2xl font-bold text-red-400">Limitations</h2>
                            <p>
                                In no event shall I or my suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if I or an authorized representative has been notified orally or in writing of the possibility of such damage.
                            </p>
                            <h2 className="text-2xl font-bold text-red-400">Revisions and Errata</h2>
                            <p>
                                The materials appearing on this website could include technical, typographical, or photographic errors. I do not warrant that any of the materials on this website are accurate, complete or current. I may make changes to the materials contained on this website at any time without notice.
                            </p>
                            <h2 className="text-2xl font-bold text-red-400">Governing Law</h2>
                            <p>
                                These terms and conditions are governed by and construed in accordance with the laws of [Your Country/State], and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}