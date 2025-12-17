"use client"

import { useState } from "react"

interface PricingCalculatorProps {
  data: {
    title: string
    description: string
    options: Array<{
      id: string
      label: string
      basePrice: number
      options?: Array<{
        id: string
        label: string
        price: number
      }>
    }>
  }
}

export function PricingCalculator({ data }: PricingCalculatorProps) {
  const [selections, setSelections] = useState<Record<string, any>>({})

  const calculateTotal = () => {
    let total = 0
    data.options.forEach((option) => {
      if (selections[option.id]) {
        total += option.basePrice
        if (option.options) {
          option.options.forEach((subOption) => {
            if (selections[`${option.id}-${subOption.id}`]) {
              total += subOption.price
            }
          })
        }
      }
    })
    return total
  }

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num)
  }

  return (
    <div className="my-8 rounded-2xl bg-gradient-to-br from-[#F3F6F8] to-white p-8 shadow-xl">
      <h3 className="text-2xl font-semibold text-[#2B3238]">{data.title}</h3>
      <p className="mt-2 text-sm text-[#2B3238]/70">{data.description}</p>

      <div className="mt-8 space-y-6">
        {data.options.map((option) => (
          <div key={option.id} className="rounded-xl bg-white p-6 shadow-md">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={selections[option.id] || false}
                onChange={(e) =>
                  setSelections((prev) => ({
                    ...prev,
                    [option.id]: e.target.checked,
                  }))
                }
                className="mt-1 h-5 w-5 rounded border-gray-300 text-[#2EA8F7] focus:ring-[#2EA8F7]"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#2B3238]">
                    {option.label}
                  </span>
                  <span className="font-bold text-[#2EA8F7]">
                    {formatCurrency(option.basePrice)}
                  </span>
                </div>

                {option.options && selections[option.id] && (
                  <div className="mt-4 space-y-3 border-l-2 border-[#2EA8F7] pl-4">
                    {option.options.map((subOption) => (
                      <label
                        key={subOption.id}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={
                              selections[`${option.id}-${subOption.id}`] ||
                              false
                            }
                            onChange={(e) =>
                              setSelections((prev) => ({
                                ...prev,
                                [`${option.id}-${subOption.id}`]:
                                  e.target.checked,
                              }))
                            }
                            className="h-4 w-4 rounded border-gray-300 text-[#2EA8F7] focus:ring-[#2EA8F7]"
                          />
                          <span className="text-sm text-[#2B3238]/80">
                            {subOption.label}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-[#2EA8F7]">
                          +{formatCurrency(subOption.price)}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </label>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl bg-gradient-to-r from-[#2EA8F7] to-[#2EA8F7]/80 p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-white/90">
              Estimated Investment
            </div>
            <div className="mt-1 text-4xl font-bold">
              {formatCurrency(calculateTotal())}
            </div>
          </div>
          <button className="rounded-xl bg-white px-6 py-3 font-semibold text-[#2EA8F7] hover:bg-white/95">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}