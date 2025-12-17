"use client"

import { useEffect, useState } from "react"

interface StatsShowcaseProps {
  data: {
    title?: string
    description?: string
    stats: Array<{
      value: string | number
      label: string
      suffix?: string
      prefix?: string
      color?: string
      icon?: string
    }>
    layout?: "grid" | "row"
  }
}

export function StatsShowcase({ data }: StatsShowcaseProps) {
  const [animated, setAnimated] = useState(false)
  const layout = data.layout || "grid"

  useEffect(() => {
    setAnimated(true)
  }, [])

  return (
    <div className="my-8 overflow-hidden rounded-2xl bg-gradient-to-br from-[#2EA8F7]/10 to-[#F3F6F8] p-8 shadow-xl">
      {data.title && (
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-semibold text-[#2B3238]">{data.title}</h3>
          {data.description && (
            <p className="mt-2 text-sm text-[#2B3238]/70">{data.description}</p>
          )}
        </div>
      )}

      <div
        className={
          layout === "grid"
            ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            : "flex flex-wrap justify-center gap-8"
        }
      >
        {data.stats.map((stat, index) => (
          <div
            key={index}
            className={`transform rounded-xl bg-white p-6 text-center shadow-lg transition-all duration-500 ${
              animated
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {stat.icon && (
              <div className="mb-4 text-4xl">{stat.icon}</div>
            )}
            <div
              className="text-4xl font-bold"
              style={{ color: stat.color || "#2EA8F7" }}
            >
              {stat.prefix}
              {stat.value}
              {stat.suffix}
            </div>
            <div className="mt-2 text-sm font-medium text-[#2B3238]/70">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}