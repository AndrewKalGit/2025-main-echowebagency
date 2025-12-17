"use client"

import { useState } from "react"

interface BeforeAfterSliderProps {
  data: {
    title?: string
    description?: string
    beforeImage: string
    afterImage: string
    beforeLabel?: string
    afterLabel?: string
  }
}

export function BeforeAfterSlider({ data }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging && e.type !== "click") return

    const container = e.currentTarget
    const rect = container.getBoundingClientRect()
    
    let clientX: number
    if ("touches" in e) {
      clientX = e.touches[0].clientX
    } else {
      clientX = e.clientX
    }

    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.min(Math.max(percentage, 0), 100))
  }

  return (
    <div className="my-8 overflow-hidden rounded-2xl bg-white shadow-xl">
      {data.title && (
        <div className="bg-gradient-to-r from-[#2EA8F7] to-[#2EA8F7]/80 px-6 py-4">
          <h3 className="text-xl font-semibold text-white">{data.title}</h3>
          {data.description && (
            <p className="mt-1 text-sm text-white/90">{data.description}</p>
          )}
        </div>
      )}

      <div
        className="relative aspect-video cursor-ew-resize select-none overflow-hidden"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleMove}
        onClick={handleMove}
      >
        {/* Before Image */}
        <div className="absolute inset-0">
          <img
            src={data.beforeImage}
            alt="Before"
            className="h-full w-full object-cover"
            draggable={false}
          />
          {data.beforeLabel && (
            <div className="absolute left-4 top-4 rounded-lg bg-black/70 px-3 py-1 text-sm font-semibold text-white">
              {data.beforeLabel}
            </div>
          )}
        </div>

        {/* After Image */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={data.afterImage}
            alt="After"
            className="h-full w-full object-cover"
            draggable={false}
          />
          {data.afterLabel && (
            <div className="absolute right-4 top-4 rounded-lg bg-[#2EA8F7] px-3 py-1 text-sm font-semibold text-white">
              {data.afterLabel}
            </div>
          )}
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 h-full w-1 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Slider Handle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl">
              <svg
                className="h-6 w-6 text-[#2EA8F7]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}