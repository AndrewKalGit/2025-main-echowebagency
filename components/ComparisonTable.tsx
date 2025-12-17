"use client"

interface ComparisonTableProps {
  data: {
    title?: string
    description?: string
    columns: string[]
    rows: Array<{
      label: string
      values: Array<string | boolean>
      highlight?: boolean
    }>
  }
}

export function ComparisonTable({ data }: ComparisonTableProps) {
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

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#F3F6F8]">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-[#2B3238]">
                Feature
              </th>
              {data.columns.map((column, index) => (
                <th
                  key={index}
                  className="px-6 py-4 text-center text-sm font-semibold text-[#2B3238]"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F3F6F8]">
            {data.rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={row.highlight ? "bg-[#2EA8F7]/5" : ""}
              >
                <td className="px-6 py-4 text-sm font-medium text-[#2B3238]">
                  {row.label}
                </td>
                {row.values.map((value, valueIndex) => (
                  <td key={valueIndex} className="px-6 py-4 text-center">
                    {typeof value === "boolean" ? (
                      value ? (
                        <svg
                          className="mx-auto h-6 w-6 text-green-500"
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
                      ) : (
                        <svg
                          className="mx-auto h-6 w-6 text-red-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )
                    ) : (
                      <span className="text-sm text-[#2B3238]/80">{value}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}