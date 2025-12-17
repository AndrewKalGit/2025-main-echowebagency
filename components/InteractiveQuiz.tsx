"use client"

import { useState } from "react"

interface Solution {
  id: string
  title: string
  description: string
  priority: string
  features: string[]
  estimatedImpact: string
  timeframe: string
  cta?: string
}

interface QuizProps {
  data: {
    title: string
    description: string
    questions: Array<{
      question: string
      subtitle?: string
      options: Array<{
        label: string
        value: string
        impact: string[]
      }>
    }>
    solutions: {
      [key: string]: Solution
    }
  }
}

export function InteractiveQuiz({ data }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[][]>([])
  const [showResults, setShowResults] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const handleOptionToggle = (value: string) => {
    setSelectedOptions((prev) => {
      if (prev.includes(value)) {
        return prev.filter((v) => v !== value)
      } else {
        return [...prev, value]
      }
    })
  }

  const handleNext = () => {
    if (selectedOptions.length > 0) {
      const newAnswers = [...answers, selectedOptions]
      setAnswers(newAnswers)

      if (currentQuestion < data.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedOptions([])
      } else {
        setShowResults(true)
      }
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedOptions(answers[currentQuestion - 1] || [])
      const newAnswers = [...answers]
      newAnswers.pop()
      setAnswers(newAnswers)
    }
  }

  const getPrioritizedSolutions = () => {
    // Collect all impact areas from answers
    const impactAreas: { [key: string]: number } = {}
    
    answers.forEach((questionAnswers) => {
      data.questions.forEach((question) => {
        question.options.forEach((option) => {
          if (questionAnswers.includes(option.value)) {
            option.impact.forEach((area) => {
              impactAreas[area] = (impactAreas[area] || 0) + 1
            })
          }
        })
      })
    })

    // Sort solutions by relevance
    const scoredSolutions = Object.entries(data.solutions).map(([id, solution]) => {
      const score = impactAreas[id] || 0
      return { ...solution, id, score }
    })

    return scoredSolutions
      .filter((s) => s.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
    setSelectedOptions([])
  }

  if (showResults) {
    const prioritizedSolutions = getPrioritizedSolutions()

    return (
      <div className="my-8 rounded-2xl bg-gradient-to-br from-[#F3F6F8] to-white p-8 shadow-xl">
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#2EA8F7]">
            <span className="text-3xl">✨</span>
          </div>
          <h3 className="text-2xl font-semibold text-[#2B3238]">
            Your Personalized Action Plan
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#2B3238]/80">
            Based on your responses, here are the top solutions that will have the biggest impact on your business:
          </p>
        </div>

        <div className="mt-8 space-y-6">
          {prioritizedSolutions.map((solution, index) => (
            <div
              key={solution.id}
              className="rounded-xl border-2 border-white bg-white p-6 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#2EA8F7] text-lg font-bold text-white">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h4 className="text-xl font-semibold text-[#2B3238]">
                      {solution.title}
                    </h4>
                    <span className="rounded-full bg-[#2EA8F7]/10 px-3 py-1 text-xs font-semibold text-[#2EA8F7]">
                      {solution.priority} Priority
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-[#2B3238]/80">
                    {solution.description}
                  </p>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg bg-[#F3F6F8] p-3">
                      <div className="text-xs font-semibold text-[#2B3238]/60">
                        ESTIMATED IMPACT
                      </div>
                      <div className="mt-1 text-sm font-semibold text-[#2B3238]">
                        {solution.estimatedImpact}
                      </div>
                    </div>
                    <div className="rounded-lg bg-[#F3F6F8] p-3">
                      <div className="text-xs font-semibold text-[#2B3238]/60">
                        TIMEFRAME
                      </div>
                      <div className="mt-1 text-sm font-semibold text-[#2B3238]">
                        {solution.timeframe}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="text-xs font-semibold text-[#2B3238]/60">
                      WHAT YOU'LL GET
                    </div>
                    <ul className="mt-2 space-y-1.5">
                      {solution.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <svg
                            className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2EA8F7]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-sm text-[#2B3238]/80">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/contact"
            className="rounded-xl bg-[#2EA8F7] px-8 py-3 font-semibold text-white hover:bg-[#2EA8F7]/90"
          >
            Let's Implement These Solutions
          </a>
          <button
            onClick={resetQuiz}
            className="rounded-xl border-2 border-[#2EA8F7] px-8 py-3 font-semibold text-[#2EA8F7] hover:bg-[#2EA8F7]/10"
          >
            Start Over
          </button>
        </div>
      </div>
    )
  }

  const question = data.questions[currentQuestion]

  return (
    <div className="my-8 rounded-2xl bg-gradient-to-br from-[#F3F6F8] to-white p-8 shadow-xl">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-[#2B3238]">{data.title}</h3>
        <span className="rounded-full bg-[#2EA8F7] px-1 py-2 text-xs font-semibold text-white">
          {currentQuestion + 1} / {data.questions.length}
        </span>
      </div>

      <p className="mb-8 text-sm text-[#2B3238]/70">{data.description}</p>

      {/* Progress Bar */}
      <div className="mb-8 h-2 w-full overflow-hidden rounded-full bg-white">
        <div
          className="h-full bg-[#2EA8F7] transition-all duration-300"
          style={{
            width: `${((currentQuestion + 1) / data.questions.length) * 100}%`,
          }}
        />
      </div>

      <div className="mb-8 rounded-xl bg-white p-6 shadow-md">
        <h4 className="text-lg font-semibold text-[#2B3238]">
          {question.question}
        </h4>
        {question.subtitle && (
          <p className="mt-2 text-sm text-[#2B3238]/60">{question.subtitle}</p>
        )}
      </div>

      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedOptions.includes(option.value)

          return (
            <button
              key={index}
              onClick={() => handleOptionToggle(option.value)}
              className={`w-full rounded-xl border-2 p-4 text-left transition-all ${
                isSelected
                  ? "border-[#2EA8F7] bg-[#2EA8F7]/10"
                  : "border-white bg-white hover:border-[#2EA8F7]/50"
              } cursor-pointer`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded border-2 font-semibold ${
                    isSelected
                      ? "border-[#2EA8F7] bg-[#2EA8F7] text-white"
                      : "border-[#2B3238]/20 text-[#2B3238]/60"
                  }`}
                >
                  {isSelected && (
                    <svg
                      className="h-4 w-4"
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
                <span className="flex-1">{option.label}</span>
              </div>
            </button>
          )
        })}
      </div>

      <div className="mt-6 text-center text-xs text-[#2B3238]/60">
        Select all that apply
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={handleBack}
          disabled={currentQuestion === 0}
          className="rounded-xl border-2 border-[#2EA8F7] px-6 py-3 font-semibold text-[#2EA8F7] hover:bg-[#2EA8F7]/10 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={selectedOptions.length === 0}
          className="rounded-xl bg-[#2EA8F7] px-8 py-3 font-semibold text-white hover:bg-[#2EA8F7]/90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {currentQuestion < data.questions.length - 1
            ? "Next Question"
            : "Get My Action Plan"}
        </button>
      </div>
    </div>
  )
}