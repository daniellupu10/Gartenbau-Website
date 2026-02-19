"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { SplineScene } from "./SplineScene"

export function Hero() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
    const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX - window.innerWidth / 2) / 40,
                y: (e.clientY - window.innerHeight / 2) / 40,
            })
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <section ref={ref} className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black selection:bg-primary selection:text-white">
            {/* Background Layer (3D Spline) */}
            <SplineScene />

            {/* Content Container (Arrow Only) */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-12 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="pointer-events-auto cursor-pointer group"
                    onClick={() => {
                        const nextSection = document.getElementById("process-animation") || document.querySelector("section:nth-of-type(2)")
                        if (nextSection) {
                            nextSection.scrollIntoView({ behavior: "smooth" })
                        }
                    }}
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/50 group-hover:text-primary transition-colors duration-300">Entdecken</span>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20 group-hover:border-primary/50 group-hover:bg-primary/20 transition-all duration-300"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-white group-hover:text-primary transition-colors duration-300"
                            >
                                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                            </svg>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
