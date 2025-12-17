"use client"

import { useState, useEffect } from "react"

interface ChecklistProps {
  data: {
    title: string
    description: string
    categories: Array<{
      name: string
      items: string[]
    }>
  }
}

export function InteractiveChecklist({ data }: ChecklistProps) {
  // Safety checks
  if (!data || !data.categories || !Array.isArray(data.categories)) {
    console.error('Invalid checklist data:', data)
    return null
  }

  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({})
  const [progress, setProgress] = useState(0)

  // Calculate total items
  const totalItems = data.categories.reduce(
    (sum, category) => sum + (category.items?.length || 0),
    0
  )

  useEffect(() => {
    const checkedCount = Object.values(checkedItems).filter(Boolean).length
    setProgress(totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0)
  }, [checkedItems, totalItems])

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`
    setCheckedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const isItemChecked = (categoryIndex: number, itemIndex: number) => {
    return checkedItems[`${categoryIndex}-${itemIndex}`] || false
  }

  const getCategoryProgress = (categoryIndex: number) => {
    const category = data.categories[categoryIndex]
    if (!category?.items?.length) return 0
    
    const checkedInCategory = category.items.filter((_, itemIndex) =>
      isItemChecked(categoryIndex, itemIndex)
    ).length
    return Math.round((checkedInCategory / category.items.length) * 100)
  }

  const resetChecklist = () => {
    setCheckedItems({})
  }

  return (
    <div className="my-8 rounded-2xl bg-gradient-to-br from-[#F3F6F8] to-white p-8 shadow-xl">
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-[#2B3238]">{data.title}</h3>
        <p className="mt-2 text-sm text-[#2B3238]/70">{data.description}</p>

        {/* Overall Progress */}
        <div className="mt-6">
          <div className="flex items-center justify-between text-sm font-semibold text-[#2B3238]">
            <span>Overall Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-white">
            <div
              className="h-full bg-[#2EA8F7] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-8">
        {data.categories.map((category, categoryIndex) => {
          // Safety check for category items
          if (!category.items || !Array.isArray(category.items)) {
            console.error('Invalid category items:', category)
            return null
          }

          const categoryProgress = getCategoryProgress(categoryIndex)

          return (
            <div key={categoryIndex} className="rounded-xl bg-white p-6 shadow-md">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="text-lg font-semibold text-[#2B3238]">
                  {category.name}
                </h4>
                <span className="rounded-full bg-[#2EA8F7]/10 px-3 py-1 text-xs font-semibold text-[#2EA8F7]">
                  {categoryProgress}%
                </span>
              </div>

              <div className="space-y-3">
                {category.items.map((item, itemIndex) => {
                  const isChecked = isItemChecked(categoryIndex, itemIndex)

                  return (
                    <button
                      key={itemIndex}
                      onClick={() => toggleItem(categoryIndex, itemIndex)}
                      className={`flex w-full items-start gap-3 rounded-lg border-2 p-3 text-left transition-all ${
                        isChecked
                          ? "border-[#2EA8F7] bg-[#2EA8F7]/5"
                          : "border-gray-200 bg-white hover:border-[#2EA8F7]/50"
                      }`}
                    >
                      <div
                        className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 transition-all ${
                          isChecked
                            ? "border-[#2EA8F7] bg-[#2EA8F7]"
                            : "border-gray-300"
                        }`}
                      >
                        {isChecked && (
                          <svg
                            className="h-3 w-3 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                      <span
                        className={`flex-1 text-sm font-medium ${
                          isChecked
                            ? "text-[#2B3238]"
                            : "text-[#2B3238]/80"
                        }`}
                      >
                        {item}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      {/* Reset Button */}
      {progress > 0 && (
        <div className="mt-8 text-center">
          <button
            onClick={resetChecklist}
            className="rounded-xl border-2 border-[#2EA8F7] px-6 py-2 text-sm font-semibold text-[#2EA8F7] hover:bg-[#2EA8F7]/10"
          >
            Reset Checklist
          </button>
        </div>
      )}
    </div>
  )
}