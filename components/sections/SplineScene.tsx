// @ts-nocheck
"use client"

import Script from "next/script"

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'spline-viewer': any;
        }
    }
}

export function SplineScene() {
    return (
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden bg-black">
            <Script
                type="module"
                src="https://unpkg.com/@splinetool/viewer@1.12.61/build/spline-viewer.js"
                strategy="afterInteractive"
            />
            <div className="w-full h-full">
                <spline-viewer
                    url="https://prod.spline.design/0gxWuilLejuN3CoM/scene.splinecode"
                    className="w-full h-full"
                />
            </div>
        </div>
    )
}
