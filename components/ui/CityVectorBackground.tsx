"use client"

import React, { useMemo } from 'react'

interface CityVectorBackgroundProps {
    seed: string
}

export function CityVectorBackground({ seed }: CityVectorBackgroundProps) {
    // Generate unique patterns based on the city name (seed)
    const paths = useMemo(() => {
        // Simple hash function for the seed
        let hash = 0
        for (let i = 0; i < seed.length; i++) {
            hash = seed.charCodeAt(i) + ((hash << 5) - hash)
        }

        const results = []
        for (let i = 0; i < 8; i++) {
            const x1 = Math.abs((hash * (i + 1)) % 100)
            const y1 = Math.abs((hash / (i + 1)) % 100)
            const radius = Math.abs((hash * (i + 2)) % 40) + 10

            // Create organic "topographic" blobs or map-like lines
            results.push({
                d: `M ${x1} ${y1} Q ${x1 + radius} ${y1 - radius} ${x1 + radius * 2} ${y1} T ${x1 + radius * 4} ${y1}`,
                opacity: 0.03 + (i * 0.005),
                strokeWidth: 0.5 + (i * 0.2)
            })
        }
        return results
    }, [seed])

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid slice"
                className="w-full h-full text-primary"
                fill="none"
                stroke="currentColor"
            >
                {paths.map((path, idx) => (
                    <path
                        key={idx}
                        d={path.d}
                        opacity={path.opacity}
                        strokeWidth={path.strokeWidth}
                        strokeLinecap="round"
                    />
                ))}
            </svg>

            {/* Additional "Map Grid" detail */}
            <div className="absolute inset-0 opacity-[0.02]"
                style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />
        </div>
    )
}
