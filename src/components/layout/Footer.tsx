import React from "react";
import Grugo from "../grugo/Grugo";
import config from "@/config";
import SakuraParticleField from "@/components/common/SakuraParticleField";

export default function Footer() {
    const { siteMetadata } = config;
    return (
        <footer className="relative z-20 bg-void border-t border-imperial-red/10 overflow-x-clip">
            {/* Sakura particles — compact/lighter variant */}
            <SakuraParticleField compact petalCount={80} starCount={150} />

            {/* Top accent line */}
            <div className="section-divider" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Grugo />
                <div className="flex flex-col md:flex-row justify-between items-center py-8">
                    <div className="flex items-center gap-3 mb-4 md:mb-0">
                        <span className="text-sakura/30 text-xs">✦</span>
                        <p className="text-beskar/40 text-sm tracking-wider">
                            &copy; {new Date().getFullYear()} {siteMetadata.title}. All rights reserved.
                        </p>
                        <span className="text-sakura/30 text-xs">✦</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <a
                            href="/privacy-policy"
                            className="text-beskar/40 text-sm hover:text-sakura transition-colors duration-300 tracking-wider uppercase"
                        >
                            Privacy Policy
                        </a>
                        <span className="text-imperial-red/20">|</span>
                        <a
                            href="/term-of-service"
                            className="text-beskar/40 text-sm hover:text-sakura transition-colors duration-300 tracking-wider uppercase"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>

                {/* Bottom accent */}
                <div className="text-center pb-4">
                    <span className="text-[10px] text-beskar/20 tracking-[0.5em] uppercase">This is the way ・ これが道だ</span>
                </div>
            </div>
        </footer>
    )
}
