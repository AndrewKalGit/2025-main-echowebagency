"use client"

interface ProcessDiagramProps {
  data: {
    title: string
    description?: string
    steps: Array<{
      title: string
      description: string
      icon?: string
    }>
    style?: "vertical" | "horizontal"
  }
}

export function ProcessDiagram({ data }: ProcessDiagramProps) {
  const style = data.style || "vertical"

  return (
    <div className="my-8 rounded-2xl bg-gradient-to-br from-[#F3F6F8] to-white p-8 shadow-xl">
      <h3 className="text-2xl font-semibold text-[#2B3238]">{data.title}</h3>
      {data.description && (
        <p className="mt-2 text-sm text-[#2B3238]/70">{data.description}</p>
      )}

      <div
        className={`mt-8 ${
          style === "horizontal"
            ? "grid gap-4 md:grid-cols-2 lg:grid-cols-4"
            : "space-y-4"
        }`}
      >
        {data.steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Connector Line */}
            {index < data.steps.length - 1 && (
              <div
                className={`absolute ${
                  style === "horizontal"
                    ? "hidden lg:block lg:left-full lg:top-12 lg:h-0.5 lg:w-4 lg:bg-[#2EA8F7]"
                    : "left-8 top-20 h-8 w-0.5 bg-[#2EA8F7]"
                }`}
              />
            )}

            <div className="relative rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
              {/* Step Number */}
              <div className="absolute -left-3 -top-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#2EA8F7] to-[#2EA8F7]/80 font-bold text-white shadow-lg">
                {index + 1}
              </div>

              {/* Icon */}
              {step.icon && (
                <div className="mb-4 mt-8 text-4xl">{step.icon}</div>
              )}

              {/* Content */}
              <h4 className={`${step.icon ? "" : "mt-8"} text-lg font-semibold text-[#2B3238]`}>
                {step.title}
              </h4>
              <p className="mt-2 text-sm text-[#2B3238]/70">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}