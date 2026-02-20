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
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden bg-black flex items-center justify-center">
            <Script
                type="module"
                src="https://unpkg.com/@splinetool/viewer@1.12.58/build/spline-viewer.js"
                strategy="afterInteractive"
            />
            {/* Desktop: takes up full width/height. Mobile: fixed large size scaled down to fit */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] scale-[0.32] min-[370px]:scale-[0.35] min-[400px]:scale-[0.4] sm:scale-[0.5] md:w-full md:h-[calc(100%+50px)] md:scale-100 md:left-0 md:top-0 md:transform-none md:pb-[50px]">
                <spline-viewer
                    url="https://prod.spline.design/0gxWuilLejuN3CoM/scene.splinecode"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    )
}
