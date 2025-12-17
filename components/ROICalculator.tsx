"use client"

import { useMemo, useState } from "react"

export function ROICalculator() {
  const [monthlyTraffic, setMonthlyTraffic] = useState<number>(5000)
  const [conversionRate, setConversionRate] = useState<number>(2)
  const [avgCustomerValue, setAvgCustomerValue] = useState<number>(1000)

  const [trafficIncrease, setTrafficIncrease] = useState<number>(20)
  const [conversionIncrease, setConversionIncrease] = useState<number>(30)
  const [valueIncrease, setValueIncrease] = useState<number>(10)

  /** ---------- Helpers ---------- */
  const clamp = (value: number, min = 0) => Math.max(min, value)

  const formatCurrency = (num: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(num)

  /** ---------- Calculations ---------- */
  const {
    currentLeads,
    currentRevenue,
    newLeads,
    newRevenue,
    revenueIncrease,
    percentageIncrease,
  } = useMemo(() => {
    const safeTraffic = clamp(monthlyTraffic)
    const safeConversion = clamp(conversionRate)
    const safeValue = clamp(avgCustomerValue)

    const currentLeads = safeTraffic * (safeConversion / 100)
    const currentRevenue = currentLeads * safeValue

    const newTraffic = safeTraffic * (1 + trafficIncrease / 100)
    const newConversion = safeConversion * (1 + conversionIncrease / 100)
    const newValue = safeValue * (1 + valueIncrease / 100)

    const newLeads = newTraffic * (newConversion / 100)
    const newRevenue = newLeads * newValue

    const revenueIncrease = newRevenue - currentRevenue
    const percentageIncrease =
      currentRevenue > 0
        ? ((revenueIncrease / currentRevenue) * 100).toFixed(1)
        : "0.0"

    return {
      currentLeads,
      currentRevenue,
      newLeads,
      newRevenue,
      revenueIncrease,
      percentageIncrease,
    }
  }, [
    monthlyTraffic,
    conversionRate,
    avgCustomerValue,
    trafficIncrease,
    conversionIncrease,
    valueIncrease,
  ])

  /** ---------- UI ---------- */
  return (
    <div className="rounded-2xl bg-gradient-to-br from-[#2EA8F7]/10 to-[#F3F6F8] p-8 shadow-xl">
      <h3 className="text-2xl font-semibold text-[#2B3238]">
        Website ROI Calculator
      </h3>
      <p className="mt-2 text-sm text-[#2B3238]/70">
        Estimate how traffic, conversion, and CRO improvements impact revenue
      </p>

      {/* Inputs */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {/* Current Metrics */}
        <div className="space-y-4">
          <h4 className="font-semibold text-[#2B3238]">Current Metrics</h4>

          <Input
            label="Monthly Traffic"
            value={monthlyTraffic}
            onChange={setMonthlyTraffic}
          />

          <Input
            label="Conversion Rate (%)"
            value={conversionRate}
            step={0.1}
            onChange={setConversionRate}
          />

          <Input
            label="Avg. Customer Value ($)"
            value={avgCustomerValue}
            onChange={setAvgCustomerValue}
          />
        </div>

        {/* Improvements */}
        <div className="space-y-4">
          <h4 className="font-semibold text-[#2B3238]">
            Projected Improvements
          </h4>

          <Range
            label="Traffic Increase"
            value={trafficIncrease}
            max={100}
            onChange={setTrafficIncrease}
          />

          <Range
            label="Conversion Rate Increase"
            value={conversionIncrease}
            max={100}
            onChange={setConversionIncrease}
          />

          <Range
            label="Customer Value Increase"
            value={valueIncrease}
            max={50}
            onChange={setValueIncrease}
          />
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <Stat
          title="Current Monthly Revenue"
          value={formatCurrency(currentRevenue)}
          subtitle={`${currentLeads.toFixed(0)} leads / month`}
        />

        <Stat
          title="Projected Monthly Revenue"
          value={formatCurrency(newRevenue)}
          highlight
          subtitle={`${newLeads.toFixed(0)} leads / month`}
        />

        <div className="rounded-xl bg-gradient-to-br from-[#2EA8F7] to-[#2EA8F7]/80 p-6 text-white shadow-md">
          <div className="text-sm font-medium text-white/90">
            Monthly Increase
          </div>
          <div className="mt-2 text-2xl font-bold">
            {formatCurrency(revenueIncrease)}
          </div>
          <div className="mt-1 text-xs text-white/80">
            +{percentageIncrease}% increase
          </div>
        </div>
      </div>

      {/* Annual Projection */}
      <div className="mt-6 rounded-xl border-2 border-[#2EA8F7] bg-white p-6 text-center">
        <div className="text-sm font-medium text-[#2B3238]/70">
          Projected Annual Revenue Increase
        </div>
        <div className="mt-2 text-4xl font-bold text-[#2EA8F7]">
          {formatCurrency(revenueIncrease * 12)}
        </div>
        <p className="mt-2 text-xs text-[#2B3238]/60">
          Assuming improvements are sustained for 12 months
        </p>
      </div>
    </div>
  )
}

/** ---------- Small Components ---------- */

function Input({
  label,
  value,
  onChange,
  step = 1,
}: {
  label: string
  value: number
  step?: number
  onChange: (v: number) => void
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#2B3238]">
        {label}
      </label>
      <input
        type="number"
        min={0}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-1 w-full rounded-lg border-2 border-[#F3F6F8] px-4 py-2 focus:border-[#2EA8F7] focus:outline-none"
      />
    </div>
  )
}

function Range({
  label,
  value,
  max,
  onChange,
}: {
  label: string
  value: number
  max: number
  onChange: (v: number) => void
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#2B3238]">
        {label} (%)
      </label>
      <input
        type="range"
        min={0}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full"
      />
      <span className="text-sm font-semibold text-[#2EA8F7]">
        +{value}%
      </span>
    </div>
  )
}

function Stat({
  title,
  value,
  subtitle,
  highlight,
}: {
  title: string
  value: string
  subtitle?: string
  highlight?: boolean
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <div className="text-sm font-medium text-[#2B3238]/70">{title}</div>
      <div
        className={`mt-2 text-2xl font-bold ${
          highlight ? "text-[#2EA8F7]" : "text-[#2B3238]"
        }`}
      >
        {value}
      </div>
      {subtitle && (
        <div className="mt-1 text-xs text-[#2B3238]/60">{subtitle}</div>
      )}
    </div>
  )
}

export default ROICalculator
