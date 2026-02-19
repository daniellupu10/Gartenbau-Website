"use client"

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion"
import { useEffect, useState } from "react"

export function InteractiveGardenBackground() {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = { damping: 30, stiffness: 80 }
    const x = useSpring(mouseX, springConfig)
    const y = useSpring(mouseY, springConfig)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e
            const moveX = (clientX - window.innerWidth / 2) / 30
            const moveY = (clientY - window.innerHeight / 2) / 30
            mouseX.set(moveX)
            mouseY.set(moveY)
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [mouseX, mouseY])

    const paths = [
        "M50 0 C70 0 100 30 100 50 C100 70 70 100 50 100 C30 100 0 70 0 50 C0 30 30 0 50 0 Z", // Basic Leaf
        "M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z", // Sparkle/Seed
        "M50 10 Q70 10 90 50 Q70 90 50 90 Q30 90 10 50 Q30 10 50 10 Z", // Abstract Eye/Seed
    ]

    const elements = [
        { id: 1, path: paths[0], top: "15%", left: "10%", scale: 1.2, rotate: 45, opacity: 0.15, color: "text-primary" },
        { id: 2, path: paths[1], top: "25%", left: "85%", scale: 1.8, rotate: -20, opacity: 0.1, color: "text-accent" },
        { id: 3, path: paths[0], top: "65%", left: "12%", scale: 1.4, rotate: 160, opacity: 0.2, color: "text-primary" },
        { id: 4, path: paths[2], top: "80%", left: "75%", scale: 2.2, rotate: 10, opacity: 0.08, color: "text-primary" },
        { id: 5, path: paths[1], top: "45%", left: "48%", scale: 0.6, rotate: 210, opacity: 0.25, color: "text-accent" },
        { id: 6, path: paths[0], top: "5%", left: "60%", scale: 1.1, rotate: 300, opacity: 0.12, color: "text-primary" },
        { id: 7, path: paths[2], top: "50%", left: "5%", scale: 1.5, rotate: 90, opacity: 0.1, color: "text-primary" },
    ]

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {elements.map((el) => (
                <motion.div
                    key={el.id}
                    className={`absolute ${el.color}`}
                    style={{
                        top: el.top,
                        left: el.left,
                        scale: el.scale,
                        x: x,
                        y: y,
                    }}
                >
                    <motion.svg
                        width="100"
                        height="100"
                        viewBox="0 0 100 100"
                        fill="currentColor"
                        className="opacity-20"
                        animate={{
                            rotate: [el.rotate, el.rotate + 15, el.rotate - 15, el.rotate],
                            y: [0, -20, 0]
                        }}
                        transition={{
                            duration: 8 + Math.random() * 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <path d={el.path} />
                    </motion.svg>
                </motion.div>
            ))}

            {/* Subtle light beams */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,80,22,0.1)_0%,transparent_70%)]" />
        </div>
    )
}
