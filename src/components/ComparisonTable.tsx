interface ComparisonTableProps {
  data: string[][]
}

export default function ComparisonTable({ data }: ComparisonTableProps) {
  const headers = data[0] || []
  const rows = data.slice(1)
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="bg-charcoal text-white sticky top-0">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-3 text-left font-sans font-semibold text-sm sm:text-base"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-rule">
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-background'}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`px-4 py-3 ${
                    cellIndex === 0
                      ? 'font-sans font-semibold text-foreground'
                      : 'text-foreground'
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
