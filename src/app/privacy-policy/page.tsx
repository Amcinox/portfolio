"use client"
import React from "react";
import config from "@/config";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicy() {
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
                        Privacy Policy
                    </h1>
                    <Card className="bg-gray-800 border-red-500 border">
                        <CardContent className="text-gray-300 space-y-4 py-12">
                            <p>
                                As the developer of this website ({siteMetadata.siteUrl}), I respect your privacy and am committed to protecting any personal information you may provide. This Privacy Policy outlines how I collect, use, and safeguard your data.
                            </p>
                            <h2 className="text-2xl font-bold text-red-400">Information Collection and Use</h2>
                            <p>
                                I do not actively collect personal information. However, my website may use cookies for analytics purposes to understand how visitors interact with the site. This data is anonymized and does not personally identify you.
                            </p>
                            <h2 className="text-2xl font-bold text-red-400">Third-Party Services</h2>
                            <p>
                                This website may use third-party services such as Google Analytics. These services may collect information sent by your browser as part of a web page request, such as cookies or your IP address. Please refer to their respective privacy policies for more information.
                            </p>
                            <h2 className="text-2xl font-bold text-red-400">Data Security</h2>
                            <p>
                                I implement reasonable security measures to protect against unauthorized access or alteration of any information under my control. However, please be aware that no method of transmission over the internet is 100% secure.
                            </p>
                            <h2 className="text-2xl font-bold text-red-400">Changes to This Policy</h2>
                            <p>
                                I may update this Privacy Policy from time to time. I will notify you of any changes by posting the new Privacy Policy on this page.
                            </p>
                            <h2 className="text-2xl font-bold text-red-400">Contact</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact me at {config.contact.email}.
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}