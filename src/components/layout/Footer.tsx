import React from "react";
import Grugo from "../grugo/Grugo";
import config from "@/config";
export default function Footer() {

    const { siteMetadata } = config;
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <Grugo />
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p>&copy; 2023 {siteMetadata.title}. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="/privacy-policy" className="hover:text-gray-300 transition-colors duration-300">Privacy Policy</a>
                        <a href="/term-of-service" className="hover:text-gray-300 transition-colors duration-300">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
